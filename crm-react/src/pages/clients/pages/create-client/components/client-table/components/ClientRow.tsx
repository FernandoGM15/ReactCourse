import { Form, useNavigate } from "react-router-dom";
import { ClientI } from "../../../../../../../routes";

interface ClientRowPropsI {
  client: ClientI;
}

const ClientRow = ({ client }: ClientRowPropsI) => {
  const navigate = useNavigate();
  const { id, name, email, company, phone } = client;
  return (
    <>
      <tr className="border-b">
        <td className="p-6 space-y-2">
          <p className="text-2xl text-gray-800">{name}</p>
          <p>{company}</p>
        </td>

        <td className="p-6">
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">{email}</span>
          </p>
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">{phone}</span>
          </p>
        </td>

        <td className="p-6 space-x-3">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700  uppercase font-bold text-xs"
            onClick={() => navigate(`${id}/edit`)}
          >
            Edit
          </button>

          <Form
            method="POST"
            action={`${id}/delete`}
            onSubmit={(e) => {
              if (!confirm("Are you sure about to delete this registry?")) {
                e.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="text-red-600 hover:text-red-700  uppercase font-bold text-xs"
            >
              Delete
            </button>
          </Form>
        </td>
      </tr>
    </>
  );
};
export default ClientRow;
