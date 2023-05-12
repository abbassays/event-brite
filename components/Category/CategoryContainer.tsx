import React from "react";

import categories from "../../utils/categories";
import { CategoryType } from "../../types";

import Container from "../UI/Container";
import CategoryCard from "./CategoryCard";

const CategoryContainer = () => {
  return (
    <Container
      title="Check out trending categories"
      description="Discover our trending categories and find inspiration for your next project."
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 place-items-stretch"
    >
      {categories.map((category: CategoryType) => (
        <CategoryCard
          key={category.category}
          category={category.category}
          count={category.count}
          Icon={category.Icon}
        />
      ))}
    </Container>
  );
};

export default CategoryContainer;
