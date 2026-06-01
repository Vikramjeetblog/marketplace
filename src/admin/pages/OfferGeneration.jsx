import React from "react";
import {
  ArrowLeft,
  IndianRupee,
  Calendar,
  FileText,
  Send,
  Save,
  XCircle,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const requests = {
  RP34821: {
    id: "RP34821",
    seller: "Vikram Singh",
    asset: "Apple iPhone 13",
    category: "Mobile",
    condition: "Excellent",
    requestedPrice: 22000,
    image:
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=1200",
  },

  RP34822: {
    id: "RP34822",
    seller: "Rahul Sharma",
    asset: "Dell Latitude 7420",
    category: "Laptop",
    condition: "Good",
    requestedPrice: 25000,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200",
  },
};

const OfferGeneration = () => {
  const { id } = useParams();

  const request = requests[id];

  if (!request) {
    return (
      <AdminLayout>
        <div className="bg-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black text-[#020B2D]">
            Request Not Found
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
              to={`/admin/requests/${request.id}`}
              className="inline-flex items-center gap-2 text-[#6E7C96] hover:text-[#020B2D] mb-3"
            >
              <ArrowLeft size={18} />
              Back to Request
            </Link>

            <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
              Generate Offer
            </h1>

            <p className="text-[#6E7C96] mt-2">
              Request ID: {request.id}
            </p>

          </div>

          <div className="flex gap-3 flex-wrap">

            <button
              className="
                h-12
                px-5
                rounded-xl
                border
                border-[#E5EEF8]
                flex
                items-center
                gap-2
              "
            >
              <Save size={18} />
              Save Draft
            </button>

            <button
              className="
                h-12
                px-5
                rounded-xl
                bg-[#00B67A]
                text-white
                flex
                items-center
                gap-2
              "
            >
              <Send size={18} />
              Send Offer
            </button>

          </div>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-6">

          {/* LEFT */}
          <div className="space-y-6">

            {/* ASSET */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <h2 className="text-xl font-bold mb-5">
                Asset Information
              </h2>

              <img
                src={request.image}
                alt=""
                className="
                  w-full
                  h-[300px]
                  object-cover
                  rounded-2xl
                "
              />

              <div className="grid md:grid-cols-2 gap-5 mt-6">

                <InfoRow
                  label="Seller"
                  value={request.seller}
                />

                <InfoRow
                  label="Asset"
                  value={request.asset}
                />

                <InfoRow
                  label="Category"
                  value={request.category}
                />

                <InfoRow
                  label="Condition"
                  value={request.condition}
                />

              </div>

            </div>

            {/* NOTES */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <div className="flex items-center gap-3 mb-5">
                <FileText className="text-[#00B67A]" />
                <h2 className="text-xl font-bold">
                  Inspection Notes
                </h2>
              </div>

              <textarea
                rows="6"
                placeholder="Add inspection notes, observations and valuation remarks..."
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

          {/* RIGHT */}
          <div className="space-y-6">

            {/* VALUATION */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <div className="flex items-center gap-3 mb-5">
                <IndianRupee className="text-[#00B67A]" />
                <h2 className="text-xl font-bold">
                  Offer Details
                </h2>
              </div>

              <div className="space-y-4">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Seller Expected Price
                  </label>

                  <input
                    value={request.requestedPrice}
                    readOnly
                    className="
                      w-full
                      h-12
                      px-4
                      rounded-xl
                      border
                      border-[#E5EEF8]
                      bg-[#F8FAFC]
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Estimated Market Value
                  </label>

                  <input
                    type="number"
                    placeholder="20000"
                    className="
                      w-full
                      h-12
                      px-4
                      rounded-xl
                      border
                      border-[#E5EEF8]
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Offer Price
                  </label>

                  <input
                    type="number"
                    placeholder="18500"
                    className="
                      w-full
                      h-12
                      px-4
                      rounded-xl
                      border
                      border-[#E5EEF8]
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Pickup Cost
                  </label>

                  <input
                    type="number"
                    placeholder="500"
                    className="
                      w-full
                      h-12
                      px-4
                      rounded-xl
                      border
                      border-[#E5EEF8]
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Final Payout
                  </label>

                  <input
                    type="number"
                    placeholder="18000"
                    className="
                      w-full
                      h-12
                      px-4
                      rounded-xl
                      border
                      border-[#E5EEF8]
                    "
                  />
                </div>

              </div>

            </div>

            {/* VALIDITY */}
            <div className="bg-white rounded-3xl border border-[#EEF2F6] p-6">

              <div className="flex items-center gap-3 mb-5">
                <Calendar className="text-[#00B67A]" />
                <h2 className="text-xl font-bold">
                  Offer Validity
                </h2>
              </div>

              <input
                type="date"
                className="
                  w-full
                  h-12
                  px-4
                  rounded-xl
                  border
                  border-[#E5EEF8]
                "
              />

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
                Send Offer
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
                <XCircle size={18} />
                Reject Request
              </button>

            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
};

const InfoRow = ({ label, value }) => (
  <div>
    <p className="text-sm text-[#6E7C96] mb-1">
      {label}
    </p>

    <p className="font-semibold text-[#020B2D]">
      {value}
    </p>
  </div>
);

export default OfferGeneration;