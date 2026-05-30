import {
  Package,
  Wrench,
  Eye,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import AdminLayout from "../layout/AdminLayout";

const inventoryStats = [
  {
    title: "Total Assets",
    value: "186",
    icon: Package,
  },
  {
    title: "Under Inspection",
    value: "24",
    icon: AlertTriangle,
  },
  {
    title: "Under Repair",
    value: "18",
    icon: Wrench,
  },
  {
    title: "Ready To List",
    value: "44",
    icon: CheckCircle,
  },
];

const inventoryItems = [
  {
    id: "INV001",
    asset: "Apple iPhone 13",
    category: "Mobile",
    purchaseCost: 18000,
    repairCost: 500,
    expectedPrice: 24999,
    status: "Ready To List",
  },
  {
    id: "INV002",
    asset: "Dell Latitude 7420",
    category: "Laptop",
    purchaseCost: 15000,
    repairCost: 1500,
    expectedPrice: 22999,
    status: "Repairing",
  },
  {
    id: "INV003",
    asset: "Godrej Sofa Set",
    category: "Furniture",
    purchaseCost: 5000,
    repairCost: 0,
    expectedPrice: 8999,
    status: "Inspection",
  },
];

const statusClasses = {
  Inspection: "bg-yellow-100 text-yellow-700",
  Repairing: "bg-orange-100 text-orange-700",
  "Ready To List": "bg-green-100 text-green-700",
  Listed: "bg-blue-100 text-blue-700",
  Sold: "bg-slate-100 text-slate-700",
};

const columns = [
  {
    key: "id",
    header: "Inventory ID",
    accessor: (item) => item.id,
    cellClassName: "px-6 py-5 font-semibold",
  },
  {
    key: "asset",
    header: "Asset",
    accessor: (item) => item.asset,
  },
  {
    key: "category",
    header: "Category",
    accessor: (item) => item.category,
  },
  {
    key: "purchaseCost",
    header: "Purchase Cost",
    accessor: (item) => item.purchaseCost,
    searchValue: (item) => `₹${item.purchaseCost.toLocaleString()} ${item.purchaseCost}`,
    render: (item) => `₹${item.purchaseCost.toLocaleString()}`,
  },
  {
    key: "repairCost",
    header: "Repair Cost",
    accessor: (item) => item.repairCost,
    searchValue: (item) => `₹${item.repairCost.toLocaleString()} ${item.repairCost}`,
    render: (item) => `₹${item.repairCost.toLocaleString()}`,
  },
  {
    key: "expectedPrice",
    header: "Expected Price",
    accessor: (item) => item.expectedPrice,
    searchValue: (item) => `₹${item.expectedPrice.toLocaleString()} ${item.expectedPrice}`,
    cellClassName: "px-6 py-5 font-semibold",
    render: (item) => `₹${item.expectedPrice.toLocaleString()}`,
  },
  {
    key: "status",
    header: "Status",
    accessor: (item) => item.status,
    render: (item) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClasses[item.status]}`}
      >
        {item.status}
      </span>
    ),
  },
  {
    key: "action",
    header: "Action",
    searchable: false,
    sortable: false,
    render: (item) => (
      <Link
        to={`/admin/inventory/${item.id}`}
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

const Inventory = () => {
  return (
    <AdminLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div>

          <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
            Inventory Management
          </h1>

          <p className="text-[#6E7C96] mt-2">
            Track purchased assets, repairs, inspections and listing readiness.
          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {inventoryStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="bg-white border border-[#EEF2F6] rounded-3xl p-5"
              >
                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-[#6E7C96]">
                      {stat.title}
                    </p>

                    <h2 className="text-2xl lg:text-3xl font-black text-[#020B2D] mt-2">
                      {stat.value}
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
          data={inventoryItems}
          columns={columns}
          searchPlaceholder="Search inventory..."
          minWidth="920px"
        />

      </div>

    </AdminLayout>
  );
};

export default Inventory;
