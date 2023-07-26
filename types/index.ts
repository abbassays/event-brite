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
  checkedInCount: number;
  organiserName: string;
  ticketsSold: number;
}

export interface OrganiserType {
  id: string;
  name: string;
  description: string;
  email: string;
  image: string;
  commission?: number;
  isEnabled: boolean;
  GST?: number;
}

export interface StaffMemberType {
  id: string;
  name: string;
  description: string;
  image: string;
  email: string;
  // can be in multiple organisations
  organisations: {
    id: string;
    name: string;
  }[];
}

export interface TicketType {
  id: string;
  type: string;
  description: string;
  price: number;
  quantity: number;
  soldQuantity: number;
  image: string;
  startDate: string;
  endDate: string;
  eventId: string;
  eventName: string;
  organiserId: string;
  organiserName: string;
}

export interface ItemType {
  ticketId: string;
  quantity: number;
}

export interface SaleType {
  id: string;
  ticketId: string;
  quantity: number;
  price: number;
  organiserName: string;
  eventName: string;
  date: string;
}

export interface CartType {
  id: string;
  items: SaleType[];
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
export type ProfileType = BillingAddressType & UserType;

export interface PaymentConfigType {
  commission: number;
  GST: number;
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

export interface AdminType {
  id: string;
  name: string;
}

export interface CustomerType {
  id: string;
  name: string;
}

export type SessionType =
  | ({
      email: string;
    } & (
      | {
          role: "ORGANISER";
          user: OrganiserType;
        }
      | {
          role: "STAFF";
          user: StaffMemberType;
        }
      | {
          role: "ADMIN";
          user: AdminType;
        }
      | {
          role: "CUSTOMER";
          user: CustomerType;
        }
    ))
  | null;

export interface SelectItemType {
  id: string;
  name: string;
}
