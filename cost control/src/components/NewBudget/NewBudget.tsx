import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import Message from "../Message/Message";
interface NewBudgetPropsI {
  budget: number;
  setBudget: Dispatch<SetStateAction<number>>;
  setIsValidBudget: Dispatch<SetStateAction<boolean>>;
}
const NewBudget = ({
  budget,
  setBudget,
  setIsValidBudget,
}: NewBudgetPropsI) => {
  const [message, setMessage] = useState("");

  /**
   * @description Function that executes wen the budget is setted.
   * @param event
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newBudget = +event.target.value;
    setBudget(newBudget);
  };

  /**
   * @description Sets if the budget is valid.
   * @param event
   */
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!+budget || +budget < 0) {
      setMessage("The budget is not valid");
      return;
    }
    setMessage("");
    setIsValidBudget(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label htmlFor="budget">Budget name</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Add your budget"
            value={budget}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Add" />

        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};
export default NewBudget;
