import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import AddIcon from "./assets/img/nuevo-gasto.svg";
import Modal from "./components/Modal/Modal";
import CostList from "./components/CostList/CostList";
import { generateId } from "./utils/generateId";
import Filter from "./components/Filter/Filter";

export interface CostI {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: number;
}

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [costs, setCosts] = useState<CostI[]>(
    JSON.parse(localStorage.getItem("costs") || "[]")
  );
  const [costEdit, setCostEdit] = useState<CostI>();
  const [filter, setFilter] = useState("");
  const [filteredCosts, setFilteredCosts] = useState<CostI[]>([]);

  /**
   * @desc Opens the modal if cost edit has item.
   */
  useEffect(() => {
    if (costEdit) {
      setModal(true);
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [costEdit]);

  /**
   * @desc Set the budget on local storage when it changes.
   */
  useEffect(() => {
    localStorage.setItem("budget", String(budget));
  }, [budget]);

  /**
   * @desc set the budget if exists on local storage.
   */
  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget") ?? 0);
    setIsValidBudget(budgetLS > 0);
  }, []);

  /**
   * @desc Set the costs if exists on local storage.
   */
  useEffect(() => {
    localStorage.setItem("costs", JSON.stringify(costs));
  }, [costs]);

  /**
   * @desc Set filtered costs if changes
   */
  useEffect(() => {
    if (filter) {
      const filteredCosts = costs.filter((cost) => cost.category === filter);
      setFilteredCosts(filteredCosts);
    }
  }, [filter, costs]);

  /**
   * @desc Add new cost to the list
   */
  const handleAddCost = () => {
    setCostEdit({
      id: "",
      name: "",
      amount: 0,
      category: "",
      date: 0,
    });
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  /**
   * @desc Add a new cost to the list.
   * @param costs
   */
  const addCost = (cost: CostI) => {
    if (cost.id) {
      const updated = costs.map((costState) =>
        costState.id === cost.id ? cost : costState
      );
      setCosts(updated);
      setCostEdit(undefined);
      return;
    }
    cost.id = generateId();
    cost.date = Date.now();
    setCosts([...costs, cost]);
  };

  /**
   * @desc Delete cost from the list.
   * @param id
   */
  const deleteCost = (id: string) => {
    const updatedCosts = costs.filter((costState) => costState.id !== id);
    setCosts(updatedCosts);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        budget={budget}
        setCosts={setCosts}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        costs={costs}
      />

      {isValidBudget && (
        <>
          <main>
            <Filter filter={filter} setFilter={setFilter} />
            <CostList
              costs={costs}
              setCostEdit={setCostEdit}
              deleteCost={deleteCost}
              filter={filter}
              filteredCosts={filteredCosts}
            />
          </main>
          <div className="nuevo-gasto">
            <img src={AddIcon} alt="Add cost" onClick={handleAddCost} />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          addCost={addCost}
          costEdit={costEdit}
          setCostEdit={setCostEdit}
        />
      )}
    </div>
  );
}

export default App;
