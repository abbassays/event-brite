import { SessionType } from "@/types";

const organiser1: SessionType = {
  email: "user@email.com",
  role: "ORGANISER",
  user: {
    id: "b3bbc2cf-d6cd-4ced-acf6-2644fe4b1b24",
    name: "Organiser 1",
    description: "Description for Organiser 1.",
    image: "https://i.pravatar.cc/415",
    email: "organiser1@email.com",
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
    description: "Description for Organiser 2.",
    image: "https://i.pravatar.cc/480",
    commission: 20,
    email: "organiser1@email.com",
    isEnabled: true,
    GST: 3,
  },
};

const staffMember1: SessionType = {
  email: "user@email.com",
  role: "STAFF",
  user: {
    id: "28cde71c-a80b-4151-b2d8-875251c733a6",
    firstName: "First 1",
    lastName: "Last 1",
    image: "https://i.pravatar.cc/175",
    email: "staff@email.com",
    description: "Description for Staff Member 1.",
    organisations: [
      {
        id: "eaf3ca49-92ed-44e8-b93e-1bf93dbedb0f",
        name: "Organiser 8",
      },
      {
        id: "4a46686c-ac51-42b7-a744-6f1f5a565917",
        name: "Organiser 12",
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

export const getUserName = (session: SessionType | null) => {
  if (!session) return null;
  return session.role === "STAFF"
    ? session.user.firstName + " " + session.user.lastName
    : session.user.name;
};
