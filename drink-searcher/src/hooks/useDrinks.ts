import { useContext } from "react";
import DrinksContext from "../context/drinks.provider";

const useDrinks = () => {
  return useContext(DrinksContext);
};
export default useDrinks;
