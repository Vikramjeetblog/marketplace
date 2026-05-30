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
  X,
} from "lucide-react";
import ConfirmModal from "../../components/common/ConfirmModal";
import DataTable from "../components/DataTable";
import AdminLayout from "../layout/AdminLayout";

const initialProducts = [
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
    description:
      "128GB variant with excellent battery health and minimal wear.",
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=1200",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200",
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
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1200",
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
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200",
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

const emptyListingForm = {
  title: "",
  category: "",
  price: "",
  stock: "",
  status: "Draft",
  description: "",
  images: "",
  featured: false,
};

const getStatusClass = (status) => {
  const classes = {
    Draft: "bg-yellow-100 text-yellow-700",
    Published: "bg-green-100 text-green-700",
    Archived: "bg-slate-100 text-slate-700",
    "Out Of Stock": "bg-red-100 text-red-700",
  };

  return classes[status] || "bg-yellow-100 text-yellow-700";
};

const formatCurrency = (value) => {
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(1)}L`;
  }

  return `₹${value.toLocaleString()}`;
};

const getImageFieldValue = (images) => images.join("\n");

const parseImages = (value) => {
  return value
    .split("\n")
    .map((image) => image.trim())
    .filter(Boolean);
};

const ListingFormModal = ({
  isOpen,
  mode,
  formData,
  onChange,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm overflow-y-auto">

      <div className="min-h-screen flex items-center justify-center p-4">

        {/* MODAL */}
        <div className="w-full max-w-[640px] bg-white rounded-[32px] overflow-hidden shadow-2xl">

          {/* HEADER */}
          <div className="flex items-start justify-between px-6 pt-6 pb-5 border-b border-[#EEF2F6]">

            <div>
              <h2 className="text-[32px] leading-none font-black text-[#020B2D]">
                {mode === "edit" ? "Edit Listing" : "Create Listing"}
              </h2>

              <p className="mt-3 text-sm text-[#6E7C96]">
                {mode === "edit"
                  ? "Update customer-facing marketplace listing details."
                  : "Create a customer-facing marketplace listing."}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F7F9FC] transition-all"
            >
              <X
                size={22}
                className="text-[#020B2D]"
              />
            </button>
          </div>

          {/* BODY */}
          <form
            onSubmit={onSubmit}
            className="px-6 py-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Product Name
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={onChange}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Category
                </label>

                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={onChange}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={onChange}
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] bg-white outline-none"
                >
                  {listingStatuses.map((status) => (
                    <option
                      key={status}
                      value={status}
                    >
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  min="0"
                  value={formData.price}
                  onChange={onChange}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Stock
                </label>

                <input
                  type="number"
                  name="stock"
                  min="0"
                  value={formData.stock}
                  onChange={onChange}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Description
                </label>

                <textarea
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={onChange}
                  required
                  className="w-full rounded-xl border border-[#E5EEF8] p-4 outline-none resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2 text-[#020B2D]">
                  Images (frontend only)
                </label>

                <textarea
                  name="images"
                  rows="3"
                  value={formData.images}
                  onChange={onChange}
                  placeholder="Paste image URLs, one per line"
                  className="w-full rounded-xl border border-[#E5EEF8] p-4 outline-none resize-none"
                />
              </div>

              <label className="md:col-span-2 flex items-center justify-between rounded-xl border border-[#E5EEF8] p-4">
                <span className="font-semibold text-[#020B2D]">
                  Featured Listing
                </span>

                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={onChange}
                  className="w-5 h-5"
                />
              </label>

            </div>

            {/* ACTIONS */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button
                type="button"
                onClick={onClose}
                className="h-[52px] rounded-2xl border border-[#00B67A] text-[#00B67A] text-[14px] font-bold hover:bg-[#00B67A]/5 transition-all"
              >
                Cancel
              </button>
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

              <button
                type="submit"
                className="h-[52px] rounded-2xl bg-[#00B67A] text-white text-[14px] font-bold hover:opacity-90 transition-all"
              >
                {mode === "edit" ? "Save Changes" : "Create Listing"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const MarketplaceProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState("create");
  const [formData, setFormData] = useState(emptyListingForm);
  const [selectedListing, setSelectedListing] = useState(null);
  const [deleteListing, setDeleteListing] = useState(null);

  const stats = [
    {
      title: "Total Products",
      value: products.length.toLocaleString(),
      icon: Package,
    },
    {
      title: "Published",
      value: products
        .filter((item) => item.status === "Published")
        .length.toLocaleString(),
      icon: CheckCircle,
    },
    {
      title: "Inventory Value",
      value: formatCurrency(
        products.reduce((total, item) => total + item.price * item.stock, 0)
      ),
      icon: IndianRupee,
    },
    {
      title: "Stock Units",
      value: products
        .reduce((total, item) => total + item.stock, 0)
        .toLocaleString(),
      icon: Boxes,
    },
  ];

  const openCreateModal = () => {
    setFormMode("create");
    setSelectedListing(null);
    setFormData(emptyListingForm);
    setIsFormOpen(true);
  };

  const openEditModal = (listing) => {
    setFormMode("edit");
    setSelectedListing(listing);
    setFormData({
      title: listing.title,
      category: listing.category,
      price: String(listing.price),
      stock: String(listing.stock),
      status: listing.status,
      description: listing.description,
      images: getImageFieldValue(listing.images),
      featured: listing.featured,
    });
    setIsFormOpen(true);
  };

  const closeFormModal = () => {
    setIsFormOpen(false);
    setSelectedListing(null);
    setFormData(emptyListingForm);
  };

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const listingData = {
      title: formData.title,
      category: formData.category,
      price: Number(formData.price),
      stock: Number(formData.stock),
      status: formData.status,
      description: formData.description,
      images: parseImages(formData.images),
      featured: formData.featured,
    };

    if (formMode === "edit" && selectedListing) {
      setProducts((currentProducts) =>
        currentProducts.map((item) =>
          item.id === selectedListing.id
            ? {
                ...item,
                ...listingData,
              }
            : item
        )
      );

      toast.success("Listing updated successfully");
      closeFormModal();
      return;
    }

    const nextIdNumber = products.reduce((highestId, item) => {
      const numericId = Number(item.id.replace("PRD", ""));

      return Number.isNaN(numericId) ? highestId : Math.max(highestId, numericId);
    }, 0) + 1;

    const newListing = {
      id: `PRD${String(nextIdNumber).padStart(3, "0")}`,
      ...listingData,
    };

    setProducts((currentProducts) => [newListing, ...currentProducts]);
    toast.success("Listing created successfully");
    closeFormModal();
  };

  const handleDeleteConfirm = () => {
    if (!deleteListing) return;

    setProducts((currentProducts) =>
      currentProducts.filter((item) => item.id !== deleteListing.id)
    );
    setDeleteListing(null);
    toast.success("Listing deleted successfully");
  };

  const handleStatusChange = (listingId, status) => {
    setProducts((currentProducts) =>
      currentProducts.map((item) =>
        item.id === listingId
          ? {
              ...item,
              status,
            }
          : item
      )
    );
    toast.success("Listing status updated");
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
        <select
          value={item.status}
          onChange={(event) => handleStatusChange(item.id, event.target.value)}
          className={`px-3 py-1 rounded-full text-xs font-semibold outline-none border-0 ${getStatusClass(item.status)}`}
        >
          {listingStatuses.map((status) => (
            <option
              key={status}
              value={status}
            >
              {status}
            </option>
          ))}
        </select>
      ),
    },
    {
      key: "featured",
      header: "Featured",
      accessor: (item) => (item.featured ? "Yes" : "No"),
      render: (item) => (
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F8FAFC] text-[#020B2D]">
          {item.featured ? "Yes" : "No"}
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
            state={{ product: item }}
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

          <button
            type="button"
            onClick={() => openEditModal(item)}
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
          </button>

          <button
            type="button"
            onClick={() => setDeleteListing(item)}
            className="h-10 w-10 rounded-xl border border-[#E5EEF8] flex items-center justify-center hover:bg-[#F8FAFC] transition-all"
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

        {/* HEADER */}
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
            type="button"
            onClick={openCreateModal}
            className="h-12 px-5 rounded-xl bg-[#00B67A] text-white font-semibold flex items-center gap-2"
          >
            <Plus size={18} />
            Create Listing
          </button>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {stats.map((item) => {
            const Icon = item.icon;

    

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
          searchPlaceholder="Search listings..."
          minWidth="960px"
          searchPlaceholder="Search products..."
        />

      </div>

      <ListingFormModal
        isOpen={isFormOpen}
        mode={formMode}
        formData={formData}
        onChange={handleFormChange}
        onClose={closeFormModal}
        onSubmit={handleFormSubmit}
      />

      <ConfirmModal
        isOpen={Boolean(deleteListing)}
        title="Delete Listing"
        description="Are you sure you want to delete this listing?"
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteListing(null)}
      />

    </AdminLayout>
  );
};

export default MarketplaceProducts;
