import React, { useState } from "react";
import {
  Smartphone,
  Wallet,
  Building2,
  Banknote,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product || {};
  const pickup = location.state?.pickup || {};

  const [paymentMethod, setPaymentMethod] =
    useState("upi");

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-[36px] font-black text-[#020B2D]">
            Payment Method
          </h1>

          <p className="mt-2 text-[#6E7C96]">
            Choose how you'd like to receive
            your payment after successful
            inspection.
          </p>
        </div>

        {/* STEPPER */}
        <div className="bg-white rounded-[24px] border border-[#E5EEF8] p-5 mb-8">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00B67A] text-white flex items-center justify-center font-bold">
                ✓
              </div>

              <span className="font-semibold text-[#020B2D]">
                Quote
              </span>
            </div>

            <div className="flex-1 h-[2px] bg-[#00B67A] mx-3" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00B67A] text-white flex items-center justify-center font-bold">
                ✓
              </div>

              <span className="font-semibold text-[#020B2D]">
                Pickup
              </span>
            </div>

            <div className="flex-1 h-[2px] bg-[#E5EEF8] mx-3" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00B67A] text-white flex items-center justify-center font-bold">
                3
              </div>

              <span className="font-semibold text-[#020B2D]">
                Payment
              </span>
            </div>

            <div className="flex-1 h-[2px] bg-[#E5EEF8] mx-3" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E5EEF8] text-[#6E7C96] flex items-center justify-center font-bold">
                4
              </div>

              <span className="text-[#6E7C96]">
                Confirm
              </span>
            </div>

          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-8">

          {/* LEFT */}
          <div>

            <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6">

              <h2 className="text-[24px] font-bold text-[#020B2D] mb-6">
                Select Payment Method
              </h2>

              <div className="space-y-4">

                {/* UPI */}
                <button
                  onClick={() =>
                    setPaymentMethod("upi")
                  }
                  className={`w-full rounded-[24px] border-2 p-5 text-left transition-all ${
                    paymentMethod === "upi"
                      ? "border-[#00B67A] bg-[#00B67A]/5"
                      : "border-[#E5EEF8]"
                  }`}
                >
                  <div className="flex justify-between">

                    <div className="flex gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">
                        <Wallet
                          size={24}
                          className="text-[#00B67A]"
                        />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#020B2D]">
                          UPI
                        </h3>

                        <p className="text-sm text-[#6E7C96] mt-1">
                          Instant transfer to your
                          UPI account
                        </p>
                      </div>
                    </div>

                    {paymentMethod ===
                      "upi" && (
                      <CheckCircle2
                        className="text-[#00B67A]"
                        size={24}
                      />
                    )}
                  </div>
                </button>

                {/* BANK */}
                <button
                  onClick={() =>
                    setPaymentMethod("bank")
                  }
                  className={`w-full rounded-[24px] border-2 p-5 text-left transition-all ${
                    paymentMethod === "bank"
                      ? "border-[#00B67A] bg-[#00B67A]/5"
                      : "border-[#E5EEF8]"
                  }`}
                >
                  <div className="flex justify-between">

                    <div className="flex gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">
                        <Building2
                          size={24}
                          className="text-[#00B67A]"
                        />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#020B2D]">
                          Bank Transfer
                        </h3>

                        <p className="text-sm text-[#6E7C96] mt-1">
                          Direct transfer to your
                          bank account
                        </p>
                      </div>
                    </div>

                    {paymentMethod ===
                      "bank" && (
                      <CheckCircle2
                        className="text-[#00B67A]"
                        size={24}
                      />
                    )}
                  </div>
                </button>

                {/* CASH */}
                <button
                  onClick={() =>
                    setPaymentMethod("cash")
                  }
                  className={`w-full rounded-[24px] border-2 p-5 text-left transition-all ${
                    paymentMethod === "cash"
                      ? "border-[#00B67A] bg-[#00B67A]/5"
                      : "border-[#E5EEF8]"
                  }`}
                >
                  <div className="flex justify-between">

                    <div className="flex gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">
                        <Banknote
                          size={24}
                          className="text-[#00B67A]"
                        />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#020B2D]">
                          Cash
                        </h3>

                        <p className="text-sm text-[#6E7C96] mt-1">
                          Receive payment after
                          successful inspection
                        </p>
                      </div>
                    </div>

                    {paymentMethod ===
                      "cash" && (
                      <CheckCircle2
                        className="text-[#00B67A]"
                        size={24}
                      />
                    )}
                  </div>
                </button>

              </div>

              {/* INFO */}
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                <ShieldCheck
                  size={20}
                  className="text-amber-700 mt-1"
                />

                <div>
                  <p className="font-semibold text-gray-900">
                    Payment Protection
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    Payment will only be
                    processed after device
                    inspection and approval.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div>

            <div className="sticky top-6 bg-white rounded-[30px] border border-[#E5EEF8] p-6">

              <div className="flex gap-4">

                <div className="w-20 h-20 rounded-2xl bg-[#F7F9FC] flex items-center justify-center">
                  <Smartphone
                    size={34}
                    className="text-[#00B67A]"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#020B2D]">
                    {product?.model ||
                      "Selected Device"}
                  </h3>

                  <p className="text-[#6E7C96]">
                    {product?.brand}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-[#6E7C96]">
                  Estimated Offer
                </p>

                <p className="text-[42px] font-black text-[#00B67A]">
                  ₹
                  {product?.estimatedPrice?.toLocaleString() ||
                    0}
                </p>
              </div>

              <div className="mt-6 border-t border-[#EEF2F6] pt-6">

                <h4 className="font-bold text-[#020B2D] mb-4">
                  Pickup Details
                </h4>

                <div className="space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span className="text-[#6E7C96]">
                      Date
                    </span>

                    <span>
                      {pickup?.date ||
                        "Not Selected"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#6E7C96]">
                      Time
                    </span>

                    <span>
                      {pickup?.slot ||
                        "Not Selected"}
                    </span>
                  </div>

                </div>
              </div>

              <button
                onClick={() =>
                  navigate("/sell/review", {
                    state: {
                      product,
                      pickup,
                      paymentMethod,
                    },
                  })
                }
                className="mt-6 w-full h-14 rounded-2xl bg-[#00B67A] text-white font-bold flex items-center justify-center gap-2"
              >
                Continue
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Payment;