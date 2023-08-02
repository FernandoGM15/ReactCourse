import { useLoaderData } from "react-router-dom";
import { ClientI } from "../../routes";
import ClientsTable from "./pages/create-client/components/client-table/ClientsTable";

const Clients = () => {
  /**
   * React router dom allows to execute functions like useEffect using loader function
   */
  const clients = useLoaderData() as ClientI[];
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manage your clients</p>

      {clients.length ? (
        <ClientsTable clients={clients} />
      ) : (
        <p className="text-center mt-10"></p>
      )}
    </>
  );
};
export default Clients;
