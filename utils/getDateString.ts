const getDateString = (date: string) => {
  const dateObj = new Date(date);
  const startDateString = new Date(dateObj).toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return startDateString;
};

export default getDateString;
