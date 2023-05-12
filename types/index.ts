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
