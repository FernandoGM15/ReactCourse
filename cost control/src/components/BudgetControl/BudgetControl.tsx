import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CostI } from "../../App";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
interface BudgetControlPropsI {
  budget: number;
  setBudget: Dispatch<SetStateAction<number>>;
  costs: CostI[];
  setCosts: Dispatch<SetStateAction<CostI[]>>;
  setIsValidBudget: Dispatch<SetStateAction<boolean>>;
}
const BudgetControl = ({
  budget,
  setBudget,
  costs,
  setCosts,
  setIsValidBudget,
}: BudgetControlPropsI) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);
  const [percentage, setPercentage] = useState(0);

  /**
   * @desc Sets, the total spent, the total available
   *  and the new percentage when the budget changes
   */
  useEffect(() => {
    const totalSpent = costs.reduce((total, cost) => cost.amount + total, 0);
    const totalAvailable = budget - totalSpent;
    const newPercentage = +(((budget - totalAvailable) / budget) * 100).toFixed(2);
    setSpent(totalSpent);
    setAvailable(totalAvailable);
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);
  }, [costs, budget]);

  /**
   * @description Sets the currency format to an amount.
   * @param amount
   */
  const currencyFormat = (amount: number) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  /**
   * @description Resets budget data.
   * @param amount
   */
  const handleResetApp = () => {
    const result = confirm("Are you sure you want to reset?");
    if (result) {
      setCosts([]);
      setBudget(0);
      setIsValidBudget(false);
    }
  };

  return (
    <div
      className="contenedor-presupuesto contenedor sombra"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: percentage > 100 ? "#DC2626" : "#3B82F6",
          })}
          text={`${percentage}% Spent`}
        />
      </div>
      <div className="contenido-presupuesto" style={{ width: "40%" }}>
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset app
        </button>
        <p>
          <span>Budget: </span>
          {currencyFormat(budget)}
        </p>
        <p className={`${available < 0 ? "negativo" : ""}`}>
          <span>Available: </span>
          {currencyFormat(available)}
        </p>
        <p>
          <span>Spent: </span>
          {currencyFormat(spent)}
        </p>
      </div>
    </div>
  );
};
export default BudgetControl;
