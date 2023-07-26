import organisers from "./all_organisers.json";
import events from "./all_events.json";
import tickets from "./all_tickets.json";
import orders from "./all_orders.json";
import staffMembers from "./all_staff_members.json";
import users from "./all_users.json";
import sales from "./all_sales.json";
import carts from "./all_carts.json";
import checkIns from "./all_check_ins.json";

import {
  EventType,
  OrderType,
  OrganiserType,
  TicketType,
  StaffMemberType,
  SaleType,
  SessionType,
  CartType,
  CheckInType,
} from "@/types";

export const allOrganisers: OrganiserType[] = organisers;
export const allEvents: EventType[] = events;
export const allTickets: TicketType[] = tickets;
export const allOrders: OrderType[] = orders;
export const allStaffMembers: StaffMemberType[] = staffMembers;
export const allUsers = users;
export const allSales: SaleType[] = sales;
export const allCarts: CartType[] = carts;
export const allCheckIns: CheckInType[] = checkIns;

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

export const getEventByOrganiserId = (id: string) => {
  return events.filter((event) => event.organiserId === id);
};

export const getTicketsByOrganiserId = (id: string) => {
  return tickets.filter((ticket) => ticket.organiserId === id);
};

export const getStaffMemberByOrganiserId = (id: string) => {
  return staffMembers.filter((staff) =>
    staff.organisations.some((org) => org.id === id)
  );
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

export const getRandomTicket = () => {
  const randomIndex = Math.floor(Math.random() * allTickets.length);
  return allTickets[randomIndex];
};

export const getRandomSale = () => {
  const randomIndex = Math.floor(Math.random() * allSales.length);
  return allSales[randomIndex];
};

export const getSalesbyOrganiserId = (id: string) => {
  return sales.filter((sale) => {
    const ticket = getTicketById(sale.ticketId);
    return ticket.organiserId === id;
  });
};

export const getSalesData = (session: SessionType, organiserId?: string) => {
  if (session.role === "ADMIN") return allSales;
  else if (session.role === "ORGANISER") {
    const sales = getSalesbyOrganiserId(session.user.id);
    return sales;
  } else if (session.role === "STAFF") {
    const sales = getSalesbyOrganiserId(organiserId);
    return sales;
  }
  return [];
};

export const getCheckInByOrganiser = (id: string) => {
  return checkIns.filter((checkIn) => checkIn.organiserId === id);
};

export const getCheckInsData = (session: SessionType, organiserId?: string) => {
  if (session.role === "ADMIN") return allCheckIns;
  else if (session.role === "ORGANISER") {
    const checkIns = getCheckInByOrganiser(session.user.id);
    return checkIns;
  } else if (session.role === "STAFF") {
    const checkIns = getCheckInByOrganiser(organiserId);
    return checkIns;
  }
  return [];
};
