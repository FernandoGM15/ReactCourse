import { Link } from "@remix-run/react";
import type { GuitarI } from "~/services/guitars.server";

const Guitar = ({ name, price, image, description, url }: GuitarI) => {
  const guitarImage = image.data.attributes.formats.medium.url;
  return (
    <div className="guitar">
      <img src={guitarImage} alt={`${name}-guitar`} />
      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>

        <Link className="link" to={`/guitars/${url}`}>
          Watch guitar
        </Link>
      </div>
    </div>
  );
};
export default Guitar;
