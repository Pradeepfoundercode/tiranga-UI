import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import totalAssetsBg from "../../assets/withdraw/TotalAssetsBg-BM_amq17.png";
import refresh from "../../assets/withdraw/refresh-C_mIC898.png";
import bankcard from "../../assets/withdraw/a63a0873-0a67-40a4-b8e7-6548127e6ebc.png";
import usdtcustomer from "../../assets/withdraw/b5773573-f004-4daa-8785-ddfcfea8d068.png";
import balanceDmuJO3Yz from "../../assets/withdraw/balance-DmuJO3Yz.png";
import arpay from "../../assets/withdraw/WithBeforeImgIcon_20240307174823m24t.png";
import addDoZcp31 from "../../assets/withdraw/add-DoZcp313.png";
import withdralHistory from "../../assets/withdraw/addab24a-41f5-4f53-9878-8c4246de133f.png";
import nodata from "../../assets/withdraw/902f2b37-6129-405d-9e91-08a31f861d69.png";
import { withdrawPaymentMethods } from "../../constants/withdrawData";
import PageHeader from "../../components/common/PageHeader";
import BalanceBanner from "../../components/common/BalanceBanner";
import useProfileBalance from "../../hooks/useProfileBalance";
import ARWallet from "../../components/wihtdraw/ARWallet";

