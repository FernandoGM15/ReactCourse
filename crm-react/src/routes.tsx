import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
/** Clients Pages*/
import CreateClient from "./pages/clients/pages/create-client/CreateClient";
import Clients from "./pages/clients/Clients";
import {
  deleteClient,
  getClient,
  getClients,
  postClient,
  updateClient,
} from "./pages/clients/services/clients.services";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import EditClient from "./pages/clients/pages/edit-client/EditClient";

export interface ClientI {
  id: number;
  name: string;
  phone: number;
  email: string;
  company: string;
  notes: string;
}

export const routes = createBrowserRouter([
  {
    path: "/clients",
    element: <Layout />,
    children: [
      {
        /**
         * @description index allows to specify which component will be rendered in the root route.
         */
        index: true,
        element: <Clients />,
        loader: getClients,
        errorElement: <ErrorPage />,
      },
      {
        path: "create",
        element: <CreateClient />,
        action: async ({ request }) => {
          return await postClient(request);
        },
      },
      {
        path: ":id/edit",
        element: <EditClient />,
        loader: ({ params }) => {
          const id = String(params.id);
          return getClient(id);
        },
        action: updateClient,
        errorElement: <ErrorPage />,
      },
      {
        path: ":id/delete",
        action: deleteClient,
      },
    ],
  },
]);
