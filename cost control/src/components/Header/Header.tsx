import { Dispatch, SetStateAction } from "react";
import NewBudget from "../NewBudget/NewBudget";
import BudgetControl from "../BudgetControl/BudgetControl";
import { CostI } from "../../App";

interface HeaderPropsI {
  budget: number;
  setBudget: Dispatch<SetStateAction<number>>;
  isValidBudget: boolean;
  setIsValidBudget: Dispatch<SetStateAction<boolean>>;
  costs: CostI[];
  setCosts: Dispatch<SetStateAction<CostI[]>>;
}
const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  costs,
  setCosts,
}: HeaderPropsI) => {
  return (
    <header>
      <h1>Cost planner</h1>
      {isValidBudget ? (
        <BudgetControl
          budget={budget}
          costs={costs}
          setCosts={setCosts}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};
export default Header;
