"use client";

import {  useCallback, useEffect } from "react";
import { useKiosk } from "@/hooks/useKiosk";
import { currencyFormat } from "../../utils/currency";

const TotalPage = () => {
  const { order, name, setName, postOrder, total } = useKiosk();

  const verifyOrder = useCallback(
    () => order.length === 0 || name == "",
    [order, name]
  );

  useEffect(() => {
    verifyOrder();
  }, [order, verifyOrder]);

  return (
    <>
      <h1 className="text-4xl font-black">Total</h1>
      <p className="text-2xl my-10">Confirm your order</p>

      <form onSubmit={postOrder}>
        <div>
          <label
            className="block uppercase text-slate-800 font-bold text-xl"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total to pay: <span className="font-bold">{currencyFormat(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <button
            disabled={verifyOrder()}
            className={`
            ${
              verifyOrder()
                ? "bg-indigo-100"
                : " bg-indigo-600 hover:bg-indigo-800"
            }
            w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
          >
            Confirm order
          </button>
        </div>
      </form>
    </>
  );
};
export default TotalPage;
