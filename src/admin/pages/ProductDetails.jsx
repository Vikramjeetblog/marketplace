import {
  ArrowLeft,
  IndianRupee,
  Package,
  Eye,
  Trash2,
ArrowLeft,
IndianRupee,
Package,
Eye,
Trash2,
} from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const products = {
  PRD001: {
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

  PRD002: {
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

  PRD003: {
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

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const product = location.state?.product || products[id];

  if (!product) {
    return (
      <AdminLayout>
        <div className="bg-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black">
            Product Not Found
          </h2>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>

            <Link
              to="/admin/products"
              className="inline-flex items-center gap-2 text-[#6E7C96] hover:text-[#020B2D] mb-3"
            >
              <ArrowLeft size={18} />
              Back to Products
            </Link>

            <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
              Listing Details
            </h1>

          </div>

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusClass(product.status)}`}
          >
            {product.status}
          </span>

        </div>

        {/* MAIN */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* IMAGES */}
          <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

            <h2 className="text-xl font-bold mb-5">
              Listing Images
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-full h-[220px] rounded-2xl object-cover"
                />
              ))}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            </div>

          </div>

          {/* DETAILS */}
          <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

            <h2 className="text-xl font-bold mb-6">
              Product Information
            </h2>

            <div className="space-y-5">

              <InfoRow label="Product ID" value={product.id} />
              <InfoRow label="Title" value={product.title} />
              <InfoRow label="Category" value={product.category} />
              <InfoRow label="Status" value={product.status} />
              <InfoRow label="Stock" value={product.stock} />
              <InfoRow label="Featured" value={product.featured ? "Yes" : "No"} />

            </div>

          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <h2 className="text-xl font-bold mb-4">
            Description
          </h2>

          <p className="text-[#6E7C96]">
            {product.description}
          </p>

        </div>

        {/* PRICE */}
        <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

          <div className="flex items-center gap-3 mb-4">

            <IndianRupee className="text-[#00B67A]" />

            <h3 className="font-bold">
              Marketplace Price
            </h3>

          </div>

          <p className="text-3xl font-black text-[#020B2D]">
            ₹{product.price.toLocaleString()}
          </p>

        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <Link
            to={`/admin/products/${product.id}/edit`}
            state={{ product }}
            className="
              h-12
              rounded-xl
              bg-[#00B67A]
              text-white
              font-semibold
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <Package size={18} />
            Edit Listing
          </Link>

          <button
            className="
              h-12
              rounded-xl
              border
              border-[#E5EEF8]
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <Eye size={18} />
            Preview Listing
          </button>

          <button
            className="
              h-12
              rounded-xl
              border
              border-red-200
              text-red-600
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <Trash2 size={18} />
            Delete Listing
          </button>

        </div>

      </div>

    </AdminLayout>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between gap-4">
    <span className="text-[#6E7C96]">
      {label}
    </span>

    <span className="font-semibold text-right">
      {value}
    </span>
  </div>
);

export default ProductDetails;
