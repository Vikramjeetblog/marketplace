import React from "react";
import {
  ClipboardList,
  Package,
  CheckCircle,
  IndianRupee,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import AdminLayout from "../layout/AdminLayout";

const stats = [
  {
    title: "Sell Requests",
    value: "128",
    icon: ClipboardList,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Products Listed",
    value: "92",
    icon: Package,
    color: "text-[#00B67A]",
    bg: "bg-green-50",
  },
  {
    title: "Published Products",
    value: "76",
    icon: CheckCircle,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Inventory Value",
    value: "₹8.2L",
    icon: IndianRupee,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

const recentRequests = [
  {
    id: "RP34821",
    title: "Apple iPhone 13",
    status: "Pending Review",
  },
  {
    id: "RP34822",
    title: "Godrej Sofa Set",
    status: "Offer Generated",
  },
  {
    id: "RP34823",
    title: "Dell Latitude 7420",
    status: "Pending Review",
  },
];

const recentProducts = [
  {
    id: "PRD001",
    title: "Apple iPhone 13",
    price: "₹24,999",
  },
  {
    id: "PRD002",
    title: "Dell Latitude 7420",
    price: "₹19,999",
  },
  {
    id: "PRD003",
    title: "Godrej Sofa Set",
    price: "₹8,500",
  },
];

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
            Dashboard
          </h1>

          <p className="text-[#6E7C96] mt-2">
            Overview of requests, inventory and marketplace performance.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl border border-[#EEF2F6] p-5"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-[#6E7C96]">
                      {item.title}
                    </p>

                    <h2 className="text-2xl lg:text-3xl font-black text-[#020B2D] mt-2">
                      {item.value}
                    </h2>
                  </div>

                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bg}`}
                  >
                    <Icon
                      size={22}
                      className={item.color}
                    />
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* QUICK STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

            <div className="flex items-center gap-3 mb-4">
              <TrendingUp
                className="text-[#00B67A]"
                size={22}
              />

              <h3 className="font-bold text-[#020B2D]">
                This Month
              </h3>
            </div>

            <p className="text-4xl font-black text-[#020B2D]">
              ₹1.4L
            </p>

            <p className="text-sm text-[#6E7C96] mt-2">
              Inventory added this month
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

            <h3 className="font-bold text-[#020B2D] mb-4">
              Pending Reviews
            </h3>

            <p className="text-4xl font-black text-[#020B2D]">
              18
            </p>

            <p className="text-sm text-[#6E7C96] mt-2">
              Requests awaiting action
            </p>

          </div>

          <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

            <h3 className="font-bold text-[#020B2D] mb-4">
              Draft Products
            </h3>

            <p className="text-4xl font-black text-[#020B2D]">
              16
            </p>

            <p className="text-sm text-[#6E7C96] mt-2">
              Products not yet published
            </p>

          </div>

        </div>

        {/* TABLES */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* REQUESTS */}
          <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

            <div className="flex items-center justify-between mb-5">

              <h3 className="font-bold text-[#020B2D]">
                Recent Requests
              </h3>

              <ArrowUpRight
                size={18}
                className="text-[#6E7C96]"
              />

            </div>

            <div className="space-y-4">

              {recentRequests.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-[#020B2D]">
                      {item.title}
                    </p>

                    <p className="text-sm text-[#6E7C96]">
                      {item.id}
                    </p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                    {item.status}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* PRODUCTS */}
          <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

            <div className="flex items-center justify-between mb-5">

              <h3 className="font-bold text-[#020B2D]">
                Recent Products
              </h3>

              <ArrowUpRight
                size={18}
                className="text-[#6E7C96]"
              />

            </div>

            <div className="space-y-4">

              {recentProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-[#020B2D]">
                      {item.title}
                    </p>

                    <p className="text-sm text-[#6E7C96]">
                      {item.id}
                    </p>
                  </div>

                  <span className="font-semibold text-[#020B2D]">
                    {item.price}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
};

export default Dashboard;