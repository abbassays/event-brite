import organisers from "./all_organisers.json";
import events from "./all_events.json";
import tickets from "./all_tickets.json";
import orders from "./all_orders.json";

export const allOrganisers = organisers;
export const allEvents = events;
export const allTickets = tickets;
export const allOrders = orders;

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
