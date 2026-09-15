import { useState } from "react";
import { coins } from "../data/gameData";

export default function Coin({
  setOpen,
  seconds,
  onColorClick,
}) {
  const [multi, setMulti] = useState("X1");

  const showCountdown = seconds <= 5;

  const countdown = String(seconds).padStart(2, "0");

  // =====================================
  // NUMBER -> COLOR
  // =====================================
  const getColors = (num) => {
    const number = Number(num);

    // 0 = Red + Violet
    if (number === 0) {
      return ["red", "violet"];
    }

    // 5 = Green + Violet
    if (number === 5) {
      return ["green", "violet"];
    }

    // 1,3,7,9 = Green
    if ([1, 3, 7, 9].includes(number)) {
      return ["green"];
    }

    // 2,4,6,8 = Red
    if ([2, 4, 6, 8].includes(number)) {
      return ["red"];
    }

    return [];
  };

  return (
    <div
      className="
        bg-[#2b3270]
        relative
        rounded-xl
        w-[372.26px]
        h-[304.52px]
        mt-[11.7332px]
        mr-[13.875px]
        mb-[12.8px]
        pt-[7.4668px]
        pr-[10.6668px]
        pb-[10.1332px]
        pl-[7.4668px]
      "
    >

      {/* =====================================
          COLOR BUTTONS
      ===================================== */}

      <div className="grid grid-cols-3 gap-4">

        <button
          onClick={() => onColorClick("green")}
          disabled={showCountdown}
          className="
            bg-[#0db65e]
            w-[107.38px]
            h-[37.33px]
            rounded-bl-xl
            rounded-tr-xl
            disabled:opacity-50
          "
        >
          Green
        </button>

        <button
          onClick={() => onColorClick("violet")}
          disabled={showCountdown}
          className="
            bg-[#9b42dc]
            w-[107.38px]
            h-[37.33px]
            rounded-lg
            disabled:opacity-50
          "
        >
          Violet
        </button>

        <button
          onClick={() => onColorClick("red")}
          disabled={showCountdown}
          className="
            bg-[#df3735]
            w-[107.38px]
            h-[37.33px]
            rounded-br-xl
            rounded-tl-xl
            disabled:opacity-50
          "
        >
          Red
        </button>

      </div>


      {/* =====================================
          COINS
      ===================================== */}

      <div
        className="
          grid
          grid-cols-5
          gap-1
          bg-[#1f2b67]
          rounded-xl
          my-[13.8668px]
          py-[6.9332px]
          px-[10.6668px]
        "
      >

        {coins.map((coin, index) => {

          const colors = getColors(coin.num);

          return (
            <button
              key={index}
              onClick={() => setOpen(coin.num, colors)}
              disabled={showCountdown}
              className="disabled:cursor-not-allowed"
            >
              <img
                src={coin.image}
                alt={coin.num}
                className="w-[58.67px] h-14.75"
              />
            </button>
          );
        })}

      </div>


      {/* =====================================
          MULTIPLIER
      ===================================== */}

      <div className="flex gap-2 mt-3">

        <button
          disabled={showCountdown}
          className="
            border
            border-red-500
            text-red-500
            py-1
            px-5
            rounded-lg
            mr-1
            disabled:opacity-50
          "
        >
          Random
        </button>

        {["X1", "X5", "X10", "X20", "X50", "X100"].map((x) => (

          <button
            key={x}
            onClick={() => setMulti(x)}
            disabled={showCountdown}
            className={`
              h-8
              px-1.5
              rounded-xl
              text-xs
              border

              ${
                multi === x
                  ? "bg-[#13b85d] border-transparent text-white"
                  : "bg-[#202b68] border-transparent text-[#a6aac0]"
              }

              ${showCountdown ? "cursor-not-allowed" : ""}
            `}
          >
            {x}
          </button>

        ))}

      </div>


      {/* =====================================
          BIG / SMALL
      ===================================== */}

     <div className="flex mt-3 h-11 rounded-full overflow-hidden text-[18px] font-bold">

  {/* BIG */}
  <button
    onClick={() => onColorClick("big")}
    disabled={showCountdown}
    className="
      flex-1
      bg-[#e89b2e]
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
  >
    Big
  </button>

  {/* SMALL */}
  <button
    onClick={() => onColorClick("small")}
    disabled={showCountdown}
    className="
      flex-1
      bg-[#5790da]
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
  >
    Small
  </button>

</div>


      {/* =====================================
          LAST 5 SECOND OVERLAY
      ===================================== */}

      {showCountdown && (
        <div
          className="
            absolute
            inset-0
            z-20
            rounded-xl
            flex
            items-center
            justify-center
            bg-[#0e1024]/70
          "
        >

          <div className="flex items-center gap-[52px]">

            <div
              className="
                w-[143px]
                h-[213px]
                rounded-[20px]
                bg-[#3b519e]
                flex
                items-center
                justify-center
              "
            >
              <span
                className="
                  text-[#65a8ff]
                  text-[185px]
                  leading-none
                  font-semibold
                "
              >
                {countdown[0]}
              </span>
            </div>


            <div
              className="
                w-[143px]
                h-[213px]
                rounded-[20px]
                bg-[#3b519e]
                flex
                items-center
                justify-center
              "
            >
              <span
                className="
                  text-[#65a8ff]
                  text-[185px]
                  leading-none
                  font-semibold
                "
              >
                {countdown[1]}
              </span>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}