import { useContext } from "react";
import CategoriesContext from "../context/categories.provider";

const useCategories = () => {
  return useContext(CategoriesContext);
};

export default useCategories;
