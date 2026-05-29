
import React, { useState } from "react";
import {
  PackageOpen,
  ShoppingBag,
  BadgeIndianRupee,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useUserStore } from "../../store/useUserStore";
import AccountSidebar from "../../components/account/AccountSidebar";

const MyOrdersPage = () => {
  const navigate = useNavigate();

  const { orders } = useUserStore();

  const buyOrders = orders.filter(
    (item) => item.type === "buy"
  );

  const sellOrders = [...orders]
  .filter((item) => item.type === "sell")
  .reverse();

  const [activeTab, setActiveTab] =
    useState("buy");

  return (
    <div className="min-h-screen bg-[#F7F9FC]">

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">

          <AccountSidebar />

          <div>

            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

              <div>
                <h1 className="text-[38px] font-black text-[#020B2D]">
                  My Orders
                </h1>

                <p className="mt-2 text-[#6E7C96]">
                  Manage assets you purchased or sold on Rupantar
                </p>
              </div>

              <Link
                to="/discover"
                className="hidden md:flex h-12 px-7 rounded-full bg-[#00B67A] text-white text-sm font-bold items-center justify-center hover:opacity-90 transition-all"
              >
                Browse Collection
              </Link>

            </div>

            {/* TABS */}
            <div className="flex items-center gap-4 mb-8">

              <button
                onClick={() => setActiveTab("buy")}
                className={`h-12 px-6 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === "buy"
                    ? "bg-[#00B67A] text-white shadow-lg shadow-[#00B67A]/20"
                    : "bg-white border border-[#E5EEF8] text-[#6E7C96]"
                }`}
              >
                <ShoppingBag size={18} />
                Buy Orders
              </button>

              <button
                onClick={() => setActiveTab("sell")}
                className={`h-12 px-6 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === "sell"
                    ? "bg-[#FFB800] text-[#020B2D] shadow-lg shadow-[#FFB800]/20"
                    : "bg-white border border-[#E5EEF8] text-[#6E7C96]"
                }`}
              >
                <BadgeIndianRupee size={18} />
                Sell Orders
              </button>

            </div>

            {(activeTab === "buy"
              ? buyOrders.length === 0
              : sellOrders.length === 0) ? (

              <div className="bg-white rounded-[36px] border border-[#E5EEF8] min-h-[560px] flex flex-col items-center justify-center text-center px-6 shadow-sm">

                <div
                  className={`w-32 h-32 rounded-full flex items-center justify-center ${
                    activeTab === "buy"
                      ? "bg-[#00B67A]/10"
                      : "bg-[#FFB800]/10"
                  }`}
                >
                  <PackageOpen
                    size={56}
                    className={
                      activeTab === "buy"
                        ? "text-[#00B67A]"
                        : "text-[#FFB800]"
                    }
                  />
                </div>

                <h2 className="mt-8 text-[36px] leading-tight font-black text-[#020B2D]">
                  {activeTab === "buy"
                    ? "No Purchase Orders Yet"
                    : "No Sell Orders Yet"}
                </h2>

                <p className="mt-4 max-w-2xl text-[#6E7C96] leading-8 text-[17px]">
                  {activeTab === "buy"
                    ? "Explore premium refurbished furniture, electronics, laptops and office assets."
                    : "Sell furniture, electronics, office equipment and other assets through Rupantar."}
                </p>

                <Link
                  to={
                    activeTab === "buy"
                      ? "/discover"
                      : "/sell-assets"
                  }
                  className={`mt-9 h-12 px-8 rounded-full text-sm font-bold flex items-center justify-center transition-all ${
                    activeTab === "buy"
                      ? "bg-[#020B2D] text-white"
                      : "bg-[#FFB800] text-[#020B2D]"
                  }`}
                >
                  {activeTab === "buy"
                    ? "Browse Collection"
                    : "Sell Your Asset"}
                </Link>

              </div>

            ) : (

              <div className="space-y-5">

                {(activeTab === "buy"
                  ? buyOrders
                  : sellOrders
                ).map((order) => (

                  <div
                    key={order.id}
                    onClick={() =>
                      navigate(
                        `/account/orders/${order.id}`
                      )
                    }
                    className="
                      bg-white
                      border
                      border-[#E5EEF8]
                      rounded-[28px]
                      p-6
                      shadow-sm
                      cursor-pointer
                      hover:shadow-lg
                      hover:-translate-y-1
                      transition-all
                    "
                  >

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

                      <div className="flex items-center gap-4">

                        <div className="w-16 h-16 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">
                          <BadgeIndianRupee
                            size={28}
                            className="text-[#00B67A]"
                          />
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-[#020B2D]">
                            {
  order.title ||
  order.productName ||
  order.model ||
  "Asset"
}
                          </h3>
                          <p className="text-sm text-[#6E7C96] mt-1">
  {order.category || "General Asset"}
</p>

                          <p className="text-sm text-[#6E7C96] mt-1">
                            Request ID: {order.id}
                          </p>
                        </div>

                      </div>

                      <div
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </div>

                    </div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

  <div>
    <p className="text-xs text-[#6E7C96] uppercase tracking-wide">
      Expected Price
    </p>

    <p className="text-2xl font-black text-[#00B67A] mt-1">
    ₹{Number(order.amount || 0).toLocaleString("en-IN")}
    </p>
  </div>

  <div>
    <p className="text-xs text-[#6E7C96] uppercase tracking-wide">
      Category
    </p>

    <p className="font-semibold mt-1">
      {order.category || "General Asset"}
    </p>
  </div>

  <div>
    <p className="text-xs text-[#6E7C96] uppercase tracking-wide">
      Status
    </p>

    <p className="font-semibold mt-1">
      {order.status}
    </p>
  </div>

  <div>
    <p className="text-xs text-[#6E7C96] uppercase tracking-wide">
      Request ID
    </p>

    <p className="font-semibold mt-1">
      {order.id}
    </p>
  </div>

</div>

                    <div className="mt-6 pt-5 border-t border-[#EEF2F6] flex items-center justify-between">

                      <span className="text-sm text-[#6E7C96]">
                        Request Created
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/account/orders/${order.id}`);
                        }}
                        className="
                          h-11
                          px-5
                          rounded-xl
                          bg-[#00B67A]
                          text-white
                          font-semibold
                          hover:bg-[#009966]
                          transition-all
                        "
                      >
                        View Details
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default MyOrdersPage;

