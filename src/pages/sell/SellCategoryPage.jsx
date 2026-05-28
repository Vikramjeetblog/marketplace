
import React, {
  useEffect,
} from "react";

import {
  useParams,
} from "react-router-dom";

import sellCategories from "../../data/sellCategories";

import useSellStore from "../../store/useSellStore";

// FLOWS
import StructuredFlow from "../../components/sell/flows/StructuredFlow";

import GuidedFlow from "../../components/sell/flows/GuidedFlow";

import EnterpriseFlow from "../../components/sell/flows/EnterpriseFlow";

const SellCategoryPage = () => {

  const { categoryId } =
    useParams();

  const setCategory =
    useSellStore(
      (state) =>
        state.setCategory
    );

  // FIND CATEGORY
  const category =
    sellCategories.find(
      (item) =>
        item.id === categoryId
    );

  // SAVE CATEGORY
  useEffect(() => {

    if (category) {

      setCategory(
        category
      );
    }

  }, [category]);

  // NOT FOUND
  if (!category) {

    return (

      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4">

        <div className="text-center">

          <h1 className="text-5xl font-light text-[#111827] mb-4">

            Category Not Found

          </h1>

          <p className="text-gray-500 text-lg">

            The requested category does not exist.

          </p>

        </div>

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-[#F5F7FA] text-[#111827] overflow-hidden">

      {/* HERO */}
      <section className="relative border-b border-gray-200 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">

            {/* LEFT */}
            <div>

              {/* BADGE */}
              <div
                className="inline-flex items-center gap-3 rounded-full border px-4 py-2 mb-8"
                style={{
                  borderColor:
                    `${category.accent}30`,

                  background:
                    `${category.accent}10`,
                }}
              >

                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background:
                      category.accent,
                  }}
                />

                <span className="text-xs uppercase tracking-[0.18em] text-gray-700">

                  {category.type}
                  {" "}evaluation flow

                </span>

              </div>

              {/* TITLE */}
              <h1 className="text-5xl md:text-6xl font-light tracking-[-0.06em] leading-[0.95] mb-6">

                {category.title}

              </h1>

              {/* SUBTITLE */}
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mb-10">

                {category.description ||
                  category.subtitle}

              </p>

              {/* MINI STATS */}
              <div className="flex flex-wrap gap-4">

                {/* TIME */}
                <div className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">

                  <p className="text-xs uppercase tracking-[0.16em] text-gray-400 mb-2">

                    Estimated Time

                  </p>

                  <h3 className="text-lg font-medium text-[#111827]">

                    {category.estimatedTime}

                  </h3>

                </div>

                {/* TYPE */}
                <div className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">

                  <p className="text-xs uppercase tracking-[0.16em] text-gray-400 mb-2">

                    Flow Type

                  </p>

                  <h3 className="text-lg font-medium capitalize text-[#111827]">

                    {category.type}

                  </h3>

                </div>

                {/* STEPS */}
                <div className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">

                  <p className="text-xs uppercase tracking-[0.16em] text-gray-400 mb-2">

                    Steps

                  </p>

                  <h3 className="text-lg font-medium text-[#111827]">

                    {
                      category.flowSteps
                        .length
                    }{" "}
                    Steps

                  </h3>

                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="relative overflow-hidden rounded-[32px] bg-[#F3F4F6] border border-gray-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">

                <img
                  src={category.heroImage}
                  alt={category.title}
                  className="w-full h-[420px] object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FLOW SECTION */}
      <section className="py-14 md:py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* STRUCTURED */}
          {category.type ===
            "structured" && (

            <StructuredFlow
              category={category}
            />

          )}

          {/* GUIDED */}
          {category.type ===
            "guided" && (

            <GuidedFlow
              category={category}
            />

          )}

          {/* ENTERPRISE */}
          {category.type ===
            "enterprise" && (

            <EnterpriseFlow
              category={category}
            />

          )}

        </div>

      </section>

    </div>

  );
};

export default SellCategoryPage;

