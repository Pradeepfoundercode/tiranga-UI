import React, {
  useEffect,
  useState,
} from "react";
import {
  colorMap,
  getGameName,
} from "../utils/gameUtils";
import {
  balances,
  quantites,
} from "../constants/gameData";

function WinGo({
  active,
  selectedNum,
  selectedColors = [],
  selectedMulti = "X1",
  setOpen,
}) {
  const [click, setClick] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const quantity =
      Number(
        String(selectedMulti).replace("X", "")
      ) || 1;

    setCount(quantity);
  }, [selectedMulti]);

  const selectedBalance =
    Number(balances[click]) || 1;

  const totalAmount =
    selectedBalance * count;

  const firstColor =
    selectedColors[0] || "red";

  const secondColor =
    selectedColors[1] || null;

  const first = colorMap[firstColor];

  const second = secondColor
    ? colorMap[secondColor]
    : null;

  const decrease = () => {
    setCount((prev) =>
      Math.max(1, prev - 1)
    );
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
        max-w-101.25
        -translate-x-1/2
        overflow-hidden
        rounded-t-2xl
        bg-background1
        text-white
      "
    >
      <div className="relative h-27.5 overflow-hidden">
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

        {secondColor && (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: first.main,
                clipPath:
                  "polygon(0 0, 100% 0, 20% 68%, 50% 94%, 0 68%)",
              }}
            />

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

        <div
          className="
            absolute
            top-12
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

      <div className="px-4 pb-0">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[16px]">
            Balance
          </p>

          <div className="grid grid-cols-4 gap-2">
            {balances.map((balance, i) => (
              <button
                key={balance}
                onClick={() =>
                  setClick(i)
                }
                className="
                  min-w-7
                  rounded-md
                  py-1.5
                  px-2
                  text-xs
                "
                style={{
                  background:
                    click === i
                      ? first.main
                      : "var(--color-theme)",
                }}
              >
                {balance}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-3 flex items-center justify-between">
          <p className="text-[16px]">
            Quantity
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={decrease}
              className="
                flex
                h-8.75
                w-7.5
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
                h-8.75
                w-26.25
                items-center
                justify-center
                border
                border-[#5360a5]
                bg-theme
                text-[15px]
              "
            >
              {count}
            </div>

            <button
              onClick={increase}
              className="
                flex
                h-8.75
                w-7.5
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

        <div className="mb-4 flex justify-end gap-2">
          {quantites.map((item) => (
            <button
              key={item}
              onClick={() =>
                setCount(Number(item))
              }
              className="
                min-w-13
                rounded-md
                py-2
                text-[13px]
              "
              style={{
                background:
                  count === Number(item)
                    ? first.main
                    : "var(--color-theme)",
              }}
            >
              X{item}
            </button>
          ))}
        </div>

        <div className="mb-5 flex items-center gap-2 text-[13px]">
          <input
            id="rules"
            type="checkbox"
            className="h-4.5 w-5"
          />

          <label htmlFor="rules">
            I agree
          </label>

          <span className="text-red">
            Pre-sale rules
          </span>
        </div>
      </div>

      <div className="flex h-10.5">
        <button
          onClick={() => setOpen(false)}
          className="
            w-[35%]
            bg-background
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
          Total amount ₹{" "}
          {totalAmount.toFixed(2)}
        </button>
      </div>
    </div>
  );
}

export default WinGo;