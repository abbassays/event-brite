import events from "./all_events.json";
import { getCategoryIcon } from "./getCategoryIcon";

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
    Icon: getCategoryIcon(category),
  })
);

export default categories;
