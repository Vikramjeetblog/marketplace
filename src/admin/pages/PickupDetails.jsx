import React from "react";
import {
  ArrowLeft,
  User,
  Phone,
  MapPin,
  Package,
  Truck,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const pickups = {
  PU001: {
    id: "PU001",
    seller: "Vikram Singh",
    phone: "+91 9876543210",
    asset: "Apple iPhone 13",
    category: "Mobile",
    pickupDate: "30 May 2026",
    status: "Scheduled",
    agent: "Rahul Kumar",
    address:
      "Sector 18, Noida, Uttar Pradesh, India",
    notes:
      "Seller requested pickup between 2 PM and 5 PM.",
  },

  PU002: {
    id: "PU002",
    seller: "Aman Verma",
    phone: "+91 9876543211",
    asset: "Godrej Sofa Set",
    category: "Furniture",
    pickupDate: "31 May 2026",
    status: "Pending Assignment",
    agent: "Not Assigned",
    address:
      "Indirapuram, Ghaziabad, Uttar Pradesh, India",
    notes:
      "Large furniture item. Vehicle required.",
  },

  PU003: {
    id: "PU003",
    seller: "Rohit Sharma",
    phone: "+91 9876543212",
    asset: "Dell Latitude 7420",
    category: "Laptop",
    pickupDate: "28 May 2026",
    status: "Completed",
    agent: "Amit Sharma",
    address:
      "MG Road, Bangalore, Karnataka, India",
    notes:
      "Asset collected successfully.",
  },
};

const PickupDetails = () => {
  const { id } = useParams();

  const pickup = pickups[id];

  if (!pickup) {
    return (
      <AdminLayout>
        <div className="bg-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black text-[#020B2D]">
            Pickup Not Found
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
              to="/admin/pickups"
              className="inline-flex items-center gap-2 text-[#6E7C96] hover:text-[#020B2D] mb-3"
            >
              <ArrowLeft size={18} />
              Back to Pickups
            </Link>

            <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
              Pickup Details
            </h1>

          </div>

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            {pickup.status}
          </span>

        </div>

        {/* SELLER INFO */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-5">
            <User className="text-[#00B67A]" />
            <h2 className="text-xl font-bold text-[#020B2D]">
              Seller Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <InfoRow
              label="Seller Name"
              value={pickup.seller}
            />

            <InfoRow
              label="Phone Number"
              value={pickup.phone}
            />

          </div>

        </div>

        {/* ASSET INFO */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-5">
            <Package className="text-[#00B67A]" />
            <h2 className="text-xl font-bold text-[#020B2D]">
              Asset Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <InfoRow
              label="Asset"
              value={pickup.asset}
            />

            <InfoRow
              label="Category"
              value={pickup.category}
            />

          </div>

        </div>

        {/* PICKUP DETAILS */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-5">
            <Truck className="text-[#00B67A]" />
            <h2 className="text-xl font-bold text-[#020B2D]">
              Pickup Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <InfoRow
              label="Pickup Date"
              value={pickup.pickupDate}
            />

            <InfoRow
              label="Assigned Agent"
              value={pickup.agent}
            />

            <InfoRow
              label="Status"
              value={pickup.status}
            />

          </div>

        </div>

        {/* ADDRESS */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-5">
            <MapPin className="text-[#00B67A]" />
            <h2 className="text-xl font-bold text-[#020B2D]">
              Pickup Address
            </h2>
          </div>

          <p className="text-[#6E7C96]">
            {pickup.address}
          </p>

        </div>

        {/* NOTES */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <h2 className="text-xl font-bold text-[#020B2D] mb-4">
            Pickup Notes
          </h2>

          <p className="text-[#6E7C96] leading-relaxed">
            {pickup.notes}
          </p>

        </div>

        {/* TIMELINE */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <h2 className="text-xl font-bold text-[#020B2D] mb-6">
            Pickup Timeline
          </h2>

          <div className="space-y-5">

            <TimelineItem
              icon={Calendar}
              title="Pickup Scheduled"
              time={pickup.pickupDate}
            />

            <TimelineItem
              icon={Truck}
              title="Agent Assigned"
              time="Pending / Completed"
            />

            <TimelineItem
              icon={CheckCircle}
              title="Pickup Completed"
              time="Awaiting Completion"
            />

          </div>

        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <button className="h-12 rounded-xl bg-[#00B67A] text-white font-semibold">
            Mark Completed
          </button>

          <button className="h-12 rounded-xl border border-[#E5EEF8] font-semibold">
            Reassign Agent
          </button>

          <button className="h-12 rounded-xl border border-[#E5EEF8] font-semibold">
            Reschedule Pickup
          </button>

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

const TimelineItem = ({
  icon: Icon,
  title,
  time,
}) => (
  <div className="flex items-center gap-4">

    <div className="w-10 h-10 rounded-full bg-[#00B67A]/10 flex items-center justify-center">
      <Icon
        size={18}
        className="text-[#00B67A]"
      />
    </div>

    <div>
      <p className="font-semibold text-[#020B2D]">
        {title}
      </p>

      <p className="text-sm text-[#6E7C96]">
        {time}
      </p>
    </div>

  </div>
);

export default PickupDetails;