import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import giftPopupImage from "../../assets/home/gift-Q7IYrFBN.png";

export default function LoginRewardModal() {
  const navigate = useNavigate();
  const { showLoginModal, closeLoginModal } = useAuth();

  if (!showLoginModal) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-end justify-center bg-black/60 transition-opacity"
      onClick={closeLoginModal}
    >
      <div
        className="relative w-full max-w-[400px] rounded-t-[28px] bg-[#22275b] px-6 pb-8 pt-0 shadow-2xl animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 3D Gift Box Image overflowing at top */}
        <div className="relative -mt-16 flex justify-center">
          <img
            src={giftPopupImage}
            alt="Event Rewards"
            className="h-[170px] w-[170px] object-contain drop-shadow-xl select-none"
          />
        </div>

        {/* Title with two light-blue accents flanking Event Rewards */}
        <div className="mt-2 flex items-center justify-center gap-2">
          {/* Left blue droplet accent */}
          <div className="flex flex-col items-center justify-center -space-y-1">
            <span className="inline-block h-1.5 w-2.5 rounded-full bg-[#38a0fe] rotate-[-35deg]" />
            <span className="inline-block h-2 w-3.5 rounded-full bg-[#38a0fe] rotate-[-25deg]" />
          </div>

          <h2 className="text-[20px] font-bold tracking-wide text-white">
            Event Rewards
          </h2>

          {/* Right blue droplet accent */}
          <div className="flex flex-col items-center justify-center -space-y-1">
            <span className="inline-block h-2 w-3.5 rounded-full bg-[#38a0fe] rotate-[25deg]" />
            <span className="inline-block h-1.5 w-2.5 rounded-full bg-[#38a0fe] rotate-[35deg]" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-3 text-center text-[13px] font-medium leading-[18px] text-white">
          Log in to participate in the{" "}
          <span className="text-[#38a0fe]">event rewards</span> and unlock
          all 8 exclusive rewards
        </p>

        {/* Action Button: Log in now to participate */}
        <button
          type="button"
          onClick={() => {
            closeLoginModal();
            navigate("/login");
          }}
          className="mt-6 flex h-[44px] w-full items-center justify-center rounded-full bg-[#2b9fee] text-[15px] font-semibold text-white shadow-md shadow-[#2b9fee]/30 transition active:scale-[0.98] hover:bg-[#258de0]"
        >
          Log in now to participate
        </button>

        {/* Secondary Action: Don't log in yet, continue browsing */}
        <div className="mt-3.5 flex justify-center">
          <button
            type="button"
            onClick={closeLoginModal}
            className="text-[13px] font-medium text-[#d1d5db] transition hover:text-white cursor-pointer"
          >
            Don't log in yet, continue browsing
          </button>
        </div>
      </div>
    </div>
  );
}
