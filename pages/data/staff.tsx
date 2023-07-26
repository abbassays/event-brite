import { StaffMemberType } from "@/types";
import React from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs

import { allOrganisers } from "@/utils/json-database";

const generateRandomData = () => {
  const getRandomImageLink = () => {
    const width = Math.floor(Math.random() * 500) + 100; // Random width between 100 and 600
    return `https://i.pravatar.cc/${width}`;
  };

  const getRandomOrganisations = () => {
    // return an array of 1 to 3 random organisations
    const numOrgs = Math.floor(Math.random() * 3) + 1;
    const orgs = [];
    for (let i = 0; i < numOrgs; i++) {
      const org =
        allOrganisers[Math.floor(Math.random() * allOrganisers.length)];
      orgs.push({
        id: org.id,
        name: org.name,
      });
    }
    //remove duplicate org's and return array
    return orgs.filter(
      (org, index, self) => index === self.findIndex((o) => o.id === org.id)
    );
  };

  const data = [];

  for (let i = 0; i < 100; i++) {
    const staffMember: StaffMemberType = {
      id: uuidv4(),
      lastName: `Last Member ${i + 1}`,
      firstName: `First ${i + 1}`,
      image: getRandomImageLink(),
      email: `staffmember${i + 1}@email.com`,
      description: `Description for Organiser ${i + 1}.`,
      organisations: getRandomOrganisations(),
    };
    data.push(staffMember);
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
