import axios from "axios";
import { useEffect, useState } from "react";

export type Category = { strCategory: string };

export type Response<T> = {
  drinks: T[];
};

export const useGetCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const url =
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
        const { data } = await axios<Response<Category>>(url);
        setCategories(data.drinks);
      } catch (error) {
        throw new Error("Error fetching the categories");
      }
    })();
  }, []);

  return { categories };
};
