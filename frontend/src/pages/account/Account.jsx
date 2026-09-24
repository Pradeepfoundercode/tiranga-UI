import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Copy,
  ChevronRight,
  Settings,
  Mail,
  Ticket,
  BarChart2,
  Power,
  Gamepad2,
  FileText,
  ArrowDownToLine,
  ArrowUpFromLine,
  Shield,
  CreditCard,
  Wallet
} from "lucide-react";

import Footer from "../../components/common/Footer";
import useProfileBalance from "../../hooks/useProfileBalance";

import avatarImg from "../../assets/person/2.png";
import vipBadge from "../../assets/account/vipo.png";
import refreshIcon from "../../assets/images/refresh.png";

import globeIcon from "../../assets/home/icon1.png";
import announcementIcon from "../../assets/home/icon2.png";
import csIcon from "../../assets/home/icon3.png";
import guideIcon from "../../assets/home/icon4.png";
import aboutIcon from "../../assets/home/icon5.png";
import feedbackIcon from "../../assets/images/note.png";

export default function Account() {
  const navigate = useNavigate();
  const { balance, refetch } = useProfileBalance(1);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const uid = "25823172";
  const username = "MEMBERNNGWESVJ";
  const lastLogin = "2026-09-24 14:39:48";

  const handleCopyUid = () => {
    navigator.clipboard?.writeText(uid);
    toast.success("UID copied to clipboard!");
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();

    setTimeout(() => {
      setIsRefreshing(false);
      toast.success("Balance updated");
    }, 500);
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  const historyCards = [
    {
      title: "Game History",
      desc: "My game history",
      icon: <Gamepad2 size={18} className="text-white" />,
      bg: "bg-[#387bf8]",
      action: () => navigate("/wingo"),
    },
    {
      title: "Transaction",
      desc: "My transaction history",
      icon: <FileText size={18} className="text-white" />,
      bg: "bg-[#18b07a]",
      action: () => toast("Transaction history"),
    },
    {
      title: "Deposit",
      desc: "My deposit history",
      icon: <ArrowDownToLine size={18} className="text-white" />,
      bg: "bg-[#ea554d]",
      action: () => navigate("/deposit/history"),
    },
    {
      title: "Withdraw",
      desc: "My withdraw history",
      icon: <ArrowUpFromLine size={18} className="text-white" />,
      bg: "bg-[#f57b28]",
      action: () => navigate("/withdraw/history"),
    },
  ];

  const serviceMenus = [
    {
      name: "Settings",
      icon: <Settings size={28} className="text-[#4ca2ff]" />,
      action: () => toast("Settings"),
    },
    {
      name: "Feedback",
      image: feedbackIcon,
      action: () => toast("Feedback"),
    },
    {
      name: "Announcement",
      image: announcementIcon,
      action: () => navigate("/notification"),
    },
    {
      name: "Customer Service",
      image: csIcon,
      action: () => navigate("/customer-Service"),
    },
    {
      name: "Beginner's Guide",
      image: guideIcon,
      action: () => toast("Beginner's Guide"),
    },
    {
      name: "About us",
      image: aboutIcon,
      action: () => navigate("/about"),
    },
  ];

  return (
   <div className=" w-full  pb-30 ">
      <div className="space-y-2.5 px-3 pt-3.5">
        <div className="flex items-center gap-3 py-1 mt-7">
          <img
            src={avatarImg}
            alt="Avatar"
            className="h-[75px] w-[75px] rounded-full object-cover ml-4"
          />

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="truncate text-[15px] font-semibold tracking-wide text-white">
                {username}
              </span>

              <img
                src={vipBadge}
                alt="VIP0"
                className="h-[25px] object-contain"
              />
            </div>

            <div className="mt-1 flex items-center">
              <button
                type="button"
                // onClick={handleCopyUid}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#f28322] px-2.5 py-[2px] text-[11px] font-medium text-white active:opacity-80"
              >
                <span>UID</span>
                <span className="text-[10px] opacity-60">|</span>
                <span>{uid}</span>
                <Copy size={11} className="ml-0.5 opacity-90" />
              </button>
            </div>

            <p className="mt-1 text-[11px] text-[#7e87ab]">
              Last login: {lastLogin}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-background p-3.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[15px] text-text1">Total balance</p>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-[20px] font-semibold tracking-tight text-white">
                  ₹{Number(balance).toFixed(2)}
                </span>

                <button
                  type="button"
                  onClick={handleRefresh}
                  className="p-0.5 active:opacity-70"
                >
                  <img
                    src={refreshIcon}
                    alt="Refresh"
                    className={`h-[15px] w-[15px] transition-transform duration-500 ${
                      isRefreshing ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/wallet")}
              className="rounded-full bg-[#4a85f6] px-4 py-1.5 text-[12px] font-medium text-white active:opacity-90"
            >
              Enter wallet
            </button>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2 text-center">
            <button
              type="button"
              className="flex flex-col items-center transition-transform active:scale-95"
            >
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-[#ef4444]">
                <Wallet size={19} className="text-white" />
              </div>
              <span className="mt-1.5 text-[11px] text-white">ARWallet</span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/deposit")}
              className="flex flex-col items-center transition-transform active:scale-95"
            >
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-[#f59e0b]">
                <ArrowDownToLine size={19} className="text-white" />
              </div>
              <span className="mt-1.5 text-[11px] text-white">Deposit</span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/withdraw")}
              className="flex flex-col items-center transition-transform active:scale-95"
            >
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-[#38bdf8]">
                <CreditCard size={19} className="text-white" />
              </div>
              <span className="mt-1.5 text-[11px] text-white">Withdraw</span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center transition-transform active:scale-95"
            >
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-[#10b981]">
                <Shield size={19} className="text-white" />
              </div>
              <span className="mt-1.5 text-[11px] text-white">VIP</span>
            </button>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl bg-background1 p-3">
          <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg bg-[#ffd13b]">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#8a5d00]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#8a5d00]" />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-semibold text-white">
                Safe
              </span>

              <button
                type="button"
               
                className="inline-flex items-center gap-0.5 rounded-full bg-[#f28322] px-2.5 py-[2px] text-[11px] font-medium text-white"
              >
                <span>₹0.00</span>
                <ChevronRight
                  size={12}
                  strokeWidth={3}
                  className="ml-0.5"
                />
              </button>
            </div>

            <p className="mt-1 text-[10.5px] leading-[14px] text-text">
              The daily interest rate is 0.1%, and the income is calculated
              once every 1 minute.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {historyCards.map((item) => (
            <div
              key={item.title}
              onClick={item.action}
              className="flex cursor-pointer items-center gap-2.5 rounded-xl bg-background1 p-2.5 active:opacity-90"
            >
              <div
                className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg ${item.bg}`}
              >
                {item.icon}
              </div>

              <div className="min-w-0">
                <h4 className="text-[13px] font-semibold leading-tight text-white">
                  {item.title}
                </h4>

                <p className="mt-0.5 truncate text-[10px] text-[#7f88ab]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          onClick={() => navigate("/notification")}
          className="flex cursor-pointer items-center justify-between rounded-xl bg-background1 px-3.5 py-3 active:opacity-90"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-[28px] w-[28px] items-center justify-center rounded-lg bg-[#374586]">
              <Mail size={16} className="text-[#4ca2ff]" />
            </div>

            <span className="text-[13px] text-white">Notification</span>
          </div>

          <ChevronRight size={16} className="text-[#6d779c]" />
        </div>

        <div className="divide-y divide-[#24295e]/40 overflow-hidden rounded-xl bg-background1">
          <div
            
            className="flex cursor-pointer items-center justify-between px-3.5 py-3 active:opacity-90"
          >
            <div className="flex items-center gap-3">
              <Ticket size={20} className="text-active" />
              <span className="text-[13px] text-white">
                My Top-Up Coupons
              </span>
            </div>

            <ChevronRight size={16} className="text-text1" />
          </div>

          <div
            
            className="flex cursor-pointer items-center justify-between px-3.5 py-3 active:opacity-90"
          >
            <div className="flex items-center gap-3">
              <BarChart2 size={20} className="text-active" />
              <span className="text-[13px] text-white">
                Game statistics
              </span>
            </div>

            <ChevronRight size={16} className="text-text1" />
          </div>

          <div
           
            className="flex cursor-pointer items-center justify-between px-3.5 py-3 active:opacity-90"
          >
            <div className="flex items-center gap-3">
              <img
                src={globeIcon}
                alt="Language"
                className="h-5 w-5 object-contain"
              />

              <span className="text-[13px] text-text">Language</span>
            </div>

            <div className="flex items-center gap-1 text-[12px] text-text1">
              <span>English</span>
              <ChevronRight size={16} className="text-text1" />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-background1 p-3.5">
          <h3 className="mb-3 text-[14px] font-semibold text-text">
            Service center
          </h3>

          <div className="grid grid-cols-3 gap-x-2 gap-y-4 text-center">
            {serviceMenus.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={item.action}
                className="flex flex-col items-center transition-transform active:scale-95"
              >
                <div className="flex h-[30px] w-[30px] items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    item.icon
                  )}
                </div>

                <span className="mt-1 text-[11px] text-[#8b95be]">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="pb-5 pt-2">
          <button
            type="button"
            // onClick={handleLogout}
            className="flex h-[40px] w-full items-center justify-center gap-2 rounded-full border border-[#384382] bg-transparent text-[14px] font-medium text-[#4ca2ff] transition-colors active:bg-[#2b3270]/40"
          >
            <Power size={16} strokeWidth={2.2} />
            <span>Log out</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}