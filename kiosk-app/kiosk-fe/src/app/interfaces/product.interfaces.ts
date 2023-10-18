import { CategoryI } from "./category.interfaces";

export type ProductI = {
  id: number;
  name: string;
  price: number;
  image: string;
  category_id: number;
  category: CategoryI;
};
