import { data } from "autoprefixer";

export const getDateTimeString = (date: string) => {
  const dateObj = new Date(date);
  const stringToReturn = new Date(dateObj).toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return stringToReturn;
};

export const getDateString = (date: string) => {
  const dateObj = new Date(date);
  const stringToReturn = new Date(dateObj).toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return stringToReturn;
};



