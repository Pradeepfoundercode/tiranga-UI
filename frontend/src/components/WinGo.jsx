import React, { useState } from "react";
import { balances, quantites } from "../data/gameData";

function WinGo({
  active,
  selectedNum,
  selectedColors = [],
  setOpen,
}) {
  const [click, setClick] = useState(0);
  const [count, setCount] = useState(1);
 const [quantity, setQuantity] = useState(1);
  const selectedBalance = Number(balances[click]) || 1;
const totalAmount = selectedBalance * count;

  // =====================================
  // COLORS
  // =====================================

 const colorMap = {
  green: {
    main: "#18b866",
    dark: "#0db65e",
  },

  violet: {
    main: "#a044dc",
    dark: "#9b42dc",
  },

  red: {
    main: "#ff4b52",
    dark: "#df3735",
  },

  big: {
    main: "#e89b2e",
    dark: "#e89b2e",
  },

  small: {
    main: "#5790da",
    dark: "#5790da",
  },
};

  // Selected colors
  const firstColor = selectedColors[0] || "red";
  const secondColor = selectedColors[1] || null;

  const first = colorMap[firstColor];
  const second = secondColor
    ? colorMap[secondColor]
    : null;


  // =====================================
  // GAME NAME
  // =====================================

  const getGameName = () => {
    if (active === "WinGo") {
      return "WinGo 30 Sec";
    }

    if (active === "WinGo 1") {
      return "WinGo 1 Min";
    }

    if (active === "WinGo 3") {
      return "WinGo 3 Min";
    }

    if (active === "WinGo 5") {
      return "WinGo 5 Min";
    }

    return active;
  };


  // =====================================
  // QUANTITY
  // =====================================
const decrease = () => {
  setCount((prev) => Math.max(1, prev - 1));
};

const increase = () => {
  setCount((prev) => prev + 1);
};

  return (
    <div
      className="
        fixed
        bottom-0
        left-1/2
        z-50
        w-full
        max-w-[405px]
        -translate-x-1/2
        overflow-hidden
        rounded-t-2xl
        bg-[#303a80]
        text-white
      "
    >

 

<div className="relative h-[110px] overflow-hidden">

  {/* ===============================
      SINGLE COLOR
  =============================== */}
  {!secondColor && (
    <div
      className="absolute inset-0"
      style={{
        background: first.main,
        clipPath:
          "polygon(0 0, 100% 0, 100% 68%, 50% 94%, 0 68%)",
      }}
    />
  )}

  {/* ===============================
      TWO COLORS
  =============================== */}
  {secondColor && (
    <>
      {/* FIRST COLOR */}
      <div
        className="absolute inset-0"
        style={{
          background: first.main,
          clipPath:
            "polygon(0 0, 100% 0, 20% 68%, 50% 94%, 0 68%)",
        }}
      />

      {/* SECOND COLOR */}
      <div
        className="absolute inset-0"
        style={{
          background: second.main,
          clipPath:
            "polygon(100% 0, 100% 68%, 50% 94%, 0% 68%)",
        }}
      />
    </>
  )}

  {/* TITLE */}
  <div
    className="
      absolute
      top-5
      left-0
      right-0
      text-center
      text-[13px]
      font-medium
      z-10
    "
  >
    {getGameName()}
  </div>

  {/* SELECT BUTTON */}
  <div
    className="
      absolute
      top-[48px]
      left-1/2
      w-[75%]
      -translate-x-1/2
      z-10
    "
  >
    <button
      className="
        w-full
        rounded-md
        bg-white
        py-1
        text-[14px]
        text-black
      "
    >
      Select {selectedNum ?? firstColor}
    </button>
  </div>

</div>


      {/* =====================================
          BODY
      ===================================== */}

      <div className="px-4 pb-0">


        {/* =================================
            BALANCE
        ================================= */}

        <div className="mb-4 flex items-center justify-between">

          <p className="text-[16px]">
            Balance
          </p>

          <div className="grid grid-cols-4 gap-2">

            {balances.map((balance, i) => (

              <button
                key={balance}
                onClick={() => setClick(i)}
                className="
                  min-w-[28px]
                  rounded-md
                  py-2
                  text-xs
                "
                style={{
                  background:
                    click === i
                      ? first.main
                      : "#374992",
                }}
              >
                {balance}
              </button>

            ))}

          </div>

        </div>


        {/* =================================
            QUANTITY
        ================================= */}

        <div className="mb-3 flex items-center justify-between">

          <p className="text-[16px]">
            Quantity
          </p>

          <div className="flex items-center gap-3">

            <button
              onClick={decrease}
              className="
                flex
                h-[35px]
                w-[30px]
                items-center
                justify-center
                rounded-md
                text-[18px]
              "
              style={{
                background: first.main,
              }}
            >
              -
            </button>


            <div
              className="
                flex
                h-[35px]
                w-[105px]
                items-center
                justify-center
                border
                border-[#5360a5]
                bg-[#252b65]
                text-[15px]
              "
            >
              {count}
            </div>


            <button
              onClick={increase}
              className="
                flex
                h-[35px]
                w-[30px]
                items-center
                justify-center
                rounded-md
                text-[17px]
              "
              style={{
                background: first.main,
              }}
            >
              +
            </button>

          </div>

        </div>


        {/* =================================
            MULTIPLIER
        ================================= */}

        <div className="mb-4 flex justify-end gap-2">
  {quantites.map((item) => (
    <button
      key={item}
      onClick={() => setCount(Number(item))}
      className="
        min-w-[52px]
        rounded-md
        py-2
        text-[13px]
      "
      style={{
        background:
          count === Number(item)
            ? first.main
            : "#374992",
      }}
    >
      X{item}
    </button>
  ))}
</div>


        {/* =================================
            AGREE
        ================================= */}

        <div className="mb-5 flex items-center gap-2 text-[13px]">

          <input
            id="rules"
            type="checkbox"
            className="h-[18px] w-[20px]"
          />

          <label htmlFor="rules">
            I agree
          </label>

          <span className="text-[#ff5151]">
            Pre-sale rules
          </span>

        </div>

      </div>


      {/* =====================================
          FOOTER
      ===================================== */}

      <div className="flex h-[42px]">

        <button
          onClick={() => setOpen(false)}
          className="
            w-[35%]
            bg-[#40529b]
            text-[14px]
          "
        >
          Cancel
        </button>


        <button
  className="
    flex-1
    text-[14px]
  "
  style={{
    background: first.main,
  }}
>
  Total amount ₹ {totalAmount.toFixed(2)}
</button>

      </div>

    </div>
  );
}

export default WinGo;