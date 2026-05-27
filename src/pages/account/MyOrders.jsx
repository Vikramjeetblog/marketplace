import React, { useState } from "react";

import {
  PackageOpen,
 
  ShoppingBag,
  BadgeIndianRupee,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useUserStore } from "../../store/useUserStore";
import AccountSidebar from "../../components/account/AccountSidebar";
const MyOrdersPage = () => {
  const { user, orders } = useUserStore();

  // BUY / SELL TAB
  const [activeTab, setActiveTab] =
    useState("buy");

  // SIDEBAR MENU
  
  return (
    <div className="min-h-screen bg-[#F7F9FC]">

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">

          {/* LEFT SIDEBAR */}
         <AccountSidebar />

          {/* RIGHT SECTION */}
          <div>

            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

              <div>
                <h1 className="text-[38px] font-black text-[#020B2D]">
                  My Orders
                </h1>

                <p className="mt-2 text-[#6E7C96]">
                  Manage products you purchased or
                  sold on Rupantar
                </p>
              </div>

              {/* CTA BUTTON */}
              <Link
                to="/discover"
                className="hidden md:flex h-12 px-7 rounded-full bg-[#00B67A] text-white text-sm font-bold items-center justify-center hover:opacity-90 transition-all"
              >
                Browse Products
              </Link>
            </div>

            {/* BUY / SELL TABS */}
            <div className="flex items-center gap-4 mb-8">

              {/* BUY TAB */}
              <button
                onClick={() =>
                  setActiveTab("buy")
                }
                className={`h-12 px-6 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === "buy"
                    ? "bg-[#00B67A] text-white shadow-lg shadow-[#00B67A]/20"
                    : "bg-white border border-[#E5EEF8] text-[#6E7C96]"
                }`}
              >
                <ShoppingBag size={18} />

                Buy Orders
              </button>

              {/* SELL TAB */}
              <button
                onClick={() =>
                  setActiveTab("sell")
                }
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

            {/* EMPTY STATE */}
            {orders.length === 0 ? (
              <div className="bg-white rounded-[36px] border border-[#E5EEF8] min-h-[560px] flex flex-col items-center justify-center text-center px-6 shadow-sm">

                {/* ICON */}
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

                {/* TITLE */}
                <h2 className="mt-8 text-[36px] leading-tight font-black text-[#020B2D]">
                  {activeTab === "buy"
                    ? "No Purchase Orders Yet"
                    : "No Sell Orders Yet"}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-2xl text-[#6E7C96] leading-8 text-[17px]">
                  {activeTab === "buy"
                    ? "Explore premium refurbished furniture, electronics, laptops and office assets from trusted verified sellers across India."
                    : "Turn your unused furniture, electronics and office assets into earnings by selling directly through Rupantar."}
                </p>

                {/* BUTTON */}
                <Link
                  to={
                    activeTab === "buy"
                      ? "/discover"
                      : "/sell-assets"
                  }
                  className={`mt-9 h-12 px-8 rounded-full text-sm font-bold flex items-center justify-center transition-all ${
                    activeTab === "buy"
                      ? "bg-[#020B2D] text-white hover:opacity-95"
                      : "bg-[#FFB800] text-[#020B2D] hover:opacity-90"
                  }`}
                >
                  {activeTab === "buy"
                    ? "Browse Collection"
                    : "Sell Your Product"}
                </Link>
              </div>
            ) : (
              <div>
                {/* ORDER CARDS HERE */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;