import React from "react";
import Link from "next/link";

import { CategoryType } from "../../types";
import CategoryIcon from "../../utils/CategoryIcon";

const CategoryCard = ({ category, count, onClick }: CategoryType) => {
  return (
    <Link
      href={`/events?category=${category}`}
      // href={`/events?category=${category}`}
    >
      <div className="flex flex-row items-center justify-between md:space-x-4 w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <p className="text-blue-500 text-4xl">
          <CategoryIcon category={category} />
        </p>

        <div className="w-full text-center items-center">
          <h3 className="text-lg font-medium mb-2">{category}</h3>
          <p className="text-gray-500">{count} events</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
