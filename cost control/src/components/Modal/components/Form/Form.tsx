import { FormEvent, useEffect, useState } from "react";
import Message from "../../../Message/Message";
import { CostI } from "../../../../App";

interface FormPropsI {
  animateModal: boolean;
  addCost: (cost: CostI) => void;
  handleClose: () => void;
  costEdit: CostI | undefined;
}
const Form = ({ animateModal, addCost, handleClose, costEdit }: FormPropsI) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState(0);
  const [id, setId] = useState("");

  /**
   * @description Set the states if costsEdit exists.
   */
  useEffect(() => {
    if (costEdit) {
      setName(costEdit.name);
      setAmount(costEdit.amount);
      setCategory(costEdit.category);
      setDate(costEdit.date);
      setId(costEdit.id);
    }
  }, []);

  /**
   * @description Submit function.
   */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValid = ![name, amount, category].includes("");
    if (!isValid) {
      setMessage("All the fields are required");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    addCost({
      id,
      date,
      name,
      amount,
      category,
    });
    handleClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`formulario ${animateModal ? "animar" : "cerrar"}`}
    >
      <legend>{costEdit ? "Edit cost" : "New cost"}</legend>
      {message && <Message type="error">{message}</Message>}

      <div className="campo">
        <label htmlFor="name">Cost name</label>
        <input
          type="text"
          id="name"
          placeholder="Add the cost name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div className="campo">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="300"
          onChange={(e) => setAmount(+e.target.value)}
          value={amount}
        />
      </div>

      <div className="campo">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="savings">savings</option>
          <option value="food">food</option>
          <option value="home">home</option>
          <option value="miscellaneous">miscellaneous</option>
          <option value="leisure">leisure</option>
          <option value="health">health</option>
          <option value="subscriptions">subscriptions</option>
        </select>
      </div>

      <input type="submit" value={costEdit ? "Edit" : "Add"} />
    </form>
  );
};
export default Form;
