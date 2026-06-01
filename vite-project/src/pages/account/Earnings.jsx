import React, { useState } from "react";

import {
  Wallet,
  Clock3,
  IndianRupee,
  Truck,
  Landmark,
} from "lucide-react";

import AccountSidebar from "../../components/account/AccountSidebar";

const Earnings = () => {
  const [activeTab, setActiveTab] =
    useState("ALL");

  // SAMPLE DATA
  const earnings = [
    {
      id: 1,
      product:
        "Office Chair Set",
      amount: 4500,
      status:
        "READY TO WITHDRAW",
      date: "24 May 2026",
      pickupId: "#RUP2481",
      settlement:
        "Amount credited successfully",
      paymentMethod:
        "HDFC Bank",
    },

    {
      id: 2,
      product: "Dell Monitor",
      amount: 2800,
      status: "UNDER REVIEW",
      date: "22 May 2026",
      pickupId: "#RUP2482",
      settlement:
        "Waiting for QC Approval",
      paymentMethod:
        "UPI Payment",
      expectedDate:
        "28 May 2026",
    },
  ];

  // FILTER
  const filteredEarnings =
    activeTab === "ALL"
      ? earnings
      : earnings.filter(
          (item) =>
            item.status === activeTab
        );

  // TOTALS
  const totalEarnings =
    earnings.reduce(
      (acc, item) =>
        acc + item.amount,
      0
    );

  const pendingAmount =
    earnings
      .filter(
        (item) =>
          item.status ===
          "UNDER REVIEW"
      )
      .reduce(
        (acc, item) =>
          acc + item.amount,
        0
      );

  const withdrawableAmount =
    earnings
      .filter(
        (item) =>
          item.status ===
          "READY TO WITHDRAW"
      )
      .reduce(
        (acc, item) =>
          acc + item.amount,
        0
      );

  return (
    <div className="min-h-screen bg-[#F7F9FC]">

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">

          {/* SIDEBAR */}
          <AccountSidebar />

          {/* RIGHT */}
          <div>

            {/* HEADER */}
            <div className="flex flex-col gap-6 mb-8">

              <div>
                <h1 className="text-[40px] leading-tight font-black text-[#020B2D]">
                  Earnings
                </h1>

                <p className="mt-2 text-[#6E7C96] text-[15px]">
                  Track settlements,
                  pickup requests and
                  payouts from
                  Rupantar.
                </p>
              </div>

              {/* BALANCE CARD */}
              <div className="bg-white border border-[#E5EEF8] rounded-[30px] p-6 shadow-sm">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                  {/* LEFT */}
                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">

                      <Wallet
                        size={30}
                        className="text-[#00B67A]"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-[#6E7C96] font-medium">
                        Available Balance
                      </p>

                      <h2 className="mt-1 text-[42px] leading-none font-black text-[#020B2D]">
                        ₹
                        {withdrawableAmount.toLocaleString()}
                      </h2>

                      <p className="mt-2 text-[13px] text-[#00B67A] font-semibold">
                        Ready to withdraw
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col lg:items-end gap-4">

                    {/* PAYMENT METHOD */}
                    <div className="flex items-center gap-2 text-sm text-[#6E7C96]">

                      <Landmark
                        size={16}
                        className="text-[#020B2D]"
                      />

                      <span>
                        HDFC Bank ••••
                        2481
                      </span>
                    </div>

                    {/* BUTTON */}
                    <button className="h-12 px-7 rounded-full bg-[#00B67A] text-white text-sm font-bold hover:opacity-90 transition-all">

                      Withdraw Balance
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

              {/* TOTAL */}
              <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6 shadow-sm">

                <div className="w-14 h-14 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">

                  <IndianRupee
                    size={28}
                    className="text-[#00B67A]"
                  />
                </div>

                <h3 className="mt-6 text-[34px] font-black text-[#020B2D]">
                  ₹
                  {totalEarnings.toLocaleString()}
                </h3>

                <p className="mt-2 text-[#6E7C96] text-sm">
                  Total Earnings
                </p>
              </div>

              {/* REVIEW */}
              <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6 shadow-sm">

                <div className="w-14 h-14 rounded-2xl bg-[#FFB800]/10 flex items-center justify-center">

                  <Clock3
                    size={28}
                    className="text-[#FFB800]"
                  />
                </div>

                <h3 className="mt-6 text-[34px] font-black text-[#020B2D]">
                  ₹
                  {pendingAmount.toLocaleString()}
                </h3>

                <p className="mt-2 text-[#6E7C96] text-sm">
                  Under Review
                </p>
              </div>

              {/* WITHDRAW */}
              <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6 shadow-sm">

                <div className="w-14 h-14 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">

                  <Wallet
                    size={28}
                    className="text-[#00B67A]"
                  />
                </div>

                <h3 className="mt-6 text-[34px] font-black text-[#020B2D]">
                  ₹
                  {withdrawableAmount.toLocaleString()}
                </h3>

                <p className="mt-2 text-[#6E7C96] text-sm">
                  Withdrawable Amount
                </p>
              </div>
            </div>

            {/* TABS */}
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">

              {[
                "ALL",
                "UNDER REVIEW",
                "READY TO WITHDRAW",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() =>
                    setActiveTab(tab)
                  }
                  className={`h-11 px-5 rounded-full text-[13px] font-bold transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? tab ===
                        "UNDER REVIEW"
                        ? "bg-[#FFB800] text-white"
                        : "bg-[#00B67A] text-white"
                      : "bg-white border border-[#E5EEF8] text-[#020B2D]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* DIVIDER */}
            <div className="h-px bg-[#E5EEF8] my-8" />

            {/* LIST */}
            <div className="space-y-5">

              {filteredEarnings.map(
                (item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[32px] border border-[#E5EEF8] p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

                      {/* LEFT */}
                      <div className="flex items-start gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center flex-shrink-0">

                          <Truck
                            size={30}
                            className="text-[#00B67A]"
                          />
                        </div>

                        <div>
                          <h3 className="text-[22px] font-black text-[#020B2D]">
                            {
                              item.product
                            }
                          </h3>

                          <p className="mt-2 text-sm text-[#6E7C96]">
                            Pickup ID:{" "}
                            {
                              item.pickupId
                            }
                          </p>

                          <p className="mt-1 text-sm text-[#9CA3AF]">
                            {
                              item.date
                            }
                          </p>

                          <p className="mt-3 text-sm text-[#00B67A] font-semibold">
                            {
                              item.settlement
                            }
                          </p>

                          {/* PAYMENT */}
                          <div className="mt-3 flex items-center gap-2">

                            <Landmark
                              size={15}
                              className="text-[#6E7C96]"
                            />

                            <p className="text-sm text-[#6E7C96]">
                              Payment
                              Method:{" "}
                              {
                                item.paymentMethod
                              }
                            </p>
                          </div>

                          {/* EXPECTED */}
                          {item.status ===
                            "UNDER REVIEW" && (
                            <p className="mt-3 text-sm text-[#FFB800] font-semibold">
                              Expected
                              settlement by{" "}
                              {
                                item.expectedDate
                              }
                            </p>
                          )}

                          {/* WORKFLOW */}
                          <div className="mt-5 flex items-center gap-2 flex-wrap">

                            <div className="h-8 px-3 rounded-full bg-[#00B67A]/10 text-[#00B67A] text-[11px] font-bold flex items-center">
                              Pickup
                              Completed
                            </div>

                            <div className="h-8 px-3 rounded-full bg-[#020B2D]/10 text-[#020B2D] text-[11px] font-bold flex items-center">
                              QC Verified
                            </div>

                            {item.status ===
                            "UNDER REVIEW" ? (
                              <div className="h-8 px-3 rounded-full bg-[#FFB800]/10 text-[#FFB800] text-[11px] font-bold flex items-center">
                                Settlement
                                Pending
                              </div>
                            ) : (
                              <div className="h-8 px-3 rounded-full bg-[#00B67A]/10 text-[#00B67A] text-[11px] font-bold flex items-center">
                                Ready To
                                Withdraw
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex flex-col justify-between xl:items-end min-h-[120px]">

                        <h2 className="text-[36px] font-black text-[#020B2D]">
                          ₹
                          {item.amount.toLocaleString()}
                        </h2>

                        <div
                          className={`mt-3 h-10 px-5 rounded-full text-[12px] font-bold flex items-center justify-center ${
                            item.status ===
                            "UNDER REVIEW"
                              ? "bg-[#FFB800]/10 text-[#FFB800]"
                              : "bg-[#00B67A]/10 text-[#00B67A]"
                          }`}
                        >
                          {item.status}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;