import { Dispatch, SetStateAction } from "react";

interface FilterPropsI {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}
const Filter = ({ setFilter }: FilterPropsI) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="filter">Filter Spent</label>
          <select
            name="filter"
            id="filter"
            onChange={(e) => setFilter(e.target.value)}
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
      </form>
    </div>
  );
};
export default Filter;
