import Image from "next/image";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
          <Image
            width={300}
            height={100}
            src="/img/logo.svg"
            alt="imagen logotipo"
          />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
};
export default AdminLayout;
