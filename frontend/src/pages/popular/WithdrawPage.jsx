import React, { useState } from "react";
import {
  WalletCards,
} from "lucide-react";
import totalAssetsBg from "../../assets/withdraw/TotalAssetsBg-BM_amq17.png";
import refresh from "../../assets/withdraw/refresh-C_mIC898.png";
import balanceDmuJO3Yz from "../../assets/withdraw/balance-DmuJO3Yz.png";
import arpay from "../../assets/withdraw/WithBeforeImgIcon_20240307174823m24t.png";
import addDoZcp31 from "../../assets/withdraw/add-DoZcp313.png";
import withdralHistory from "../../assets/withdraw/addab24a-41f5-4f53-9878-8c4246de133f.png";
import nodata from "../../assets/withdraw/902f2b37-6129-405d-9e91-08a31f861d69.png";
import { withdrawPaymentMethods as paymentMethods } from "../../constants/withdrawData";
import PageHeader from "../../components/common/PageHeader";
import BalanceBanner from "../../components/common/BalanceBanner";

function WithdrawPage({ onBack }) {
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [amount, setAmount] = useState("");

  return (
    <div className="min-h-screen bg-[#262b5e] text-white withdraw-font">
      <PageHeader
        title="Withdraw"
        rightText="Withdrawal history"
        onBack={onBack}
        titleClassName="text-[20px] text-[#f0f1f5]"
        rightClassName="text-[13px] text-[#f0f1f5] withdraw-font"
      />

      {/* ================= PAGE CONTENT ================= */}
      <div className="px-[14px] pt-[16px] pb-8 mt-0.5">
        <BalanceBanner
          backgroundImage={totalAssetsBg}
          balanceIcon={balanceDmuJO3Yz}
          refreshIcon={refresh}
          label="Available balance"
          balanceClassName="text-[25px] font-bold ml-3"
          labelClassName="text-[#f0f1f5]"
          contentClassName="relative z-10"
        />

        <div className="mt-3.5 h-[70px] rounded-[10px] bg-[#303676] flex items-center px-3">
          <div>
            <img src={arpay} alt="" className="h-10.5" />
          </div>

          <div className="ml-3">
            <h2 className="text-[16.5px] text-[#f0f1f5] ">ARPay</h2>

            <p className="text-[13.5px] leading-6 text-[#acafc2] ">
              Supports UPI for fast payment, and bonuses for
              <br />
              withdrawals
            </p>
          </div>
        </div>

        {/* ================= PAYMENT METHODS ================= */}
        <div className="mt-[10px] grid grid-cols-3 gap-[9px]">
          {paymentMethods.map((method) => {
            const active = paymentMethod === method.id;

            return (
              <button
                key={method.id}
                onClick={() => setPaymentMethod(method.id)}
                className={`
          h-[85px]
          rounded-[5px]
        
          justify-center
          transition-all
          ${
            active
              ? "bg-gradient-to-b  from-[#2875df] to-[#27acec] text-white"
              : "bg-[#303676] text-[#aeb5e2]"
          }
        `}
              >
                <div className="flex  flex-col items-center justify-center gap-3">
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

        <button
          className="
            mt-[12px]
            w-full
            h-[86px]
            rounded-[10px]
            bg-[#303676]
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

          <span className="text-[13px] withdraw-font">Add UPI</span>
        </button>

        {/* ================= AMOUNT SECTION ================= */}
        <div className="mt-[13px] w-[370px] rounded-[10px] bg-[#303676] px-[9px] pt-[11px] pb-[12px]">
          {/* amount input */}
          <div className="h-[48px] rounded-full bg-[#242a61] flex items-center mx-1 px-5 mt-0.5">
            <h1 className="text-[#3295ee] font-semibold text-[22px]">₹</h1>

            <input
              type="text"
              inputMode="numeric"
              value={amount}
              maxLength={11}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Please enter the amount"
              className="
                w-full
                ml-10
                bg-transparent
                outline-none
                border-none
                text-[13.5px]
                text-[#3398ef]
                placeholder:text-[#3398ef]
              "
            />
          </div>

          {/* Withdrawable balance */}
          <div className="mt-[13px] flex items-center justify-between px-1 ml-1">
            <span className="text-[13px] text-[#b9c0e6]">
              Withdrawable balance
              <span className="text-[#ff9f00] ml-1 text-[13px]">₹0.00</span>
            </span>

            <button
              onClick={() => setAmount("0")}
              className="
                h-[19px]
                min-w-[75px]
                rounded-[5px]
                border
                border-[#5795e6]
                text-[#5795e6]
                text-[13px]
                withdraw-font
                
              "
            >
              All
            </button>
          </div>

          {/* Received amount */}
          <div className="mt-[7px] flex items-center justify-between px-1 ml-1">
            <span className="text-[13px] text-[#b9c0e6]">
              Withdrawal amount received
            </span>

            <span className="text-[16px] text-[#ff9f00]">
              ₹{amount || "0.00"}
            </span>
          </div>

          {/* Withdraw button */}
          <button
            disabled
            className="
              mt-[18px]
              w-full
              h-[42px]
              rounded-full
              bg-[#454456]
              text-[#a9afc2]
              text-[15px]
              withdraw-font
            "
          >
            Withdraw
          </button>

           <ul className="space-y-[13px] text-[13px] leading-[17px] text-[#acafc2] border border-[#374992] p-4 mx-1 mt-[30px] rounded-lg">
            <li className="flex gap-2">
              <span className="text-[#55a5ff] text-[13px]">◆</span>

              <span>
                Need to bet
                <span className="text-[#ff4d3d] ml-1">₹0.00</span> to be able to
                withdraw
              </span>
            </li>

            <li className="flex gap-2">
              <span className="text-[#55a5ff] text-[11px]">◆</span>

              <span>
                Withdraw time
                <span className="text-[#ff4d3d] ml-1">00:00-23:55</span>
              </span>
            </li>

            <li className="flex gap-2">
              <span className="text-[#55a5ff] text-[11px]">◆</span>

              <span>
                Inday Remaining Withdrawal Times
                <span className="text-[#ff4d3d] ml-1">3</span>
              </span>
            </li>

            <li className="flex gap-2">
              <span className="text-[#55a5ff] text-[11px]">◆</span>

              <span>
                Withdrawal amount range
                <span className="text-[#ff4d3d] ml-1">₹100.00-₹50,000.00</span>
              </span>
            </li>

            <li className="flex gap-2">
              <span className="text-[#55a5ff] text-[11px]">◆</span>

              <span className="leading-5.5">
                Please check your registered bank information again before
                making a withdrawal. If your registered bank information is
                incorrect, our company will not be responsible for any losses
                you may incur.
              </span>
            </li>

            <li className="flex gap-2">
              <span className="text-[#55a5ff] text-[11px]">◆</span>

              <span className="leading-5.5">
                If your registered bank information is incorrect, please contact
                customer service.
              </span>
            </li>
          </ul>
        </div>

       

        {/* ================= WITHDRAWAL HISTORY ================= */}
        <div className="mt-[27px]">
          <div className="flex items-center gap-2">
            <img src={withdralHistory} alt=""  className="h-10"/>

            <h2 className="text-[17px] font-semibold">Withdrawal history</h2>
          </div>

          {/* Empty state */}
          <div className="mt-[14px] flex flex-col items-center">
           <img src={nodata} alt="" className="h-32"/>

            <span className="text-[14px] text-[#8f97c9] font-sans mt-3">No data</span>
          </div>

          {/* All history button */}
          <button
            className="
              mt-[17px]
              w-[92%]
              h-[35px]
              rounded-full
              border
              border-[#4e9af0]
              text-[#5ca6f6]
              text-[15px]
              font-medium
              ml-3
            "
          >
            All history
          </button>
        </div>
      </div>
    </div>
  );
}

export default WithdrawPage;
