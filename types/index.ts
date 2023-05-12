export type CategoryType = {
  category: string;
  count: number;
  onClick?: () => void;
  Icon: React.ElementType;
};

export type EventType = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
  image: string;
};
