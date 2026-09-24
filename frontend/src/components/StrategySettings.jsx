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
    <div className="fixed inset-0 z-100 bg-[#0e1024]/70">
      <div
        className="
          absolute
          left-1/2
          top-17.5
          max-w-87.5
          -translate-x-1/2
          rounded-[11px]
          bg-background1
          pb-4.5
          text-white
        "
      >
        <div
          className="
            relative
            flex
            h-11
            items-center
            justify-center
            rounded-t-[11px]
            bg-active
            text-[18px]
          "
        >
          <span>· Strategy settings ·</span>

          <button
            onClick={() => setOpen(false)}
            className="
              absolute
              right-2
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              text-white
            "
          >
            <X size={21} strokeWidth={2.5} />
          </button>
        </div>

        <div className="px-3.5">
          <div className="mt-3.5">
            <div className="mb-1.75 flex items-center gap-1.75">
              <CircleDollarSign
                size={19}
                className="text-active"
              />

              <span className="text-[16px] text-text">
                Bet Amount
                <span className="text-red">*</span>
              </span>
            </div>

            <div className="flex gap-1.75">
              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                className="
                  h-10.5
                  min-w-0
                  flex-1
                  rounded-lg
                  bg-background
                  px-2.5
                  text-[15px]
                  text-white
                  outline-none
                "
              />

              <button
                onClick={() => setMultiplier("1/2")}
                className={`
                  h-10.5
                  w-20
                  rounded-lg
                  text-[16px]
                  ${
                    multiplier === "1/2"
                      ? "bg-active"
                      : "bg-background"
                  }
                `}
              >
                1/2
              </button>

              <button
                onClick={() => setMultiplier("2X")}
                className={`
                  h-10.5
                  w-20
                  rounded-lg
                  text-[16px]
                  ${
                    multiplier === "2X"
                      ? "bg-active"
                      : "bg-background"
                  }
                `}
              >
                2X
              </button>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-1.75 flex items-center gap-1.75">
              <AlarmClock
                size={19}
                className="text-active"
              />

              <span className="text-[16px] text-text1">
                Round
                <span className="text-red">*</span>
              </span>
            </div>

            <input
              type="number"
              value={round}
              onChange={(e) => setRound(e.target.value)}
              className="
                h-10.5
                w-full
                rounded-lg
                bg-background
                px-2.5
                text-[16px]
                text-white
                outline-none
              "
            />
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              gap-1.25
              text-[16px]
              text-text
            "
          >
            Expand more

            <ChevronDown
              size={18}
              className={expanded ? "rotate-180" : ""}
            />
          </button>

          <div className="mt-3">
            <p className="mb-2 text-[16px]">
              Strategy parameters
            </p>

            <div className="rounded-lg bg-background px-2 py-1.5">
              <div className="flex justify-between text-[14px]">
                <span>Remaining Rounds</span>
                <span>{round}</span>
              </div>

              <div className="mt-2 flex justify-between text-[14px]">
                <span>wager after a win</span>

                <span className="text-[#ffab27]">
                  ₹{Number(betAmount).toFixed(2)}
                </span>
              </div>

              <div className="mt-2 flex justify-between text-[14px]">
                <span>wager after a loss</span>

                <span className="text-[#ffab27]">
                  ₹{Number(betAmount).toFixed(2)}
                </span>
              </div>

              <div className="mt-3.25 flex items-center justify-between">
                <span className="text-[14px]">
                  Whether to enable martingale
                </span>

                <button
                  onClick={() => setMartingale(!martingale)}
                  className={`
                    relative
                    h-4.5
                    w-12
                    rounded-full
                    ${
                      martingale
                        ? "bg-active"
                        : "bg-background"
                    }
                  `}
                >
                  <span
                    className={`
                      absolute
                      top-px
                      h-4
                      w-4.25
                      rounded-full
                      bg-white
                      transition-all
                      ${
                        martingale
                          ? "left-6.75"
                          : "left-0.75"
                      }
                    `}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4.75 flex gap-2.5">
            <button
              className="
                flex
                h-11
                w-27.5
                items-center
                justify-center
                gap-2
                rounded-[10px]
                border
                border-active
                text-[18px]
                text-active
              "
            >
              <Gamepad2 size={23} />
              Try it
            </button>

            <button
              className="
                h-11
                flex-1
                rounded-[10px]
                bg-active
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
    </div>
  );
}