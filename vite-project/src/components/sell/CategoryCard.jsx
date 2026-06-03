import React from "react";

import {
  useNavigate,
} from "react-router-dom";

import useSellStore from "../../store/useSellStore";

import { categoryImages } from ".././categoryImages";

const CategoryCard = ({
  item,
}) => {
  const navigate =
    useNavigate();

  const setCategory =
    useSellStore(
      (state) =>
        state.setCategory
    );

  const handleClick = () => {
    setCategory(item);

    navigate(
      `/sell/${item.slug}`
    );
  };

  const image =
    categoryImages[
      item.slug
    ] ||
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop";

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer"
    >
      <div
        className="
          overflow-hidden
          rounded-[28px]
          border
          border-gray-200
          bg-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]
        "
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden bg-[#F4F6F8]">
          <img
            src={image}
            alt={item.name}
            className="
              w-full
              h-[180px]
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <h3
            className="
              text-xl
              font-medium
              tracking-[-0.03em]
              text-[#111827]
              group-hover:text-black
              transition-all
              duration-300
            "
          >
            {item.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;