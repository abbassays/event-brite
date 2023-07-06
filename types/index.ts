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
  organiserId: string;
}

export interface OrganiserType {
  id: string;
  name: string;
  description: string;
  image: string;
  commission?: number;
  isEnabled: boolean;
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

export interface UserType {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface ChangePasswordType {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface BillingAddressType {
  name?: string;
  username?: string;
  address: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface OrderType extends CartType {
  billingAddress: string;
  paymentMethod: string;
  date: string;
}

export type QRCodeTicketType = BoughtTicketType & EventType;

export interface ContactUs {
  name: string;
  email: string;
  message: string;
}
