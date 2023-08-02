import { useNavigate, Form, useActionData } from "react-router-dom";
import ClientForm from "./components/client-form/ClientForm";
import { ClientI } from "../../../../routes";
import Error from "../../../../components/Error/Error";

const CreateClient = () => {
  const errors = useActionData() as string[];

  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New client</h1>
      <p className="mt-3">Fill all the fields to register a new client</p>
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/clients")}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-md"
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errors?.length &&
          errors.map((error, index) => <Error key={index}>{error}</Error>)}
        <Form method="PUT" noValidate>
          <ClientForm client={{} as ClientI} />
          <button
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
          >
            Register
          </button>
        </Form>
      </div>
    </>
  );
};
export default CreateClient;
