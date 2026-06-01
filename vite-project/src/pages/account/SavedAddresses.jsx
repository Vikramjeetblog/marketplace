import React, { useState } from "react";

import AccountSidebar from "../../components/account/AccountSidebar";
import AddressModal from "../../components/modals/AddressModal";
import toast from "react-hot-toast";
import ConfirmModal from "../../components/common/ConfirmModal";
import { validateAddress } from "../../components/validations/addressValidation";
import {
  MapPin,
  Plus,
  Trash2,
  Pencil,
  Home,
  Building2,
} from "lucide-react";

import { useUserStore } from "../../store/useUserStore";

const SavedAddresses = () => {
  const {
    addresses,
    addAddress,
    deleteAddress,
    updateAddress,
  } = useUserStore();

  // MODAL
  const [showModal, setShowModal] =
    useState(false);

  // EDIT MODE
  const [editingId, setEditingId] =
    useState(null);

  const [deleteId, setDeleteId] =
  useState(null);

const [showDeleteModal, setShowDeleteModal] =
  useState(false);
  const [errors, setErrors] =
  useState({});

  // FORM
  const [formData, setFormData] =
    useState({
      type: "HOME",
      flat: "",
      phone: "",
      address: "",
      pincode: "",
      landmark: "",
      alternatePhone: "",
    });

  // INPUT CHANGE
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  // CLEAR ERROR
  setErrors({
    ...errors,
    [e.target.name]: "",
  });
};
  // SAVE ADDRESS
  const handleSave = () => {
  const validationErrors =
    validateAddress(formData);

  // VALIDATION
  if (
    Object.keys(validationErrors)
      .length > 0
  ) {
    setErrors(validationErrors);

    return;
  }

  // UPDATE
  if (editingId) {
    updateAddress({
      ...formData,
      id: editingId,
    });

    toast.success(
      "Address updated successfully"
    );
  }

  // CREATE
  else {
    addAddress({
      id: Date.now(),
      ...formData,
    });

    toast.success(
      "Address saved successfully"
    );
  }

  // RESET
  setFormData({
    type: "HOME",
    flat: "",
    phone: "",
    address: "",
    pincode: "",
    landmark: "",
    alternatePhone: "",
  });

  setErrors({});

  setEditingId(null);

  setShowModal(false);
};

  // EDIT
  const handleEdit = (address) => {
    setEditingId(address.id);

    setFormData(address);

    setShowModal(true);
  };
  const handleDelete = () => {
  deleteAddress(deleteId);

  toast.success(
    "Address deleted successfully"
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

          {/* RIGHT SIDE */}
          <div>

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

              <div>
                <h1 className="text-[38px] font-black text-[#020B2D]">
                  Saved Addresses
                </h1>

                <p className="mt-2 text-[#6E7C96]">
                  Manage your delivery and pickup
                  addresses
                </p>
              </div>

              {/* BUTTON */}
              <button
                onClick={() =>
                  setShowModal(true)
                }
                className="h-12 px-7 rounded-full bg-[#00B67A] text-white text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all"
              >
                <Plus size={18} />

                Add Address
              </button>
            </div>

            {/* EMPTY STATE */}
            {addresses.length === 0 ? (
              <div className="bg-white rounded-[36px] border border-[#E5EEF8] min-h-[520px] flex flex-col items-center justify-center text-center px-6">

                <div className="w-28 h-28 rounded-full bg-[#00B67A]/10 flex items-center justify-center">

                  <MapPin
                    size={52}
                    className="text-[#00B67A]"
                  />
                </div>

                <h2 className="mt-8 text-[32px] font-black text-[#020B2D]">
                  No Saved Addresses
                </h2>

                <p className="mt-3 max-w-lg text-[#6E7C96] leading-8">
                  Add your delivery or pickup
                  address for faster checkout and
                  smoother product pickups.
                </p>

                
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {addresses.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[30px] border border-[#E5EEF8] p-6"
                  >
                    {/* TOP */}
                    <div className="flex items-start justify-between">

                      {/* LEFT */}
                      <div className="flex items-center gap-3">

                        <div className="w-14 h-14 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">

                          {item.type ===
                          "HOME" ? (
                            <Home
                              size={24}
                              className="text-[#00B67A]"
                            />
                          ) : (
                            <Building2
                              size={24}
                              className="text-[#FFB800]"
                            />
                          )}
                        </div>

                        <div>
                          <h3 className="text-[18px] font-bold text-[#020B2D]">
                            {item.type}
                          </h3>

                          <p className="text-sm text-[#6E7C96] mt-1">
                            {item.flat}
                          </p>
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex items-center gap-2">

                        {/* EDIT */}
                        <button
                          onClick={() =>
                            handleEdit(item)
                          }
                          className="w-10 h-10 rounded-xl bg-[#F7F9FC] flex items-center justify-center text-[#020B2D]"
                        >
                          <Pencil
                            size={16}
                          />
                        </button>

                        {/* DELETE */}
                        {/* DELETE */}
<button
  onClick={() => {
    setDeleteId(item.id);

    setShowDeleteModal(true);
  }}
  className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500"
>
  <Trash2 size={16} />
</button>
                      </div>
                    </div>

                    {/* ADDRESS */}
                    <div className="mt-6">

                      <p className="text-[15px] font-semibold text-[#020B2D] leading-7">
                        {item.address}
                      </p>

                      {item.landmark && (
                        <p className="mt-2 text-sm text-[#6E7C96]">
                          Landmark:{" "}
                          {item.landmark}
                        </p>
                      )}

                      <p className="mt-2 text-sm text-[#6E7C96]">
                        {item.pincode}
                      </p>

                      <p className="mt-3 text-sm font-medium text-[#020B2D]">
                        +91 {item.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <AddressModal
  showModal={showModal}
  setShowModal={setShowModal}
  formData={formData}
  setFormData={setFormData}
  handleChange={handleChange}
  handleSave={handleSave}
  editingId={editingId}
  errors={errors}
/>
            {/* ADDRESS MODAL */}

          </div>
        </div>
      </div>
      {/* DELETE CONFIRM MODAL */}
<ConfirmModal
  isOpen={showDeleteModal}
  title="Delete Address?"
  description="Do you really want to remove this saved address from your account?"
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

export default SavedAddresses;