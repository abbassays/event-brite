import events from "./all_events.json";

const categoriesObject = {};
events.forEach((item) => {
  if (categoriesObject[item.category]) {
    categoriesObject[item.category]++;
  } else {
    categoriesObject[item.category] = 1;
  }
});

const categories = Object.entries(categoriesObject).map(
  ([category, count]) => ({
    category,
    count,
  })
);

export default categories;
