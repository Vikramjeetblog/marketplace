import React, {
  useState,
  useEffect,
} from "react";

import {
  X,
  User,
  Mail,
  Phone,
} from "lucide-react";

const EditProfileModal = ({
  isOpen,
  onClose,
  user,
  onSave,
}) => {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      alternatePhone: "",
    });

  const [errors, setErrors] =
    useState({});

  // LOAD USER
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        alternatePhone:
          user.alternatePhone || "",
      });
    }
  }, [user]);

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } =
      e.target;

    // ONLY NUMBER
    if (
      name ===
      "alternatePhone"
    ) {
      const cleanedValue =
        value.replace(/\D/g, "");

      setFormData({
        ...formData,
        [name]:
          cleanedValue,
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

  // VALIDATE
  const handleSubmit = () => {
    const newErrors = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name =
        "Name is required";
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email =
        "Email is required";
    } else if (
      !/^\S+@\S+\.\S+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Enter valid email";
    }

    // ALT NUMBER
    if (
      formData.alternatePhone &&
      !/^[6-9]\d{9}$/.test(
        formData.alternatePhone
      )
    ) {
      newErrors.alternatePhone =
        "Enter valid alternate number";
    }

    // ERRORS
    if (
      Object.keys(newErrors).length >
      0
    ) {
      setErrors(newErrors);

      return;
    }

    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto">

      <div className="min-h-screen flex items-center justify-center p-4">

        {/* MODAL */}
        <div className="w-full max-w-[520px] bg-white rounded-[32px] overflow-hidden shadow-2xl">

          {/* HEADER */}
          <div className="flex items-start justify-between px-6 pt-6 pb-5 border-b border-[#EEF2F6]">

            <div>
              <h2 className="text-[38px] leading-none font-black text-[#020B2D]">
                Edit Profile
              </h2>

              <p className="mt-3 text-sm text-[#6E7C96]">
                Update your profile
                information
              </p>
            </div>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F7F9FC] transition-all"
            >
              <X
                size={22}
                className="text-[#020B2D]"
              />
            </button>
          </div>

          {/* BODY */}
          <div className="px-6 py-6">

            <div className="space-y-8">

              {/* NAME */}
              <div>

                <div className="flex items-center gap-3">

                  <User
                    size={18}
                    className="text-[#6E7C96]"
                  />

                  <input
                    type="text"
                    name="name"
                    value={
                      formData.name
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Full Name"
                    className="w-full h-12 border-b border-[#DCE6F2] bg-transparent outline-none text-[17px] text-[#020B2D] placeholder:text-[#9CA3AF] focus:border-[#00B67A]"
                  />
                </div>

                {errors.name && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>

                <div className="flex items-center gap-3">

                  <Mail
                    size={18}
                    className="text-[#6E7C96]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Email Address"
                    className="w-full h-12 border-b border-[#DCE6F2] bg-transparent outline-none text-[17px] text-[#020B2D] placeholder:text-[#9CA3AF] focus:border-[#00B67A]"
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-xs text-red-500">
                    {
                      errors.email
                    }
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>

                <div className="flex items-center gap-3">

                  <Phone
                    size={18}
                    className="text-[#6E7C96]"
                  />

                  <input
                    type="text"
                    value={
                      formData.phone
                    }
                    readOnly
                    className="w-full h-12 border-b border-[#DCE6F2] bg-transparent outline-none text-[17px] text-[#9CA3AF] cursor-not-allowed"
                  />
                </div>

                <p className="mt-2 text-xs text-[#9CA3AF]">
                  Contact number
                  cannot be changed
                </p>
              </div>

              {/* ALT NUMBER */}
              <div>

                <div className="flex items-center gap-3">

                  <Phone
                    size={18}
                    className="text-[#6E7C96]"
                  />

                  <input
                    type="tel"
                    name="alternatePhone"
                    value={
                      formData.alternatePhone
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Alternate Number"
                    className="w-full h-12 border-b border-[#DCE6F2] bg-transparent outline-none text-[17px] text-[#020B2D] placeholder:text-[#9CA3AF] focus:border-[#00B67A]"
                  />
                </div>

                {errors.alternatePhone && (
                  <p className="mt-2 text-xs text-red-500">
                    {
                      errors.alternatePhone
                    }
                  </p>
                )}
              </div>

              {/* BUTTONS */}
              <div className="flex items-center gap-4 pt-2">

                {/* CANCEL */}
                <button
                  onClick={onClose}
                  className="flex-1 h-12 rounded-full border border-[#DCE6F2] text-[#020B2D] text-sm font-bold hover:bg-[#F7F9FC] transition-all"
                >
                  Cancel
                </button>

                {/* SAVE */}
                <button
                  onClick={
                    handleSubmit
                  }
                  className="flex-1 h-12 rounded-full bg-[#00B67A] text-white text-sm font-bold hover:opacity-90 transition-all"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;