import React from "react";
import {
  ArrowLeft,
  Package,
  Wrench,
  IndianRupee,
  FileText,
  CheckCircle,
  Eye,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const inventoryItems = {
  INV001: {
    id: "INV001",
    asset: "Apple iPhone 13",
    category: "Mobile",
    condition: "Excellent",
    purchaseCost: 18000,
    repairCost: 500,
    expectedPrice: 24999,
    status: "Ready To List",
    acquiredDate: "20 May 2026",
    technician: "Rahul Kumar",
    inspectionNotes:
      "Minor scratches on frame. Battery health 92%. Fully functional.",
    repairNotes:
      "Screen polished and charging port cleaned.",
    image:
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=1200",
  },

  INV002: {
    id: "INV002",
    asset: "Dell Latitude 7420",
    category: "Laptop",
    condition: "Good",
    purchaseCost: 15000,
    repairCost: 1500,
    expectedPrice: 22999,
    status: "Repairing",
    acquiredDate: "18 May 2026",
    technician: "Amit Singh",
    inspectionNotes:
      "Keyboard keys damaged. Battery replacement required.",
    repairNotes:
      "Battery ordered. Keyboard replacement pending.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200",
  },
};

const statusClasses = {
  Inspection: "bg-yellow-100 text-yellow-700",
  Repairing: "bg-orange-100 text-orange-700",
  "Ready To List": "bg-green-100 text-green-700",
  Listed: "bg-blue-100 text-blue-700",
  Sold: "bg-slate-100 text-slate-700",
};

const InventoryDetails = () => {
  const { id } = useParams();

  const item = inventoryItems[id];

  if (!item) {
    return (
      <AdminLayout>
        <div className="bg-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black">
            Inventory Item Not Found
          </h2>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>

            <Link
              to="/admin/inventory"
              className="inline-flex items-center gap-2 text-[#6E7C96] hover:text-[#020B2D] mb-3"
            >
              <ArrowLeft size={18} />
              Back to Inventory
            </Link>

            <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
              Inventory Details
            </h1>

            <p className="text-[#6E7C96] mt-2">
              Inventory ID: {item.id}
            </p>

          </div>

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${statusClasses[item.status]}`}
          >
            {item.status}
          </span>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6">

          {/* LEFT */}
          <div className="space-y-6">

            {/* IMAGE */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <img
                src={item.image}
                alt=""
                className="w-full h-[380px] object-cover rounded-2xl"
              />

            </div>

            {/* INSPECTION */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <div className="flex items-center gap-3 mb-5">

                <FileText className="text-[#00B67A]" />

                <h2 className="text-xl font-bold">
                  Inspection Report
                </h2>

              </div>

              <p className="text-[#6E7C96] leading-relaxed">
                {item.inspectionNotes}
              </p>

            </div>

            {/* REPAIR */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <div className="flex items-center gap-3 mb-5">

                <Wrench className="text-[#00B67A]" />

                <h2 className="text-xl font-bold">
                  Repair Log
                </h2>

              </div>

              <p className="text-[#6E7C96] leading-relaxed">
                {item.repairNotes}
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* ASSET INFO */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <div className="flex items-center gap-3 mb-5">

                <Package className="text-[#00B67A]" />

                <h2 className="text-xl font-bold">
                  Asset Information
                </h2>

              </div>

              <div className="space-y-4">

                <InfoRow
                  label="Asset"
                  value={item.asset}
                />

                <InfoRow
                  label="Category"
                  value={item.category}
                />

                <InfoRow
                  label="Condition"
                  value={item.condition}
                />

                <InfoRow
                  label="Acquired Date"
                  value={item.acquiredDate}
                />

                <InfoRow
                  label="Technician"
                  value={item.technician}
                />

              </div>

            </div>

            {/* COST BREAKDOWN */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <div className="flex items-center gap-3 mb-5">

                <IndianRupee className="text-[#00B67A]" />

                <h2 className="text-xl font-bold">
                  Cost Breakdown
                </h2>

              </div>

              <div className="space-y-4">

                <InfoRow
                  label="Purchase Cost"
                  value={`₹${item.purchaseCost.toLocaleString()}`}
                />

                <InfoRow
                  label="Repair Cost"
                  value={`₹${item.repairCost.toLocaleString()}`}
                />

                <InfoRow
                  label="Expected Sale Price"
                  value={`₹${item.expectedPrice.toLocaleString()}`}
                />

              </div>

            </div>

            {/* ACTIONS */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <button
                className="
                  w-full
                  h-12
                  rounded-xl
                  bg-[#00B67A]
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  mb-3
                "
              >
                <CheckCircle size={18} />
                Mark Ready To List
              </button>

              <Link
                to="/admin/products"
                className="
                  w-full
                  h-12
                  rounded-xl
                  border
                  border-[#E5EEF8]
                  flex
                  items-center
                  justify-center
                  gap-2
                  font-semibold
                "
              >
                <Eye size={18} />
                Create Marketplace Listing
              </Link>

            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
};

const InfoRow = ({ label, value }) => (
  <div>
    <p className="text-sm text-[#6E7C96] mb-1">
      {label}
    </p>

    <p className="font-semibold text-[#020B2D]">
      {value}
    </p>
  </div>
);

export default InventoryDetails;