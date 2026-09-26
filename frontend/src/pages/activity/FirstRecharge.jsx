import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import { extraDepositBonusTiers } from "../../constants/homeData";

export default function FirstRecharge() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-theme pb-10 text-white">
      {/* Header */}
      <PageHeader title="First deposit bonus" />

      {/* Content */}
      <div className="px-3.5 pt-2 space-y-2.5">
        {/* Deposit Bonus Tiers */}
        {extraDepositBonusTiers.map((tier) => (
          <div
            key={tier.deposit}
            className="rounded-xl border border-[#344084] bg-[#29326e] px-3.5 py-3 shadow-sm"
          >
            {/* Top Row: Deposit Target & Bonus */}
            <div className="flex items-center justify-between text-[13px]">
              <span className="font-medium text-white">
                First deposit{" "}
                <span className="font-semibold text-[#ffa128]">
                  {tier.deposit}
                </span>
              </span>
              <span className="font-semibold text-[#ffa128]">
                + ₹{tier.bonus.toFixed(2)}
              </span>
            </div>

            {/* Subtitle description */}
            <p className="mt-1 text-[11.5px] leading-tight text-[#9eb2e8]">
              {tier.description}
            </p>

            {/* Bottom Row: Progress & Golden Deposit Button */}
            <div className="mt-2.5 flex items-center justify-between gap-3">
              <div className="flex h-[28px] w-[56%] items-center justify-center rounded-full bg-[#1b224e] text-[12px] font-medium text-white">
                0/{tier.deposit}
              </div>

              <button
                type="button"
                onClick={() => navigate("/deposit")}
                className="flex h-[28px] items-center justify-center rounded-lg border border-[#ffa128] px-5 text-[12.5px] font-semibold text-[#ffa128] transition active:scale-95 hover:bg-[#ffa128]/10"
              >
                Deposit
              </button>
            </div>
          </div>
        ))}

        {/* Activity Rules Section */}
        <div className="mt-4 rounded-xl border border-[#313c80] bg-[#242c67] p-4 shadow-md">
          {/* Rules Header Badge */}
          <div className="relative mb-3 flex items-center justify-center">
            <div className="flex items-center gap-1.5 rounded-full border border-[#4458b0] bg-gradient-to-r from-[#2a3875] via-[#334694] to-[#2a3875] px-6 py-1 shadow-sm">
              <span className="text-[14px] font-bold text-white tracking-wide">
                Activity Rules
              </span>
            </div>
          </div>

          {/* Rules List */}
          <div className="space-y-2.5 text-[11.5px] leading-relaxed text-[#9eb0e2]">
            <p className="flex items-start gap-1.5">
              <span className="text-[#3b82f6] text-[13px] leading-[15px] shrink-0">◆</span>
              <span>
                Exclusive for the first recharge of the account. There is only one chance. The more you recharge, the more rewards you will receive. The highest reward is ₹800.00;
              </span>
            </p>

            <p className="flex items-start gap-1.5">
              <span className="text-[#3b82f6] text-[13px] leading-[15px] shrink-0">◆</span>
              <span>
                Activities cannot be participated in repeatedly;
              </span>
            </p>

            <p className="flex items-start gap-1.5">
              <span className="text-[#3b82f6] text-[13px] leading-[15px] shrink-0">◆</span>
              <span>
                Rewards can only be claimed manually on IOS, Android, H5, and PC;
              </span>
            </p>

            <p className="flex items-start gap-1.5">
              <span className="text-[#3b82f6] text-[13px] leading-[15px] shrink-0">◆</span>
              <span>
                The bonus (excluding the principal) given in this event requires 3 times the coding turnover (i.e. valid bets) before it can be withdrawn, and the coding does not limit the platform;
              </span>
            </p>

            <p className="flex items-start gap-1.5">
              <span className="text-[#3b82f6] text-[13px] leading-[15px] shrink-0">◆</span>
              <span>
                This event is limited to normal human operations by the account owner. It is prohibited to rent, use plug-ins, robots, gamble with different accounts, brush each other, arbitrage, interfaces, protocols, exploit loopholes, group control or other technical means to participate, otherwise it will be canceled or Rewards will be deducted, frozen, or even blacklisted;
              </span>
            </p>

            <p className="flex items-start gap-1.5">
              <span className="text-[#3b82f6] text-[13px] leading-[15px] shrink-0">◆</span>
              <span>
                In order to avoid differences in text understanding, the platform reserves the right of final interpretation of this event.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
