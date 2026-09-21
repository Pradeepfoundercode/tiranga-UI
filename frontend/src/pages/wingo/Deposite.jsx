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

function Deposite({ onBack, onHistory }) {

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
    <div className="min-h-screen bg-theme text-white pb-20">
      <PageHeader
        title="Deposit"
        rightText="Deposit history"
        onBack={onBack}
        onRightClick={onHistory}
        titleClassName="text-[18px] text-text"
        rightClassName="text-[12px] text-text"
      />

      <div className="px-3.25">
        <BalanceBanner
          backgroundImage={totalAssetsBg}
          balanceIcon={balanceDmuJO3Yz}
          refreshIcon={refresh}
          balance={balance}
          label="Balance"
        />

        <section className="mt-3.25">
          <div className="grid grid-cols-4 gap-2">
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

          <div className="grid grid-cols-4 gap-2 mt-2">
            <button
              onClick={() => handleMethodChange("USDT")}
              className={`
                relative
                h-19.5
                rounded-[5px]
                flex
                flex-col
                items-center
                justify-center
                overflow-hidden
                transition
                ${selectedMethod === "USDT"
                  ? "bg-active"
                  : "bg-background1"
                }
              `}
            >
              <div className="w-10.75 h-8 flex items-center justify-center">
                <img
                  src={usdt}
                  alt="USDT"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div className="absolute top-0 right-0 w-9 h-10.5">
                <img
                  src={redcard}
                  alt=""
                  className="absolute top-0 right-0 w-full h-full object-fill"
                />

                <span className="absolute top-5 left-0 w-full text-center text-[10px] font-bold text-white">
                  +3%
                </span>
              </div>

              <span className="text-[12px] text-[#e7e8f1] mt-0.75">
                USDT
              </span>
            </button>
          </div>
        </section>

        <section
          className={`
            mt-3
            bg-background1
            rounded-[9px]
            px-2.25
            py-2.75
            ${selectedMethod === "USDT"
              ? "min-h-86.75"
              : "min-h-42.5"
            }
          `}
        >
          <div className="flex items-center gap-2.25">
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
              mt-3.5
              ${selectedMethod === "USDT"
                ? "flex flex-col gap-2.25"
                : "grid grid-cols-2 gap-2.5"
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

        <section className="mt-[20px] bg-background1 rounded-[9px] px-[9px] pt-[11px] pb-[13px]">
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
                    h-[37px]
                    rounded-[5px]
                    border
                    text-[13px]
                    ${active
                      ? "border-[#2998ee] bg-active text-white"
                      : "border-[#43508d] bg-background1 text-[#69a9ff]"
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

          <div className="mt-[10px] h-[38px] rounded-full bg-theme flex items-center px-[12px]">
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

        <section className="mt-[9px] bg-background1 rounded-[9px] px-[9px] py-[11px]">
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
        <div className="w-full max-w-[400px] mx-auto bg-background1 pointer-events-auto">
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
                ${amount
                  ? "bg-active text-white"
                  : "bg-color1 text-text1"
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