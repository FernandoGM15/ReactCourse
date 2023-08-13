import { type FormEvent, useState } from "react";
import type { LoaderFunction } from "@remix-run/node";
import type { GuitarResponseI } from "~/services/guitars.server";
import type { V2_MetaFunction } from "@remix-run/react/dist/routeModules";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarByName } from "~/services/guitars.server";
import { type GuitarContextI, type ContextPropsI } from "~/root";

/**@description Function that fetch the guitar by URL */
export const loader: LoaderFunction = async ({ params }) => {
  const url = params.url || "";
  const response = await getGuitarByName(url);
  if (response.data?.length === 0)
    throw new Response("Not Found", { status: 404 });
  return response;
};

/**@description Generating SEO */
export const meta: V2_MetaFunction = ({ data }) => {
  const name = data.data[0].attributes.name;
  return [
    { title: `GuitarLA - ${name}` },
    { name: "description", content: `Guitars, Guitars sell, ${name} guitar` },
  ];
};

const Guitar = () => {
  const { addToKart } = useOutletContext<ContextPropsI>();

  const [quantity, setQuantity] = useState(0);
  const { data } = useLoaderData<GuitarResponseI>();
  const { name, description, image, price } = data[0].attributes;
  const guitarImage = image.data.attributes.formats.medium.url;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (quantity < 1) {
      alert("You must select a quantity");
      return;
    }

    const selectedGuitar: GuitarContextI = {
      id: data[0].id,
      image: guitarImage,
      name,
      price,
      quantity,
    };

    addToKart(selectedGuitar);
  };

  return (
    <div className="guitar">
      <img src={guitarImage} alt={name} className="image" />
      <div className="content">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">${price}</p>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="quantity">Quantity</label>
          <select id="quantity" onChange={(e) => setQuantity(+e.target.value)}>
            <option value="">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Add to Cart" />
        </form>
      </div>
    </div>
  );
};
export default Guitar;
