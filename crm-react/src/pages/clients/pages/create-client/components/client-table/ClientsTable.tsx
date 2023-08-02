import { ClientI } from "../../../../../../routes";
import ClientRow from "./components/ClientRow";

interface ClientsTablePropsI {
  clients: ClientI[];
}
const ClientsTable = ({ clients }: ClientsTablePropsI) => {
  return (
    <>
      <table className="w-full bg-white shadow mt-5 table-auto">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Client</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <ClientRow key={client.id} client={client} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ClientsTable;
