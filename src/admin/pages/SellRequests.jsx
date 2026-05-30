import {
  Eye,
  Clock3,
  IndianRupee,
  Package,
  TrendingUp,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
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

const columns = [
  {
    key: "request",
    header: "Request",
    searchValue: (item) => `${item.title} ${item.id}`,
    sortValue: (item) => item.title,
    render: (item) => (
      <>
        <p className="font-bold text-[#020B2D]">{item.title}</p>
        <p className="text-sm text-[#6E7C96]">{item.id}</p>
      </>
    ),
  },
  {
    key: "category",
    header: "Category",
    accessor: (item) => item.category,
  },
  {
    key: "amount",
    header: "Expected Price",
    accessor: (item) => item.amount,
    render: (item) => `₹${item.amount.toLocaleString()}`,
  },
  {
    key: "status",
    header: "Status",
    accessor: (item) => item.status,
    render: (item) => (
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF7E6] text-[#B7791F]">
        {item.status}
      </span>
    ),
  },
  {
    key: "date",
    header: "Date",
    accessor: (item) => item.date,
  },
  {
    key: "action",
    header: "Action",
    searchable: false,
    sortable: false,
    render: (item) => (
      <Link
        to={`/admin/requests/${item.id}`}
        className="h-10 px-4 rounded-xl bg-[#020B2D] text-white inline-flex items-center gap-2"
      >
        <Eye size={16} />
        View
      </Link>
    ),
  },
];

const SellRequests = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black text-[#020B2D]">
              Sell Requests
            </h1>

            <p className="text-[#6E7C96] mt-2">
              Review incoming asset requests and generate offers.
            </p>
          </div>

          <button className="h-12 px-5 rounded-2xl border border-[#E5EEF8] flex items-center gap-2">
            <Filter size={18} />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
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
                    <Icon size={24} className="text-[#00B67A]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <DataTable
          data={requests}
          columns={columns}
          title="Incoming Requests"
          searchPlaceholder="Search requests..."
        />

      </div>
    </AdminLayout>
  );
};

export default SellRequests;
