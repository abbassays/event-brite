import React from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs
import { SaleType, OrderType } from "../../types";
import { getRandomTicket, allSales } from "@/utils/json-database";

const generateRandomData = () => {
  const ordersData = [];
  const salesData = [];
  const getRandomDate = () => {
    const start = new Date(2023, 4, 1); // Start date
    const end = new Date(2023, 4, 30); // End date
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return randomDate.toISOString();
  };
  for (let i = 0; i < 100; i++) {
    // random number between 5
    const sales = [];
    const totalSales = Math.floor(Math.random() * 5) + 1;

    // loop to get random sales
    for (let j = 0; j < totalSales; j++) {
      const ticket = getRandomTicket();
      const date = getRandomDate();

      const sale: SaleType = {
        id: uuidv4(),
        ticketId: ticket.id,
        quantity: Math.floor(Math.random() * 5) + 1,
        price: ticket.price,
        date: date,
        eventName: ticket.eventName,
        organiserName: ticket.organiserName,
      };
      sales.push(sale);
      salesData.push(sale);
    }

    const order: OrderType = {
      id: uuidv4(),
      billingAddress: `Address ${i + 1}`,
      date: getRandomDate(),
      items: sales,
      paymentMethod: Math.random() > 0.5 ? "Credit" : "Cash",
    };
    ordersData.push(order);
  }

  return { ordersData, salesData };
};

const downloadData = () => {
  const { ordersData, salesData } = generateRandomData();
  const jsonData = JSON.stringify(ordersData, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "all_orders.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  const jsonData2 = JSON.stringify(salesData, null, 2);
  const blob2 = new Blob([jsonData2], { type: "application/json" });
  const url2 = URL.createObjectURL(blob2);
  const link2 = document.createElement("a");
  link2.href = url2;
  link2.download = "all_sales.json";
  document.body.appendChild(link2);
  link2.click();
  document.body.removeChild(link2);
};

const OrderData = () => {
  return (
    <div>
      <button onClick={downloadData}>Generate Data</button>
    </div>
  );
};

export default OrderData;
