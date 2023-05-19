import { type } from "os";

export type CategoryType = {
  category: string;
  count: number;
  onClick?: () => void;
  Icon: React.ElementType;
};

export type EventType = {
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
};

export type OrganiserType = {
  name: string;
  description: string;
  image: string;
};

export type TicketType = {
  id: string;
  price: number;
  type: string;
  eventId?: string;
};
