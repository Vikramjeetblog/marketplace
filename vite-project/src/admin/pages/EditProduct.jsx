import { useState } from "react";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  Upload,
  Save,
  Trash2,
  Eye,
} from "lucide-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ConfirmModal from "../../components/common/ConfirmModal";
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
      "128GB variant with excellent battery health and original accessories included.",
    images: [
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=1200",
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
    ],
    featured: false,
  },
};

const listingStatuses = [
  "Draft",
  "Published",
  "Archived",
  "Out Of Stock",
];

const getImageFieldValue = (images = []) => images.join("\n");

const parseImages = (value) => {
  return value
    .split("\n")
    .map((image) => image.trim())
    .filter(Boolean);
};

const EditProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product || products[id];
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [formData, setFormData] = useState(() => ({
    title: product?.title || "",
    category: product?.category || "",
    price: product?.price ? String(product.price) : "",
    stock: product?.stock ? String(product.stock) : "",
    status: product?.status || "Draft",
    description: product?.description || "",
    images: product?.images ? getImageFieldValue(product.images) : "",
    featured: Boolean(product?.featured),
  }));

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

  const images = parseImages(formData.images);
  const previewImage = images[0] || product.images?.[0];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    toast.success("Listing updated successfully");
  };

  const handleDelete = () => {
    setIsDeleteOpen(false);
    toast.success("Listing deleted successfully");
    navigate("/admin/products");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>

            <Link
              to={`/admin/products/${product.id}`}
              state={{ product }}
              className="inline-flex items-center gap-2 text-[#6E7C96] hover:text-[#020B2D] mb-3"
            >
              <ArrowLeft size={18} />
              Back to Listing
            </Link>

            <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
              Edit Listing
            </h1>

            <p className="text-[#6E7C96] mt-2">
              Product ID: {product.id}
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <Link
              to={`/admin/products/${product.id}`}
              state={{ product }}
              className="h-12 px-5 rounded-xl border border-[#E5EEF8] flex items-center gap-2"
            >
              <Eye size={18} />
              Preview
            </Link>

            <button
              type="button"
              onClick={handleSave}
              className="h-12 px-5 rounded-xl bg-[#00B67A] text-white flex items-center gap-2"
            >
              <Save size={18} />
              Update Listing
            </button>

          </div>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-6">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* IMAGES */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <h2 className="text-xl font-bold mb-5">
                Listing Images
              </h2>

              {previewImage && (
                <img
                  src={previewImage}
                  alt=""
                  className="w-full h-[350px] rounded-2xl object-cover"
                />
              )}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">

                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="
                      h-[90px]
                      rounded-xl
                      border-2
                      border-dashed
                      border-[#D9E2EC]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Upload size={20} />
                  </div>
                ))}

              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <h2 className="text-xl font-bold mb-5">
                Description
              </h2>

              <textarea
                name="description"
                rows="8"
                value={formData.description}
                onChange={handleChange}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#E5EEF8]
                  p-4
                  outline-none
                  resize-none
                "
              />

            </div>

            {/* IMAGE URLS */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <h2 className="text-xl font-bold mb-5">
                Images (frontend only)
              </h2>

              <textarea
                name="images"
                rows="4"
                value={formData.images}
                onChange={handleChange}
                placeholder="Paste image URLs, one per line"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#E5EEF8]
                  p-4
                  outline-none
                  resize-none
                "
              />

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* PRODUCT INFO */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <h2 className="text-xl font-bold mb-5">
                Listing Information
              </h2>

              <div className="space-y-4">

                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

                <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Category"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
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

                <label className="flex items-center justify-between rounded-xl border border-[#E5EEF8] p-4">
                  <span className="font-semibold text-[#020B2D]">
                    Featured Listing
                  </span>

                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />
                </label>

              </div>

            </div>

            {/* PRICING */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <h2 className="text-xl font-bold mb-5">
                Pricing
              </h2>

              <div className="space-y-4">

                <input
                  type="number"
                  name="price"
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Marketplace Price"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

                <input
                  type="number"
                  name="stock"
                  min="0"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="Stock"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

              </div>

            </div>

            {/* LISTING ACTIONS */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <button
                type="button"
                onClick={handleSave}
                className="
                  w-full
                  h-12
                  rounded-xl
                  bg-[#00B67A]
                  text-white
                  font-semibold
                  mb-3
                "
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={() => setIsDeleteOpen(true)}
                className="
                  w-full
                  h-12
                  rounded-xl
                  border
                  border-red-200
                  text-red-600
                  font-semibold
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

        </div>

      </div>

      <ConfirmModal
        isOpen={isDeleteOpen}
        title="Delete Listing"
        description="Are you sure you want to delete this listing?"
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        onCancel={() => setIsDeleteOpen(false)}
      />
    </AdminLayout>
  );
};

export default EditProduct;
