import { SessionType } from "@/types";

const organiser1: SessionType = {
  email: "user@email.com",
  role: "ORGANISER",
  user: {
    id: "b3bbc2cf-d6cd-4ced-acf6-2644fe4b1b24",
    name: "Organiser 1",
    description: "Description for Event 1.",
    image: "https://i.pravatar.cc/415",
    isEnabled: false,
    GST: 7,
  },
};

const organiser2: SessionType = {
  email: "user@email.com",
  role: "ORGANISER",
  user: {
    id: "191a730d-cdae-4cf9-ace1-0bfd671b3b65",
    name: "Organiser 2",
    description: "Description for Event 2.",
    image: "https://i.pravatar.cc/480",
    commission: 20,
    isEnabled: true,
    GST: 3,
  },
};

const staffMember1: SessionType = {
  email: "user@email.com",
  role: "STAFF",
  user: {
    id: "12",
    name: "Staff Member 1",
    description: "Description for Staff Member 1.",
    image: "https://i.pravatar.cc/480",
    organisations: [
      {
        id: organiser1.user.id,
        name: organiser1.user.name,
      },
      {
        id: organiser2.user.id,
        name: organiser2.user.name,
      },
    ],
  },
};

const admin1: SessionType = {
  email: "user@email.com",
  role: "ADMIN",
  user: {
    id: "1",
    name: "Admin 1",
  },
};

const customer1: SessionType = {
  email: "user@email.com",
  role: "CUSTOMER",
  user: {
    id: "11",
    name: "Customer 1",
  },
};

export const loggedInUsers = {
  organiser1,
  organiser2,
  staffMember1,
  admin1,
  customer1,
};
