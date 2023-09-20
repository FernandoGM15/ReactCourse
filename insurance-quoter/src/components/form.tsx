import { FormEvent, Fragment } from "react";
import { BRANDS, PLANS, YEARS } from "../constants";
import useQuoter from "../hooks/useQuoter";
import Error from "./error";

const Form = () => {
  const { quoterForm, handleChangeData, error, setError, insuranceQuote } =
    useQuoter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const hasEmpty = Object.values(quoterForm).includes("");

    if (hasEmpty) {
      setError("All the fields are required");
      return;
    }
    setError(null);
    insuranceQuote();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <Error />}
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Brand
          </label>
          <select
            name="brand"
            id="brand"
            className="w-full bg-white border border-gray-200 p-3"
            onChange={(e) => handleChangeData(e)}
            value={quoterForm.brand}
          >
            <option value="">Select brand</option>
            {BRANDS.map((brand) => (
              <option value={brand.id} key={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Year
          </label>
          <select
            name="year"
            id="year"
            className="w-full bg-white border border-gray-200 p-3"
            onChange={(e) => handleChangeData(e)}
            value={quoterForm.year}
          >
            <option value="">Select year</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Choose a plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANS.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.name}</label>
                <input
                  type="radio"
                  name="plan"
                  id="plan"
                  value={plan.id}
                  onChange={(e) => handleChangeData(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <button className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold">
          Quote
        </button>
      </form>
    </>
  );
};
export default Form;
