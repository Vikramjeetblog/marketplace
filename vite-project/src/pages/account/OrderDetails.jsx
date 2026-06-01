import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  PackageCheck,
  
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import ConfirmModal from "../../components/common/ConfirmModal";
import AccountSidebar from "../../components/account/AccountSidebar";
import { useUserStore } from "../../store/useUserStore";

const CustomerOrderDetails = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const { orders, cancelOrder } = useUserStore();

  const [showCancelModal, setShowCancelModal] = useState(false);

  const order = orders.find((item) => item.id === orderId);

  

  if (!order) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
        <div className="bg-white p-10 rounded-[30px] border border-[#E5EEF8] text-center">
          <h2 className="text-3xl font-black text-[#020B2D]">
            Order Not Found
          </h2>

          <button
            onClick={() => navigate("/account/orders")}
            className="mt-6 h-12 px-6 rounded-xl bg-[#00B67A] text-white font-semibold"
          >
            Back To Orders
          </button>
        </div>
      </div>
    );
  }

  const timeline = [
    {
      title: "Request Created",
      completed: true,
    },
    {
      title: "Request Under Review",
      completed: order.status !== "Pending",
    },
    {
      title: "Offer Generated",
      completed:
        order.status === "Offer Generated" ||
        order.status === "Completed",
    },
    {
      title: "Pickup Scheduled",
      completed:
        order.status === "Pickup Scheduled" ||
        order.status === "Completed",
    },
    {
      title: "Payment Released",
      completed: order.status === "Completed",
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

            {/* BACK BUTTON */}
            <button
              onClick={() => navigate("/account/orders")}
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

              {/* LEFT SECTION */}
              <div className="space-y-6">

                {/* ASSET DETAILS */}
                <div className="bg-white border border-[#E5EEF8] rounded-[32px] p-8">

                  <div className="flex items-center gap-3 mb-6">
                    <PackageCheck
                      className="text-[#00B67A]"
                      size={24}
                    />

                    <h2 className="text-2xl font-bold text-[#020B2D]">
                      Asset Details
                    </h2>
                  </div>

                  <h3 className="text-xl font-bold text-[#020B2D]">
                    {order.productName}
                  </h3>

                  <p className="text-[#6E7C96] mt-1">
                    {order.brand}
                  </p>

                  {/* ADDITIONAL DETAILS */}
                  {order.details && (
                    <div className="mt-4">
                      <p className="text-sm text-[#6E7C96]">
                        Additional Details
                      </p>

                      <p className="font-medium text-[#020B2D]">
                        {order.details}
                      </p>
                    </div>
                  )}

                  {/* CONDITION */}
                  <div className="mt-6">
                    <p className="text-sm text-[#6E7C96]">
                      Condition
                    </p>

                    <p className="font-semibold text-[#020B2D]">
                      {order.condition}
                    </p>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="mt-4">
                    <p className="text-sm text-[#6E7C96]">
                      Description
                    </p>

                    <p className="mt-2 text-[#020B2D]">
                      {order.description}
                    </p>
                  </div>

                  {/* IMAGES */}
                  {order.images && order.images.length > 0 && (
                    <div className="mt-8">
                      <h2 className="text-2xl font-bold text-[#020B2D] mb-6">
                        Submitted Images
                      </h2>

                      <div className="grid grid-cols-2 gap-4">
                        {order.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Order ${index + 1}`}
                            className="rounded-2xl h-40 w-full object-cover border border-[#E5EEF8]"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* OFFER */}
                  <div className="mt-8">
                    <p className="text-sm text-[#6E7C96]">
                      Expected Price
                    </p>

                    <p className="text-[40px] font-black text-[#00B67A]">
                      ₹{order.amount?.toLocaleString()}
                    </p>
                  </div>

                </div>

              </div>

              {/* RIGHT SECTION */}
              <div className="space-y-6">

                {/* ORDER PROGRESS */}
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
                    {timeline.map((step, index) => (
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
                    ))}
                  </div>

                </div>

                

                {/* CANCEL REQUEST */}
                {order.status !== "Cancelled" &&
                  order.status !== "Completed" && (
                    <div className="bg-white border border-[#E5EEF8] rounded-[32px] p-8">

                      <h3 className="text-xl font-bold text-[#020B2D] mb-2">
                        Need to Cancel?
                      </h3>

                      <p className="text-[#6E7C96] mb-6">
                        You can cancel this request at any time before processing begins.
                      </p>

                      <button
                        onClick={() => setShowCancelModal(true)}
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
                    Request Under Review
                  </h3>

                  <p className="mt-2 text-sm text-amber-800">
                    Our team is reviewing your request and will share an offer
after evaluation.
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CONFIRM MODAL */}
      <ConfirmModal
        isOpen={showCancelModal}
        title="Cancel Request?"
        description="Are you sure you want to cancel this review request? This action cannot be undone."
        confirmText="Yes, Cancel"
        cancelText="Keep Request"
        onCancel={() => setShowCancelModal(false)}
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

export default CustomerOrderDetails;