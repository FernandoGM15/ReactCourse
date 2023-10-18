"use client";

import ProductResume from "../components/ProductsResume";
import { useKiosk } from "../hooks/useKiosk";

const ResumePage = () => {
  const { order } = useKiosk();

  return (
    <>
      <h1 className="text-4xl font-black">Resume</h1>
      <p className="text-2xl my-10">Check your order</p>

      <ProductResume order={order} />
    </>
  );
};
export default ResumePage;
