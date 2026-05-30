import {
Search,
Filter,
Eye,
Clock3,
IndianRupee,
Package,
TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const requests = [
{
id: "RP34821",
title: "Apple iPhone 13",
category: "Mobile",
amount: 22000,
status: "Pending Review",
date: "Today",
},
{
id: "RP34822",
title: "Godrej Sofa Set",
category: "Furniture",
amount: 7000,
status: "Pending Review",
date: "Today",
},
{
id: "RP34823",
title: "Dell Latitude 7420",
category: "Laptop",
amount: 18000,
status: "Offer Generated",
date: "Yesterday",
},
];

const stats = [
{
title: "Total Requests",
value: "248",
icon: Package,
},
{
title: "Pending Review",
value: "41",
icon: Clock3,
},
{
title: "Offers Generated",
value: "97",
icon: TrendingUp,
},
{
title: "Asset Value",
value: "₹12.4L",
icon: IndianRupee,
},
];

const SellRequests = () => {
return ( <AdminLayout>


  <div className="space-y-8">

    {/* HEADER */}
    <div className="flex items-center justify-between">

      <div>
        <h1 className="text-4xl font-black text-[#020B2D]">
          Sell Requests
        </h1>

        <p className="text-[#6E7C96] mt-2">
          Review incoming asset requests and generate offers.
        </p>
      </div>

    </div>

    {/* STATS */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white rounded-3xl p-6 border border-[#EEF2F6]"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-[#6E7C96]">
                  {item.title}
                </p>

                <h2 className="text-3xl font-black text-[#020B2D] mt-2">
                  {item.value}
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">
                <Icon
                  size={24}
                  className="text-[#00B67A]"
                />
              </div>

            </div>
          </div>
        );
      })}

    </div>

    {/* FILTER BAR */}
    <div className="bg-white border border-[#EEF2F6] rounded-3xl p-5">

      <div className="flex flex-col lg:flex-row gap-4">

        <div className="flex-1 relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
          />

          <input
            type="text"
            placeholder="Search requests..."
            className="w-full h-12 pl-12 pr-4 rounded-2xl border border-[#E5EEF8] outline-none"
          />

        </div>

        <button className="h-12 px-5 rounded-2xl border border-[#E5EEF8] flex items-center gap-2">
          <Filter size={18} />
          Filters
        </button>

      </div>

    </div>

    {/* REQUEST TABLE */}
    <div className="bg-white rounded-3xl border border-[#EEF2F6] overflow-hidden">

      <div className="px-6 py-5 border-b border-[#EEF2F6]">

        <h2 className="font-bold text-[#020B2D]">
          Incoming Requests
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[760px]">

          <thead>

            <tr className="bg-[#F8FAFC] text-left">

              <th className="px-6 py-4 text-sm text-[#6E7C96]">
                Request
              </th>

              <th className="px-6 py-4 text-sm text-[#6E7C96]">
                Category
              </th>

              <th className="px-6 py-4 text-sm text-[#6E7C96]">
                Expected Price
              </th>

              <th className="px-6 py-4 text-sm text-[#6E7C96]">
                Status
              </th>

              <th className="px-6 py-4 text-sm text-[#6E7C96]">
                Date
              </th>

              <th className="px-6 py-4 text-sm text-[#6E7C96]">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {requests.map((item) => (
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
                  ₹{item.amount.toLocaleString()}
                </td>

                <td className="px-6 py-5">

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF7E6] text-[#B7791F]">
                    {item.status}
                  </span>

                </td>

                <td className="px-6 py-5">
                  {item.date}
                </td>

                <td className="px-6 py-5">

                  <Link
  to={`/admin/requests/${item.id}`}
  className="
    h-10
    px-4
    rounded-xl
    bg-[#020B2D]
    text-white
    inline-flex
    items-center
    gap-2
    hover:bg-[#04103A]
    transition-all
  "
>
  <Eye size={16} />
  View
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

export default SellRequests;
