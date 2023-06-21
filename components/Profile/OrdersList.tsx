import React, { useState, useEffect } from "react";

import allOrders from "../../utils/all_orders.json";
import { OrderType } from "../../types";

import Container from "../UI/Container";
import OrderCard from "./OrderCard";
import Pagination from "../UI/Pagination";

const OrdersList = ({ userId }: { userId: string }) => {
  const itemsPerPage = 5;
  const [orders, setOrders] = useState<OrderType[]>();
  const [currentPage, setCurrentPage] = useState(1);

  const fetchOrders = () => {
    /* Replace this code with your code to fetch events */
    const selectedOrders = allOrders.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setOrders(selectedOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, [allOrders, currentPage]);

  return (
    <Container>
      <h1 className="text-2xl text-gray-500">My Orders</h1>
      <hr />
      <div className="flex flex-col space-y-4 mt-6">
        {orders?.map((order) => (
          <OrderCard key={order.id} {...order} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={allOrders.length}
        itemsPerPage={itemsPerPage}
      />
    </Container>
  );
};

export default OrdersList;
