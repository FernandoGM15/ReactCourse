import { createContext, useEffect, useState } from "react";
import { ProviderProps } from "./categories.provider";
import axios from "axios";
import { Response } from "../hooks/useGetCategories";
import { Search } from "../components/search-form";

export type Drink = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

type DrinksContextValue = {
  drinks: Drink[];
  modal: boolean;
  recipe: Recipe;
  loading: boolean;
  getDrinks: (search: Search) => void;
  toggleModal: () => void;
  handleDrinkId: (id: string) => void;
};

export type Recipe = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string;
  strInstructionsFR: string | null;
  strInstructionsIT: string;
  "strInstructionsZH-HANS": string | null;
  "strInstructionsZH-HANT": string | null;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
};

const DrinksContext = createContext<DrinksContextValue>(
  {} as DrinksContextValue
);

export const DrinksProvider = ({ children }: ProviderProps) => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState<string>();
  const [recipe, setRecipe] = useState<Recipe>({} as Recipe);
  const [loading, setLoading] = useState(false);

  const getDrinks = async ({ name, category }: Search) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
      const { data } = await axios<Response<Drink>>(url);
      setDrinks(data.drinks);
    } catch (error) {
      throw new Error("It was an error trying to fetch data");
    }
  };

  useEffect(() => {
    if (!drinkId) return;
    try {
      (async () => {
        setLoading(true);
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const { data } = await axios<Response<Recipe>>(url);
        setRecipe(data.drinks[0]);

        setLoading(false);
      })();
    } catch (error) {
      throw new Error("It was an error trying to fetch data");
    }
  }, [drinkId]);

  const handleDrinkId = (id: string) => setDrinkId(id);

  const toggleModal = () => setModal(!modal);

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        modal,
        recipe,
        loading,
        getDrinks,
        toggleModal,
        handleDrinkId,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export default DrinksContext;
