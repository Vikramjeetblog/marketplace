import React from "react";

import {
  MapPin,
  X,
  Home,
  Building2,
  MapPinned,
} from "lucide-react";

const AddressModal = ({
  showModal,
  setShowModal,
  formData,
  setFormData,
  handleChange,
  handleSave,
  editingId,
  errors,
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">

      <div className="min-h-screen flex items-center justify-center p-4">

        {/* MODAL */}
        <div className="w-full max-w-[400px] max-h-[92vh] overflow-y-auto bg-white rounded-[24px] shadow-2xl scrollbar-hide">

          {/* HEADER */}
          <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-5 py-4 border-b border-[#EEF2F6]">

            <div>
              <h2 className="text-[20px] font-black text-[#020B2D]">
                {editingId
                  ? "Edit Address"
                  : "Add Address"}
              </h2>

              <p className="mt-1 text-[11px] text-[#6E7C96]">
                Delivery & pickup details
              </p>
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={() =>
                setShowModal(false)
              }
              className="w-9 h-9 rounded-full hover:bg-[#F7F9FC] flex items-center justify-center transition-all"
            >
              <X
                size={18}
                className="text-[#020B2D]"
              />
            </button>
          </div>

          {/* BODY */}
          <div className="px-5 py-4">

            {/* LOCATION BUTTON */}
            <button
              type="button"
              className="w-full h-[52px] rounded-xl bg-[#F8FBFD] border border-[#E5EEF8] flex items-center gap-3 px-4 hover:border-[#00B67A] transition-all"
            >

              <div className="w-9 h-9 rounded-full bg-[#00B67A]/10 flex items-center justify-center">

                <MapPin
                  size={17}
                  className="text-[#00B67A]"
                />
              </div>

              <div className="text-left">
                <p className="text-[13px] font-bold text-[#020B2D]">
                  Use Current Location
                </p>

                <p className="text-[10px] text-[#6E7C96]">
                  Autofill your address
                </p>
              </div>
            </button>

            {/* FORM */}
            <div className="mt-4 space-y-2">

              {/* PINCODE */}
              <div>
                <input
                  type="text"
                  name="pincode"
                  maxLength={6}
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Enter Pincode*"
                  className={`w-full h-[46px] border-b bg-transparent text-[14px] outline-none ${
                    errors?.pincode
                      ? "border-red-500"
                      : "border-[#D7E0EA] focus:border-[#00B67A]"
                  }`}
                />

                {errors?.pincode && (
                  <p className="mt-[2px] text-[11px] text-red-500">
                    {errors.pincode}
                  </p>
                )}
              </div>

              {/* FLAT */}
              <div>
                <input
                  type="text"
                  name="flat"
                  value={formData.flat}
                  onChange={handleChange}
                  placeholder="Flat no. / House no. / Office*"
                  className={`w-full h-[46px] border-b bg-transparent text-[14px] outline-none ${
                    errors?.flat
                      ? "border-red-500"
                      : "border-[#D7E0EA] focus:border-[#00B67A]"
                  }`}
                />

                {errors?.flat && (
                  <p className="mt-[2px] text-[11px] text-red-500">
                    {errors.flat}
                  </p>
                )}
              </div>

              {/* ADDRESS */}
              <div>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Locality / Area / Street*"
                  rows="1"
                  className={`w-full border-b bg-transparent py-2 text-[14px] outline-none resize-none ${
                    errors?.address
                      ? "border-red-500"
                      : "border-[#D7E0EA] focus:border-[#00B67A]"
                  }`}
                />

                {errors?.address && (
                  <p className="mt-[2px] text-[11px] text-red-500">
                    {errors.address}
                  </p>
                )}
              </div>

              {/* LANDMARK */}
              <div>
                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="Landmark (Optional)"
                  className="w-full h-[46px] border-b border-[#D7E0EA] bg-transparent text-[14px] outline-none focus:border-[#00B67A]"
                />
              </div>

              {/* PHONE */}
              <div>
                <input
                  type="text"
                  name="phone"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  className={`w-full h-[46px] border-b bg-transparent text-[14px] outline-none ${
                    errors?.phone
                      ? "border-red-500"
                      : "border-[#D7E0EA] focus:border-[#00B67A]"
                  }`}
                />

                {errors?.phone && (
                  <p className="mt-[2px] text-[11px] text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* ALTERNATE */}
              <div>
                <input
                  type="text"
                  name="alternatePhone"
                  maxLength={10}
                  value={
                    formData.alternatePhone
                  }
                  onChange={handleChange}
                  placeholder="Alternate Number (Optional)"
                  className={`w-full h-[46px] border-b bg-transparent text-[14px] outline-none ${
                    errors?.alternatePhone
                      ? "border-red-500"
                      : "border-[#D7E0EA] focus:border-[#00B67A]"
                  }`}
                />

                {errors?.alternatePhone && (
                  <p className="mt-[2px] text-[11px] text-red-500">
                    {
                      errors.alternatePhone
                    }
                  </p>
                )}
              </div>
            </div>

            {/* SAVE AS */}
            <div className="mt-5">

              <p className="text-[12px] font-semibold text-[#020B2D] mb-3">
                Save As
              </p>

              <div className="flex items-center gap-2 flex-wrap">

                {/* HOME */}
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      type: "HOME",
                    })
                  }
                  className={`h-9 px-3 rounded-full text-[12px] font-bold flex items-center gap-2 transition-all ${
                    formData.type === "HOME"
                      ? "bg-[#00B67A] text-white"
                      : "bg-[#F8FBFD] border border-[#E5EEF8] text-[#020B2D]"
                  }`}
                >
                  <Home size={14} />
                  Home
                </button>

                {/* OFFICE */}
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      type: "OFFICE",
                    })
                  }
                  className={`h-9 px-3 rounded-full text-[12px] font-bold flex items-center gap-2 transition-all ${
                    formData.type ===
                    "OFFICE"
                      ? "bg-[#020B2D] text-white"
                      : "bg-[#F8FBFD] border border-[#E5EEF8] text-[#020B2D]"
                  }`}
                >
                  <Building2 size={14} />
                  Office
                </button>

                {/* OTHER */}
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      type: "OTHER",
                    })
                  }
                  className={`h-9 px-3 rounded-full text-[12px] font-bold flex items-center gap-2 transition-all ${
                    formData.type ===
                    "OTHER"
                      ? "bg-[#FFB800] text-white"
                      : "bg-[#F8FBFD] border border-[#E5EEF8] text-[#020B2D]"
                  }`}
                >
                  <MapPinned size={14} />
                  Other
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="button"
              onClick={handleSave}
              className="mt-5 mb-1 w-full h-[48px] rounded-xl bg-[#00B67A] text-white text-[14px] font-bold hover:opacity-90 transition-all"
            >
              {editingId
                ? "Update Address"
                : "Save Address"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;