import React from "react";

import {
  X,
  Landmark,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

const PaymentMethodModal = ({
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
        <div className="w-full max-w-[430px] max-h-[92vh] overflow-y-auto bg-white rounded-[24px] shadow-2xl scrollbar-hide">

          {/* HEADER */}
          <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-5 py-4 border-b border-[#EEF2F6]">

            <div>
              <h2 className="text-[20px] font-black text-[#020B2D]">
                {editingId
                  ? "Edit Payment Method"
                  : formData.type ===
                    "UPI"
                  ? "Add UPI ID"
                  : "Add Bank Details"}
              </h2>

              <p className="mt-1 text-[11px] text-[#6E7C96]">
                Secure encrypted payment
                details
              </p>
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={() =>
                setShowModal(false)
              }
              className="w-9 h-9 rounded-full hover:bg-[#F7F9FC] flex items-center justify-center"
            >
              <X
                size={18}
                className="text-[#020B2D]"
              />
            </button>
          </div>

          {/* BODY */}
          <div className="px-5 py-4">

            {/* TYPE */}
            <div className="flex items-center gap-2 mb-5">

              {/* UPI */}
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    type: "UPI",
                  })
                }
                className={`h-10 px-4 rounded-full text-[12px] font-bold flex items-center gap-2 transition-all ${
                  formData.type ===
                  "UPI"
                    ? "bg-[#00B67A] text-white"
                    : "bg-[#F8FBFD] border border-[#E5EEF8] text-[#020B2D]"
                }`}
              >
                <Smartphone size={15} />
                UPI
              </button>

              {/* BANK */}
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    type: "BANK",
                  })
                }
                className={`h-10 px-4 rounded-full text-[12px] font-bold flex items-center gap-2 transition-all ${
                  formData.type ===
                  "BANK"
                    ? "bg-[#020B2D] text-white"
                    : "bg-[#F8FBFD] border border-[#E5EEF8] text-[#020B2D]"
                }`}
              >
                <Landmark size={15} />
                Bank
              </button>
            </div>

            {/* FORM */}
            <div className="space-y-3">

              {/* NAME */}
              <div>
                <input
                  type="text"
                  name="holderName"
                  value={
                    formData.holderName
                  }
                  onChange={handleChange}
                  placeholder="Beneficiary Name*"
                  className={`w-full h-[46px] border-b bg-transparent text-[14px] outline-none ${
                    errors?.holderName
                      ? "border-red-500"
                      : "border-[#D7E0EA] focus:border-[#00B67A]"
                  }`}
                />

                {errors?.holderName && (
                  <p className="mt-[2px] text-[11px] text-red-500">
                    {
                      errors.holderName
                    }
                  </p>
                )}
              </div>

              {/* UPI */}
              {formData.type ===
                "UPI" && (
                <div>
                  <input
                    type="text"
                    name="upiId"
                    value={
                      formData.upiId
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter UPI ID*"
                    className={`w-full h-[46px] border-b bg-transparent text-[14px] outline-none ${
                      errors?.upiId
                        ? "border-red-500"
                        : "border-[#D7E0EA] focus:border-[#00B67A]"
                    }`}
                  />

                  {errors?.upiId && (
                    <p className="mt-[2px] text-[11px] text-red-500">
                      {errors.upiId}
                    </p>
                  )}
                </div>
              )}

              {/* BANK */}
              {formData.type ===
                "BANK" && (
                <>
                  {/* BANK NAME */}
                  <div>
                    <input
                      type="text"
                      name="bankName"
                      value={
                        formData.bankName
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Bank Name*"
                      className={`w-full h-[46px] border-b bg-transparent text-[14px] outline-none ${
                        errors?.bankName
                          ? "border-red-500"
                          : "border-[#D7E0EA] focus:border-[#00B67A]"
                      }`}
                    />

                    {errors?.bankName && (
                      <p className="mt-[2px] text-[11px] text-red-500">
                        {
                          errors.bankName
                        }
                      </p>
                    )}
                  </div>

                  {/* ACCOUNT */}
                  <div>
                    <input
                      type="tel"
                      inputMode="numeric"
                      name="accountNumber"
                      value={
                        formData.accountNumber
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Account Number*"
                      className={`w-full h-[46px] border-b bg-transparent text-[14px] outline-none ${
                        errors?.accountNumber
                          ? "border-red-500"
                          : "border-[#D7E0EA] focus:border-[#00B67A]"
                      }`}
                    />

                    {errors?.accountNumber && (
                      <p className="mt-[2px] text-[11px] text-red-500">
                        {
                          errors.accountNumber
                        }
                      </p>
                    )}
                  </div>

                  {/* IFSC */}
                  <div>
                    <input
                      type="text"
                      name="ifsc"
                      value={
                        formData.ifsc
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="IFSC Code*"
                      className={`w-full h-[46px] border-b bg-transparent text-[14px] uppercase outline-none ${
                        errors?.ifsc
                          ? "border-red-500"
                          : "border-[#D7E0EA] focus:border-[#00B67A]"
                      }`}
                    />

                    {errors?.ifsc && (
                      <p className="mt-[2px] text-[11px] text-red-500">
                        {errors.ifsc}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* SECURITY */}
            <div className="mt-5 h-11 rounded-xl bg-[#F8FBFD] flex items-center gap-3 px-4 border border-[#EEF2F6]">

              <ShieldCheck
                size={16}
                className="text-[#00B67A]"
              />

              <p className="text-[12px] text-[#6E7C96]">
                Your payment details
                are encrypted securely
              </p>
            </div>

            {/* BUTTON */}
            <button
              type="button"
              onClick={handleSave}
              className="mt-5 w-full h-[48px] rounded-xl bg-[#00B67A] text-white text-[14px] font-bold hover:opacity-90 transition-all"
            >
              {editingId
                ? "Update Payment Method"
                : "Save Payment Method"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodModal;