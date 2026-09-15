import {
  ChevronLeft,
  RefreshCw,
  WalletCards,
  Pencil,
  NotebookTabs,
} from "lucide-react";
import React, { useState } from "react";
import totalAssetsBg from "../../assets/withdraw/TotalAssetsBg-BM_amq17.png";
import balanceDmuJO3Yz from "../../assets/withdraw/balance-DmuJO3Yz.png";
import refresh from "../../assets/withdraw/refresh-C_mIC898.png";
import upi from "../../assets/deposite/payNameIcon2_20250513182210std9.png";
import upiscanner from "../../assets/deposite/payNameIcon_20231111232427o5u8.png";
import paytm from "../../assets/deposite/payNameIcon_20231112145558u1tl.png";
import paytmscanner from "../../assets/deposite/payNameIcon_20231112145400uyr5.png";
import usdt from "../../assets/deposite/payNameIcon_20231129144625pc9h.png";
import redcard from "../../assets/deposite/gift-QkUpqTh_.png";
import selectchannel from "../../assets/deposite/cff44f9a-b782-429f-b4ae-c1a2b2ab2a93.png";
import nodata from "../../assets/withdraw/902f2b37-6129-405d-9e91-08a31f861d69.png";

function Deposite({ onBack }) {
  const [selectedMethod, setSelectedMethod] = useState("UPI-QR");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [amount, setAmount] = useState("");

  const paymentMethods = [
    {
      id: "UPI-QR",
      label: "UPI-QR",
      icon: upi,
    },
    {
      id: "UPI x QR",
      label: "UPI x QR",
      icon: upiscanner,
    },
    {
      id: "E-Wallet",
      label: "E-Wallet",
      icon: paytm,
    },
    {
      id: "Paytm x QR",
      label: "Paytm x QR",
      icon: paytmscanner,
    },
  ];

  const amounts = [100, 200, 300, 400, 500, "1K", "2K", "3K", "5K"];

  const instructions = [
    "If the transfer time is up, please fill out the deposit form again.",
    "The transfer amount must match the order you created, otherwise the money cannot be credited successfully.",
    "If you transfer the wrong amount, our company will not be responsible for the lost amount!",
    "Note: do not cancel the deposit order after the money has been transferred.",
  ];

  const handleAmountClick = (value) => {
    setSelectedAmount(value);

    const numericValue =
      typeof value === "string" ? parseInt(value.replace("K", "000")) : value;

    setAmount(numericValue);
  };

  return (
    <div className="min-h-screen bg-[#262b5e] text-white pb-[80px]">
      <header className="sticky top-0 z-30 h-[49px] bg-[#2d3474] flex items-center px-3 justify-between">
        <button
          onClick={onBack}
          className="w-8 h-8 flex items-center justify-center shrink-0"
        >
          <ChevronLeft size={27} strokeWidth={2} className="text-white" />
        </button>

        <div className=" text-center ml-14">
          <h1 className="text-[18px] text-[#f0f1f5]">Deposit</h1>
        </div>

        <button className="text-[12px] text-[#f0f1f5] ">Deposit history</button>
      </header>

      <div className="px-[13px]">
        <div
          className="relative overflow-hidden w-[371px] h-[135.6px] rounded-[10px] bg-cover bg-center bg-no-repeat px-3 py-3"
          style={{
            backgroundImage: `url(${totalAssetsBg})`,
          }}
        >
          <div className="relative z-10 mt-1">
            {/* Available balance */}
            <div className="flex items-center gap-2 text-[15px] ">
              <img src={balanceDmuJO3Yz} alt="" className="h-4 " />

              <span className="text-[#f0f1f5] text-[13px]">Balance</span>
            </div>

            {/* Balance */}
            <div className="mt-1 flex items-center  ">
              <span className="text-[22px] font-semibold ml-3 font-inter">
                ₹0.00
              </span>

              <img src={refresh} alt="refresh" className="h-3.5 ml-3 " />
            </div>
          </div>
        </div>

        <section className="mt-[13px]">
          {/* ================= PAYMENT METHODS ================= */}
          <div className="grid grid-cols-4 gap-[8px]">
            {paymentMethods.slice(0, 4).map((method) => {
              const active = selectedMethod === method.id;

              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`
            relative
            h-[95px]
            rounded-[5px]
            flex
            flex-col
            items-center
            justify-center
            overflow-hidden
            transition
            ${active ? "bg-[#2998ee]" : "bg-[#303675]"}
          `}
                >
                  {/* PAYMENT METHOD IMAGE */}
                  <div className=" flex items-center justify-center">
                    <img src={method.icon} alt="" className="h-10 w-10" />
                  </div>

                  {/* RED CARD */}
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

                  {/* LABEL */}
                  <span
  className={`text-[13px] mt-[2px] ${
    active ? "text-white" : "text-[#acafc2]"
  }`}
>
  {method.label}
</span>
                </button>
              );
            })}
          </div>

          {/* ================= USDT ================= */}
          <div className="grid grid-cols-4 gap-[8px] mt-[8px]">
            <button
              onClick={() => setSelectedMethod("USDT")}
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
        ${selectedMethod === "USDT" ? "bg-[#2998ee]" : "bg-[#303675]"}
      `}
            >
              {/* USDT IMAGE */}
              <div className="w-[43px] h-[32px] flex items-center justify-center">
                <img
                  src={usdt}
                  alt="USDT"
                  className="h-10 w-10 object-contain"
                />
              </div>

              {/* RED CARD */}
              {/* RED CARD */}
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

              {/* LABEL */}
              <span className="text-[12px] text-[#e7e8f1] mt-[3px]">USDT</span>
            </button>
          </div>
        </section>

        {/* ================= SELECT CHANNEL ================= */}
        <section className="mt-[12px] bg-[#303675] rounded-[9px] px-[9px] py-[11px] h-[170px]">
          <div className="flex items-center gap-[9px]">
          <img src={selectchannel} alt=""  className="h-6.5"/>

            <h2 className="text-[17px] ">Select channel</h2>
          </div>

          <div className="mt-[14px]">
            <button className="w-[170px] h-[85px] rounded-[9px] bg-[#2f8aee] text-left p-[12px]">
              <p className="text-[15px]">Phonepe_QR</p>

              <p className="text-[15px] mt-[2px]">Balance: 100 - 50K</p>

              <p className="text-[12px] mt-[2px]">Bonus: 3%</p>
            </button>
          </div>
        </section>

        {/* ================= DEPOSIT AMOUNT ================= */}
        <section className="mt-[20px] bg-[#303675] rounded-[9px] px-[9px] pt-[11px] pb-[13px]">
          <div className="flex items-center gap-[9px]">
            <WalletCards size={21} className="text-[#65a9ff]" />

            <h2 className="text-[16px] font-bold">Deposit amount</h2>
          </div>

          {/* AMOUNT BUTTONS */}
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
                  <span className="mr-[6px] text-[14px]">₹</span>

                  {value}
                </button>
              );
            })}
          </div>

          {/* CUSTOM AMOUNT */}
          <div className="mt-[10px] h-[38px] rounded-full bg-[#252d66] flex items-center px-[12px]">
            <span className="text-[#64aaff] text-[17px]">₹</span>

            <div className="w-[1px] h-[18px] bg-[#59639a] mx-[11px]" />

            <input
              type="number"
              value={amount}
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

        {/* ================= RECHARGE INSTRUCTIONS ================= */}
        <section className="mt-[9px] bg-[#303675] rounded-[9px] px-[9px] py-[11px]">
          <div className="flex items-center gap-[8px]">
            <NotebookTabs size={20} className="text-[#65a9ff]" />

            <h2 className="text-[14px] font-bold">Recharge instructions</h2>
          </div>

          <div className="mt-[10px] border border-[#43508d] rounded-[9px] px-[10px] py-[10px]">
            {instructions.map((item, index) => (
              <div key={index} className="flex gap-[8px] mb-[9px] last:mb-0">
                <span className="text-[#65a9ff] text-[9px] mt-[3px]">◆</span>

                <p className="text-[10px] leading-[17px] text-[#bfc4dc]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-[27px]">
                  <div className="flex items-center gap-2">
                   <NotebookTabs size={20} className="text-[#65a9ff]" />
        
                    <h2 className="text-[17px] font-semibold">Withdrawal history</h2>
                  </div>
        
                  {/* Empty state */}
                  <div className="mt-[14px] flex flex-col items-center">
                   <img src={nodata} alt="" className="h-32"/>
        
                    <span className="text-[14px] text-[#8f97c9] font-sans mt-3">No data</span>
                  </div>
        
                 
                </div>
                
      </div>
{/* ================= FIXED BOTTOM DEPOSIT BAR ================= */}
<div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
  <div className="w-full max-w-[400px] mx-auto bg-[#303675] pointer-events-auto">
    
    <div className="h-[58px] px-[10px] flex items-center justify-between">

      {/* Recharge Method */}
      <div className="flex flex-col justify-center">
        <p className="text-[13px] leading-[18px] text-white">
          Recharge Method:
        </p>

        <p className="text-[14px] leading-[18px] font-bold text-white">
          {selectedMethod === "UPI-QR"
            ? "Phonepe_QR"
            : selectedMethod}
        </p>
      </div>

      {/* Deposit Button */}
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
