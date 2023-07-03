import { Dispatch, SetStateAction } from "react";
import CloseIcon from "../../assets/img/cerrar.svg";
import Form from "./components/Form/Form";
import { CostI } from "../../App";

interface ModalPropsI {
  setModal: Dispatch<SetStateAction<boolean>>;
  animateModal: boolean;
  setAnimateModal: Dispatch<SetStateAction<boolean>>;
  addCost: (cost: CostI) => void;
  costEdit: CostI | undefined;
  setCostEdit: Dispatch<SetStateAction<CostI | undefined>>;
}
const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  addCost,
  costEdit,
  setCostEdit,
}: ModalPropsI) => {
  /**
   * @description On close modal function.
   */
  const handleClose = () => {
    setCostEdit(undefined);
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseIcon}
          alt="close modal"
          onClick={handleClose}
          style={{ cursor: "pointer" }}
        />
      </div>
      <Form
        animateModal={animateModal}
        addCost={addCost}
        handleClose={handleClose}
        costEdit={costEdit}
      />
    </div>
  );
};
export default Modal;
