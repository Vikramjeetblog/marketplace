
import React, { useState } from "react";

import {
  ArrowRight,
  Upload,
  Check,
  Trash2,
  Image as ImageIcon,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import useSellStore from "../../../store/useSellStore";
import { useUserStore } from "../../../store/useUserStore";

const GuidedFlow = ({ category }) => {

  const navigate = useNavigate();

  const {
    uploadedImages,
    setUploadedImages,

    guidedDetails,
    setGuidedDetails,

    resetSellFlow,
  } = useSellStore();

  const { addOrder } =
    useUserStore();

  const [step, setStep] =
    useState(1);

  // ========================
  // IMAGE UPLOAD
  // ========================
const convertToBase64 = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result);
    };

    reader.readAsDataURL(file);
  });
 const handleImageUpload = async (
  e
) => {

  const files = Array.from(
    e.target.files
  );

  const base64Images =
    await Promise.all(
      files.map(
        convertToBase64
      )
    );

  setUploadedImages([
    ...uploadedImages,
    ...base64Images,
  ]);
};

    

    

    

  const removeImage = (
    index
  ) => {

    const updated =
      uploadedImages.filter(
        (_, i) =>
          i !== index
      );

    setUploadedImages(
      updated
    );
  };

  const nextStep = () => {

    if (
      step === 1 &&
      uploadedImages.length === 0
    ) {
      return;
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="grid lg:grid-cols-[1fr_380px] gap-8">

      {/* LEFT */}

      <div>

        {/* STEPPER */}

        <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-2">

          {[
            "Upload",
            "Details",
            "Review",
          ].map(
            (
              item,
              idx
            ) => (

              <div
                key={item}
                className="flex items-center gap-4 shrink-0"
              >

                <div className="flex items-center gap-3">

                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-semibold transition-all ${
                      step >
                      idx + 1
                        ? "bg-green-500 text-white"
                        : step ===
                          idx + 1
                        ? "text-black"
                        : "bg-white/5 text-white/40 border border-white/10"
                    }`}
                    style={{
                      background:
                        step ===
                        idx + 1
                          ? category.accent
                          : undefined,
                    }}
                  >

                    {step >
                    idx + 1 ? (
                      <Check
                        size={18}
                      />
                    ) : (
                      idx + 1
                    )}

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">
                      Step{" "}
                      {idx + 1}
                    </p>

                    <h3 className="text-white/80">
                      {item}
                    </h3>

                  </div>

                </div>

                {idx !== 2 && (
                  <div className="w-10 h-[1px] bg-white/10" />
                )}

              </div>
            )
          )}

        </div>

        {/* ========================
            STEP 1
        ======================== */}

        {step === 1 && (

          <div className="rounded-[40px] border border-white/10 bg-[#0D172A]/80 backdrop-blur-2xl p-8 lg:p-10 shadow-[0_20px_100px_rgba(0,0,0,0.35)]">

            <div className="mb-10">

              <p className="text-sm uppercase tracking-[0.28em] text-white/40 mb-4">
                Asset Submission
              </p>

              <h2 className="text-4xl font-light tracking-[-0.05em] text-white mb-4">
                Upload Asset Images
              </h2>

              <p className="text-white/60 text-lg max-w-2xl">
                Upload clear photos of your
                asset from multiple angles for
                faster review and valuation.
              </p>

            </div>

            {/* UPLOAD BOX */}

            <label className="group relative flex flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 p-12 cursor-pointer overflow-hidden">

              <input
                type="file"
                multiple
                onChange={
                  handleImageUpload
                }
                className="hidden"
              />

              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
                style={{
                  background:
                    `${category.accent}20`,
                }}
              >

                <Upload
                  size={36}
                  style={{
                    color:
                      category.accent,
                  }}
                />

              </div>

              <h3 className="text-2xl font-light text-white mb-3">
                Upload Images
              </h3>

              <p className="text-white/50 text-center max-w-md">
                Drag & drop images or click to
                browse.
              </p>

            </label>

            {/* IMAGE GRID */}

            {uploadedImages
              .length > 0 && (

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">

                {uploadedImages.map(
                  (
                    image,
                    index
                  ) => (

                    <div
                      key={index}
                      className="relative rounded-3xl overflow-hidden border border-white/10"
                    >

                      <img
                        src={image}
                        alt=""
                        className="w-full h-40 object-cover"
                      />

                      <button
                        onClick={() =>
                          removeImage(
                            index
                          )
                        }
                        className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-black/60 text-white flex items-center justify-center"
                      >

                        <Trash2
                          size={16}
                        />

                      </button>

                    </div>
                  )
                )}

              </div>
            )}

            <div className="flex justify-end mt-10">

              <button
                onClick={
                  nextStep
                }
                disabled={
                  uploadedImages.length ===
                  0
                }
                className="h-14 px-8 rounded-2xl text-[#040B1A] font-semibold flex items-center gap-3 disabled:opacity-40"
                style={{
                  background:
                    category.accent,
                }}
              >

                Continue

                <ArrowRight
                  size={18}
                />

              </button>

            </div>

          </div>

        )}

{/* STEP 2 */}

{step === 2 && (

  <div className="rounded-[40px] border border-white/10 bg-[#0D172A]/80 backdrop-blur-2xl p-8 lg:p-10 shadow-[0_20px_100px_rgba(0,0,0,0.35)]">

    <div className="mb-10">

      <p className="text-sm uppercase tracking-[0.28em] text-white/40 mb-4">
        Asset Information
      </p>

      

      <p className="text-white/60 text-lg max-w-2xl">
        Provide a few details so our team can
        accurately evaluate your asset.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-6">

      {/* TITLE */}

      <div className="md:col-span-2">

        <label className="block text-white/70 mb-3">
          Asset Title *
        </label>

        <input
          type="text"
          value={guidedDetails.title}
          onChange={(e) =>
            setGuidedDetails({
              title: e.target.value,
            })
          }
          placeholder="e.g. iPhone 13, Dell Latitude 5420,
LG Split AC, Godrej Office Chair,
3 Seater Sofa"
          className="
            w-full
            h-14
            rounded-2xl
            bg-white/5
            border
            border-white/10
            px-5
            text-white
            outline-none
          "
        />

      </div>

      {/* BRAND */}

      <div>

        <label className="block text-white/70 mb-3">
          Brand/Manufacturer
        </label>

        <input
          type="text"
          value={guidedDetails.brand}
          onChange={(e) =>
            setGuidedDetails({
              brand: e.target.value,
            })
          }
          placeholder="Godrej"
          className="
            w-full
            h-14
            rounded-2xl
            bg-white/5
            border
            border-white/10
            px-5
            text-white
            outline-none
          "
        />

      </div>
{/* ADDITIONAL DETAILS */}

<div>

  <label className="block text-white/70 mb-3">
    Additional Details
  </label>

  <input
    type="text"
    value={guidedDetails.details}
    onChange={(e) =>
      setGuidedDetails({
        details: e.target.value,
      })
    }
    placeholder="128GB Blue, 1.5 Ton Inverter, 3 Seater Brown Sofa, i5 8th Gen"
    className="
      w-full
      h-14
      rounded-2xl
      bg-white/5
      border
      border-white/10
      px-5
      text-white
      outline-none
    "
  />

</div>

      

    </div>

    {/* CONDITION */}

    <div className="mt-8">

      <label className="block text-white/70 mb-4">
        Condition *
      </label>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {[
          "Excellent",
          "Good",
          "Fair",
          "Poor",
          "Needs Repair"
        ].map((item) => (

          <button
            key={item}
            type="button"
            onClick={() =>
              setGuidedDetails({
                condition: item,
              })
            }
            className={`
              h-14
              rounded-2xl
              border
              transition-all
              ${
                guidedDetails.condition === item
                  ? "text-black border-transparent"
                  : "border-white/10 text-white/70 bg-white/5"
              }
            `}
            style={{
              background:
                guidedDetails.condition === item
                  ? category.accent
                  : undefined,
            }}
          >
            {item}
          </button>

        ))}

      </div>

    </div>

    {/* PRICE */}

    <div className="mt-8">

      <label className="block text-white/70 mb-3">
        Expected Price *
      </label>

      <input
        type="number"
        value={
          guidedDetails.expectedPrice
        }
        onChange={(e) =>
          setGuidedDetails({
            expectedPrice:
              e.target.value,
          })
        }
        placeholder="5000"
        className="
          w-full
          h-14
          rounded-2xl
          bg-white/5
          border
          border-white/10
          px-5
          text-white
          outline-none
        "
      />

    </div>

    {/* DESCRIPTION */}

    <div className="mt-8">

      <label className="block text-white/70 mb-3">
        Description *
      </label>

      <textarea
        rows={6}
        value={
          guidedDetails.description
        }
        onChange={(e) =>
          setGuidedDetails({
            description:
              e.target.value,
          })
        }
        placeholder="Describe the condition, usage history, defects, accessories included, etc."
        className="
          w-full
          rounded-3xl
          bg-white/5
          border
          border-white/10
          p-5
          text-white
          outline-none
          resize-none
        "
      />

    </div>

    {/* ACTIONS */}

    <div className="flex items-center justify-between mt-10">

      <button
        onClick={prevStep}
        className="
          h-14
          px-8
          rounded-2xl
          border
          border-white/10
          text-white
        "
      >
        Back
      </button>

      <button
        onClick={nextStep}
        disabled={
          !guidedDetails.title ||
          !guidedDetails.condition ||
          !guidedDetails.expectedPrice ||
          !guidedDetails.description
        }
        className="
          h-14
          px-8
          rounded-2xl
          text-[#040B1A]
          font-semibold
          disabled:opacity-40
          flex
          items-center
          gap-3
        "
        style={{
          background:
            category.accent,
        }}
      >
        Review Submission

        <ArrowRight size={18} />
      </button>

    </div>

  </div>

)}

/* 
    STEP 3  */

{step === 3 && (

  <div className="rounded-[40px] border border-white/10 bg-[#0D172A]/80 backdrop-blur-2xl p-8 lg:p-10 shadow-[0_20px_100px_rgba(0,0,0,0.35)]">

    <div className="mb-10">

      <p className="text-sm uppercase tracking-[0.28em] text-white/40 mb-4">
        Final Review
      </p>

      <h2 className="text-4xl font-light tracking-[-0.05em] text-white mb-4">
        Review Submission
      </h2>

      <p className="text-white/60 text-lg">
        Please verify your information before
        submitting your asset for evaluation.
      </p>

    </div>

    {/* IMAGES */}

    <div className="mb-10">

      <h3 className="text-xl text-white mb-5">
        Uploaded Images
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {uploadedImages.map(
          (image, index) => (

            <div
              key={index}
              className="rounded-3xl overflow-hidden border border-white/10"
            >

              <img
                src={image}
                alt=""
                className="w-full h-40 object-cover"
              />

            </div>

          )
        )}

      </div>

    </div>

    {/* DETAILS */}

    <div className="grid md:grid-cols-2 gap-6">

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

        <p className="text-white/40 text-sm mb-2">
          Asset Title
        </p>

        <h3 className="text-white text-xl">
          {guidedDetails.title}
        </h3>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

        <p className="text-white/40 text-sm mb-2">
          Brand
        </p>

        <h3 className="text-white text-xl">
          {guidedDetails.brand || "-"}
        </h3>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

       <p className="text-white/40 text-sm mb-2">
  Additional Details
</p>

<h3 className="text-white text-xl">
  {guidedDetails.details || "-"}
</h3>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

        <p className="text-white/40 text-sm mb-2">
          Condition
        </p>

        <h3 className="text-white text-xl">
          {guidedDetails.condition}
        </h3>

      </div>

    </div>

    {/* PRICE */}

    <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

      <p className="text-white/40 text-sm mb-2">
        Expected Price
      </p>

      <h2
        className="text-5xl font-light"
        style={{
          color: category.accent,
        }}
      >
        ₹
        {Number(
          guidedDetails.expectedPrice || 0
        ).toLocaleString()}
      </h2>

    </div>

    {/* DESCRIPTION */}

    <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

      <p className="text-white/40 text-sm mb-4">
        Description
      </p>

      <p className="text-white/70 leading-relaxed">
        {guidedDetails.description}
      </p>

    </div>

    {/* ACTIONS */}

    <div className="flex items-center justify-between mt-10">

      <button
        onClick={prevStep}
        className="
          h-14
          px-8
          rounded-2xl
          border
          border-white/10
          text-white
        "
      >
        Back
      </button>

      <button
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

            category:
              category.title,

            productName:
              guidedDetails.title,

            amount:
              Number(
                guidedDetails.expectedPrice
              ),

            condition:
              guidedDetails.condition,

            description:
              guidedDetails.description,

            images:
              uploadedImages,

            status:
              "Pending Review",

            createdAt:
              Date.now(),
          });

          resetSellFlow();

          navigate(
            "/sell/success",
            {
              state: {
                isGuided: true,

                orderId,

                product: {
                  model:
                    guidedDetails.title,

                  brand:
                    guidedDetails.brand,

                  estimatedPrice:
                    guidedDetails.expectedPrice,
                },
              },
            }
          );
        }}
        className="
          h-14
          px-8
          rounded-2xl
          text-[#040B1A]
          font-semibold
          flex
          items-center
          gap-3
        "
        style={{
          background:
            category.accent,
        }}
      >

        Submit Request

        <ArrowRight size={18} />

      </button>

    </div>

  </div>

)}

      </div>
            {/* RIGHT SIDE */}
      <div>

        <div className="sticky top-28 rounded-[36px] border border-white/10 bg-[#0D172A]/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.35)]">

          {/* HERO */}
          <div className="relative h-[240px] overflow-hidden">

            <img
              src={category.heroImage}
              alt={category.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#040B1A] via-black/20 to-transparent" />

          </div>

          <div className="p-8">

            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
              Submission Progress
            </p>

            <h2 className="text-3xl font-light tracking-[-0.05em] text-white mb-4">
              {category.title}
            </h2>

            <p className="text-white/60 leading-relaxed mb-8">
              Submit your asset details and images.
Our team will review your request and
share the best possible offer.
            </p>

            <div className="space-y-4 mb-8">

              <div className="flex justify-between">
                <span className="text-white/50">
                  Current Step
                </span>

                <span
                  style={{
                    color: category.accent,
                  }}
                >
                  {step}/3
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/50">
                  Images Uploaded
                </span>

                <span className="text-white">
                  {uploadedImages.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/50">
                  Condition
                </span>

                <span className="text-white">
                  {guidedDetails.condition || "-"}
                </span>
              </div>

            </div>

            {guidedDetails.expectedPrice && (

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 mb-8">

                <p className="text-white/40 text-sm mb-2">
                  Expected Price
                </p>

                <h3
                  className="text-4xl font-light"
                  style={{
                    color: category.accent,
                  }}
                >
                  ₹
                  {Number(
                    guidedDetails.expectedPrice
                  ).toLocaleString()}
                </h3>

              </div>

            )}

            <div className="mb-8">

              <div className="flex justify-between text-xs text-white/40 mb-2">

                <span>Completion</span>

                <span>
                  {Math.round(
                    (step / 3) * 100
                  )}
                  %
                </span>

              </div>

              <div className="h-2 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${(step / 3) * 100}%`,
                    background:
                      category.accent,
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default GuidedFlow;

