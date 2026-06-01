import React, { useState } from "react";
import {
  Home,
  Building2,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  Plus,
  Smartphone,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
import AddressModal from "../../components/modals/AddressModal";

const SchedulePickup = () => {
  const { addresses } = useUserStore();
  const navigate = useNavigate();
const location = useLocation();
const product = location.state?.product || {};
  const [selectedAddress, setSelectedAddress] =
    useState(null);

  const [selectedDate, setSelectedDate] =
    useState("");

  const [selectedSlot, setSelectedSlot] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const slots = [
    "10:00 AM - 01:00 PM",
    "01:00 PM - 04:00 PM",
    "04:00 PM - 07:00 PM",
  ];

  const dates = [
    "Today",
    "Tomorrow",
    "31 May",
    "1 Jun",
    "2 Jun",
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-[36px] font-black text-[#020B2D]">
            Schedule Pickup
          </h1>

          <p className="mt-2 text-[#6E7C96]">
            Select address and pickup slot
          </p>
        </div>

        {/* STEPPER */}
        <div className="bg-white rounded-[24px] border border-[#E5EEF8] p-5 mb-8">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00B67A] text-white flex items-center justify-center font-bold">
                ✓
              </div>

              <span className="font-semibold text-[#020B2D]">
                Quote
              </span>
            </div>

            <div className="flex-1 h-[2px] bg-[#E5EEF8] mx-3" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00B67A] text-white flex items-center justify-center font-bold">
                2
              </div>

              <span className="font-semibold text-[#020B2D]">
                Pickup
              </span>
            </div>

            <div className="flex-1 h-[2px] bg-[#E5EEF8] mx-3" />

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E5EEF8] text-[#6E7C96] flex items-center justify-center font-bold">
                3
              </div>

              <span className="text-[#6E7C96]">
                Payment
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-8">

          {/* LEFT */}
          <div>

            {/* ADDRESS */}
            <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6">

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[22px] font-bold text-[#020B2D]">
                  Select Address
                </h2>

                <button
                  onClick={() =>
                    setShowModal(true)
                  }
                  className="h-11 px-5 rounded-full bg-[#00B67A] text-white text-sm font-bold flex items-center gap-2"
                >
                  <Plus size={16} />
                  Add Address
                </button>
              </div>

              <div className="space-y-4">

                {addresses.map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      setSelectedAddress(item.id)
                    }
                    className={`cursor-pointer rounded-[24px] p-5 border-2 transition-all ${
                      selectedAddress === item.id
                        ? "border-[#00B67A] bg-[#00B67A]/5"
                        : "border-[#E5EEF8] bg-white"
                    }`}
                  >
                    <div className="flex justify-between">

                      <div className="flex gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#00B67A]/10 flex items-center justify-center">

                          {item.type ===
                          "HOME" ? (
                            <Home
                              className="text-[#00B67A]"
                              size={22}
                            />
                          ) : (
                            <Building2
                              className="text-[#00B67A]"
                              size={22}
                            />
                          )}
                        </div>

                        <div>
                          <h3 className="font-bold text-[#020B2D]">
                            {item.type}
                          </h3>

                          <p className="text-sm text-[#6E7C96]">
                            {item.flat}
                          </p>
                        </div>
                      </div>

                      {selectedAddress ===
                        item.id && (
                        <CheckCircle2
                          className="text-[#00B67A]"
                          size={24}
                        />
                      )}
                    </div>

                    <p className="mt-4 text-[#020B2D]">
                      {item.address}
                    </p>

                    <p className="mt-2 text-sm text-[#6E7C96]">
                      {item.pincode}
                    </p>

                    <p className="mt-2 font-medium">
                      +91 {item.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* DATE */}
            <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6 mt-6">

              <div className="flex items-center gap-3 mb-5">
                <Calendar
                  className="text-[#00B67A]"
                  size={22}
                />

                <h2 className="text-[22px] font-bold text-[#020B2D]">
                  Pickup Date
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {dates.map((date) => (
                  <button
                    key={date}
                    onClick={() =>
                      setSelectedDate(date)
                    }
                    className={`h-12 px-5 rounded-xl border font-medium ${
                      selectedDate === date
                        ? "bg-[#00B67A] text-white border-[#00B67A]"
                        : "border-[#E5EEF8]"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* SLOT */}
            <div className="bg-white rounded-[30px] border border-[#E5EEF8] p-6 mt-6">

              <div className="flex items-center gap-3 mb-5">
                <Clock
                  className="text-[#00B67A]"
                  size={22}
                />

                <h2 className="text-[22px] font-bold text-[#020B2D]">
                  Pickup Time Slot
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() =>
                      setSelectedSlot(slot)
                    }
                    className={`p-4 rounded-2xl border text-sm font-semibold ${
                      selectedSlot === slot
                        ? "bg-[#00B67A]/10 border-[#00B67A] text-[#00B67A]"
                        : "border-[#E5EEF8]"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT */}
         {/* RIGHT */}
<div>
  <div className="sticky top-6 bg-white rounded-[30px] border border-[#E5EEF8] p-6">

    <div className="flex gap-4">

      <div className="w-20 h-20 rounded-2xl bg-[#F7F9FC] flex items-center justify-center">
        <Smartphone
          className="text-[#00B67A]"
          size={34}
        />
      </div>

      <div>
        <h3 className="font-bold text-lg text-[#020B2D]">
          {product.model || "Selected Device"}
        </h3>

        <p className="text-[#6E7C96]">
          {product.brand || ""}
        </p>
      </div>
    </div>

    <div className="mt-8">
      <p className="text-sm text-[#6E7C96]">
        Estimated Offer
      </p>

      <p className="text-[42px] font-black text-[#00B67A]">
        ₹{product.estimatedPrice?.toLocaleString() || 0}
      </p>
    </div>

    <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200">
      <p className="text-sm text-amber-800 font-medium">
        Final value will be confirmed after physical inspection.
      </p>
    </div>

    <div className="mt-6 pt-6 border-t border-[#EEF2F6]">
      <h4 className="font-semibold text-[#020B2D] mb-3">
        Selected Pickup
      </h4>

      <div className="space-y-2 text-sm">
        <p className="text-[#6E7C96]">
          📅 {selectedDate || "Select Date"}
        </p>

        <p className="text-[#6E7C96]">
          🕒 {selectedSlot || "Select Time"}
        </p>

        <p className="text-[#6E7C96]">
          📍 {selectedAddress
            ? "Address Selected"
            : "Select Address"}
        </p>
      </div>
    </div>

    <button
      onClick={() =>
        navigate("/sell/payment", {
          state: {
            product,
            pickup: {
              address: addresses.find(
                (item) =>
                  item.id === selectedAddress
              ),
              date: selectedDate,
              slot: selectedSlot,
            },
          },
        })
      }
      disabled={
        !selectedAddress ||
        !selectedDate ||
        !selectedSlot
      }
      className="
        mt-6
        w-full
        h-14
        rounded-2xl
        bg-[#00B67A]
        text-white
        font-bold
        disabled:opacity-50
        disabled:cursor-not-allowed
        flex
        items-center
        justify-center
        gap-2
      "
    >
      Continue
      <ArrowRight size={18} />
    </button>

  </div>
</div>
        </div>

        <AddressModal
          showModal={showModal}
          setShowModal={setShowModal}
          formData={{
            type: "HOME",
            flat: "",
            phone: "",
            address: "",
            pincode: "",
            landmark: "",
            alternatePhone: "",
          }}
          setFormData={() => {}}
          handleChange={() => {}}
          handleSave={() => {}}
          editingId={null}
          errors={{}}
        />
      </div>
    </div>
  );
};

export default SchedulePickup;