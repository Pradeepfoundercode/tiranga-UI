import React from "react";

export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-6 backdrop-blur-[1px] transition-opacity duration-200 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[325px] rounded-[22px] bg-[#2d3569] px-5 py-6 shadow-2xl transition-all duration-200 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Exclamation Circle Icon */}
        <div className="mx-auto flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#2da0f8] shadow-md shadow-[#2da0f8]/30">
          <svg
            className="h-7 w-7 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C11.17 2 10.5 2.67 10.5 3.5V13.5C10.5 14.33 11.17 15 12 15C12.83 15 13.5 14.33 13.5 13.5V3.5C13.5 2.67 12.83 2 12 2ZM12 17.5C10.9 17.5 10 18.4 10 19.5C10 20.6 10.9 21.5 12 21.5C13.1 21.5 14 20.6 14 19.5C14 18.4 13.1 17.5 12 17.5Z" />
          </svg>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-center text-[16px] font-bold tracking-normal text-white">
          Do you want to log out?
        </h3>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col space-y-3">
          {/* Confirm Button */}
          <button
            type="button"
            onClick={onConfirm}
            className="flex h-[42px] w-full items-center justify-center rounded-full bg-[#2b9fee] text-[15px] font-medium text-white shadow-md shadow-[#2b9fee]/30 transition hover:bg-[#258de0] active:scale-[0.98]"
          >
            Confirm
          </button>

          {/* Cancel Button */}
          <button
            type="button"
            onClick={onClose}
            className="flex h-[42px] w-full items-center justify-center rounded-full border border-[#445287] bg-transparent text-[15px] font-medium text-[#8e9bc5] transition hover:border-[#5868a8] hover:text-white active:scale-[0.98]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
