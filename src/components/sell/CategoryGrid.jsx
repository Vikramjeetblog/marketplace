
import React from "react";

import sellCategories from "../../data/sellCategories";

import CategoryCard from "./CategoryCard";

const CategoryGrid = () => {

  return (

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

      {sellCategories.map(
        (item) => (

          <CategoryCard
            key={item.id}
            item={item}
          />

        )
      )}

    </div>

  );
};

export default CategoryGrid;

