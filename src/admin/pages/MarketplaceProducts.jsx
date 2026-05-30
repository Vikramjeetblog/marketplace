import React from "react";
import { Link } from "react-router-dom";
import {
Package,
Search,
Plus,
Eye,
Pencil,
IndianRupee,
Boxes,
CheckCircle,
} from "lucide-react";
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

const MarketplaceProducts = () => {
return ( <AdminLayout>


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
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">

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

    {/* SEARCH */}
    <div className="bg-white border border-[#EEF2F6] rounded-3xl p-5">

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
        />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#E5EEF8] outline-none"
        />

      </div>

    </div>

    {/* MOBILE CARDS */}
    <div className="lg:hidden space-y-4">

      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-[#EEF2F6] rounded-2xl p-4"
        >
          <div className="flex justify-between items-start">

            <div>
              <h3 className="font-bold text-[#020B2D]">
                {item.title}
              </h3>

              <p className="text-sm text-[#6E7C96]">
                {item.id}
              </p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                item.status === "Published"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {item.status}
            </span>

          </div>

         <div className="mt-4 space-y-2 text-sm">

  <div className="flex justify-between">
    <span>Category</span>
    <span>{item.category}</span>
  </div>

  <div className="flex justify-between">
    <span>Price</span>
    <span>₹{item.price.toLocaleString()}</span>
  </div>

  <div className="flex justify-between">
    <span>Stock</span>
    <span>{item.stock}</span>
  </div>

</div>

<Link
  to={`/admin/products/${item.id}`}
  className="
    mt-4
    h-11
    rounded-xl
    bg-[#020B2D]
    text-white
    flex
    items-center
    justify-center
    font-medium
  "
>
  View Product
</Link>

        </div>
      ))}

    </div>

    {/* DESKTOP TABLE */}
    <div className="hidden lg:block bg-white border border-[#EEF2F6] rounded-3xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-[#F8FAFC]">

              <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                Product
              </th>

              <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                Category
              </th>

              <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                Price
              </th>

              <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                Stock
              </th>

              <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm text-[#6E7C96]">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {products.map((item) => (
              <tr
                key={item.id}
                className="border-t border-[#EEF2F6]"
              >

                <td className="px-6 py-5">

                  <p className="font-bold text-[#020B2D]">
                    {item.title}
                  </p>

                  <p className="text-sm text-[#6E7C96]">
                    {item.id}
                  </p>

                </td>

                <td className="px-6 py-5">
                  {item.category}
                </td>

                <td className="px-6 py-5 font-semibold">
                  ₹{item.price.toLocaleString()}
                </td>

                <td className="px-6 py-5">
                  {item.stock}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="px-6 py-5">

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

export default MarketplaceProducts;
