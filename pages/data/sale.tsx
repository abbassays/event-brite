import React from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs
import { SaleType } from "../../types";
import { getRandomTicket } from "@/utils/json-database";

const generateRandomData = () => {
  const data = [];

  const getRandomDate = () => {
    const start = new Date(2023, 4, 1); // Start date
    const end = new Date(2023, 4, 30); // End date
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return randomDate.toISOString();
  };

  for (let i = 0; i < 100; i++) {
    const ticket = getRandomTicket();
    const sale: SaleType = {
      id: uuidv4(),
      ticketId: ticket.id,
      quantity: Math.floor(Math.random() * 5) + 1,
      price: ticket.price,
      date: getRandomDate(),
      eventName: ticket.eventName,
      organiserName: ticket.organiserName,
    };
    data.push(sale);
  }

  return data;
};

const downloadData = () => {
  const data = generateRandomData();
  const jsonData = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "data.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const SaleData = () => {
  return (
    <div>
      <button onClick={downloadData}>Generate Data</button>
    </div>
  );
};

export default SaleData;
