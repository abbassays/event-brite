import React from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs
import { EventType } from "../../types";
import { allOrganisers, getRandomOrganiser } from "../../utils/json-database";

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
    return randomDate.toISOString();
  };

  const getRandomImageLink = () => {
    const width = Math.floor(Math.random() * 500) + 100; // Random width between 100 and 600
    const height = Math.floor(Math.random() * 300) + 100; // Random height between 100 and 400
    // return `http://dummyimage.com/${width}x${height}.png/${bgColor}/${fgColor}`;
    return `https://picsum.photos/${width}/${height}`;
  };



  const data = [];

  for (let i = 0; i < 100; i++) {
    const organiser = getRandomOrganiser();
    const event: EventType = {
      id: uuidv4(),
      name: `Event ${i + 1}`,
      description: `Description for Event ${i + 1}. Description for Event ${
        i + 1
      }. Description for Event ${i + 1}. Description for Event ${
        i + 1
      }. Description for Event ${i + 1}. `,
      category: getRandomCategory(),
      startDate: getRandomDate(),
      endDate: getRandomDate(),
      location: `Location ${i + 1}`,
      image: getRandomImageLink(),
      checkedInCount: Math.floor(Math.random() * 501),
      organiserId: organiser.id,
      organiserName: organiser.name,
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

const EventData = () => {
  return (
    <div>
      <button onClick={downloadData}>Generate Data</button>
    </div>
  );
};

export default EventData;
