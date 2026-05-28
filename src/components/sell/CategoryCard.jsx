
import React from "react";

import {
  useNavigate,
} from "react-router-dom";

import useSellStore from "../../store/useSellStore";

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

  // HANDLE CLICK
  const handleClick = () => {

    setCategory(item);

    navigate(
      item.route
    );
  };

  return (

    <div
      onClick={handleClick}
      className="group cursor-pointer"
    >

      {/* CARD */}
      <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">

        {/* IMAGE */}
        <div className="relative overflow-hidden bg-[#F4F6F8]">

          <img
            src={
              item.heroImage ||
              item.image
            }
            alt={item.title}
            className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

        </div>

        {/* CONTENT */}
        <div className="p-5">

          {/* TYPE */}
          <div
            className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em] mb-4"
            style={{
              background:
                `${item.accent}10`,

              color:
                item.accent,
            }}
          >

            {item.type}

          </div>

          {/* TITLE */}
          <h3 className="text-xl font-medium tracking-[-0.03em] text-[#111827] group-hover:text-black transition-all duration-300">

            {item.title}

          </h3>

        </div>

      </div>

    </div>

  );
};

export default CategoryCard;

