import {
  Users,
  UserCheck,
  IndianRupee,
  ShoppingBag,
  Search,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const stats = [
  {
    title: "Total Customers",
    value: "1,248",
    icon: Users,
  },
  {
    title: "Active Customers",
    value: "986",
    icon: UserCheck,
  },
  {
    title: "Orders Placed",
    value: "3,452",
    icon: ShoppingBag,
  },
  {
    title: "Customer Revenue",
    value: "₹12.4L",
    icon: IndianRupee,
  },
];

const customers = [
  {
    id: "CUS001",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    orders: 4,
    spent: 68000,
    status: "Active",
  },
  {
    id: "CUS002",
    name: "Priya Singh",
    email: "priya@example.com",
    orders: 2,
    spent: 18500,
    status: "Active",
  },
  {
    id: "CUS003",
    name: "Ankit Verma",
    email: "ankit@example.com",
    orders: 1,
    spent: 19999,
    status: "Active",
  },
];

const Customers = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
            Customers
          </h1>

          <p className="text-[#6E7C96] mt-2">
            Manage customers and monitor marketplace activity.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

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
              placeholder="Search customers..."
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#E5EEF8] outline-none"
            />

          </div>

        </div>

        {/* MOBILE */}
        <div className="lg:hidden space-y-4">

          {customers.map((customer) => (
            <div
              key={customer.id}
              className="bg-white border border-[#EEF2F6] rounded-2xl p-4"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h3 className="font-bold text-[#020B2D]">
                    {customer.name}
                  </h3>

                  <p className="text-sm text-[#6E7C96]">
                    {customer.email}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  {customer.status}
                </span>

              </div>

              <div className="mt-4 space-y-2 text-sm">

                <div className="flex justify-between">
                  <span>Orders</span>
                  <span>{customer.orders}</span>
                </div>

                <div className="flex justify-between">
                  <span>Total Spent</span>
                  <span>
                    ₹{customer.spent.toLocaleString()}
                  </span>
                </div>

              </div>

              <Link
                to={`/admin/customers/${customer.id}`}
                className="
                  mt-4
                  h-11
                  rounded-xl
                  bg-[#020B2D]
                  text-white
                  flex
                  items-center
                  justify-center
                  font-medium
                "
              >
                View Customer
              </Link>

            </div>
          ))}

        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden lg:block bg-white border border-[#EEF2F6] rounded-3xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[760px]">

              <thead>

                <tr className="bg-[#F8FAFC]">

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Orders
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Total Spent
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-t border-[#EEF2F6]"
                  >

                    <td className="px-6 py-5">

                      <p className="font-semibold text-[#020B2D]">
                        {customer.name}
                      </p>

                      <p className="text-sm text-[#6E7C96]">
                        {customer.email}
                      </p>

                    </td>

                    <td className="px-6 py-5">
                      {customer.orders}
                    </td>

                    <td className="px-6 py-5 font-semibold">
                      ₹{customer.spent.toLocaleString()}
                    </td>

                    <td className="px-6 py-5">

                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        {customer.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <Link
                        to={`/admin/customers/${customer.id}`}
                        className="
                          h-10
                          w-10
                          rounded-xl
                          border
                          border-[#E5EEF8]
                          flex
                          items-center
                          justify-center
                          hover:bg-[#F8FAFC]
                        "
                      >
                        <Eye size={16} />
                      </Link>

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

export default Customers;