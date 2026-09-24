import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Copy,
  ChevronRight,
  SlidersHorizontal,
  CircleDollarSign,
  CalendarCheck2,
  BadgeDollarSign,
  TrendingUp,
} from "lucide-react";

import Footer from "../../components/common/Footer";
import PageHeader from "../../components/common/PageHeader";

import csIcon from "../../assets/home/icon3.png";
import promotionBg from "../../assets/home/promotionbg.png";

export default function Promotion() {
  const navigate = useNavigate();

  const invitationCode = "1521625823172";
  const invitationLink = "";

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(invitationCode);
    toast.success("code copied!");
  };



  return (
    <div className="relative min-h-screen w-full bg-[#22275b] pb-[90px] text-[13px] text-white select-none">
      <PageHeader
        title="Agency"
        titleClassName="text-[17px] font-medium text-white"
        rightIcon={<SlidersHorizontal size={16} />}
        onRightClick={() => toast("Filter")}
        rightClassName="flex h-7 w-7 items-center justify-center rounded bg-[#387bf8]/20 text-[#4ca2ff]"
      />

      <section className="relative">
        <div className="relative h-[260px] w-full bg-active overflow-hidden">
          <img
            src={promotionBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 flex flex-col items-center pt-[18px]">
            <span className="text-[25px]  tracking-tight text-white">
              0
            </span>

            <div className="mt-1">
              <span className=" rounded-full bg-background1 px-[16px] py-[5px] text-[13px]  text-[#3e8fff]">
                Yesterday's total commission
              </span>
            </div>

            <p className="mt-[5px] text-[11px] text-white">
              Upgrade the level to increase commission income
            </p>
          </div>
        </div>

        <div className="relative z-20 -mt-[150px] px-[13px]">
          <div className="overflow-hidden rounded-xl bg-[#303a83]">
            <div className="grid grid-cols-2">
              <div className="flex h-[45px] items-center justify-center text-[13px] bg-background   text-text">
                Direct subordinates
              </div>

              <div className="flex h-[45px] items-center justify-center border-l border-background bg-background text-[13px]  text-text">
                Team subordinates
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="border-r border-[#46539b] text-center">
                <div className="py-[8px]">
                  <p className="text-[18px]  text-white">0</p>
                  <p className="mt-[1px] text-[12px] leading-[16px] text-white">
                    Number of register
                  </p>
                </div>

                <div className="py-[8px]">
                  <p className="text-[18px]  text-[#00c985]">0</p>
                  <p className="mt-[1px] text-[12px] leading-[16px] text-white">
                    Deposit number
                  </p>
                </div>

                <div className="py-[8px]">
                  <p className="text-[18px]  text-[#f59e0b]">0</p>
                  <p className="mt-[1px] text-[12px] leading-[16px] text-white">
                    Deposit amount
                  </p>
                </div>

                <div className="px-[12px] py-[8px]">
                  <p className="text-[18px]  text-white">0</p>
                  <p className="mt-[1px] text-[12px] leading-[16px] text-white">
                    Number of people making first deposit
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="py-[8px]">
                  <p className="text-[18px]  text-white">0</p>
                  <p className="mt-[1px] text-[12px] leading-[16px] text-white">
                    Number of register
                  </p>
                </div>

                <div className="py-[8px]">
                  <p className="text-[18px]  text-[#00c985]">0</p>
                  <p className="mt-[1px] text-[12px] leading-[16px] text-white">
                    Deposit number
                  </p>
                </div>

                <div className="py-[8px]">
                  <p className="text-[18px]  text-[#f59e0b]">0</p>
                  <p className="mt-[1px] text-[12px] leading-[16px] text-white">
                    Deposit amount
                  </p>
                </div>

                <div className="px-[12px] py-[8px]">
                  <p className="text-[18px] ">0</p>
                  <p className="mt-[1px] text-[12px] leading-[16px] text-white">
                    Number of people making first deposit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-30 mt-[24px] space-y-[10px] px-[13px]">
        <button
          type="button"
          className="flex h-[42px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-[14px] font-bold tracking-wide text-white"
        >
          INVITATION LINK
        </button>

        <div
          onClick={handleCopyCode}
          className="flex cursor-pointer items-center justify-between rounded-xl bg-[#2b3270] px-[14px] py-[13px] active:opacity-90"
        >
          <div className="flex items-center gap-[10px]">
            <div className="flex h-[28px] w-[28px] items-center justify-center rounded-lg bg-[#387bf8]">
              <Copy size={16} className="text-white" />
            </div>

            <span className="text-[13px] text-white">
              Copy invitation code
            </span>
          </div>

          <div className="flex items-center gap-[6px] text-[#a3adc9]">
            <span className="text-[13px] font-medium">
              {invitationCode}
            </span>

            <Copy size={14} />
          </div>
        </div>

        <div
          className="flex cursor-pointer items-center justify-between rounded-xl bg-[#2b3270] px-[14px] py-[13px]"
        >
          <div className="flex items-center gap-[10px]">
            <CalendarCheck2
              size={20}
              className="text-[#4ca2ff]"
            />

            <span className="text-[13px] text-white">
              Subordinate data
            </span>
          </div>

          <ChevronRight size={16} className="text-[#6d779c]" />
        </div>

        <div
        
          className="flex cursor-pointer items-center justify-between rounded-xl bg-[#2b3270] px-[14px] py-[13px]"
        >
          <div className="flex items-center gap-[10px]">
            <CircleDollarSign
              size={20}
              className="text-[#4ca2ff]"
            />

            <span className="text-[13px] text-white">
              Commission detail
            </span>
          </div>

          <ChevronRight size={16} className="text-[#6d779c]" />
        </div>

        <div
          // onClick={() => navigate("/customer-Service")}
          className="flex cursor-pointer items-center justify-between rounded-xl bg-[#2b3270] px-[14px] py-[13px]"
        >
          <div className="flex items-center gap-[10px]">
            <div className="flex w-[28px] items-center justify-center">
              <img
                src={csIcon}
                alt="Agent service"
                className="h-5 w-5 object-contain"
              />
            </div>

            <span className="text-[13px] text-white">
              Agent line customer service
            </span>
          </div>

          <ChevronRight size={16} className="text-[#6d779c]" />
        </div>

        <div
       
          className="flex cursor-pointer items-center justify-between rounded-xl bg-[#2b3270] px-[14px] py-[13px]"
        >
          <div className="flex items-center gap-[10px]">
            <BadgeDollarSign
              size={20}
              className="text-[#4ca2ff]"
            />

            <span className="text-[13px] text-white">
              Rebate ratio
            </span>
          </div>

          <ChevronRight size={16} className="text-[#6d779c]" />
        </div>

        <div className="rounded-xl bg-[#2b3270] p-[14px]">
          <div className="mb-[12px] flex items-center gap-[8px]">
            <TrendingUp
              size={18}
              className="text-[#4ca2ff]"
            />

            <h3 className="text-[14px] font-semibold text-white">
              Promotion data
            </h3>
          </div>

          <div className="text-center">
            <div className="grid grid-cols-2 pb-[12px]">
              <div>
                <span className="text-[16px] font-bold text-white">
                  0
                </span>

                <p className="mt-[2px] text-[11px] text-[#828cae]">
                  This Week
                </p>
              </div>

              <div className="border-l border-[#374182]/50">
                <span className="text-[16px] font-bold text-white">
                  0
                </span>

                <p className="mt-[2px] text-[11px] text-[#828cae]">
                  Total commission
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-[#374182]/50 pt-[12px]">
              <div>
                <span className="text-[16px] font-bold text-white">
                  0
                </span>

                <p className="mt-[2px] text-[11px] text-[#828cae]">
                  Direct Subordinate
                </p>
              </div>

              <div className="border-l border-[#374182]/50 px-[4px]">
                <span className="text-[16px] font-bold text-white">
                  0
                </span>

                <p className="mt-[2px] text-[10.5px] leading-tight text-[#828cae]">
                  Total number of subordinates in the team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}