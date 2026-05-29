import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  Smartphone,
  Home,
  Calendar,
  Clock,
  MapPin,
  Wallet,
  CheckCircle2,
  Circle,
  PackageCheck,
} from "lucide-react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";
import ConfirmModal from "../../components/common/ConfirmModal";
import { useUserStore } from "../../store/useUserStore";
import AccountSidebar from "../../components/account/AccountSidebar";

const OrderDetails = () => {
  const navigate = useNavigate();

  const { orderId } = useParams();

  const {
  orders,
  cancelOrder,
} = useUserStore();
const [showCancelModal, setShowCancelModal] =
  useState(false);

  const order = orders.find(
    (item) => item.id === orderId
  );
  const isGuided =
  order?.status === "Pending Review" ||
  order?.images?.length > 0;

  if (!order) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
        <div className="bg-white p-10 rounded-[30px] border border-[#E5EEF8] text-center">
          <h2 className="text-3xl font-black text-[#020B2D]">
            Order Not Found
          </h2>

          <button
            onClick={() =>
              navigate("/account/orders")
            }
            className="mt-6 h-12 px-6 rounded-xl bg-[#00B67A] text-white font-semibold"
          >
            Back To Orders
          </button>
        </div>
      </div>
    );
  }

  const timeline = isGuided
  ? [
      {
        title: "Request Created",
        completed: true,
      },
      {
        title: "Asset Review",
        completed: false,
      },
      {
        title: "Offer Generated",
        completed: false,
      },
      {
        title: "Pickup Scheduled",
        completed: false,
      },
      {
        title: "Payment Released",
        completed: false,
      },
    ]
  : [
      {
        title: "Request Created",
        completed: true,
      },
      {
        title: "Pickup Scheduled",
        completed: true,
      },
      {
        title: "Executive Assigned",
        completed: false,
      },
      {
        title: "Device Inspection",
        completed: false,
      },
      {
        title: "Payment Released",
        completed: false,
      },
    ];

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">

          {/* SIDEBAR */}
          <AccountSidebar />

          {/* CONTENT */}
          <div>

            {/* BACK */}
            <button
              onClick={() =>
                navigate("/account/orders")
              }
              className="flex items-center gap-2 text-[#00B67A] font-semibold mb-6"
            >
              <ArrowLeft size={18} />
              Back To Orders
            </button>

            {/* HEADER */}
            <div className="bg-white border border-[#E5EEF8] rounded-[32px] p-8 mb-6">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                <div>
                  <h1 className="text-[38px] font-black text-[#020B2D]">
                    Order Details
                  </h1>

                  <p className="text-[#6E7C96] mt-2">
                    Request ID: {order.id}
                  </p>
                </div>

                <div
  className={`px-5 py-3 rounded-full font-semibold ${
    order.status === "Cancelled"
      ? "bg-red-100 text-red-700"
      : order.status === "Completed"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700"
  }`}
>
  {order.status}
