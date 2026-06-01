import React, { useState } from "react";

import AccountSidebar from "../../components/account/AccountSidebar";
import { validatePayment } from "../../components/validations/paymentValidation";
import  PaymentMethodModal  from "../../components/modals/PaymentMethodModal";
import toast from "react-hot-toast";
import ConfirmModal from "../../components/common/ConfirmModal";
 import { CreditCard,
  Trash2,
  Pencil,
  Plus,
  Landmark,
  Smartphone,
  X,
  ShieldCheck,
} from "lucide-react";

import { useUserStore } from "../../store/useUserStore";

const PaymentMethod = () => {
  const {
    paymentMethods,
    addPaymentMethod,
    deletePaymentMethod,
    updatePaymentMethod,
  } = useUserStore();

  // MODAL
  const [showModal, setShowModal] =
    useState(false);

  // EDIT MODE
  const [editingId, setEditingId] =
    useState(null);

  // FORM
  const [formData, setFormData] =
    useState({
      type: "UPI",
      holderName: "",
      upiId: "",
      bankName: "",
      accountNumber: "",
      ifsc: "",
    });

  // HANDLE INPUT
  const handleChange = (e) => {
  const { name, value } = e.target;

  // ONLY NUMBERS
  if (name === "accountNumber") {
    const numericValue =
      value.replace(/\D/g, "");

    setFormData({
      ...formData,
      [name]: numericValue,
    });
  } else if (name === "ifsc") {
    setFormData({
      ...formData,
      [name]: value.toUpperCase(),
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // CLEAR ERROR
  setErrors({
    ...errors,
    [name]: "",
  });
};
  const [errors, setErrors] =
  useState({});
  const [deleteId, setDeleteId] =
  useState(null);

const [showDeleteModal, setShowDeleteModal] =
  useState(false);

  // SAVE METHOD
 const handleSave = () => {
  const validationErrors =
    validatePayment(formData);

  if (
    Object.keys(validationErrors)
      .length > 0
  ) {
    setErrors(validationErrors);

    return;
  }

  // UPDATE
  if (editingId) {
    updatePaymentMethod({
      ...formData,
      id: editingId,
    });

    toast.success(
      "Payment method updated successfully"
    );
  }

  // CREATE
  else {
    addPaymentMethod({
      id: Date.now(),
      ...formData,
    });

    toast.success(
      "Payment method saved successfully"
    );
  }

  // RESET
  setFormData({
    type: "UPI",
    holderName: "",
    upiId: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
  });

  setErrors({});

  setEditingId(null);

  setShowModal(false);
};
  // EDIT METHOD
  const handleEdit = (method) => {
    setEditingId(method.id);

    setFormData(method);

    setShowModal(true);
  };
const handleDelete = () => {
  deletePaymentMethod(deleteId);

  toast.success(
    "Payment method deleted successfully"
  );

  setShowDeleteModal(false);

  setDeleteId(null);
};
  return (
    <div className="min-h-screen bg-[#F7F9FC]">

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">

          {/* SIDEBAR */}
          <AccountSidebar />

          {/* RIGHT SECTION */}
          <div>

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

              <div>
                <h1 className="text-[38px] font-black text-[#020B2D]">
                  Saved Payment Methods
                </h1>

                <p className="mt-2 text-[#6E7C96]">
                  Manage your UPI and bank
                  accounts securely
                </p>
              </div>

              {/* ADD BUTTON */}
              <button
                onClick={() =>
                  setShowModal(true)
                }
                className="h-12 px-7 rounded-full bg-[#00B67A] text-white text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all"
              >
                <Plus size={18} />

                Add Payment Method
              </button>
            </div>

            {/* EMPTY STATE */}
            {paymentMethods.length ===
            0 ? (
              <div className="bg-white rounded-[36px] border border-[#E5EEF8] min-h-[500px] flex flex-col items-center justify-center text-center px-6">

                <div className="w-28 h-28 rounded-full bg-[#00B67A]/10 flex items-center justify-center">

                  <CreditCard
                    size={52}
                    className="text-[#00B67A]"
                  />
                </div>

                <h2 className="mt-8 text-[32px] font-black text-[#020B2D]">
                  No Payment Methods Added
                </h2>

                <p className="mt-3 max-w-lg text-[#6E7C96] leading-8">
                  Add your UPI or bank
                  account to receive
                  payments securely from
                  Rupantar.
                </p>

                <button
                  onClick={() =>
                    setShowModal(true)
                  }
                  className="mt-8 h-12 px-7 rounded-full bg-[#020B2D] text-white text-sm font-bold hover:opacity-95 transition-all"
                >
                  Add Payment Method
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {paymentMethods.map(
                  (method) => (
                    <div
                      key={method.id}
                      className="bg-white rounded-[30px] border border-[#E5EEF8] p-6"
                    >
                      {/* TOP */}
                      <div className="flex items-start justify-between">

                        {/* TYPE */}
                        <div className="flex items-center gap-3">

                          <div className="w-14 h-14 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">

                            {method.type ===
                            "UPI" ? (
                              <Smartphone
                                size={24}
                                className="text-[#00B67A]"
                              />
                            ) : (
                              <Landmark
                                size={24}
                                className="text-[#FFB800]"
                              />
                            )}
                          </div>

                          <div>
                            <h3 className="text-[18px] font-bold text-[#020B2D]">
                              {
                                method.type
                              }
                            </h3>

                            <p className="text-sm text-[#6E7C96] mt-1">
                              {
                                method.holderName
                              }
                            </p>
                          </div>
                        </div>

                        {/* ACTIONS */}
                        <div className="flex items-center gap-2">

                          {/* EDIT */}
                          <button
                            onClick={() =>
                              handleEdit(
                                method
                              )
                            }
                            className="w-10 h-10 rounded-xl bg-[#F7F9FC] flex items-center justify-center text-[#020B2D] hover:bg-[#EAF2FF]"
                          >
                            <Pencil
                              size={16}
                            />
                          </button>

                          {/* DELETE */}
                          <button
                            onClick={() => {
                            setDeleteId(method.id);
                            setShowDeleteModal(true);
                          }}
                            className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 hover:bg-red-100"
                          >
                            <Trash2
                              size={16}
                            />
                          </button>
                        </div>
                      </div>

                      {/* DETAILS */}
                      <div className="mt-6 space-y-3">

                        {method.type ===
                        "UPI" ? (
                          <div>
                            <p className="text-xs uppercase tracking-wide text-[#9CA3AF]">
                              UPI ID
                            </p>

                            <p className="mt-1 text-[15px] font-semibold text-[#020B2D]">
                              {
                                method.upiId
                              }
                            </p>
                          </div>
                        ) : (
                          <>
                            <div>
                              <p className="text-xs uppercase tracking-wide text-[#9CA3AF]">
                                Bank Name
                              </p>

                              <p className="mt-1 text-[15px] font-semibold text-[#020B2D]">
                                {
                                  method.bankName
                                }
                              </p>
                            </div>

                            <div>
                              <p className="text-xs uppercase tracking-wide text-[#9CA3AF]">
                                Account
                                Number
                              </p>

                              <p className="mt-1 text-[15px] font-semibold text-[#020B2D]">
                                ****
                                {method.accountNumber?.slice(
                                  -4
                                )}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {/* MODAL */}
           <PaymentMethodModal
  showModal={showModal}
  setShowModal={setShowModal}
  formData={formData}
  setFormData={setFormData}
  handleChange={handleChange}
  handleSave={handleSave}
  editingId={editingId}
  errors={errors}
/>
          </div>
        </div>
      </div>
      {/* DELETE MODAL */}
<ConfirmModal
  isOpen={showDeleteModal}
  title="Delete Payment Method?"
  description="Do you really want to remove this payment method from your account?"
  confirmText="Yes"
  cancelText="No"
  onCancel={() =>
    setShowDeleteModal(false)
  }
  onConfirm={handleDelete}
/>
    </div>
  );
};

export default PaymentMethod;