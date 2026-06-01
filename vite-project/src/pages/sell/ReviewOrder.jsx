import React, { useState } from "react";

import {
  PackageCheck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useUserStore } from "../../store/useUserStore";

const ReviewOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const product =
    location.state?.product || {};

  const { addOrder } = useUserStore();

  const [accepted, setAccepted] =
    useState(false);

  // UNIVERSAL PRODUCT NAME
  const productName =
    product.title ||
    product.productName ||
    product.model ||
    product.name ||
    "Asset";

  // UNIVERSAL PRICE
  const productPrice =
    product.expectedPrice ||
    product.estimatedPrice ||
    product.price ||
    0;

  // UNIVERSAL CATEGORY
  const productCategory =
    product.category || "General";

  // UNIVERSAL BRAND
  const productBrand =
    product.brand || null;

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-[36px] font-black text-[#020B2D]">
            Review Request
          </h1>

          <p className="mt-2 text-[#6E7C96]">
            Please verify your asset details before
            submitting your request.
          </p>

        </div>

       
        

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">

          {/* LEFT */}
          <div className="space-y-6">

            {/* ASSET DETAILS */}
            <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6">

              <div className="flex items-center gap-4 mb-5">

                <PackageCheck
                  className="text-[#00B67A]"
                  size={22}
                />

                <h2 className="text-[22px] font-bold text-[#020B2D]">
                  Asset Details
                </h2>

              </div>

              {/* PRODUCT NAME */}
              <div>

                <p className="font-semibold text-lg text-[#020B2D]">
                  {productName}
                </p>

                {productBrand && (
  <p className="text-[#6E7C96]">
    {productBrand}
  </p>
)}

              </div>

              {/* CATEGORY */}
              <div className="mt-6">

                <p className="text-sm text-[#6E7C96]">
                  Category
                </p>

                <p className="mt-1 font-medium text-[#020B2D]">
                  {productCategory}
                </p>

              </div>

              {/* CONDITION */}
              {product.condition && (
                <div className="mt-6">

                  <p className="text-sm text-[#6E7C96]">
                    Condition
                  </p>

                  <p className="mt-1 font-medium text-[#020B2D]">
                    {product.condition}
                  </p>

                </div>
              )}

              {/* DETAILS */}
              {product.details && (
                <div className="mt-6">

                  <p className="text-sm text-[#6E7C96]">
                    Additional Details
                  </p>

                  <p className="mt-1 text-[#020B2D] leading-7">
                    {product.details}
                  </p>

                </div>
              )}

              {/* DESCRIPTION */}
              {product.description && (
                <div className="mt-6">

                  <p className="text-sm text-[#6E7C96]">
                    Description
                  </p>

                  <p className="mt-1 text-[#020B2D] leading-7">
                    {product.description}
                  </p>

                </div>
              )}

              {/* IMAGES */}
              {product.images &&
                product.images.length > 0 && (
                  <div className="mt-8">

                    <p className="text-sm text-[#6E7C96] mb-4">
                      Uploaded Images
                    </p>

                    <div className="grid grid-cols-2 gap-4">

                      {product.images.map(
                        (image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Asset ${index + 1}`}
                            className="
                              h-40
                              w-full
                              object-cover
                              rounded-2xl
                              border
                              border-[#E5EEF8]
                            "
                          />
                        )
                      )}

                    </div>

                  </div>
                )}

            </div>

            {/* NOTICE */}
            <div className="bg-amber-50 border border-amber-200 rounded-[24px] p-5">

              <div className="flex gap-3">

                <ShieldCheck
                  className="text-amber-700"
                  size={20}
                />

                <div>

                  <p className="font-semibold text-amber-900">
                    Request Under Review
                  </p>

                  <p className="text-sm text-amber-800 mt-1 leading-6">
                    Our  team will review your
                    submitted details and uploaded images.
                    An offer will be shared after
                    evaluation.
                  </p>

                </div>

              </div>

            </div>

            {/* TERMS */}
            <label className="flex items-center gap-3 cursor-pointer">

              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) =>
                  setAccepted(e.target.checked)
                }
              />

              <span className="text-[#020B2D]">
                I agree to the Terms & Conditions.
              </span>

            </label>

          </div>

          {/* RIGHT */}
          <div>

            <div className="sticky top-6 bg-white rounded-[30px] border border-[#E5EEF8] p-6">

              <div className="text-center">

                <div className="w-20 h-20 mx-auto rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">

                  <CheckCircle2
                    className="text-[#00B67A]"
                    size={40}
                  />

                </div>

                <h3 className="text-xl font-bold mt-4 text-[#020B2D]">
                  Ready to Submit
                </h3>

                <p className="text-[#6E7C96] mt-2">
                  Your asset review request is ready.
                </p>

                {/* PRICE */}
                <div className="mt-8">

                  <p className="text-sm text-[#6E7C96]">
                    Expected Price
                  </p>

                  <p className="text-[42px] font-black text-[#00B67A]">
                    ₹{productPrice.toLocaleString()}
                  </p>

                </div>

                {/* SUBMIT BUTTON */}
                <button
                  disabled={!accepted}
                  onClick={() => {
                    const orderId =
                      "RP" +
                      Math.floor(
                        100000 +
                          Math.random() * 900000
                      );

                    addOrder({
                      id: orderId,

                      type: "sell",

                      title: productName,

                      category:
                        productCategory,

                      brand: productBrand,

                      details:
                        product.details,

                      condition:
                        product.condition,

                      description:
                        product.description,

                      amount:
                        productPrice,

                      images:
                        product.images || [],

                      status:
                        "Pending Review",

                      createdAt:
                        Date.now(),
                    });

                    navigate("/sell/success", {
                      state: {
                        product,
                        orderId,
                      },
                    });
                  }}
                  className="
                    mt-6
                    w-full
                    h-14
                    rounded-2xl
                    bg-[#00B67A]
                    text-white
                    font-bold
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                    hover:opacity-90
                    transition-all
                  "
                >
                  Submit Request
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ReviewOrder;