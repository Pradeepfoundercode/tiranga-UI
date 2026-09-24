import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import toast from "react-hot-toast";

import Footer from "../../components/common/Footer";
import useProfileBalance from "../../hooks/useProfileBalance";
import PageHeader from "../../components/common/PageHeader";

export default function Wallet() {
  const navigate = useNavigate();
  const { balance } = useProfileBalance(1);

  const formattedBalance = Number(balance).toFixed(2);

  const handleTransfer = () => {
    toast.success("Main wallet transfer completed");
  };

  return (
    <div className="relative min-h-screen w-full  text-white pb-[90px] select-none">
      {/* Top Header */}
      <PageHeader
  title="Wallet"
  titleClassName="text-[17px] font-medium text-white"
/>

      {/* Wallet Balance Hero */}
      <div className="flex flex-col items-center pt-2 pb-3 bg-background1">
        {/* Wallet Icon */}
        <div className="relative flex h-12 w-12 items-center justify-center">
          <svg
            className="h-10 w-10 text-[#dbe2f3]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.99 1-1.72V9c0-.73-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
            <circle cx="16" cy="12" r="1.3" fill="#22275b" />
          </svg>
        </div>

        {/* Amount */}
        <span className="mt-1 text-[20px] font-semibold tracking-tight text-text">
          ₹{formattedBalance}
        </span>

        {/* Label */}
        <span className="text-[12px] text-[#8e98be]">Total balance</span>
      </div>

      {/* Main Wallet Card */}
      <div className="mx-3 rounded-2xl bg-[#2b3270] p-4 shadow-sm mt-5">
        {/* Two Percentage Rings */}
        <div className="grid grid-cols-2 gap-4 text-center">
          {/* Main Wallet */}
          <div className="flex flex-col items-center">
            <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full border-[5px] border-[#38bdf8]">
              <span className="text-[16px] font-bold text-white">0%</span>
            </div>
            <span className="mt-2 text-[14px] font-bold text-white">
              ₹{formattedBalance}
            </span>
            <span className="text-[12px] text-[#a2accb]">Main wallet</span>
          </div>

          {/* 3rd Party Wallet */}
          <div className="flex flex-col items-center">
            <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full border-[5px] border-[#38bdf8]">
              <span className="text-[16px] font-bold text-white">0%</span>
            </div>
            <span className="mt-2 text-[14px] font-bold text-white">₹0.00</span>
            <span className="text-[12px] text-[#a2accb]">3rd party wallet</span>
          </div>
        </div>

        {/* Main Wallet Transfer Button */}
        <button
          type="button"
         
          className="mt-5 flex h-[42px] w-full items-center justify-center rounded-full bg-[#2575fc] text-[15px] font-bold text-white shadow-sm transition-all hover:brightness-105 active:scale-[0.99]"
        >
          Main wallet transfer
        </button>

        {/* 4 Action Items */}
        <div className="mt-6 grid grid-cols-4 gap-2 text-center">
          {/* Deposit */}
          <button
            type="button"
            onClick={() => navigate("/deposit")}
            className="flex flex-col items-center active:scale-95 transition-transform"
          >
            <div className="flex h-[44px] w-[44px] items-center justify-center">
              <svg className="h-10 w-10 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6h-2V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10-2h6v2H9V4zm10 15H5V8h14v11z" fill="#f59e0b" />
                <path d="M12 10c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#fef08a" />
              </svg>
            </div>
            <span className="mt-1.5 text-[12px] text-[#c2c8e2]">Deposit</span>
          </button>

          {/* Withdraw */}
          <button
            type="button"
            onClick={() => navigate("/withdraw")}
            className="flex flex-col items-center active:scale-95 transition-transform"
          >
            <div className="flex h-[44px] w-[44px] items-center justify-center">
              <svg className="h-10 w-10 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="5" width="20" height="14" rx="3" fill="#38bdf8" />
                <rect x="5" y="8" width="14" height="2" rx="0.5" fill="#e0f2fe" />
                <rect x="5" y="13" width="7" height="2" rx="0.5" fill="#e0f2fe" />
              </svg>
            </div>
            <span className="mt-1.5 text-[12px] text-[#c2c8e2]">Withdraw</span>
          </button>

          {/* Deposit history */}
          <button
            type="button"
            onClick={() => navigate("/deposit/history")}
            className="flex flex-col items-center active:scale-95 transition-transform"
          >
            <div className="flex h-[44px] w-[44px] items-center justify-center">
              <svg className="h-10 w-10 text-[#ef4444]" viewBox="0 0 24 24" fill="currentColor">
                <rect x="4" y="3" width="16" height="18" rx="3" fill="#ef4444" />
                <path d="M8 3v6l3-2 3 2V3H8z" fill="#fee2e2" />
                <rect x="7" y="12" width="10" height="1.8" rx="0.5" fill="#fee2e2" />
                <rect x="7" y="16" width="6" height="1.8" rx="0.5" fill="#fee2e2" />
              </svg>
            </div>
            <span className="mt-1.5 text-[11px] leading-tight text-[#c2c8e2]">
              Deposit<br />history
            </span>
          </button>

          {/* Withdrawal history */}
          <button
            type="button"
            onClick={() => navigate("/withdraw/history")}
            className="flex flex-col items-center active:scale-95 transition-transform"
          >
            <div className="flex h-[44px] w-[44px] items-center justify-center">
              <svg className="h-10 w-10 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.99 1-1.72V9c0-.73-.41-1.37-1-1.72z" fill="#f59e0b" />
                <circle cx="16" cy="12" r="2.5" fill="#fef08a" />
                <circle cx="7" cy="16" r="2.8" fill="#fb923c" stroke="#fff" strokeWidth="1" />
                <path d="M6 16l1 1 2-2" stroke="#fff" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
            <span className="mt-1.5 text-[11px] leading-tight text-[#c2c8e2]">
              Withdrawal<br />history
            </span>
          </button>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <Footer />
    </div>
  );
}