function WithdrawPage() {
  const navigate = useNavigate();
  const { balance } = useProfileBalance();

  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [amount, setAmount] = useState("");
  const [usdtAmount, setUsdtAmount] = useState("");
  const [showARWallet, setShowARWallet] = useState(false);

  const USDT_RATE = 103;

  const formatAmount = (value) =>
    Number(value || 0).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");

    setAmount(value);

    if (value) {
      setUsdtAmount((Number(value) / USDT_RATE).toFixed(2));
    } else {
      setUsdtAmount("");
    }
  };

  const handleAll = () => {
    const value = String(balance || 0);

    setAmount(value);

    if (paymentMethod === "USDT") {
      setUsdtAmount((Number(value) / USDT_RATE).toFixed(2));
    }
  };

  return (
    <div className="min-h-screen bg-theme text-white withdraw-font">
      <PageHeader
        title="Withdraw"
        rightText="Withdrawal history"
        onBack={() => navigate("/")}
        onRightClick={() => navigate("/withdraw/history")}
        titleClassName="text-[18px] sm:text-[20px] text-text"
        rightClassName="text-[12px] sm:text-[13px] text-text withdraw-font"
      />

      <div className="px-3 sm:px-3.5 pt-4 pb-8 mt-0.5">
        <BalanceBanner
          backgroundImage={totalAssetsBg}
          balanceIcon={balanceDmuJO3Yz}
          refreshIcon={refresh}
          balance={balance}
          label="Available balance"
          balanceClassName="text-[25px] font-bold ml-3"
          labelClassName="text-text"
          contentClassName="relative z-10"
        />

        <button
          onClick={() => setShowARWallet(true)}
          className={`
            mt-3.5
            w-full
            min-h-[70px]
            py-2.5
            rounded-[10px]
            flex
            items-center
            px-3
            text-left
            ${showARWallet ? "bg-active" : "bg-background1"}
          `}
        >
          <div className="shrink-0">
            <img src={arpay} alt="" className="h-10 shrink-0" />
          </div>

          <div className="ml-3 flex-1 min-w-0">
            <h2 className="text-[16px] text-text font-medium leading-snug">
              ARPay
            </h2>

            <p
              className={`text-[12px] sm:text-[13px] leading-4.5 sm:leading-5 mt-0.5 ${
                showARWallet ? "text-white" : "text-text1"
              }`}
            >
              Supports UPI for fast payment, and bonuses for withdrawals
            </p>
          </div>
        </button>

        <div className="mt-[10px] grid grid-cols-3 gap-[9px]">
          {withdrawPaymentMethods.map((method) => {
            const active = paymentMethod === method.id;

            return (
              <button
                key={method.id}
                onClick={() => {
                  setPaymentMethod(method.id);
                  setShowARWallet(false);

                  if (method.id !== "USDT") {
                    setUsdtAmount("");
                  }
                }}
                className={`
                  h-21.25
                  rounded-[5px]
                  justify-center
                  transition-all
                  ${active
                    ? "bg-active text-white"
                    : "bg-background1 text-[#aeb5e2]"
                  }
                `}
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    src={method.icon}
                    alt={method.label}
                    className="w-9 h-9 object-contain"
                  />

                  <span className="text-[13px] withdraw-font">
                    {method.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {showARWallet ? (
          <div className="mt-[13px]">
            <ARWallet />
          </div>
        ) : (
          <>
            {paymentMethod === "UPI" && (
              <button
                onClick={() => {
                  setShowARWallet(false);
                  navigate("/withdraw/payment-method");
                }}
                className="
                  mt-[12px]
                  w-full
                  h-[78px]
                  rounded-[10px]
                  bg-background1
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-[#9fa7d6]
                  gap-1
                "
              >
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <img src={addDoZcp31} alt="" />
                </div>

                <span className="text-[13px] withdraw-font">
                  Add UPI
                </span>
              </button>
            )}

            {paymentMethod === "BANK CARD" && (
              <div
                onClick={() => navigate("/withdraw/bank-account")}
                className="
                  mt-[12px]
                  w-full
                  h-[78px]
                  rounded-[10px]
                  bg-background1
                  flex
                  items-center
                  px-4
                  cursor-pointer
                  hover:bg-background
                  transition-colors
                "
              >
                <div className="w-[105px] flex flex-col items-center">
                  <img
                    src={bankcard}
                    alt=""
                    className="h-10"
                  />

                  <span className="text-[16px] text-[#b9c0e6] truncate max-w-[100px]">
                    Bank of Bar...
                  </span>
                </div>

                <div className="h-[34px] w-[1px] bg-[#8b91bd] mx-4" />

                <div className="flex-1">
                  <span className="text-[16px] text-[#b9c0e6]">
                    879654****432
                  </span>
                </div>

                <div className="text-[#aeb5d7] text-[32px] font-light">
                  ›
                </div>
              </div>
            )}

            {paymentMethod === "USDT" && (
              <button
                onClick={() => navigate("/withdraw/payment-method")}
                className="
                  mt-[12px]
                  w-full
                  h-[78px]
                  rounded-[10px]
                  bg-background1
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-[#9fa7d6]
                  
                "
              >
                <div className="relative w-17 h-17 flex items-center justify-center">
                  <img src={usdtcustomer} alt="" />
                </div>

                <span className="text-[14px] withdraw-font ">
                  Contact customer serviceAdd USDT address
                </span>
              </button>
            )}

            <div className="mt-[13px] w-full rounded-[10px] bg-background1 px-[9px] pt-[11px] pb-[12px]">
              {paymentMethod === "USDT" ? (
                <>
                  <div className="flex items-center gap-2 mb-[10px] ml-1">
                    <img
                      src={
                        withdrawPaymentMethods.find(
                          (method) => method.id === "USDT"
                        )?.icon
                      }
                      alt="USDT"
                      className="w-[32px] h-[32px] object-contain shrink-0"
                    />

                    <span className="text-[17px] text-white">
                      Select amount of USDT
                    </span>
                  </div>

                  <div className="h-[48px] rounded-[7px] bg-theme flex items-center mx-1 px-3 sm:px-5">
                    <span className="text-[#3295ee] font-semibold text-[23px] shrink-0">
                      ₹
                    </span>

                    <input
                      type="text"
                      inputMode="decimal"
                      value={amount}
                      maxLength={11}
                      onChange={handleAmountChange}
                      placeholder="Please enter withdrawal amount"
                      className="
                        w-full
                        ml-3 sm:ml-6
                        bg-transparent
                        outline-none
                        border-none
                        text-[13.5px]
                        text-[#3398ef]
                        placeholder:text-[#3398ef]
                      "
                    />
                  </div>

                  {amount &&
                    Number(amount) > Number(balance || 0) && (
                      <div className="mt-[7px] px-1 ml-1 text-[12px] text-[#ff4d3d]">
                        Insufficient balance
                      </div>
                    )}

                  <div className="mt-[13px] h-[48px] rounded-[7px] bg-theme flex items-center mx-1 px-3 sm:px-4">
                    <img
                      src={
                        withdrawPaymentMethods.find(
                          (method) => method.id === "USDT"
                        )?.icon
                      }
                      alt="USDT"
                      className="w-[32px] h-[24px] object-contain shrink-0"
                    />

                    <input
                      type="text"
                      value={usdtAmount}
                      readOnly
                      placeholder="Please enter USDT amount"
                      className="
                        w-full
                        ml-3 sm:ml-6
                        bg-transparent
                        outline-none
                        border-none
                        text-[13.5px]
                        text-[#3398ef]
                        placeholder:text-[#3398ef]
                      "
                    />
                  </div>

                  <div className="mt-[13px] flex items-center justify-between px-1 ml-1 gap-2">
                    <span className="text-[12.5px] sm:text-[13px] text-[#b9c0e6] truncate">
                      Withdrawable balance
                      <span className="text-[#ff9f00] ml-1">
                        ₹{formatAmount(balance)}
                      </span>
                    </span>

                    <button
                      onClick={handleAll}
                      className="
                        h-[24px]
                        px-3
                        rounded-[5px]
                        border
                        border-[#5795e6]
                        text-[#5795e6]
                        text-[13px]
                        withdraw-font
                        shrink-0
                      "
                    >
                      All
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="h-[48px] rounded-full bg-theme flex items-center mx-1 px-3.5 sm:px-5 mt-0.5">
                    <h1 className="text-[#3295ee] font-semibold text-[22px] shrink-0">
                      ₹
                    </h1>

                    <input
                      type="text"
                      inputMode="numeric"
                      value={amount}
                      maxLength={11}
                      onChange={(e) =>
                        setAmount(e.target.value.replace(/[^0-9]/g, ""))
                      }
                      placeholder="Please enter the amount"
                      className="
                        w-full
                        ml-3 sm:ml-6
                        bg-transparent
                        outline-none
                        border-none
                        text-[13.5px]
                        text-[#3398ef]
                        placeholder:text-[#3398ef]
                      "
                    />
                  </div>

                  <div className="mt-[13px] flex items-center justify-between px-1 ml-1 gap-2">
                    <span className="text-[12.5px] sm:text-[13px] text-[#b9c0e6] truncate">
                      Withdrawable balance
                      <span className="text-[#ff9f00] ml-1">
                        ₹{formatAmount(balance)}
                      </span>
                    </span>

                    <button
                      onClick={handleAll}
                      className="
                        h-[22px]
                        px-3
                        rounded-[5px]
                        border
                        border-[#5795e6]
                        text-[#5795e6]
                        text-[13px]
                        withdraw-font
                        shrink-0
                      "
                    >
                      All
                    </button>
                  </div>
                </>
              )}

              {paymentMethod === "USDT" && (
                <div className="mt-[7px] px-1 ml-1">
                  <span className="text-[12px] text-[#8f97c9]">
                    1 USDT = ₹{USDT_RATE}
                  </span>
                </div>
              )}

              <div className="mt-[7px] flex items-center justify-between px-1 ml-1">
                <span className="text-[13px] text-[#b9c0e6]">
                  Withdrawal amount received
                </span>

                <span className="text-[16px] text-[#ff9f00]">
                  ₹{formatAmount(amount)}
                </span>
              </div>

              <button
                disabled
                className="
                  mt-[18px]
                  w-full
                  h-[42px]
                  rounded-full
                  bg-color1
                  text-[#a9afc2]
                  text-[15px]
                  withdraw-font
                "
              >
                Withdraw
              </button>

              <ul className="space-y-[13px] text-[13px] leading-[17px] text-text1 border border-background p-4 mx-1 mt-[30px] rounded-lg">
                <li className="flex gap-2">
                  <span className="text-[#55a5ff]">◆</span>

                  <span>
                    Need to bet
                    <span className="text-[#ff4d3d] ml-1">
                      ₹0.00
                    </span>
                    {" "}to be able to withdraw
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#55a5ff]">◆</span>

                  <span>
                    Withdraw time
                    <span className="text-[#ff4d3d] ml-1">
                      00:00-23:55
                    </span>
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#55a5ff]">◆</span>

                  <span>
                    Inday Remaining Withdrawal Times
                    <span className="text-[#ff4d3d] ml-1">
                      3
                    </span>
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#55a5ff]">◆</span>

                  <span>
                    Withdrawal amount range
                    <span className="text-[#ff4d3d] ml-1">
                      ₹100.00-₹50,000.00
                    </span>
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#55a5ff]">◆</span>

                  <span className="leading-5.5">
                    Please check your registered bank information again before
                    making a withdrawal. If your registered bank information is
                    incorrect, our company will not be responsible for any losses
                    you may incur.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#55a5ff]">◆</span>

                  <span className="leading-5.5">
                    If your registered bank information is incorrect, please
                    contact customer service.
                  </span>
                </li>
              </ul>
            </div>
          </>
        )}

        {!showARWallet && (
          <div className="mt-[27px]">
            <div className="flex items-center gap-2">
              <img
                src={withdralHistory}
                alt=""
                className="h-10"
              />

              <h2 className="text-[17px] font-semibold">
                Withdrawal history
              </h2>
            </div>

            <div className="mt-[14px] flex flex-col items-center">
              <img
                src={nodata}
                alt=""
                className="h-32"
              />

              <span className="text-[14px] text-[#8f97c9] font-sans mt-3">
                No data
              </span>
            </div>

            <button
              onClick={() => navigate("/withdraw/history")}
              className="
                mt-[17px]
                w-[92%]
                h-[35px]
                rounded-full
                border
                border-active
                text-[#5ca6f6]
                text-[15px]
                font-medium
                ml-3
                cursor-pointer
                hover:bg-background1
                active:opacity-80
                transition-colors
              "
            >
              All history
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WithdrawPage;