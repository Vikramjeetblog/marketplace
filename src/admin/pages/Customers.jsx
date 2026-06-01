import {
  Users,
  UserCheck,
  IndianRupee,
  ShoppingBag,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import DataTable from "../components/DataTable";
import AdminLayout from "../layout/AdminLayout";
import { getUsers } from "../../api/userApi";

const columns = [
  {
    key: "customer",
    header: "Customer",
    searchValue: (customer) =>
      `${customer.name} ${customer.email}`,
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
    searchValue: (customer) =>
      `₹${customer.spent.toLocaleString()} ${customer.spent}`,
    cellClassName: "px-6 py-5 font-semibold",
    render: (customer) =>
      `₹${customer.spent.toLocaleString()}`,
  },
  {
    key: "status",
    header: "Status",
    accessor: (customer) => customer.status,
    render: (customer) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${
          customer.status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
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
        className="h-10 w-10 rounded-xl border border-[#E5EEF8] flex items-center justify-center hover:bg-[#F8FAFC]"
      >
        <Eye size={16} />
      </Link>
    ),
  },
];

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();

        const formattedUsers = response.data.users.map(
          (user) => ({
            id: user.id,
            name: user.full_name,
            email: user.email,
            phone: user.phone,
            orders: 0,
            spent: 0,
            status: user.is_verified
              ? "Active"
              : "Inactive",
          })
        );

        setCustomers(formattedUsers);
      } catch (error) {
        console.error("Fetch Users Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const stats = [
    {
      title: "Total Customers",
      value: customers.length,
      icon: Users,
    },
    {
      title: "Active Customers",
      value: customers.filter(
        (customer) =>
          customer.status === "Active"
      ).length,
      icon: UserCheck,
    },
    {
      title: "Orders Placed",
      value: customers.reduce(
        (total, customer) =>
          total + customer.orders,
        0
      ),
      icon: ShoppingBag,
    },
    {
      title: "Customer Revenue",
      value: `₹${customers
        .reduce(
          (total, customer) =>
            total + customer.spent,
          0
        )
        .toLocaleString()}`,
      icon: IndianRupee,
    },
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <p className="text-lg font-medium text-[#6E7C96]">
            Loading customers...
          </p>
        </div>
      </AdminLayout>
    );
  }

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