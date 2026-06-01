import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  PackageCheck,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const product =
    location.state?.product || {};

  const orderId =
    location.state?.orderId ||
    ("RP" +
      Math.floor(
        100000 + Math.random() * 900000
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
            Request Submitted Successfully
          </h1>

          <p className="mt-4 text-[#6E7C96] text-lg leading-8 max-w-3xl mx-auto">
            Your request has been submitted successfully.
            Our team will review your asset details and
            contact you with an offer.
          </p>

          <div className="mt-6 inline-flex items-center px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
            Pending Review
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

          <h3 className="text-2xl font-bold text-[#020B2D] mb-8">
            What Happens Next
          </h3>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <CheckCircle2
                size={24}
                className="text-[#00B67A]"
              />

              <span className="font-medium text-[#020B2D]">
                Request Created
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1]" />

              <span className="text-[#6E7C96]">
                Request Under Review
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1]" />

              <span className="text-[#6E7C96]">
                Offer Generated
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1]" />

              <span className="text-[#6E7C96]">
                Pickup Scheduled
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-[#CBD5E1]" />

              <span className="text-[#6E7C96]">
                Payment Released
              </span>
            </div>

          </div>

        </div>

        {/* DETAILS GRID */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          {/* ASSET DETAILS */}
          <div className="bg-white rounded-[32px] border border-[#E5EEF8] p-8">

            <h3 className="text-xl font-bold text-[#020B2D] mb-6">
              Asset Details
            </h3>

            <div className="flex gap-4">

              <div className="w-16 h-16 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">

                <PackageCheck
                  size={30}
                  className="text-[#00B67A]"
                />

              </div>

              <div>
                <h4 className="font-bold text-lg text-[#020B2D]">
                  {product.title ||
                    product.model ||
                    "Asset"}
                </h4>

                <p className="text-[#6E7C96]">
                  {product.brand || "Unknown Brand"}
                </p>
              </div>

            </div>

            <div className="mt-8">

              <p className="text-sm text-[#6E7C96]">
                Expected Price
              </p>

              <p className="text-[42px] font-black text-[#00B67A]">
                ₹
                {product?.estimatedPrice?.toLocaleString() ||
                  0}
              </p>

            </div>

          </div>

          {/* REVIEW INFORMATION */}
          <div className="bg-white rounded-[32px] border border-[#E5EEF8] p-8">

            <h3 className="text-xl font-bold text-[#020B2D] mb-6">
              Review Information
            </h3>

            <div className="space-y-5">

              <div className="rounded-2xl bg-[#F7F9FC] p-5">

                <p className="text-sm text-[#6E7C96]">
                  Current Status
                </p>

                <p className="mt-2 text-lg font-bold text-[#020B2D]">
                  Pending Review
                </p>

              </div>

              <div className="rounded-2xl bg-[#F7F9FC] p-5">

                <p className="text-sm text-[#6E7C96]">
                  What's Next?
                </p>

                <p className="mt-2 text-[#020B2D] leading-7">
                  Our team will review your asset details
                  and submitted images. Once evaluated,
                  an offer will be generated and shared
                  with you.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* NOTICE */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-[28px] p-6">

          <h4 className="font-bold text-amber-900">
            Request Under Review
          </h4>

          <p className="mt-2 text-amber-800 leading-7">
            Our team is reviewing your request and will
            share an offer after evaluation.
          </p>

        </div>

        {/* ACTION BUTTONS */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <button
            onClick={() =>
              navigate(`/account/orders/${orderId}`)
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
              hover:opacity-90
              transition-all
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
              hover:bg-[#00B67A]
              hover:text-white
              transition-all
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