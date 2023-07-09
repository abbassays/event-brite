import React from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs

import { allEvents } from "@/utils/json-database";
import { TicketType } from "../../types";
import { getRandomOrganiser } from "@/utils/json-database";

const generateRandomData = () => {
  const getRandomImageLink = () => {
    const width = Math.floor(Math.random() * 500) + 100; // Random width between 100 and 600
    const height = Math.floor(Math.random() * 300) + 100; // Random height between 100 and 400
    const bgColor = Math.floor(Math.random() * 16777215).toString(16); // Random hexadecimal color code
    const fgColor = "000000"; // Fixed foreground color
    return `http://dummyimage.com/${width}x${height}.png/${bgColor}/${fgColor}`;
  };

  const getRandomDate = () => {
    const start = new Date(2023, 0, 1); // Start date
    const end = new Date(2023, 11, 31); // End date
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return randomDate;
  };

  const data = [];

  for (let i = 0; i < allEvents.length; i++) {
    ["Free", "Paid", "Donation"].map((ticketType) => {
      const maxQuantity = Math.floor(Math.random() * 100) + 1;
      const soldQuantity = Math.floor(Math.random() * maxQuantity) + 1;

      const ticket: TicketType = {
        id: uuidv4(),
        type: ticketType,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam libero ultricies nunc",
        price: ticketType !== "Paid" ? 0 : Math.random() * 100 + 1,
        quantity: maxQuantity,
        soldQuantity: soldQuantity,
        image: getRandomImageLink(),
        startDate: getRandomDate().toISOString(),
        endDate: getRandomDate().toISOString(),
        eventId: allEvents[i].id,
        eventName: allEvents[i].name,
        organiserId: allEvents[i].organiserId,
        organiserName: allEvents[i].organiserName,
      };
      data.push(ticket);
    });
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
