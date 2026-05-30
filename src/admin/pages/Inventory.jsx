import {
  Package,
  Search,
  Wrench,
  Eye,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
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

        {/* SEARCH */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-5">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
            />

            <input
              type="text"
              placeholder="Search inventory..."
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#E5EEF8] outline-none"
            />

          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[760px]">

              <thead>

                <tr className="bg-[#F8FAFC]">

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Inventory ID
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Asset
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Category
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Purchase Cost
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Repair Cost
                  </th>

                  <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                    Expected Price
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

                {inventoryItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-[#EEF2F6]"
                  >

                    <td className="px-6 py-5 font-semibold">
                      {item.id}
                    </td>

                    <td className="px-6 py-5">
                      {item.asset}
                    </td>

                    <td className="px-6 py-5">
                      {item.category}
                    </td>

                    <td className="px-6 py-5">
                      ₹{item.purchaseCost.toLocaleString()}
                    </td>

                    <td className="px-6 py-5">
                      ₹{item.repairCost.toLocaleString()}
                    </td>

                    <td className="px-6 py-5 font-semibold">
                      ₹{item.expectedPrice.toLocaleString()}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClasses[item.status]}`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

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

export default Inventory;