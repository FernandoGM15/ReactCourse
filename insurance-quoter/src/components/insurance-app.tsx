import useQuoter from "../hooks/useQuoter";
import Form from "./form";
import Result from "./result";
import Spinner from "./spinner";

const InsuranceApp = () => {
  const { result, loading } = useQuoter();
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Automobile insurance quoter
        </h1>
      </header>
      <main className="bg-white md:w-2/3 mx-auto shadow rounded-lg p-10">
        <Form />
        {loading && <Spinner />}
        {result && <Result />}
      </main>
    </>
  );
};
export default InsuranceApp;
