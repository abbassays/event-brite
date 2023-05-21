import { type } from "os";

export interface CategoryType {
  category: string;
  count: number;
  onClick?: () => void;
  Icon: React.ElementType;
}

export interface EventType {
  id: string;
  name: string;
  description: string;
  category: string;
  /* can be only: 
   Music, Sports & Fitness, Health, Food & Drink, Business, Performing & Arts, Holiday, Hobbies
  */
  date: string;
  /* 
    ISO string with time as well
   */
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
  name: string;
  description: string;
  price: number;
  quantity: number;
  location: string;
  image: string;
  startDate: Date;
  endDate: Date;
  eventId?: string;
}

export interface ItemType {
  id: string;

  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventCategory: string;

  ticketName: string;

  ticketPrice: number;
  ticketQuantity: number;

  image: string;
}

