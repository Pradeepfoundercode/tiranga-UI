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
  const [selectedChannel, setSelectedChannel] = useState("Phonpe_QR");

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

  const channelData = {
    "UPI-QR": [
      {
        name: "Phonpe_QR",
        balance: "100 - 50K",
        bonus: "3%",
      },
    ],

    "UPI x QR": [
      {
        name: "WinPay - UPI X QR",
        balance: "100 - 20K",
        bonus: "3%",
      },
      {
        name: "Ospay - UPI X QR",
        balance: "100 - 50K",
        bonus: "3%",
      },
      {
        name: "Speed2Pay - UPI X QR",
        balance: "200 - 50K",
        bonus: "3%",
      },
      {
        name: "RaPay - UPI X QR",
        balance: "500 - 10K",
        bonus: "3%",
      },
      {
        name: "UMONEY - UPI x QR",
        balance: "100 - 2.5K",
        bonus: "3%",
      },
      {
        name: "Cpu2Pay - UPI x QR",
        balance: "500 - 50K",
        bonus: "3%",
      },
      {
        name: "AroPay - UPI X QR",
        balance: "100 - 50K",
        bonus: "3%",
      },
      {
        name: "WorldPay - UPI x QR",
        balance: "100 - 50K",
        bonus: "3%",
      },
      {
        name: "NewNinePay - UPI X QR",
        balance: "100 - 50K",
        bonus: "3%",
      },
      {
        name: "RAPay - UPI X QR",
        balance: "100 - 50K",
        bonus: "3%",
      },
    ],

    "E-Wallet": [
      {
        name: "WinPay - APP",
        balance: "100 - 20K",
        bonus: "3%",
      },
      {
        name: "Ospay - APP",
        balance: "100 - 50K",
        bonus: "3%",
      },
      {
        name: "Speed2Pay - APP",
        balance: "200 - 50K",
        bonus: "3%",
      },
      {
        name: "RaPay - APP",
        balance: "100 - 50K",
        bonus: "3%",
      },
      {
        name: "Cpu2Pay - APP",
        balance: "500 - 50K",
        bonus: "3%",
      },
      {
        name: "CedarPay - APP",
        balance: "200 - 10K",
        bonus: "3%",
      },
      {
        name: "NewNinePay - APP",
        balance: "100 - 50K",
        bonus: "3%",
      },
    ],

    "Paytm x QR": [
      {
        name: "WinPay - Paytm x QR",
        balance: "100 - 20K",
        bonus: "3%",
      },
      {
        name: "AroPay - Paytm x QR",
        balance: "100 - 50K",
        bonus: "3%",
      },
      {
        name: "Yespay - Paytm x QR",
        balance: "100 - 5K",
        bonus: "3%",
      },
    ],

    USDT: [
      {
        name: "Wallet66-USDT",
        balance: "10 - 500K",
        bonus: "3%",
        icon: usdt,
      },
      {
        name: "TronPay-USDT(TRC20)",
        balance: "10 - 100K",
        bonus: "3%",
        icon: usdt,
      },
      {
        name: "BinancePay-USDT(TRC20)",
        balance: "10 - 50K",
        bonus: "3%",
        icon: usdt,
      },
    ],
  };

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

        <button className="text-[12px] text-[#f0f1f5]">
          Deposit history
        </button>
      </header>

      <div className="px-[13px]">
        <div
          className="relative overflow-hidden w-[371px] h-[135.6px] rounded-[10px] bg-cover bg-center bg-no-repeat px-3 py-3"
          style={{
            backgroundImage: `url(${totalAssetsBg})`,
          }}
        >
          <div className="relative z-10 mt-1">
            <div className="flex items-center gap-2 text-[15px]">
              <img src={balanceDmuJO3Yz} alt="" className="h-4" />

              <span className="text-[#f0f1f5] text-[13px]">
                Balance
              </span>
            </div>

            <div className="mt-1 flex items-center">
              <span className="text-[22px] font-semibold ml-3 font-inter">
                ₹0.00
              </span>

              <img
                src={refresh}
                alt="refresh"
                className="h-3.5 ml-3"
              />
            </div>
          </div>
        </div>

        <section className="mt-[13px]">
          <div className="grid grid-cols-4 gap-[8px]">
            {paymentMethods.slice(0, 4).map((method) => {
              const active = selectedMethod === method.id;

              return (
                <button
                  key={method.id}
                  onClick={() => handleMethodChange(method.id)}
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
                  <div className="flex items-center justify-center">
                    <img
                      src={method.icon}
                      alt=""
                      className="h-10 w-10"
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
            {(channelData[selectedMethod] || []).map(
              (channel) => {
                const active = selectedChannel === channel.name;

                return (
                  <button
                    key={channel.name}
                    onClick={() => handleChannelChange(channel.name)}
                    className={`
                      text-left
                      rounded-[9px]
                      p-[12px]
                      ${
                        selectedMethod === "USDT"
                          ? "w-full h-[83px] flex items-center gap-[12px]"
                          : "w-full min-h-[80px]"
                      }
                      ${
                        active
                          ? "bg-[#2f8aee] text-white"
                          : "bg-[#40549e] text-[#c2c5d8]"
                      }
                    `}
                  >
                    {selectedMethod === "USDT" && (
                      <img
                        src={channel.icon}
                        alt=""
                        className="w-[43px] h-[43px] object-contain shrink-0"
                      />
                    )}

                    <div>
                      <p className="text-[14px] leading-[20px]">
                        {channel.name}
                      </p>

                      <p className="text-[14px] leading-[20px]">
                        Balance: {channel.balance}
                      </p>

                      <p className="text-[12px] leading-[18px]">
                        Bonus: {channel.bonus}
                      </p>
                    </div>
                  </button>
                );
              }
            )}
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

          <div className="mt-[14px] flex flex-col items-center">
            <img src={nodata} alt="" className="h-32" />

            <span className="text-[14px] text-[#8f97c9] font-sans mt-3">
              No data
            </span>
          </div>
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