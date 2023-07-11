import React from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs
import { CartType, SaleType } from "../../types";

import { allOrders } from "@/utils/json-database";

const generateRandomData = () => {
  const categories = [
    "Music",
    "Sports & Fitness",
    "Health",
    "Food & Drink",
    "Business",
    "Performing & Arts",
    "Holiday",
    "Hobbies",
  ];

  const getRandomCategory = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  };

  const getRandomDate = () => {
    const start = new Date(2023, 4, 1); // Start date
    const end = new Date(2023, 4, 30); // End date
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return randomDate;
  };

  const data = [];

  for (let i = 0; i < 3; i++) {
    // take random order and push
    const randomOrder = allOrders[Math.floor(Math.random() * allOrders.length)];

    const randomCarts: CartType = {
      id: uuidv4(),
      items: randomOrder.items,
    };

    data.push(randomCarts);
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

const EventData = () => {
  return (
    <div>
      <button onClick={downloadData}>Generate Data</button>
    </div>
  );
};

export default EventData;
