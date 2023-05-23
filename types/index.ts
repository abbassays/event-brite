import { type } from "os";

export interface CategoryType {
  category: string;
  count: number;
  onClick?: () => void;
}

export interface EventType {
  id: string;
  name: string;
  description: string;
  category: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
}

export interface OrganiserType {
  name: string;
  description: string;
  image: string;
}

export interface TicketType {
  id: string;
  type: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  startDate: string;
  endDate: string;
  eventId?: string;
}

export interface ItemType {
  ticketId: string;
  quantity: number;
}

export interface CartType {
  id: string;
  items:
    | {
        ticketId: string;
        quantity: number;
      }[]
    | [];
}

export interface BoughtTicketType extends TicketType {
  boughtQuantity: number;
}
