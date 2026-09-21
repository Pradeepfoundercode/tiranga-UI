import React from "react";
import { ChevronRight } from "lucide-react";

function ARWallet() {
  return (
    <div className="w-full mt-3">

      <div className="h-13.25 rounded-[7px] bg-background1 flex items-center justify-between px-2.5">
        <div className="flex items-center gap-3">
          <div className="w-6.75 h-6.75 rounded-[5px] bg-active flex items-center justify-center">
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

      <div className="mt-2.5 h-18.5 rounded-[7px] bg-background1 flex items-center justify-between px-4">

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

        <button className="h-10.5 w-20 rounded-md bg-active text-white text-[13px]">
          Activate
        </button>
      </div>

      <div className="mt-3.5 rounded-[7px] bg-background1 px-2.5 pt-3.75 pb-5">

        <div className="flex items-center gap-3">
          <div className="w-6.75 h-6.75 rounded-[5px] bg-active flex items-center justify-center">
            <span className="text-[#303676] text-[16px]">
              A
            </span>
          </div>

          <h2 className="text-[18px] font-semibold text-white">
            AR Wallet
          </h2>
        </div>

        <p className="mt-2.5 text-[14px]  leading-6.5 text-white">
          AR Wallet is a third-party payment service platform
          <br />
          that facilitates fast payments on the platform using
          <br />
          ARB (digital currency)
        </p>

        <p className="mt-3.5 text-[14px]  text-white">
          Safe, stable and fast
        </p>

        <div className="mt-4.5 flex items-center gap-1 text-[14px]  text-white">
          How to activate AR wallet
          <ChevronRight size={19} />
        </div>

        <h2 className="mt-7 text-[17px] font-bold text-white">
          AR wallet features
        </h2>

        <p className="mt-4 text-[16px]  leading-6.5 text-white">
          You only need Tiranga to withdraw the balance to
          <br />
          AR Wallet
        </p>

        <p className="mt-3.5 text-[16px]  leading-6.5 text-white">
          When you want to play games, you can quickly
          <br />
          recharge to the Tiranga platform through AR Pay,
          <br />
          with the recharge process taking only 5 seconds to
          <br />
          complete
        </p>

        <p className="mt-3.5 text-[16px]  leading-6.5 text-white">
          When you need to withdraw money to your bank
          <br />
          card, you can quickly sell ARB through UPI in your
          <br />
          AR wallet to get rupees, and you can also get
          <br />
          additional rewards!
        </p>

        <p className="mt-3.5 text-[16px]  leading-6.5 text-white">
          This method reduces your bank transaction issues
          <br />
          while you are playing, so you don't need to worry
          <br />
          about bank limits. You just need to sell to UPI when
          <br />
          you need to use the funds.
        </p>

        <button className="mt-3.5 w-full h-9.75 rounded-[5px] bg-active text-[13px] text-white">
          activate AR wallet
        </button>

      </div>
    </div>
  );
}

export default ARWallet;