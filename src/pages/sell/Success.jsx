import React from "react";
import {
  CheckCircle2,
  Calendar,
  Clock,
  Smartphone,
  Home,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
const product =
  location.state?.product || {};

const pickup =
  location.state?.pickup || {};

const paymentMethod =
  location.state?.paymentMethod || "UPI";

const isGuided =
  location.state?.isGuided || false;

const orderId =
  location.state?.orderId ||
  ("RP" +
    Math.floor(
      100000 +
      Math.random() * 900000
    ));

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* SUCCESS HERO */}
        <div className="text-center">

          <div className="w-36 h-36 mx-auto rounded-full bg-[#00B67A]/10 flex items-center justify-center">
            <CheckCircle2
              size={80}
              className="text-[#00B67A]"
            />
          </div>

         <h1 className="mt-8 text-[52px] leading-none font-black text-[#020B2D]">
  {isGuided
    ? "Request Submitted"
    : "Pickup Scheduled"}
</h1>

          <p className="mt-4 text-[#6E7C96] text-lg">
  {isGuided
    ? "Your asset has been submitted for evaluation."
    : "Your sell request has been created successfully."}
</p>

          <div className="mt-6 inline-flex items-center px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
  {isGuided
    ? "Under Review"
    : "Pickup Scheduled"}
</div>

        </div>

        {/* REQUEST ID */}
        <div className="mt-10 bg-white rounded-[32px] border border-[#E5EEF8] p-8 text-center">

          <p className="text-sm uppercase tracking-wider text-[#6E7C96]">
            Request ID
          </p>

          <h2 className="mt-2 text-[36px] font-black text-[#020B2D] tracking-wide">
            {orderId}
          </h2>

        </div>

        {/* WHAT HAPPENS NEXT */}
        <div className="mt-8 bg-white rounded-[32px] border border-[#E5EEF8] p-8">

  <div className="flex items-center gap-4">
    <CheckCircle2
      size={24}
      className="text-[#00B67A]"
    />
    <span className="font-medium">
      Request Created
    </span>
  </div>

  {isGuided ? (
    <>
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1]" />
        <span>
          Asset Review
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1]" />
        <span>
          Offer Generated
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1]" />
        <span>
          Pickup Scheduled
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1]" />
        <span>
          Payment Released
        </span>
      </div>
    </>
  ) : (
    <>
      <div className="flex items-center gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1]" />
        <span>
          Pickup Executive Assigned
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1]" />
        <span>
          Device Inspection
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1]" />
        <span>
          Payment Released
        </span>
      </div>
    </>
  )}

</div>

        {/* DETAILS GRID */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          {/* PRODUCT */}
          <div className="bg-white rounded-[32px] border border-[#E5EEF8] p-8">

            <h3 className="text-xl font-bold text-[#020B2D] mb-6">
              Product Details
            </h3>

            <div className="flex gap-4">

              <div className="w-16 h-16 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">
                {isGuided ? (
  <Home
    size={30}
    className="text-[#00B67A]"
  />
) : (
  <Smartphone
    size={30}
    className="text-[#00B67A]"
  />
)}
              </div>

              <div>
                <h4 className="font-bold text-lg">
                  {product.model}
                </h4>

                <p className="text-[#6E7C96]">
                  {product.brand}
                </p>
              </div>

            </div>

            <div className="mt-8">

              <p className="text-sm text-[#6E7C96]">
                Estimated Offer
              </p>

              <p className="text-[42px] font-black text-[#00B67A]">
                ₹{product?.estimatedPrice?.toLocaleString() || 0}
              </p>

            </div>

          </div>

        
{/* REVIEW / PICKUP CARD */}
<div className="bg-white rounded-[32px] border border-[#E5EEF8] p-8">

  <h3 className="text-xl font-bold text-[#020B2D] mb-6">
    {isGuided
      ? "Review Information"
      : "Pickup Information"}
  </h3>

  {isGuided ? (

    <div className="space-y-5">

      <div className="rounded-2xl bg-[#F7F9FC] p-5">

        <p className="text-sm text-[#6E7C96]">
          Current Status
        </p>

        <p className="mt-2 text-lg font-bold text-[#020B2D]">
          Under Review
        </p>

      </div>

      <div className="rounded-2xl bg-[#F7F9FC] p-5">

        <p className="text-sm text-[#6E7C96]">
          What's Next?
        </p>

        <p className="mt-2 text-[#020B2D] leading-7">
          Our valuation team will review your
          submitted images and asset details.
          Once reviewed, you will receive an
          offer from Rupantar.
        </p>

      </div>

      <div className="rounded-2xl bg-[#F7F9FC] p-5 flex justify-between">

        <span className="text-[#6E7C96]">
          Status
        </span>

        <span className="font-semibold text-[#00B67A]">
          Pending Review
        </span>

      </div>

    </div>

  ) : (

    <div className="space-y-5">

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Calendar
            size={18}
            className="text-[#00B67A]"
          />
          <span>Date</span>
        </div>

        <span className="font-medium">
          {pickup.date}
        </span>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Clock
            size={18}
            className="text-[#00B67A]"
          />
          <span>Time Slot</span>
        </div>

        <span className="font-medium">
          {pickup.slot}
        </span>
      </div>

      <div className="pt-5 border-t border-[#EEF2F6]">

        <div className="flex gap-3">

          <Home
            size={20}
            className="text-[#00B67A] mt-1"
          />

          <div>
            <p className="font-semibold">
              {pickup?.address?.type}
            </p>

            <p className="text-[#6E7C96] mt-1">
              {pickup?.address?.address}
            </p>

            <p className="text-[#6E7C96]">
              {pickup?.address?.pincode}
            </p>

            <p className="mt-2">
              +91 {pickup?.address?.phone}
            </p>
          </div>

        </div>

      </div>

      <div className="pt-5 border-t border-[#EEF2F6] flex justify-between">

        <span className="text-[#6E7C96]">
          Payment Method
        </span>

        <span className="font-semibold capitalize">
          {paymentMethod}
        </span>

      </div>

    </div>

  )}

</div>



        </div>

        {/* INSPECTION NOTICE */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-[28px] p-6">

          <h4 className="font-bold text-amber-900">
  {isGuided
    ? "Asset Review Required"
    : "Inspection Required"}
</h4>

<p className="mt-2 text-amber-800">
  {isGuided
    ? "Our valuation team will review your asset and contact you with an offer."
    : "Final value will be confirmed after physical inspection by our pickup executive."}
</p>
   

        </div>

        {/* ACTIONS */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <button
            onClick={() =>
              navigate("/account/orders")
            }
            className="
              h-14
              rounded-2xl
              bg-[#00B67A]
              text-white
              font-bold
              flex
              items-center
              justify-center
              gap-2
            "
          >
            Track Request
            <ChevronRight size={18} />
          </button>

          <button
            onClick={() => navigate("/")}
            className="
              h-14
              rounded-2xl
              border
              border-[#00B67A]
              text-[#00B67A]
              font-bold
              flex
              items-center
              justify-center
              gap-2
            "
          >
            Back To Home
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default Success;