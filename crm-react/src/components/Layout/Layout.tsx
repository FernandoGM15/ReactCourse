import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/5  bg-blue-600 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clients
        </h2>
        <nav className="mt-10">
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              isActive
                ? "text-blue-300 block text-2xl mt-2 hover:text-blue-300"
                : "text-white  block text-2xl mt-2 hover:text-blue-300"
            }
            end
          >
            Clients
          </NavLink>
          <NavLink
            to="/clients/create"
            className={({ isActive }) =>
              isActive
                ? "text-blue-300 block text-2xl mt-2 hover:text-blue-300"
                : "text-white  block text-2xl mt-2 hover:text-blue-300"
            }
            end
          >
            Create Client
          </NavLink>
        </nav>
      </aside>
      <main className="md:w-4/5 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
