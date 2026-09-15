import { useState } from "react";
import {
  CircleDollarSign,
  AlarmClock,
  Gamepad2,
  ChevronDown,
  X,
} from "lucide-react";

export default function StrategySettings({ setOpen }) {
  const [betAmount, setBetAmount] = useState(10);
  const [round, setRound] = useState(10);
  const [multiplier, setMultiplier] = useState("1/2");
  const [expanded, setExpanded] = useState(false);
  const [martingale, setMartingale] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0e1024]/70">

      {/* ================= CARD ================= */}
      <div
        className="
          absolute
          left-1/2
          top-[70px]
       
          max-w-[350px]
          -translate-x-1/2
          rounded-[11px]
          bg-[#303879]
          pb-[18px]
          text-white
        "
      >

        {/* ================= HEADER ================= */}
        <div
          className="
            flex
            h-[44px]
            items-center
            justify-center
            rounded-t-[11px]
            bg-[#63a5f4]
            text-[18px]
          "
        >
          · Strategy settings ·
        </div>


        {/* ================= CONTENT ================= */}
        <div className="px-[14px]">

          {/* BET AMOUNT */}
          <div className="mt-[14px]">

            <div className="mb-[7px] flex items-center gap-[7px]">
              <CircleDollarSign
                size={19}
                className="text-[#61a9ff]"
              />

              <span className="text-[16px] text-[#b7b9cb]">
                Bet Amount
                <span className="text-[#ff5252]">*</span>
              </span>
            </div>


            <div className="flex gap-[7px]">

              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                className="
                  h-[42px]
                  min-w-0
                  flex-1
                  rounded-[8px]
                  bg-[#40549e]
                  px-[10px]
                  text-[15px]
                  text-white
                  outline-none
                "
              />

              <button
                onClick={() => setMultiplier("1/2")}
                className={`
                  h-[42px]
                  w-[80px]
                  rounded-[8px]
                  text-[16px]
                  ${
                    multiplier === "1/2"
                      ? "bg-[#299ff0]"
                      : "bg-[#40549e]"
                  }
                `}
              >
                1/2
              </button>

              <button
                onClick={() => setMultiplier("2X")}
                className={`
                  h-[42px]
                  w-[80px]
                  rounded-[8px]
                  text-[16px]
                  ${
                    multiplier === "2X"
                      ? "bg-[#299ff0]"
                      : "bg-[#40549e]"
                  }
                `}
              >
                2X
              </button>

            </div>
          </div>


          {/* ================= ROUND ================= */}
          <div className="mt-[20px]">

            <div className="mb-[7px] flex items-center gap-[7px]">

              <AlarmClock
                size={19}
                className="text-[#61a9ff]"
              />

              <span className="text-[16px] text-[#b7b9cb]">
                Round
                <span className="text-[#ff5252]">*</span>
              </span>

            </div>


            <input
              type="number"
              value={round}
              onChange={(e) => setRound(e.target.value)}
              className="
                h-[42px]
                w-full
                rounded-[8px]
                bg-[#40549e]
                px-[10px]
                text-[16px]
                text-white
                outline-none
              "
            />

          </div>


          {/* ================= EXPAND MORE ================= */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="
              mt-[16px]
              flex
              w-full
              items-center
              justify-center
              gap-[5px]
              text-[16px]
              text-[#b8bbcd]
            "
          >
            Expand more

            <ChevronDown
              size={18}
              className={expanded ? "rotate-180" : ""}
            />
          </button>


          {/* ================= PARAMETERS ================= */}
          <div className="mt-[12px]">

            <p className="mb-[8px] text-[16px]">
              Strategy parameters
            </p>


            <div className="rounded-[8px] bg-[#40549e] px-[8px] py-[6px]">

              {/* REMAINING ROUNDS */}
              <div className="flex justify-between text-[14px]">
                <span>Remaining Rounds</span>
                <span>{round}</span>
              </div>


              {/* WAGER WIN */}
              <div className="mt-[8px] flex justify-between text-[14px]">
                <span>wager after a win</span>

                <span className="text-[#ffab27]">
                  ₹{Number(betAmount).toFixed(2)}
                </span>
              </div>


              {/* WAGER LOSS */}
              <div className="mt-[8px] flex justify-between text-[14px]">
                <span>wager after a loss</span>

                <span className="text-[#ffab27]">
                  ₹{Number(betAmount).toFixed(2)}
                </span>
              </div>


              {/* MARTINGALE */}
              <div className="mt-[13px] flex items-center justify-between">

                <span className="text-[14px]">
                  Whether to enable martingale
                </span>

                <button
                  onClick={() => setMartingale(!martingale)}
                  className={`
                    relative
                    h-[18px]
                    w-[48px]
                    rounded-full
                    ${
                      martingale
                        ? "bg-[#299ff0]"
                        : "bg-[#394c91]"
                    }
                  `}
                >
                  <span
                    className={`
                      absolute
                      top-[1px]
                      h-[16px]
                      
                      w-[17px]
                      rounded-full
                      bg-white
                      transition-all
                      ${
                        martingale
                          ? "left-[27px]"
                          : "left-[3px]"
                      }
                    `}
                  />
                </button>

              </div>

            </div>
          </div>


          {/* ================= BUTTONS ================= */}
          <div className="mt-[19px] flex gap-[10px]">

            <button
              className="
                flex
                h-[44px]
                w-[110px]
                items-center
                justify-center
                gap-[8px]
                rounded-[10px]
                border
                border-[#62a8ff]
                text-[18px]
                text-[#62a8ff]
              "
            >
              <Gamepad2 size={23} />
              Try it
            </button>


            <button
              className="
                h-[44px]
                flex-1
                rounded-[10px]
                bg-[#299ff0]
                text-[18px]
                text-white
              "
              onClick={() => setOpen(false)}
            >
              Confirm
            </button>

          </div>

        </div>
      </div>


      {/* ================= CLOSE ================= */}
      <button
        onClick={() => setOpen(false)}
        className="
          absolute
          bottom-[100px]
          left-1/2
          flex
          h-[30px]
          w-[30px]
          -translate-x-1/2
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-white
          bg-[#20253e]
        "
      >
        <X size={28} />
      </button>

    </div>
  );
}