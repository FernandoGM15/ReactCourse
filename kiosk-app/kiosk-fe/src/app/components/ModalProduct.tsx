"use client";
import Image from "next/image";
import Modal from "./Modal";
import { useKiosk } from "../hooks/useKiosk";
import { currencyFormat } from "../utils/currency";
import { useEffect, useState } from "react";

const ModalProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [update, setUpdate] = useState(false);
  const { product, handleAddOrder, order } = useKiosk();
  const { id, name, image, price } = product;

  const handleSubtractQuantity = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const handleAddQuantity = () => {
    if (quantity >= 5) return;
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    if (order.some((orderState) => orderState.id === product.id)) {
      const updateProduct = order.find(
        (orderState) => orderState.id === product.id
      );
      const quantity = updateProduct ? updateProduct.quantity : 1;
      setUpdate(true);
      setQuantity(quantity);
      return;
    }
    setUpdate(false);
    setQuantity(1);
  }, [product, order]);
  return (
    <Modal>
      <div className="md:flex gap-10">
        <div className="md:w-1/3">
          <Image
            width={300}
            height={400}
            alt={`${name}-image`}
            src={`/img/${image}.jpg`}
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mt-5">{name}</h1>
          <p className="mt-5 font-black text-5xl text-amber-500">
            {currencyFormat(price)}
          </p>
          <div className="flex gap-4 mt-5">
            <button type="button" onClick={handleSubtractQuantity}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <p className="text-3xl">{quantity}</p>
            <button type="button" onClick={handleAddQuantity}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
            onClick={() => handleAddOrder({ id, name, price, quantity, image })}
          >
            {update ? "Save changes" : "Add to order"}
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default ModalProduct;
