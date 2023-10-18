import Image from "next/image";
import { ProductI } from "../interfaces/product.interfaces";
import { currencyFormat } from "../utils/currency";
import { useKiosk } from "../hooks/useKiosk";

export type ProductPropsI = {
  product: ProductI;
};

const Product = ({ product }: ProductPropsI) => {
  const { handleSetProduct, handleToggleModal } = useKiosk();
  const { name, image, price } = product;

  const handleClick = () => {
    handleToggleModal();
    handleSetProduct(product);
  };

  return (
    <div className="border p-3">
      <Image
        src={`/img/${image}.jpg`}
        alt={`${name}-image`}
        width={400}
        height={500}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {currencyFormat(price)}
        </p>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default Product;
