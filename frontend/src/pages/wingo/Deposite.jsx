import {
  WalletCards,
  NotebookTabs,
} from "lucide-react";
import React, { useState } from "react";
import totalAssetsBg from "../../assets/withdraw/TotalAssetsBg-BM_amq17.png";
import balanceDmuJO3Yz from "../../assets/withdraw/balance-DmuJO3Yz.png";
import refresh from "../../assets/withdraw/refresh-C_mIC898.png";
import usdt from "../../assets/deposite/payNameIcon_20231129144625pc9h.png";
import redcard from "../../assets/deposite/gift-QkUpqTh_.png";
import selectchannel from "../../assets/deposite/cff44f9a-b782-429f-b4ae-c1a2b2ab2a93.png";
import nodata from "../../assets/withdraw/902f2b37-6129-405d-9e91-08a31f861d69.png";
import { paymentMethods, depositAmounts as amounts, depositInstructions as instructions, channelData } from "../../constants/depositData";
import PageHeader from "../../components/common/PageHeader";
import DepositMethodCard from "../../components/deposit/DepositMethodCard";
import ChannelCard from "../../components/deposit/ChannelCard";
import BalanceBanner from "../../components/common/BalanceBanner";
import EmptyState from "../../components/common/EmptyState";
import useProfileBalance from "../../hooks/useProfileBalance";

