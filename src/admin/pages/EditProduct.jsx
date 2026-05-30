import {
  ArrowLeft,
  Upload,
  Save,
  Trash2,
  Eye,
  Package,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const products = {
  PRD001: {
    id: "PRD001",
    name: "Apple iPhone 13",
    category: "Mobile",
    brand: "Apple",
    condition: "Excellent",
    acquisitionCost: 18000,
    sellingPrice: 24999,
    discountPrice: 22999,
    stock: 1,
    sku: "APL-IP13-001",
    status: "Published",
    description:
      "128GB variant with excellent battery health and original accessories included.",
    image:
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=1200",
  },
};

const EditProduct = () => {
  const { id } = useParams();

  const product = products[id];

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
              to={`/admin/products/${product.id}`}
              className="inline-flex items-center gap-2 text-[#6E7C96] hover:text-[#020B2D] mb-3"
            >
              <ArrowLeft size={18} />
              Back to Product
            </Link>

            <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
              Edit Product
            </h1>

            <p className="text-[#6E7C96] mt-2">
              Product ID: {product.id}
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <button className="h-12 px-5 rounded-xl border border-[#E5EEF8] flex items-center gap-2">
              <Eye size={18} />
              Preview
            </button>

            <button className="h-12 px-5 rounded-xl bg-[#00B67A] text-white flex items-center gap-2">
              <Save size={18} />
              Update Product
            </button>

          </div>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-6">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* IMAGES */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <h2 className="text-xl font-bold mb-5">
                Product Images
              </h2>

              <img
                src={product.image}
                alt=""
                className="w-full h-[350px] rounded-2xl object-cover"
              />

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
                rows="8"
                defaultValue={product.description}
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
                Product Information
              </h2>

              <div className="space-y-4">

                <input
                  defaultValue={product.name}
                  placeholder="Product Name"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

                <input
                  defaultValue={product.brand}
                  placeholder="Brand"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

                <input
                  defaultValue={product.category}
                  placeholder="Category"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

                <select
                  defaultValue={product.condition}
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                >
                  <option>Excellent</option>
                  <option>Very Good</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>

              </div>

            </div>

            {/* PRICING */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <h2 className="text-xl font-bold mb-5">
                Pricing
              </h2>

              <div className="space-y-4">

                <input
                  defaultValue={product.acquisitionCost}
                  placeholder="Acquisition Cost"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

                <input
                  defaultValue={product.sellingPrice}
                  placeholder="Marketplace Price"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

                <input
                  defaultValue={product.discountPrice}
                  placeholder="Discount Price"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

              </div>

            </div>

            {/* INVENTORY */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <div className="flex items-center gap-3 mb-5">
                <Package className="text-[#00B67A]" />
                <h2 className="text-xl font-bold">
                  Inventory
                </h2>
              </div>

              <div className="space-y-4">

                <input
                  defaultValue={product.sku}
                  placeholder="SKU"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

                <input
                  defaultValue={product.stock}
                  placeholder="Stock"
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                />

                <select
                  defaultValue={product.status}
                  className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8]"
                >
                  <option>Published</option>
                  <option>Draft</option>
                  <option>Out of Stock</option>
                  <option>Archived</option>
                </select>

              </div>

            </div>

            {/* ACTIONS */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <button
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
                Delete Product
              </button>

            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
};

export default EditProduct;