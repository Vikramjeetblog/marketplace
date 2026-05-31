import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  Package,
  Plus,
  Eye,
  Pencil,
  IndianRupee,
  Boxes,
  CheckCircle,
  Trash2,
} from "lucide-react";

import ConfirmModal from "../../components/common/ConfirmModal";
import DataTable from "../components/DataTable";
import AdminLayout from "../layout/AdminLayout";

const initialProducts = [
  {
    id: "PRD001",
    title: "Apple iPhone 13",
    category: "Mobile",
    price: 24999,
    stock: 1,
    status: "Published",
    description:
      "128GB variant with excellent battery health and minimal wear.",
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=1200",
    ],
    featured: true,
  },
  {
    id: "PRD002",
    title: "Dell Latitude 7420",
    category: "Laptop",
    price: 19999,
    stock: 1,
    status: "Draft",
    description:
      "Intel i7, 16GB RAM, 512GB SSD, original charger included.",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200",
    ],
    featured: false,
  },
  {
    id: "PRD003",
    title: "Godrej Sofa Set",
    category: "Furniture",
    price: 8500,
    stock: 1,
    status: "Published",
    description:
      "Well-maintained 3-seater sofa with minor cosmetic wear.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
    ],
    featured: false,
  },
];

const listingStatuses = [
  "Draft",
  "Published",
  "Archived",
  "Out Of Stock",
];

const getStatusClass = (status) => {
  const classes = {
    Draft: "bg-yellow-100 text-yellow-700",
    Published: "bg-green-100 text-green-700",
    Archived: "bg-slate-100 text-slate-700",
    "Out Of Stock": "bg-red-100 text-red-700",
  };

  return classes[status] || classes.Draft;
};

const MarketplaceProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [deleteItem, setDeleteItem] = useState(null);

  const stats = [
    {
      title: "Total Products",
      value: products.length,
      icon: Package,
    },
    {
      title: "Published",
      value: products.filter(
        (item) => item.status === "Published"
      ).length,
      icon: CheckCircle,
    },
    {
      title: "Inventory Value",
      value: `₹${products
        .reduce(
          (total, item) => total + item.price * item.stock,
          0
        )
        .toLocaleString()}`,
      icon: IndianRupee,
    },
    {
      title: "Stock Units",
      value: products.reduce(
        (total, item) => total + item.stock,
        0
      ),
      icon: Boxes,
    },
  ];

  const handleDelete = () => {
    if (!deleteItem) return;

    setProducts((prev) =>
      prev.filter((item) => item.id !== deleteItem.id)
    );

    toast.success("Product deleted");
    setDeleteItem(null);
  };

  const columns = [
    {
      key: "product",
      header: "Product",
      searchValue: (item) =>
        `${item.title} ${item.id}`,
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
      render: (item) =>
        `₹${item.price.toLocaleString()}`,
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
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(
            item.status
          )}`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "featured",
      header: "Featured",
      accessor: (item) =>
        item.featured ? "Yes" : "No",
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
            state={{ product: item }}
            className="h-10 w-10 rounded-xl border border-[#E5EEF8] flex items-center justify-center hover:bg-[#F8FAFC]"
          >
            <Eye size={16} />
          </Link>

          <Link
            to={`/admin/products/${item.id}/edit`}
            state={{ product: item }}
            className="h-10 w-10 rounded-xl border border-[#E5EEF8] flex items-center justify-center hover:bg-[#F8FAFC]"
          >
            <Pencil size={16} />
          </Link>

          <button
            onClick={() => setDeleteItem(item)}
            className="h-10 w-10 rounded-xl border border-[#E5EEF8] flex items-center justify-center hover:bg-[#F8FAFC]"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
              Marketplace Products
            </h1>

            <p className="text-[#6E7C96] mt-2">
              Manage customer-facing marketplace listings.
            </p>
          </div>

          <button
            className="h-12 px-5 rounded-xl bg-[#00B67A] text-white font-semibold flex items-center gap-2"
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>

        {/* Stats */}
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

                    <h2 className="text-2xl font-black text-[#020B2D] mt-2">
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

        {/* Table */}
        <DataTable
          data={products}
          columns={columns}
          searchPlaceholder="Search products..."
          minWidth="960px"
        />
      </div>

      <ConfirmModal
        isOpen={Boolean(deleteItem)}
        title="Delete Product"
        description="Are you sure you want to delete this product?"
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        onCancel={() => setDeleteItem(null)}
      />
    </AdminLayout>
  );
};

export default MarketplaceProducts;