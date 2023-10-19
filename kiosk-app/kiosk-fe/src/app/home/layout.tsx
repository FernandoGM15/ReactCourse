import ModalProduct from "@/components/ModalProduct";
import Sidebar from "@/components/Sidebar";
import Steps from "@/components/Steps";
import { KioskProvider } from "@/context/KioskProvider";


const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <KioskProvider>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:4/5 h-screen overflow-y-auto">
          <div className="p-10">
            <Steps />
            {children}
          </div>
        </main>
      </div>
      <ModalProduct />
    </KioskProvider>
  );
};
export default HomeLayout;
