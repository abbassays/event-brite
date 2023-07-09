import organisers from "./all_organisers.json";
import events from "./all_events.json";
import tickets from "./all_tickets.json";
import orders from "./all_orders.json";
import staffMembers from "./all_staff_members.json";

import {
  EventType,
  OrderType,
  OrganiserType,
  TicketType,
  StaffMemberType,
} from "@/types";

export const allOrganisers: OrganiserType[] = organisers;
export const allEvents: EventType[] = events;
export const allTickets: TicketType[] = tickets;
export const allOrders: OrderType[] = orders;
export const allStaffMembers: StaffMemberType[] = staffMembers;

export const getOrganiserById = (id: string) => {
  return organisers.find((organiser) => organiser.id === id);
};

export const getEventById = (id: string) => {
  return events.find((event) => event.id === id);
};

export const getTicketById = (id: string) => {
  return tickets.find((ticket) => ticket.id === id);
};

export const getOrderByOrderId = (id: string) => {
  return orders.find((order) => order.id === id);
};

export const getRandomOrganiser = () => {
  const randomIndex = Math.floor(Math.random() * allOrganisers.length);
  return {
    id: allOrganisers[randomIndex].id,
    name: allOrganisers[randomIndex].name,
  };
};

export const getRandomEvent = () => {
  const randomIndex = Math.floor(Math.random() * allEvents.length);
  return {
    id: allEvents[randomIndex].id,
    name: allEvents[randomIndex].name,
  };
};
