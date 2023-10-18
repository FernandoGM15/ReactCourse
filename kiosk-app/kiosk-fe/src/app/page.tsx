"use client";
import Product from "./components/Product";
import { useKiosk } from "./hooks/useKiosk";

export default function Home() {
  const { currentCategory } = useKiosk();
  const { products } = currentCategory;
  return (
    <>
      <h1 className="text-4xl font-black">{currentCategory.name}</h1>
      <p className="text-2xl my-10">Select and customize your order below</p>
      <div className="grid gap-4 grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategory?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
