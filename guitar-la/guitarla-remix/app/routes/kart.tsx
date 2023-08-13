import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";
import { type ContextPropsI } from "~/root";
import styles from "~/styles/kart.css";
import { ClientOnly } from "remix-utils";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "GuitarLA - Shopping kart" },
    {
      name: "description",
      content: "Guitar selling, music, blog, shopping kart, shop",
    },
  ];
};

const Kart = () => {
  const [total, setTotal] = useState(0);
  const { kart, updateQuantity, removeGuitar } =
    useOutletContext<ContextPropsI>();

  useEffect(() => {
    const totalCalc = kart.reduce(
      (total, current) => total + current.price * current.quantity,
      0
    );
    setTotal(totalCalc);
  }, [kart]);

  return (
    <ClientOnly fallback={"loading..."}>
      {() => (
        <main className="container">
          <h1 className="heading">Shopping kart</h1>
          <div className="content">
            <div className="kart">
              <h2>Items</h2>
              {kart.length === 0
                ? "The kart is empty"
                : kart.map(({ id, name, image, price, quantity }) => (
                    <div key={id} className="product">
                      <div>
                        <img src={image} alt={name} />
                      </div>
                      <div>
                        <p className="name">{name}</p>
                        <p>Quantity:</p>
                        <select
                          className="select"
                          value={quantity}
                          onChange={(e) => updateQuantity(id, +e.target.value)}
                        >
                          <option value="">-- Select --</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <p className="price">
                          $ <span>{price}</span>
                        </p>
                        <p className="subtotal">
                          Subtotal: $<span>{quantity * price}</span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="removeBtn"
                        onClick={() => removeGuitar(id)}
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>
            <aside className="resume">
              <h3>Order resume</h3>
              <p>Total to pay: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
};
export default Kart;
