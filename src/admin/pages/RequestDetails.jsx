import React from "react";
import {
ArrowLeft,
IndianRupee,
Tag,
XCircle,
CheckCircle,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const requests = {
RP34821: {
id: "RP34821",
title: "Apple iPhone 13",
category: "Mobile",
brand: "Apple",
condition: "Excellent",
age: "1 Year",
expectedPrice: 22000,
status: "Pending Review",
description:
"128GB variant. Battery health 89%. No scratches. Original box available.",
submittedDate: "30 May 2026",
images: [
"https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=1200",
"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200",
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200",
],
},

RP34822: {
id: "RP34822",
title: "Godrej Sofa Set",
category: "Furniture",
brand: "Godrej",
condition: "Good",
age: "2 Years",
expectedPrice: 7000,
status: "Pending Review",
description:
"3-seater sofa in good condition. Minor wear and tear. No structural damage.",
submittedDate: "29 May 2026",
images: [
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200",
"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200",
],
},

RP34823: {
id: "RP34823",
title: "Dell Latitude 7420",
category: "Laptop",
brand: "Dell",
condition: "Very Good",
age: "18 Months",
expectedPrice: 18000,
status: "Offer Generated",
description:
"Intel i7 Processor, 16GB RAM, 512GB SSD. Fully functional with original charger and excellent battery life.",
submittedDate: "28 May 2026",
images: [
"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200",
"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1200",
"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200",
],
},
};

const RequestDetails = () => {
const { id } = useParams();

const request = requests[id];

if (!request) {
return ( <AdminLayout> <div className="bg-white rounded-3xl p-10 text-center"> <h2 className="text-3xl font-black text-[#020B2D]">
Request Not Found </h2>


      <p className="text-[#6E7C96] mt-2">
        The requested asset could not be found.
      </p>

      <Link
        to="/admin/requests"
        className="inline-flex mt-6 px-5 py-3 rounded-xl bg-[#020B2D] text-white"
      >
        Back to Requests
      </Link>
    </div>
  </AdminLayout>
);


}

return ( <AdminLayout> 

  <div className="space-y-6">


    {/* HEADER */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

      <div>

        <Link
          to="/admin/requests"
          className="inline-flex items-center gap-2 text-[#6E7C96] hover:text-[#020B2D] mb-3"
        >
          <ArrowLeft size={18} />
          Back to Requests
        </Link>

        <h1 className="text-3xl lg:text-4xl font-black text-[#020B2D]">
          Request Details
        </h1>

        <p className="text-[#6E7C96] mt-2">
          Review asset information and generate an offer.
        </p>

      </div>

      <span className="px-4 py-2 rounded-full bg-[#FFF7E6] text-[#B7791F] text-sm font-semibold">
        {request.status}
      </span>

    </div>

    {/* CONTENT */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

      {/* IMAGES */}
      <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

        <h2 className="text-xl font-bold text-[#020B2D] mb-5">
          Submitted Images
        </h2>

        <div className="grid grid-cols-2 gap-4">

          {request.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={request.title}
              className="w-full h-[180px] object-cover rounded-2xl"
            />
          ))}

        </div>

      </div>

      {/* DETAILS */}
      <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

        <h2 className="text-xl font-bold text-[#020B2D] mb-6">
          Asset Information
        </h2>

        <div className="space-y-5">

          <InfoRow label="Request ID" value={request.id} />
          <InfoRow label="Title" value={request.title} />
          <InfoRow label="Category" value={request.category} />
          <InfoRow label="Brand" value={request.brand} />
          <InfoRow label="Condition" value={request.condition} />
          <InfoRow label="Age" value={request.age} />
          <InfoRow label="Submitted" value={request.submittedDate} />

        </div>

      </div>

    </div>

    {/* DESCRIPTION */}
    <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

      <h2 className="text-xl font-bold text-[#020B2D] mb-4">
        Description
      </h2>

      <p className="text-[#6E7C96] leading-relaxed">
        {request.description}
      </p>

    </div>

    {/* PRICING */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

        <div className="flex items-center gap-3 mb-4">
          <IndianRupee className="text-[#00B67A]" />
          <h3 className="font-bold text-[#020B2D]">
            Expected Price
          </h3>
        </div>

        <p className="text-4xl font-black text-[#020B2D]">
          ₹{request.expectedPrice.toLocaleString()}
        </p>

      </div>

      <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

        <div className="flex items-center gap-3 mb-4">
          <Tag className="text-[#00B67A]" />
          <h3 className="font-bold text-[#020B2D]">
            Generate Offer
          </h3>
        </div>

        <input
          type="number"
          placeholder="Enter offer amount"
          className="w-full h-12 px-4 rounded-xl border border-[#E5EEF8] outline-none"
        />

      </div>

    </div>

    {/* ACTIONS */}
    <div className="bg-white border border-[#EEF2F6] rounded-3xl p-6">

      <div className="flex flex-col md:flex-row gap-4">

       <Link
  to={`/admin/requests/${request.id}/offer`}
  className="
    h-12
    px-5
    rounded-xl
    bg-[#00B67A]
    text-white
    flex
    items-center
    justify-center
    font-semibold
  "
>
  Generate Offer
</Link>

        <button className="flex-1 h-12 rounded-xl border border-red-200 text-red-600 font-semibold flex items-center justify-center gap-2">
          <XCircle size={18} />
          Reject Request
        </button>

      </div>

    </div>

  </div>
</AdminLayout>


);
};

const InfoRow = ({ label, value }) => (

  <div className="flex justify-between gap-4">
    <span className="text-[#6E7C96]">{label}</span>
    <span className="font-semibold text-right">{value}</span>
  </div>
);

export default RequestDetails;
