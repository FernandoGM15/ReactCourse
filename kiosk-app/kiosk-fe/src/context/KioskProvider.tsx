"use client";
import {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
  FormEvent,
} from "react";
import { type CategoryI } from "@/interfaces/category.interfaces";
import { type ProductI } from "../interfaces/product.interfaces";
import { AddOrder } from "../interfaces/order.interfaces";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type KioskContextI = {
  categories: CategoryI[];
  currentCategory: CategoryI;
  modal: boolean;
  product: ProductI | AddOrder;
  order: AddOrder[];
  name: string;
  total: number;
  setName: Dispatch<SetStateAction<string>>;
  handleSelectCategory: (id: number) => void;
  handleSetProduct: (product: ProductI) => void;
  handleToggleModal: () => void;
  handleAddOrder: (order: AddOrder) => void;
  handleEditQuantities: (id: number) => void;
  handleDeleteProduct: (id: number) => void;
  postOrder: (e: FormEvent) => void;
};

const KioskContext = createContext<KioskContextI>({} as KioskContextI);

export const KioskProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<CategoryI[]>([]);
  const [currentCategory, setCurrentCategory] = useState<CategoryI>(
    {} as CategoryI
  );
  const [product, setProduct] = useState<ProductI | AddOrder>({} as ProductI);
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState<AddOrder[]>([]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { data } = await axios("/api/categories");
      setCategories(data);
      setCurrentCategory(data[0]);
    })();
  }, []);

  useEffect(() => {
    const newTotal = order.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(newTotal);
  }, [order]);

  const handleSelectCategory = (id: number) => {
    const selectedCategory = categories.find((category) => category.id === id);
    selectedCategory && setCurrentCategory(selectedCategory);
    router.push("/");
  };

  const handleSetProduct = (product: ProductI) => {
    setProduct(product);
  };

  const handleAddOrder = (newOrder: AddOrder) => {
    const orderExists = order.some(
      (productState) => productState.id === newOrder.id
    );
    if (orderExists) {
      const updatedOrder = order.map((productState) =>
        productState.id === newOrder.id ? newOrder : productState
      );
      toast.success("The product was saved in the order");
      setOrder(updatedOrder);
      setModal(false);
      return;
    }
    toast.success("The product was added to the order");
    setOrder([...order, newOrder]);
    setModal(false);
  };

  const handleToggleModal = () => setModal(!modal);

  const handleEditQuantities = (id: number) => {
    const updateProduct = order.filter((product) => product.id === id);
    setProduct(updateProduct[0]);
    handleToggleModal();
  };

  const handleDeleteProduct = (id: number) => {
    const updatedOrder = order.filter((product) => product.id !== id);
    setOrder(updatedOrder);
  };

  const postOrder = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/orders", {
        order,
        name,
        total,
        date: Date.now().toString(),
      });
      setCurrentCategory(categories[0]);
      setOrder([]);
      setName("");
      setTotal(0);
      toast.success("The order was sent successfully");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <KioskContext.Provider
      value={{
        categories,
        currentCategory,
        modal,
        product,
        order,
        name,
        total,
        handleSelectCategory,
        handleSetProduct,
        handleToggleModal,
        handleAddOrder,
        handleEditQuantities,
        handleDeleteProduct,
        setName,
        postOrder,
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export default KioskContext;
