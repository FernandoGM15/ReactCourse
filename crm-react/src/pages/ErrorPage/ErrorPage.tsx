import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const routeError = useRouteError() as Error;
  return (
    <>
      <div className="space-y-8">
        <h1 className="text-center text-6xl font-extrabold text-blue-900">
          CRM -Clients
        </h1>
        <p>There was an error</p>
        <p>{routeError.message}</p>
        <p></p>
      </div>
    </>
  );
};
export default ErrorPage;
