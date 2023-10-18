"use client";
import { ReactNode } from "react";
import { useKiosk } from "../hooks/useKiosk";

type ModalPropsI = {
  children: ReactNode;
};
const Modal = ({ children }: ModalPropsI) => {
  const { modal, handleToggleModal } = useKiosk();

  if (!modal) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay bg-black opacity-50 fixed inset-0"></div>
      <div className="modal-container bg-white w-fit rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content pt-4 pb-6 text-left px-6 min-w-[20rem]">
          <div className="w-100 flex justify-end">
            <button onClick={handleToggleModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
