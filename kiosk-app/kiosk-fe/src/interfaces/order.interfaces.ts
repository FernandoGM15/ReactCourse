import { ProductI } from "./product.interfaces";

export type OrderI = {
  id: number;
  name: string;
  date: string;
  total: number;
  order: { [key: string]: string };
};

export type AddOrder = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};
