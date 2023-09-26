import { ReactNode, createContext } from "react";
import { Category, useGetCategories } from "../hooks/useGetCategories";

export type ProviderProps = {
  children: ReactNode;
};

export type CategoriesContextValue = {
  categories: Category[];
};

const CategoriesContext = createContext<CategoriesContextValue>(
  {} as CategoriesContextValue
);

export const CategoriesProvider = ({ children }: ProviderProps) => {
  const { categories } = useGetCategories();

  return (
    <CategoriesContext.Provider
      value={{
        categories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
