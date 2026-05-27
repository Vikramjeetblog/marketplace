import React from "react";

import { X } from "lucide-react";

const ConfirmModal = ({
  isOpen,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmText = "Yes",
  cancelText = "No",
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm">

      <div className="min-h-screen flex items-center justify-center p-4">

        {/* MODAL */}
        <div className="w-full max-w-[420px] bg-white rounded-[24px] shadow-2xl overflow-hidden">

          {/* HEADER */}
          <div className="flex items-center justify-between px-6 pt-6">

            <h2 className="text-[22px] font-black text-[#020B2D]">
              {title}
            </h2>

            {/* CLOSE */}
            <button
              onClick={onCancel}
              className="w-10 h-10 rounded-full hover:bg-[#F7F9FC] flex items-center justify-center"
            >
              <X
                size={18}
                className="text-[#020B2D]"
              />
            </button>
          </div>

          {/* DESCRIPTION */}
          <div className="px-6 pt-3">

            <p className="text-[15px] leading-7 text-[#6E7C96]">
              {description}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-2 gap-4 p-6">

            {/* CANCEL */}
            <button
              onClick={onCancel}
              className="h-[52px] rounded-2xl border border-[#00B67A] text-[#00B67A] text-[14px] font-bold hover:bg-[#00B67A]/5 transition-all"
            >
              {cancelText}
            </button>

            {/* CONFIRM */}
            <button
              onClick={onConfirm}
              className="h-[52px] rounded-2xl bg-[#00B67A] text-white text-[14px] font-bold hover:opacity-90 transition-all"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;