import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { ClientI } from "../../../../routes";
import ClientForm from "../create-client/components/client-form/ClientForm";

const EditClient = () => {
  const client = useLoaderData() as ClientI;
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Edit client</h1>
      <p className="mt-3">You can edit the information of the client</p>
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/clients")}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-md"
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        <Form method="PUT" noValidate>
          <ClientForm client={client} />
          <button
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
          >
            Save changes
          </button>
        </Form>
      </div>
    </>
  );
};
export default EditClient;
