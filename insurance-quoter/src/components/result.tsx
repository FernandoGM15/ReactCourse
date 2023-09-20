import { BRANDS, PLANS } from "../constants";
import useQuoter from "../hooks/useQuoter";

import { useMemo, useRef } from "react";

const Result = () => {
  const { result, quoterForm } = useQuoter();
  const { brand, plan, year } = quoterForm;
  const yearRef = useRef(year);

  const [selectedBrand] = useMemo(
    () => BRANDS.filter((item) => item.id === +brand),
    [result]
  );
  const [selectedPlan] = useMemo(
    () => PLANS.filter((item) => item.id === +plan),
    [result]
  );

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resume</h2>
      <p className="my-2">
        <span className="font-bold">Brand: </span>
        {selectedBrand?.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {selectedPlan?.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Year: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Quoter: </span>
        {result}
      </p>
    </div>
  );
};
export default Result;
