import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  IndianRupee,
  CheckCircle,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const customers = {
  CUS001: {
    id: "CUS001",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 9876543210",
    status: "Active",
    orders: 4,
    totalSpent: 68000,
    joined: "15 Jan 2026",
    address:
      "221B MG Road, Bangalore, Karnataka, India",
    recentOrders: [
      {
        id: "ORD001",
        product: "Apple iPhone 13",
        amount: 24999,
      },
      {
        id: "ORD007",
        product: "Air Conditioner",
        amount: 22000,
      },
    ],
  },

  CUS002: {
    id: "CUS002",
    name: "Priya Singh",
    email: "priya@example.com",
    phone: "+91 9876543211",
    status: "Active",
    orders: 2,
    totalSpent: 18500,
    joined: "05 Feb 2026",
    address:
      "Civil Lines, Lucknow, Uttar Pradesh, India",
    recentOrders: [
      {
        id: "ORD003",
        product: "Godrej Sofa Set",
        amount: 8500,
      },
    ],
  },

  CUS003: {
    id: "CUS003",
    name: "Ankit Verma",
    email: "ankit@example.com",
    phone: "+91 9876543212",
    status: "Active",
    orders: 1,
    totalSpent: 19999,
    joined: "20 Mar 2026",
    address:
      "Sector 18, Noida, Uttar Pradesh, India",
    recentOrders: [
      {
        id: "ORD002",
        product: "Dell Latitude 7420",
        amount: 19999,
      },
    ],
  },
};

const CustomerDetails = () => {
  const { id } = useParams();

  const customer = customers[id];

  if (!customer) {
    return (
      <AdminLayout>
        <div className="bg-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black text-[#020B2D]">
            Customer Not Found
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
              to="/admin/customers"
              className="inline-flex items-center gap-2 text-[#6E7C96] hover:text-[#020B2D] mb-3"
            >
              <ArrowLeft size={18} />
              Back to Customers
            </Link>

            <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
              Customer Details
            </h1>

          </div>

          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
            {customer.status}
          </span>

        </div>

        {/* PROFILE */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-[#00B67A] text-white flex items-center justify-center text-2xl font-bold">
              {customer.name.charAt(0)}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#020B2D]">
                {customer.name}
              </h2>

              <p className="text-[#6E7C96]">
                Customer ID: {customer.id}
              </p>
            </div>

          </div>

        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* CONTACT */}
          <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

            <div className="flex items-center gap-3 mb-5">
              <User className="text-[#00B67A]" />
              <h3 className="text-xl font-bold">
                Contact Information
              </h3>
            </div>

            <div className="space-y-5">

              <InfoRow
                icon={<Mail size={18} />}
                label="Email"
                value={customer.email}
              />

              <InfoRow
                icon={<Phone size={18} />}
                label="Phone"
                value={customer.phone}
              />

              <InfoRow
                icon={<CheckCircle size={18} />}
                label="Joined"
                value={customer.joined}
              />

            </div>

          </div>

          {/* ADDRESS */}
          <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

            <div className="flex items-center gap-3 mb-5">
              <MapPin className="text-[#00B67A]" />
              <h3 className="text-xl font-bold">
                Address
              </h3>
            </div>

            <p className="text-[#6E7C96] leading-relaxed">
              {customer.address}
            </p>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

            <div className="flex items-center gap-3 mb-3">
              <ShoppingBag className="text-[#00B67A]" />
              <span className="font-semibold">
                Total Orders
              </span>
            </div>

            <h2 className="text-4xl font-black text-[#020B2D]">
              {customer.orders}
            </h2>

          </div>

          <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

            <div className="flex items-center gap-3 mb-3">
              <IndianRupee className="text-[#00B67A]" />
              <span className="font-semibold">
                Total Spend
              </span>
            </div>

            <h2 className="text-4xl font-black text-[#020B2D]">
              ₹{customer.totalSpent.toLocaleString()}
            </h2>

          </div>

        </div>

        {/* RECENT ORDERS */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <h3 className="text-xl font-bold text-[#020B2D] mb-5">
            Recent Orders
          </h3>

          <div className="space-y-4">

            {customer.recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between border border-[#EEF2F6] rounded-2xl p-4"
              >
                <div>

                  <p className="font-semibold text-[#020B2D]">
                    {order.product}
                  </p>

                  <p className="text-sm text-[#6E7C96]">
                    {order.id}
                  </p>

                </div>

                <span className="font-bold text-[#020B2D]">
                  ₹{order.amount.toLocaleString()}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </AdminLayout>
  );
};

const InfoRow = ({
  icon,
  label,
  value,
}) => (
  <div className="flex items-start gap-3">

    <div className="mt-1 text-[#00B67A]">
      {icon}
    </div>

    <div>

      <p className="text-sm text-[#6E7C96]">
        {label}
      </p>

      <p className="font-semibold text-[#020B2D]">
        {value}
      </p>

    </div>

  </div>
);

export default CustomerDetails;