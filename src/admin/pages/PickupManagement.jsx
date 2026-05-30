import {
  Truck,
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
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

const columns = [
  {
    key: "id",
    header: "Pickup ID",
    accessor: (pickup) => pickup.id,
    cellClassName: "px-6 py-5 font-semibold",
  },
  {
    key: "seller",
    header: "Seller",
    accessor: (pickup) => pickup.seller,
  },
  {
    key: "asset",
    header: "Asset",
    accessor: (pickup) => pickup.asset,
  },
  {
    key: "date",
    header: "Date",
    accessor: (pickup) => pickup.date,
  },
  {
    key: "agent",
    header: "Agent",
    accessor: (pickup) => pickup.agent,
  },
  {
    key: "status",
    header: "Status",
    accessor: (pickup) => pickup.status,
    render: (pickup) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[pickup.status]}`}
      >
        {pickup.status}
      </span>
    ),
  },
  {
    key: "actions",
    header: "Actions",
    searchable: false,
    sortable: false,
    render: (pickup) => (
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
    ),
  },
];

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
          data={pickups}
          columns={columns}
          searchPlaceholder="Search pickups..."
          minWidth="760px"
        />

      </div>

    </AdminLayout>
  );
};

export default PickupManagement;
