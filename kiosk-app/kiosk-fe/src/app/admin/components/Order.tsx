import { OrderI } from "@/interfaces/order.interfaces";
import { currencyFormat } from "@/utils/currency";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-toastify";

type OrderProps = {
  order: OrderI;
};
const Order = ({ order }: OrderProps) => {
  const { id, name, total, order: clientOrder } = order;

  const completeOrder = async () => {
    try {
      await axios.put(`/api/orders/${id}`, { state: true });
      toast.success("Order completed!");
    } catch (error) {
      toast.success("Error completing order");
    }
  };
  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Order: {id}</h3>
      <p className="text-lg font-bold my-10">Client: {name}</p>

      <div>
        {clientOrder.map((product) => {
          return (
            <div
              key={product.id}
              className="py-3 flex border-b last-of-type:border-0 items-center"
            >
              <div className="w-32">
                <Image
                  width={600}
                  height={500}
                  src={`/img/${product.image}.jpg`}
                  alt={`${product.name} image`}
                />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="text-xl font-bold text-amber-500">
                  {product.name}
                </h4>
                <p className="text-lg font-bold">
                  Quantity: {product.quantity}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">
          Total to pay: {currencyFormat(total)}
        </p>
        <button
          className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg"
          type="button"
          onClick={completeOrder}
        >
          Complete order
        </button>
      </div>
    </div>
  );
};
export default Order;
