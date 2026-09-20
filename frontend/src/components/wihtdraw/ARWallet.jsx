import React from "react";
import { ChevronRight } from "lucide-react";

function ARWallet() {
  return (
    <div className="w-full mt-3">

      <div className="h-[53px] rounded-[7px] bg-[#303676] flex items-center justify-between px-[10px]">
        <div className="flex items-center gap-3">
          <div className="w-[27px] h-[27px] rounded-[5px] bg-[#559bea] flex items-center justify-center">
            <span className="text-[#303676] text-[18px]">
              $
            </span>
          </div>

          <span className="text-[13px] text-[#b9c0e6]">
            AR Pay transaction rules
          </span>
        </div>

        <div className="flex items-center gap-1 text-[13px] text-[#d4d7e9]">
          Check
          <ChevronRight size={18} />
        </div>
      </div>

      <div className="mt-[10px] h-[74px] rounded-[7px] bg-[#303676] flex items-center justify-between px-4">

        <div className="flex items-center gap-4">
          <div className="text-[32px] text-[#ffc400] font-bold leading-none">
            Λ
          </div>

          <span className="text-[13px] text-[#c2c6dc] leading-5">
            Your AR wallet has not been
            <br />
            activated yet
          </span>
        </div>

        <button className="h-[42px] w-[80px] rounded-[6px] bg-[#61a8f5] text-white text-[13px]">
          Activate
        </button>
      </div>

      <div className="mt-[14px] rounded-[7px] bg-[#303676] px-[10px] pt-[15px] pb-[20px]">

        <div className="flex items-center gap-3">
          <div className="w-[27px] h-[27px] rounded-[5px] bg-[#559bea] flex items-center justify-center">
            <span className="text-[#303676] text-[16px]">
              A
            </span>
          </div>

          <h2 className="text-[18px] font-semibold text-white">
            AR Wallet
          </h2>
        </div>

        <p className="mt-[10px] text-[14px]  leading-[26px] text-white">
          AR Wallet is a third-party payment service platform
          <br />
          that facilitates fast payments on the platform using
          <br />
          ARB (digital currency)
        </p>

        <p className="mt-[14px] text-[14px]  text-white">
          Safe, stable and fast
        </p>

        <div className="mt-[18px] flex items-center gap-1 text-[14px]  text-white">
          How to activate AR wallet
          <ChevronRight size={19} />
        </div>

        <h2 className="mt-[28px] text-[17px] font-bold text-white">
          AR wallet features
        </h2>

        <p className="mt-[16px] text-[16px]  leading-[26px] text-white">
          You only need Tiranga to withdraw the balance to
          <br />
          AR Wallet
        </p>

        <p className="mt-[14px] text-[16px]  leading-[26px] text-white">
          When you want to play games, you can quickly
          <br />
          recharge to the Tiranga platform through AR Pay,
          <br />
          with the recharge process taking only 5 seconds to
          <br />
          complete
        </p>

        <p className="mt-[14px] text-[16px]  leading-[26px] text-white">
          When you need to withdraw money to your bank
          <br />
          card, you can quickly sell ARB through UPI in your
          <br />
          AR wallet to get rupees, and you can also get
          <br />
          additional rewards!
        </p>

        <p className="mt-[14px] text-[16px]  leading-[26px] text-white">
          This method reduces your bank transaction issues
          <br />
          while you are playing, so you don't need to worry
          <br />
          about bank limits. You just need to sell to UPI when
          <br />
          you need to use the funds.
        </p>

        <button className="mt-[14px] w-full h-[39px] rounded-[5px] bg-[#61a8f5] text-[13px] text-white">
          activate AR wallet
        </button>

      </div>
    </div>
  );
}

export default ARWallet;