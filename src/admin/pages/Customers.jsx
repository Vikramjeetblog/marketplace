import {
  Users,
  UserCheck,
  IndianRupee,
  ShoppingBag,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
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

const columns = [
  {
    key: "customer",
    header: "Customer",
    searchValue: (customer) => `${customer.name} ${customer.email}`,
    sortValue: (customer) => customer.name,
    render: (customer) => (
      <>
        <p className="font-semibold text-[#020B2D]">
          {customer.name}
        </p>

        <p className="text-sm text-[#6E7C96]">
          {customer.email}
        </p>
      </>
    ),
  },
  {
    key: "orders",
    header: "Orders",
    accessor: (customer) => customer.orders,
  },
  {
    key: "spent",
    header: "Total Spent",
    accessor: (customer) => customer.spent,
    searchValue: (customer) => `₹${customer.spent.toLocaleString()} ${customer.spent}`,
    cellClassName: "px-6 py-5 font-semibold",
    render: (customer) => `₹${customer.spent.toLocaleString()}`,
  },
  {
    key: "status",
    header: "Status",
    accessor: (customer) => customer.status,
    render: (customer) => (
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
        {customer.status}
      </span>
    ),
  },
  {
    key: "action",
    header: "Action",
    searchable: false,
    sortable: false,
    render: (customer) => (
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
    ),
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

        <DataTable
          data={customers}
          columns={columns}
          searchPlaceholder="Search customers..."
        />

      </div>
    </AdminLayout>
  );
};

export default Customers;
