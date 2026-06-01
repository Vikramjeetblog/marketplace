import React from "react";
import {
  ArrowLeft,
  User,
  MapPin,
  CreditCard,
  Package,
  Truck,
  CheckCircle,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const orders = {
  ORD001: {
    id: "ORD001",
    customer: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 9876543210",
    product: "Apple iPhone 13",
    amount: 24999,
    status: "Delivered",
    paymentStatus: "Paid",
    orderDate: "30 May 2026",
    address:
      "221B MG Road, Bangalore, Karnataka, India",
  },

  ORD002: {
    id: "ORD002",
    customer: "Ankit Verma",
    email: "ankit@example.com",
    phone: "+91 9876543211",
    product: "Dell Latitude 7420",
    amount: 19999,
    status: "Shipped",
    paymentStatus: "Paid",
    orderDate: "29 May 2026",
    address:
      "Sector 18, Noida, Uttar Pradesh, India",
  },

  ORD003: {
    id: "ORD003",
    customer: "Priya Singh",
    email: "priya@example.com",
    phone: "+91 9876543212",
    product: "Godrej Sofa Set",
    amount: 8500,
    status: "Processing",
    paymentStatus: "Pending",
    orderDate: "28 May 2026",
    address:
      "Civil Lines, Lucknow, Uttar Pradesh, India",
  },
};

const OrderDetails = () => {
  const { id } = useParams();

  const order = orders[id];

  if (!order) {
    return (
      <AdminLayout>
        <div className="bg-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black">
            Order Not Found
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
              to="/admin/orders"
              className="inline-flex items-center gap-2 text-[#6E7C96] hover:text-[#020B2D] mb-3"
            >
              <ArrowLeft size={18} />
              Back to Orders
            </Link>

            <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
              Order Details
            </h1>

          </div>

          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
            {order.status}
          </span>

        </div>

        {/* CUSTOMER */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <User className="text-[#00B67A]" />

            <h2 className="text-xl font-bold">
              Customer Information
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <InfoRow label="Customer" value={order.customer} />
            <InfoRow label="Email" value={order.email} />
            <InfoRow label="Phone" value={order.phone} />
            <InfoRow label="Order ID" value={order.id} />

          </div>

        </div>

        {/* PRODUCT */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <Package className="text-[#00B67A]" />

            <h2 className="text-xl font-bold">
              Product Information
            </h2>

          </div>

          <InfoRow
            label="Product"
            value={order.product}
          />

        </div>

        {/* SHIPPING */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <MapPin className="text-[#00B67A]" />

            <h2 className="text-xl font-bold">
              Shipping Address
            </h2>

          </div>

          <p className="text-[#6E7C96]">
            {order.address}
          </p>

        </div>

        {/* PAYMENT */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <CreditCard className="text-[#00B67A]" />

            <h2 className="text-xl font-bold">
              Payment Information
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <InfoRow
              label="Amount"
              value={`₹${order.amount.toLocaleString()}`}
            />

            <InfoRow
              label="Payment Status"
              value={order.paymentStatus}
            />

            <InfoRow
              label="Order Date"
              value={order.orderDate}
            />

          </div>

        </div>

        {/* TIMELINE */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <h2 className="text-xl font-bold mb-6">
            Order Timeline
          </h2>

          <div className="space-y-5">

            <TimelineItem
              icon={CheckCircle}
              title="Order Placed"
              time="30 May 2026"
            />

            <TimelineItem
              icon={Package}
              title="Processing"
              time="30 May 2026"
            />

            <TimelineItem
              icon={Truck}
              title="Shipped"
              time="31 May 2026"
            />

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
      <p className="font-semibold">
        {title}
      </p>

      <p className="text-sm text-[#6E7C96]">
        {time}
      </p>
    </div>

  </div>
);

export default OrderDetails;