</div>

              </div>

            </div>

            <div className="grid lg:grid-cols-[1fr_350px] gap-6">

              {/* LEFT */}
              <div className="space-y-6">

                {/* PRODUCT */}
                <div className="bg-white border border-[#E5EEF8] rounded-[32px] p-8">

                  <div className="flex items-center gap-3 mb-6">
                    {isGuided ? (
  <Home
    className="text-[#00B67A]"
    size={24}
  />
) : (
  <Smartphone
    className="text-[#00B67A]"
    size={24}
  />
)}

                    <h2 className="text-2xl font-bold text-[#020B2D]">
                      Product Details
                    </h2>
                  </div>


                  <h3 className="text-xl font-bold text-[#020B2D]">
                    {order.productName}
                  </h3>

                  <p className="text-[#6E7C96] mt-1">
                    {order.brand}
                  </p>
                  {isGuided && (
  <>
    <div className="mt-6">
      <p className="text-sm text-[#6E7C96]">
        Condition
      </p>

      <p className="font-semibold">
        {order.condition}
      </p>
    </div>

    <div className="mt-4">
      <p className="text-sm text-[#6E7C96]">
        Description
      </p>

      <p className="mt-2">
        {order.description}
      </p>
      {isGuided &&
  order.images?.length > 0 && (

    <div className="bg-white border border-[#E5EEF8] rounded-[32px] p-8">

      <h2 className="text-2xl font-bold text-[#020B2D] mb-6">
        Submitted Images
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {order.images.map(
          (image, index) => (

            <img
              key={index}
              src={image}
              alt=""
              className="rounded-2xl h-40 w-full object-cover"
            />

          )
        )}

      </div>

    </div>

)}
    </div>
  </>
)}

                  <div className="mt-6">
                    <p className="text-sm text-[#6E7C96]">
                      Estimated Offer
                    </p>

                    <p className="text-[40px] font-black text-[#00B67A]">
                      ₹
                      {order.amount?.toLocaleString()}
                    </p>
                  </div>

                </div>

                {/* PICKUP */}
                {!isGuided && (
                <div className="bg-white border border-[#E5EEF8] rounded-[32px] p-8">

                  <div className="flex items-center gap-3 mb-6">
                    <Calendar
                      className="text-[#00B67A]"
                      size={24}
                    />

                    <h2 className="text-2xl font-bold text-[#020B2D]">
                      Pickup Information
                    </h2>
                  </div>

                  <div className="space-y-4">

                    <div className="flex justify-between">
                      <span className="text-[#6E7C96]">
                        Pickup Date
                      </span>

                      <span className="font-semibold">
                        {order.pickupDate}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#6E7C96]">
                        Time Slot
                      </span>

                      <span className="font-semibold">
                        {order.pickupSlot}
                      </span>
                    </div>

                  </div>

                </div>
                )}

                {/* ADDRESS */}
                {!isGuided && (
                <div className="bg-white border border-[#E5EEF8] rounded-[32px] p-8">

                  <div className="flex items-center gap-3 mb-6">
                    <MapPin
                      className="text-[#00B67A]"
                      size={24}
                    />

                    <h2 className="text-2xl font-bold text-[#020B2D]">
                      Pickup Address
                    </h2>
                  </div>

                  <h3 className="font-bold text-lg">
                    {order.address?.type}
                  </h3>

                  <p className="mt-3 text-[#6E7C96]">
                    {order.address?.address}
                  </p>

                  <p className="text-[#6E7C96]">
                    {order.address?.pincode}
                  </p>

                  <p className="mt-3 font-medium">
                    +91 {order.address?.phone}
                  </p>

                </div>
                )}

              </div>

              {/* RIGHT */}
              <div className="space-y-6">

                {/* STATUS */}
                <div className="bg-white border border-[#E5EEF8] rounded-[32px] p-8">

                  <div className="flex items-center gap-3 mb-6">
                    <PackageCheck
                      className="text-[#00B67A]"
                      size={24}
                    />

                    <h2 className="text-2xl font-bold text-[#020B2D]">
                      Order Progress
                    </h2>
                  </div>

                  <div className="space-y-5">

                    {timeline.map(
                      (step, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3"
                        >
                          {step.completed ? (
                            <CheckCircle2
                              size={22}
                              className="text-[#00B67A]"
                            />
                          ) : (
                            <Circle
                              size={22}
                              className="text-gray-300"
                            />
                          )}

                          <span
                            className={
                              step.completed
                                ? "font-medium text-[#020B2D]"
                                : "text-[#6E7C96]"
                            }
                          >
                            {step.title}
                          </span>
                        </div>
                      )
                    )}

                  </div>

                </div>

                {/* PAYMENT */}
                {!isGuided && (
                <div className="bg-white border border-[#E5EEF8] rounded-[32px] p-8">

                  <div className="flex items-center gap-3 mb-6">
                    <Wallet
                      className="text-[#00B67A]"
                      size={24}
                    />

                    <h2 className="text-2xl font-bold text-[#020B2D]">
                      Payment Method
                    </h2>
                  </div>

                  <p className="font-semibold capitalize">
                    {order.paymentMethod}
                  </p>

                </div>
                )}
                {order.status !== "Cancelled" &&
 order.status !== "Completed" && (
  <div className="bg-white border border-[#E5EEF8] rounded-[32px] p-8">

 <h3 className="text-xl font-bold text-[#020B2D] mb-2">
  Need to Cancel?
</h3>

<p className="text-[#6E7C96] mb-6">
  {isGuided
    ? "You can cancel this review request at any time."
    : "You can cancel this request before pickup."}
</p>

    <button
  onClick={() =>
    setShowCancelModal(true)
  }
  className="
    w-full
    h-12
    rounded-xl
    bg-red-500
    hover:bg-red-600
    transition-all
    text-white
    font-semibold
  "
>
  Cancel Request
</button>

  </div>
)}

                {/* NOTICE */}
                <div className="bg-amber-50 border border-amber-200 rounded-[28px] p-6">

                  <h3 className="font-bold text-amber-900">
                    {isGuided
  ? "Asset Review Required"
  : "Inspection Required"}
                  </h3>

                  <p className="mt-2 text-sm text-amber-800">
                    {isGuided
  ? "Our valuation team is reviewing your submission and will contact you with an offer."
  : "Final value will be confirmed after physical inspection by our pickup executive."}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      <ConfirmModal
  isOpen={showCancelModal}
  title="Cancel Request?"
  description={
  isGuided
    ? "Are you sure you want to cancel this review request? This action cannot be undone."
    : "Are you sure you want to cancel this pickup request? This action cannot be undone."
}
  confirmText="Yes, Cancel"
  cancelText="Keep Request"
  onCancel={() =>
    setShowCancelModal(false)
  }
  onConfirm={() => {
    cancelOrder(order.id);
    setShowCancelModal(false);
     toast.success(
    "Request cancelled successfully"
  );
  }}
/>
    </div>
  );
};

export default OrderDetails;