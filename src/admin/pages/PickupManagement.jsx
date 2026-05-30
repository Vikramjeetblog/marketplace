import React from "react";
import {
  Truck,
  Calendar,
  CheckCircle,
  Clock,
  Search,
  Eye,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const stats = [
  {
    title: "Total Pickups",
    value: "248",
    icon: Truck,
  },
  {
    title: "Scheduled",
    value: "36",
    icon: Calendar,
  },
  {
    title: "In Progress",
    value: "12",
    icon: Clock,
  },
  {
    title: "Completed",
    value: "200",
    icon: CheckCircle,
  },
];

const pickups = [
  {
    id: "PU001",
    seller: "Vikram Singh",
    asset: "Apple iPhone 13",
    date: "Today",
    agent: "Rahul",
    status: "Scheduled",
  },
  {
    id: "PU002",
    seller: "Aman Verma",
    asset: "Godrej Sofa Set",
    date: "Tomorrow",
    agent: "Unassigned",
    status: "Pending Assignment",
  },
  {
    id: "PU003",
    seller: "Rohit Sharma",
    asset: "Dell Latitude 7420",
    date: "28 May 2026",
    agent: "Amit",
    status: "Completed",
  },
];

const statusStyles = {
  Scheduled: "bg-blue-100 text-blue-700",
  "Pending Assignment": "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100 text-green-700",
};

const PickupManagement = () => {
  return (
    <AdminLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div>

          <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
            Pickup Management
          </h1>

          <p className="text-[#6E7C96] mt-2">
            Manage asset pickups, assignments and field operations.
          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white border border-[#EEF2F6] rounded-3xl p-5"
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

                  <div className="w-12 h-12 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">
                    <Icon
                      size={22}
                      className="text-[#00B67A]"
                    />
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* SEARCH */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-5">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
            />

            <input
              type="text"
              placeholder="Search pickups..."
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#E5EEF8] outline-none"
            />

          </div>

        </div>

        {/* MOBILE CARDS */}
        <div className="lg:hidden space-y-4">

          {pickups.map((pickup) => (
            <div
              key={pickup.id}
              className="bg-white border border-[#EEF2F6] rounded-2xl p-4"
            >

              <div className="flex justify-between items-start">

                <div>
                  <h3 className="font-bold text-[#020B2D]">
                    {pickup.asset}
                  </h3>

                  <p className="text-sm text-[#6E7C96]">
                    {pickup.id}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[pickup.status]}`}
                >
                  {pickup.status}
                </span>

              </div>

              <div className="mt-4 space-y-2 text-sm">

                <div className="flex justify-between">
                  <span>Seller</span>
                  <span>{pickup.seller}</span>
                </div>

                <div className="flex justify-between">
                  <span>Date</span>
                  <span>{pickup.date}</span>
                </div>

                <div className="flex justify-between">
                  <span>Agent</span>
                  <span>{pickup.agent}</span>
                </div>

              </div>

              <Link
                to={`/admin/pickups/${pickup.id}`}
                className="mt-4 h-11 rounded-xl bg-[#020B2D] text-white flex items-center justify-center"
              >
                View Pickup
              </Link>

            </div>
          ))}

        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden lg:block bg-white border border-[#EEF2F6] rounded-3xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="bg-[#F8FAFC]">

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Pickup ID
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Seller
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Asset
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Date
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Agent
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {pickups.map((pickup) => (
                  <tr
                    key={pickup.id}
                    className="border-t border-[#EEF2F6]"
                  >

                    <td className="px-6 py-5 font-semibold">
                      {pickup.id}
                    </td>

                    <td className="px-6 py-5">
                      {pickup.seller}
                    </td>

                    <td className="px-6 py-5">
                      {pickup.asset}
                    </td>

                    <td className="px-6 py-5">
                      {pickup.date}
                    </td>

                    <td className="px-6 py-5">
                      {pickup.agent}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[pickup.status]}`}
                      >
                        {pickup.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex gap-2">

                        <Link
                          to={`/admin/pickups/${pickup.id}`}
                          className="h-10 w-10 rounded-xl border border-[#E5EEF8] flex items-center justify-center"
                        >
                          <Eye size={16} />
                        </Link>

                        <button className="h-10 w-10 rounded-xl border border-[#E5EEF8] flex items-center justify-center">
                          <UserPlus size={16} />
                        </button>

                      </div>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
};

export default PickupManagement;