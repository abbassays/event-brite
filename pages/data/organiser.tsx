import React from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs

const generateRandomData = () => {
  const getRandomImageLink = () => {
    const width = Math.floor(Math.random() * 500) + 100; // Random width between 100 and 600
    return `https://i.pravatar.cc/${width}`;
  };

  const data = [];

  for (let i = 0; i < 20; i++) {
    const event = {
      id: uuidv4(),
      name: `Organiser ${i + 1}`,
      description: `Description for Event ${i + 1}.`,
      image: getRandomImageLink(),
    };
    data.push(event);
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

const OrderData = () => {
  return (
    <div>
      <button onClick={downloadData}>Generate Data</button>
    </div>
  );
};

export default OrderData;
