import { ProductI } from "./product.interfaces";

export interface CategoryI {
  id: number;
  name: string;
  icon: string;
  products: ProductI[];
}
