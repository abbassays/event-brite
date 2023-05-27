import React, { useState, useEffect } from "react";

import allOrders from "../../utils/all_orders.json";
import { OrderType } from "../../types";

import Container from "../UI/Container";
import OrderCard from "./OrderCard";

const OrdersList = ({ userId }: { userId: string }) => {
  const [orders, setOrders] = useState<OrderType[]>();

  const fetchOrders = () => {
    /* Replace this code with your code to fetch orders based on user id */
    setOrders(allOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, [allOrders]);

  return (
    <Container>
      <h1 className="text-2xl text-gray-500">My Orders</h1>
      <hr />
      <div className="flex flex-col space-y-4 mt-6">
        {orders?.map((order) => (
          <OrderCard key={order.id} {...order} />
        ))}
      </div>
    </Container>
  );
};

export default OrdersList;