function Deposite({ onBack }) {

  const balance = useProfileBalance();

  const [selectedMethod, setSelectedMethod] = useState("UPI-QR");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [amount, setAmount] = useState("");
  const [selectedChannel, setSelectedChannel] = useState("Phonpe_QR");

  const handleAmountClick = (value) => {
    setSelectedAmount(value);

    const numericValue =
      typeof value === "string"
        ? parseInt(value.replace("K", "000"))
        : value;

    setAmount(numericValue);
  };

  const handleMethodChange = (methodId) => {
    setSelectedMethod(methodId);
    setSelectedChannel(channelData[methodId]?.[0]?.name || null);
  };

  const handleChannelChange = (channelName) => {
    setSelectedChannel(channelName);
  };

  return (
    <div className="min-h-screen bg-[#262b5e] text-white pb-[80px]">
      <PageHeader
        title="Deposit"
        rightText="Deposit history"
        onBack={onBack}
        titleClassName="text-[18px] text-[#f0f1f5]"
        rightClassName="text-[12px] text-[#f0f1f5]"
      />

      <div className="px-[13px]">
        <BalanceBanner
          backgroundImage={totalAssetsBg}
          balanceIcon={balanceDmuJO3Yz}
          refreshIcon={refresh}
          balance={balance}
          label="Balance"
        />

        <section className="mt-[13px]">
          <div className="grid grid-cols-4 gap-[8px]">
            {paymentMethods.map((method) => (
              <DepositMethodCard
                key={method.id}
                method={method}
                active={selectedMethod === method.id}
                onClick={() => handleMethodChange(method.id)}
                bonusImage={redcard}
              />
            ))}
          </div>

          <div className="grid grid-cols-4 gap-[8px] mt-[8px]">
            <button
              onClick={() => handleMethodChange("USDT")}
              className={`
                relative
                h-[78px]
                rounded-[5px]
                flex
                flex-col
                items-center
                justify-center
                overflow-hidden
                transition
                ${
                  selectedMethod === "USDT"
                    ? "bg-[#2998ee]"
                    : "bg-[#303675]"
                }
              `}
            >
              <div className="w-[43px] h-[32px] flex items-center justify-center">
                <img
                  src={usdt}
                  alt="USDT"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div className="absolute top-0 right-0 w-[36px] h-[42px]">
                <img
                  src={redcard}
                  alt=""
                  className="absolute top-0 right-0 w-full h-full object-fill"
                />

                <span className="absolute top-[20px] left-0 w-full text-center text-[10px] font-bold text-white">
                  +3%
                </span>
              </div>

              <span className="text-[12px] text-[#e7e8f1] mt-[3px]">
                USDT
              </span>
            </button>
          </div>
        </section>

        <section
          className={`
            mt-[12px]
            bg-[#303675]
            rounded-[9px]
            px-[9px]
            py-[11px]
            ${
              selectedMethod === "USDT"
                ? "min-h-[347px]"
                : "min-h-[170px]"
            }
          `}
        >
          <div className="flex items-center gap-[9px]">
            <img
              src={selectchannel}
              alt=""
              className="h-6.5"
            />

            <h2 className="text-[17px]">
              Select channel
            </h2>
          </div>

          <div
            className={`
              mt-[14px]
              ${
                selectedMethod === "USDT"
                  ? "flex flex-col gap-[9px]"
                  : "grid grid-cols-2 gap-[10px]"
              }
            `}
          >
            {(channelData[selectedMethod] || []).map((channel) => (
              <ChannelCard
                key={channel.name}
                channel={channel}
                active={selectedChannel === channel.name}
                isUsdt={selectedMethod === "USDT"}
                onClick={() => handleChannelChange(channel.name)}
              />
            ))}
          </div>
        </section>

        <section className="mt-[20px] bg-[#303675] rounded-[9px] px-[9px] pt-[11px] pb-[13px]">
          <div className="flex items-center gap-[9px]">
            <WalletCards size={21} className="text-[#65a9ff]" />

            <h2 className="text-[16px] font-bold">
              Deposit amount
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-[8px] mt-[10px]">
            {amounts.map((value) => {
              const active = selectedAmount === value;

              return (
                <button
                  key={value}
                  onClick={() => handleAmountClick(value)}
                  className={`
                    h-[28px]
                    rounded-[5px]
                    border
                    text-[13px]
                    ${
                      active
                        ? "border-[#2998ee] bg-[#2d82dc] text-white"
                        : "border-[#43508d] bg-[#303675] text-[#69a9ff]"
                    }
                  `}
                >
                  <span className="mr-[6px] text-[14px]">
                    ₹
                  </span>

                  {value}
                </button>
              );
            })}
          </div>

          <div className="mt-[10px] h-[38px] rounded-full bg-[#252d66] flex items-center px-[12px]">
            <span className="text-[#64aaff] text-[17px]">
              ₹
            </span>

            <div className="w-[1px] h-[18px] bg-[#59639a] mx-[11px]" />

            <input
              type="number"
              value={amount}
              maxLength={11}
              onChange={(e) => {
                setAmount(e.target.value);
                setSelectedAmount(null);
              }}
              placeholder="₹100.00 - ₹50,000.00"
              className="
                flex-1
                bg-transparent
                outline-none
                text-[12px]
                text-white
                placeholder:text-[#d6d7e1]
              "
            />

            {amount && (
              <button
                onClick={() => {
                  setAmount("");
                  setSelectedAmount(null);
                }}
                className="w-[18px] h-[18px] rounded-full border border-[#59639a] text-[11px] text-[#8d94bb]"
              >
                ×
              </button>
            )}
          </div>
        </section>

        <section className="mt-[9px] bg-[#303675] rounded-[9px] px-[9px] py-[11px]">
          <div className="flex items-center gap-[8px]">
            <NotebookTabs
              size={20}
              className="text-[#65a9ff]"
            />

            <h2 className="text-[14px] font-bold">
              Recharge instructions
            </h2>
          </div>

          <div className="mt-[10px] border border-[#43508d] rounded-[9px] px-[10px] py-[10px]">
            {instructions.map((item, index) => (
              <div
                key={index}
                className="flex gap-[8px] mb-[9px] last:mb-0"
              >
                <span className="text-[#65a9ff] text-[9px] mt-[3px]">
                  ◆
                </span>

                <p className="text-[10px] leading-[17px] text-[#bfc4dc]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-[27px]">
          <div className="flex items-center gap-2">
            <NotebookTabs
              size={20}
              className="text-[#65a9ff]"
            />

            <h2 className="text-[17px] font-semibold">
              Deposit history
            </h2>
          </div>

          <EmptyState image={nodata} />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        <div className="w-full max-w-[400px] mx-auto bg-[#303675] pointer-events-auto">
          <div className="h-[58px] px-[10px] flex items-center justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-[13px] leading-[18px] text-white">
                Recharge Method:
              </p>

              <p className="text-[14px] leading-[18px] font-bold text-white">
                {selectedChannel || selectedMethod}
              </p>
            </div>

            <button
              disabled={!amount}
              className={`
                w-[104px]
                h-[43px]
                rounded-[6px]
                text-[16px]
                font-medium
                ${
                  amount
                    ? "bg-[#318cf0] text-white"
                    : "bg-[#454456] text-[#acafc2]"
                }
              `}
            >
              Deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposite;