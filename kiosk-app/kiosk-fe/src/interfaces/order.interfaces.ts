export type OrderI = {
  id: number;
  name: string;
  date: string;
  total: number;
  order: {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];
};

export type AddOrder = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};
