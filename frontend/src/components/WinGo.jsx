import React, { useState } from "react";
import { balances, quantites } from "../data/gameData";

function WinGo({ active, selectedNum, setOpen }) {
  const [click, setClick] = useState(0);
  const [count, setCount] = useState(1);
  const [quantity, setQuantity] = useState(0);

  const decrease = () => {
    setCount((prev) => Math.max(1, prev - 1));
  };

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-[405px] -translate-x-1/2 overflow-hidden rounded-t-2xl bg-[#303a80] text-white">
        
      
        <div className="relative h-[125px] overflow-hidden">
          
         
          <div
            className="absolute inset-0 bg-[#dc3638]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 10%, 0 70%)",
            }}
          />

      
          <div
            className="absolute inset-0 bg-[#9b45d7]"
            style={{
              clipPath: "polygon(100% 0, 100% 70%, 50% 100%, 0 70%)",
            }}
          />

       
          <div className="absolute top-5 left-0 right-0 text-center text-[16px] font-medium">
            {active}
          </div>

          <div className="absolute top-[48px] left-1/2 w-[75%] -translate-x-1/2">
            <button className="w-full rounded-md bg-white py-1 text-[16px] text-black">
              Select {selectedNum}
            </button>
          </div>
        </div>

        <div className="px-4 pb-0">

  
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[18px]">Balance</p>

            <div className="grid grid-cols-4 gap-2">
              {balances.map((balance, i) => (
                <button
                  key={balance}
                  onClick={() => setClick(i)}
                  className={`min-w-[28px] rounded-md py-2 text-xs ${
                    click === i
                      ? "bg-[#dc3638]"
                      : "bg-[#374992]"
                  }`}
                >
                  {balance}
                </button>
              ))}
            </div>
          </div>

        
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[18px]">Quantity</p>

            <div className="flex items-center gap-3">
              <button
                onClick={decrease}
                className="flex h-[38px] w-[30px] items-center justify-center rounded-md bg-[#dc3638] text-[22px]"
              >
                -
              </button>

              <div className="flex h-[38px] w-[105px] items-center justify-center border border-[#5360a5] bg-[#252b65] text-[17px]">
                {count}
              </div>

              <button
                onClick={increase}
                className="flex h-[38px] w-[30px] items-center justify-center rounded-md bg-[#dc3638] text-[22px]"
              >
                +
              </button>
            </div>
          </div>

        
          <div className="mb-4 flex justify-end gap-2">
            {quantites.map((item, i) => (
              <button
                key={item}
                onClick={() => setQuantity(i)}
                className={`min-w-[52px] rounded-md py-2 text-[14px] ${
                  quantity === i
                    ? "bg-[#dc3638]"
                    : "bg-[#374992]"
                }`}
              >
                X{item}
              </button>
            ))}
          </div>

        
          <div className="mb-5 flex items-center gap-2 text-[14px]">
            <input
              type="checkbox"
             
              className="h-[18px] w-[20px] "
            />

            <label htmlFor="rules">I agree</label>

            <span className="text-[#ff5151]">
              Pre-sale rule 
            </span>
          </div>
        </div>

      
        <div className="flex h-[48px]">
          <button
            onClick={() => setOpen(false)}
            className="w-[35%] bg-[#40529b] text-[16px]"
          >
            Cancel
          </button>

          <button className="flex-1 bg-[#dc3638] text-[16px]">
            Total amount ₹ 1 
          </button>
        </div>
      </div>
    </>
  );
}

export default WinGo;