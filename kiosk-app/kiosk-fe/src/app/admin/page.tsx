"use client";
import { OrderI } from "@/interfaces/order.interfaces";
import axios from "axios";
import useSWR from "swr";
import Order from "./components/Order";

const AdminPage = () => {
  const fetcher = () => axios("/api/orders").then((res) => res.data);
  const {
    data: orders,
    error,
    isLoading,
  } = useSWR<OrderI[]>("/api/orders", fetcher, { refreshInterval: 100 });

  return (
    <>
      <h1 className="text-4xl font-black">Management Panel</h1>
      <p className="text-2xl my-10">Manage your orders</p>
      {orders && orders.length ? (
        orders.map((order) => <Order key={order.id} order={order} />)
      ) : (
        <p>No orders pending</p>
      )}
    </>
  );
};
export default AdminPage;
