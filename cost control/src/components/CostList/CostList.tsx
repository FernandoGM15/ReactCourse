import { Dispatch, SetStateAction } from "react";
import { CostI } from "../../App";
import Cost from "./components/Cost";

interface CostListPopsI {
  costs: CostI[];
  setCostEdit: Dispatch<SetStateAction<CostI | undefined>>;
  deleteCost: (id: string) => void;
  filter: string;
  filteredCosts: CostI[];
}
const CostList = ({
  costs,
  setCostEdit,
  deleteCost,
  filter,
  filteredCosts,
}: CostListPopsI) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>
            {costs.length ? "Filtered costs" : "There aren't costs to show in this category"}
          </h2>

          {filteredCosts.map((cost) => (
            <Cost
              key={cost.id}
              {...cost}
              setCostEdit={setCostEdit}
              deleteCost={deleteCost}
            />
          ))}
        </>
      ) : (
        <>
          <h2>
            {costs.length ? "Costs" : "There aren't costs to show"}
          </h2>
          {costs.map((cost) => (
            <Cost
              key={cost.id}
              {...cost}
              setCostEdit={setCostEdit}
              deleteCost={deleteCost}
            />
          ))}
        </>
      )}
    </div>
  );
};
export default CostList;
