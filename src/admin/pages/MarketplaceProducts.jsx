import { Link } from "react-router-dom";
import {
  Package,
  Plus,
  Eye,
  Pencil,
  IndianRupee,
  Boxes,
  CheckCircle,
} from "lucide-react";
import DataTable from "../components/DataTable";
import AdminLayout from "../layout/AdminLayout";

const products = [
  {
    id: "PRD001",
    title: "Apple iPhone 13",
    category: "Mobile",
    price: 24999,
    stock: 1,
    status: "Published",
  },
  {
    id: "PRD002",
    title: "Dell Latitude 7420",
    category: "Laptop",
    price: 19999,
    stock: 1,
    status: "Draft",
  },
  {
    id: "PRD003",
    title: "Godrej Sofa Set",
    category: "Furniture",
    price: 8500,
    stock: 1,
    status: "Published",
  },
];

const stats = [
  {
    title: "Total Products",
    value: "128",
    icon: Package,
  },
  {
    title: "Published",
    value: "92",
    icon: CheckCircle,
  },
  {
    title: "Inventory Value",
    value: "₹8.2L",
    icon: IndianRupee,
  },
  {
    title: "Stock Units",
    value: "128",
    icon: Boxes,
  },
];

const getStatusClass = (status) => {
  return status === "Published"
    ? "bg-green-100 text-green-700"
    : "bg-yellow-100 text-yellow-700";
};

const columns = [
  {
    key: "product",
    header: "Product",
    searchValue: (item) => `${item.title} ${item.id}`,
    sortValue: (item) => item.title,
    render: (item) => (
      <>
        <p className="font-bold text-[#020B2D]">
          {item.title}
        </p>

        <p className="text-sm text-[#6E7C96]">
          {item.id}
        </p>
      </>
    ),
  },
  {
    key: "category",
    header: "Category",
    accessor: (item) => item.category,
  },
  {
    key: "price",
    header: "Price",
    accessor: (item) => item.price,
    searchValue: (item) => `₹${item.price.toLocaleString()} ${item.price}`,
    cellClassName: "px-6 py-5 font-semibold",
    render: (item) => `₹${item.price.toLocaleString()}`,
  },
  {
    key: "stock",
    header: "Stock",
    accessor: (item) => item.stock,
  },
  {
    key: "status",
    header: "Status",
    accessor: (item) => item.status,
    render: (item) => (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(item.status)}`}>
        {item.status}
      </span>
    ),
  },
  {
    key: "actions",
    header: "Actions",
    searchable: false,
    sortable: false,
    render: (item) => (
      <div className="flex gap-2">
        <Link
          to={`/admin/products/${item.id}`}
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
            transition-all
          "
        >
          <Eye size={16} />
        </Link>

        <Link
          to={`/admin/products/${item.id}`}
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
            transition-all
          "
        >
          <Pencil size={16} />
        </Link>
      </div>
    ),
  },
];

const MarketplaceProducts = () => {
  return (
    <AdminLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>
            <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
              Marketplace Products
            </h1>

            <p className="text-[#6E7C96] mt-2">
              Manage inventory and marketplace listings.
            </p>
          </div>

          <button className="h-12 px-5 rounded-xl bg-[#00B67A] text-white font-semibold flex items-center gap-2">
            <Plus size={18} />
            Add Product
          </button>

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
          data={products}
          columns={columns}
          searchPlaceholder="Search products..."
        />

      </div>

    </AdminLayout>
  );
};

export default MarketplaceProducts;
