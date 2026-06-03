import React, {
  useEffect,
  useState,
} from "react";

import api from "../../api/axios";

import CategoryCard from "./CategoryCard";

const CategoryGrid = () => {
  const [categories, setCategories] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories =
    async () => {
      try {
        const response =
          await api.get(
            "/api/categories/active"
          );

        setCategories(
          response.data.categories
        );
      } catch (error) {
        console.error(
          "Fetch Categories Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <div className="py-16 text-center text-gray-500">
        Loading categories...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {categories.map(
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