import React, { useState } from "react";
import {
  Smartphone,
  MapPin,
  Calendar,
  Clock,
  Wallet,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
const ReviewOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product || {};
  const pickup = location.state?.pickup || {};
  const paymentMethod =
    location.state?.paymentMethod || "UPI";
    const { addOrder } = useUserStore();

  const [accepted, setAccepted] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-[36px] font-black text-[#020B2D]">
            Review Order
          </h1>

          <p className="mt-2 text-[#6E7C96]">
            Please verify your details before
            confirming the pickup.
          </p>
        </div>

        {/* STEPPER */}
        <div className="bg-white rounded-[24px] border border-[#E5EEF8] p-5 mb-8">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00B67A] text-white flex items-center justify-center">
                ✓
              </div>
              <span>Quote</span>
            </div>

            <div className="flex-1 h-[2px] bg-[#00B67A] mx-3" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00B67A] text-white flex items-center justify-center">
                ✓
              </div>
              <span>Pickup</span>
            </div>

            <div className="flex-1 h-[2px] bg-[#00B67A] mx-3" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00B67A] text-white flex items-center justify-center">
                ✓
              </div>
              <span>Payment</span>
            </div>

            <div className="flex-1 h-[2px] bg-[#E5EEF8] mx-3" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00B67A] text-white flex items-center justify-center">
                4
              </div>
              <span className="font-semibold">
                Confirm
              </span>
            </div>

          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">

          {/* LEFT */}
          <div className="space-y-6">

            {/* DEVICE */}
            <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6">
              <div className="flex items-center gap-4 mb-5">
                <Smartphone
                  className="text-[#00B67A]"
                  size={22}
                />
                <h2 className="text-[22px] font-bold text-[#020B2D]">
                  Device Details
                </h2>
              </div>

              <div>
                <p className="font-semibold text-lg">
                  {product.model}
                </p>

                <p className="text-[#6E7C96]">
                  {product.brand}
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6">
              <div className="flex items-center gap-4 mb-5">
                <MapPin
                  className="text-[#00B67A]"
                  size={22}
                />
                <h2 className="text-[22px] font-bold text-[#020B2D]">
                  Pickup Address
                </h2>
              </div>

              <p className="font-semibold">
                {pickup.address?.type}
              </p>

              <p className="mt-2">
                {pickup.address?.address}
              </p>

              <p className="text-[#6E7C96]">
                {pickup.address?.pincode}
              </p>

              <p className="mt-2">
                +91 {pickup.address?.phone}
              </p>
            </div>

            {/* PICKUP */}
            <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6">

              <div className="flex items-center gap-4 mb-5">
                <Calendar
                  className="text-[#00B67A]"
                  size={22}
                />

                <h2 className="text-[22px] font-bold text-[#020B2D]">
                  Pickup Schedule
                </h2>
              </div>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Date</span>
                  <span>{pickup.date}</span>
                </div>

                <div className="flex justify-between">
                  <span>Time Slot</span>
                  <span>{pickup.slot}</span>
                </div>

              </div>

            </div>

            {/* PAYMENT */}
            <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6">

              <div className="flex items-center gap-4 mb-5">
                <Wallet
                  className="text-[#00B67A]"
                  size={22}
                />

                <h2 className="text-[22px] font-bold text-[#020B2D]">
                  Payment Method
                </h2>
              </div>

              <p className="font-semibold capitalize">
                {paymentMethod}
              </p>
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
                    Inspection Required
                  </p>

                  <p className="text-sm text-amber-800 mt-1">
                    Final value may vary after
                    physical inspection.
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

              <span>
                I agree to the Terms &
                Conditions.
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

                <h3 className="text-xl font-bold mt-4">
                  Ready to Confirm
                </h3>

                <p className="text-[#6E7C96] mt-2">
                  Your pickup request is ready.
                </p>

                <div className="mt-8">
                  <p className="text-sm text-[#6E7C96]">
                    Estimated Offer
                  </p>

                  <p className="text-[42px] font-black text-[#00B67A]">
                    ₹
                    {product.estimatedPrice?.toLocaleString() ||
                      0}
                  </p>
                </div>

                <button
  disabled={!accepted}
  onClick={() => {
    const orderId =
      "RP" +
      Math.floor(
        100000 + Math.random() * 900000
      );

    addOrder({
      id: orderId,

      type: "sell",

      productName: product.model,

      brand: product.brand,

      amount: product.estimatedPrice,

      status: "Pickup Scheduled",

      paymentMethod,

      pickupDate: pickup.date,

      pickupSlot: pickup.slot,

      address: pickup.address,

      createdAt: Date.now(),
    });

    navigate("/sell/success", {
      state: {
        product,
        pickup,
        paymentMethod,
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
  "
>
  Confirm Pickup
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