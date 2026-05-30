import {
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  Eye,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import AdminLayout from "../layout/AdminLayout";

const stats = [
  {
    title: "Total Orders",
    value: "184",
    icon: ShoppingCart,
  },
  {
    title: "Processing",
    value: "23",
    icon: Package,
  },
  {
    title: "Shipped",
    value: "41",
    icon: Truck,
  },
  {
    title: "Delivered",
    value: "120",
    icon: CheckCircle,
  },
];

const orders = [
  {
    id: "ORD001",
    customer: "Rahul Sharma",
    product: "Apple iPhone 13",
    amount: 24999,
    status: "Delivered",
    date: "30 May 2026",
  },
  {
    id: "ORD002",
    customer: "Ankit Verma",
    product: "Dell Latitude 7420",
    amount: 19999,
    status: "Shipped",
    date: "29 May 2026",
  },
  {
    id: "ORD003",
    customer: "Priya Singh",
    product: "Godrej Sofa Set",
    amount: 8500,
    status: "Processing",
    date: "28 May 2026",
  },
];

const statusClasses = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
};

const columns = [
  {
    key: "id",
    header: "Order ID",
    accessor: (order) => order.id,
    cellClassName: "px-6 py-5 font-semibold",
  },
  {
    key: "customer",
    header: "Customer",
    accessor: (order) => order.customer,
  },
  {
    key: "product",
    header: "Product",
    accessor: (order) => order.product,
  },
  {
    key: "amount",
    header: "Amount",
    accessor: (order) => order.amount,
    searchValue: (order) => `₹${order.amount.toLocaleString()} ${order.amount}`,
    cellClassName: "px-6 py-5 font-semibold",
    render: (order) => `₹${order.amount.toLocaleString()}`,
  },
  {
    key: "status",
    header: "Status",
    accessor: (order) => order.status,
    render: (order) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClasses[order.status]}`}
      >
        {order.status}
      </span>
    ),
  },
  {
    key: "date",
    header: "Date",
    accessor: (order) => order.date,
  },
  {
    key: "action",
    header: "Action",
    searchable: false,
    sortable: false,
    render: (order) => (
      <Link
        to={`/admin/orders/${order.id}`}
        className="h-10 w-10 rounded-xl border border-[#E5EEF8] flex items-center justify-center hover:bg-[#F8FAFC]"
      >
        <Eye size={16} />
      </Link>
    ),
  },
];

const Orders = () => {
  return (
    <AdminLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
            Orders
          </h1>

          <p className="text-[#6E7C96] mt-2">
            Manage customer purchases and fulfillment.
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
          data={orders}
          columns={columns}
          searchPlaceholder="Search orders..."
          minWidth="760px"
        />
        {/* SEARCH */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-5">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
            />

            <input
              type="text"
              placeholder="Search orders..."
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#E5EEF8] outline-none"
            />

          </div>

        </div>

        {/* MOBILE */}
        <div className="lg:hidden space-y-4">

          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-[#EEF2F6] rounded-2xl p-4"
            >
              <div className="flex justify-between">

                <div>
                  <h3 className="font-bold text-[#020B2D]">
                    {order.product}
                  </h3>

                  <p className="text-sm text-[#6E7C96]">
                    {order.id}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClasses[order.status]}`}
                >
                  {order.status}
                </span>

              </div>

              <div className="mt-4 space-y-2 text-sm">

                <div className="flex justify-between">
                  <span>Customer</span>
                  <span>{order.customer}</span>
                </div>

                <div className="flex justify-between">
                  <span>Amount</span>
                  <span>₹{order.amount.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Date</span>
                  <span>{order.date}</span>
                </div>

              </div>

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
                    Order ID
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Product
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Date
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-t border-[#EEF2F6]"
                  >

                    <td className="px-6 py-5 font-semibold">
                      {order.id}
                    </td>

                    <td className="px-6 py-5">
                      {order.customer}
                    </td>

                    <td className="px-6 py-5">
                      {order.product}
                    </td>

                    <td className="px-6 py-5 font-semibold">
                      ₹{order.amount.toLocaleString()}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClasses[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      {order.date}
                    </td>

                    <td className="px-6 py-5">

                      <Link
  to={`/admin/orders/${order.id}`}
  className="h-10 w-10 rounded-xl border border-[#E5EEF8] flex items-center justify-center hover:bg-[#F8FAFC]"
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

export default Orders;
