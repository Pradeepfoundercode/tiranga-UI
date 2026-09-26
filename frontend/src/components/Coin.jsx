import { useState } from "react";
import { coins } from "../constants/gameData";
import useCountdownSound from "../hooks/useCountdownSound";
import { getNumberColors } from "../utils/gameUtils";

export default function Coin({
  setOpen,
  seconds,
  onColorClick,
  isVoiceOn,
}) {
  const [multi, setMulti] = useState("X1");
  const [bubblingCoin, setBubblingCoin] = useState(null);
  const [randomizing, setRandomizing] = useState(false);
 

  useCountdownSound(seconds, isVoiceOn);

  const showCountdown =
    seconds >= 0 && seconds <= 5;

  const countdown = String(seconds).padStart(2, "0");

  const handleRandom = () => {
  if (showCountdown || randomizing) return;

  setRandomizing(true);

  const indexes = coins.map((_, index) => index);

  for (let i = indexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [indexes[i], indexes[j]] = [
      indexes[j],
      indexes[i],
    ];
  }

  const randomIndex =
    Math.floor(Math.random() * coins.length);

  let currentIndex = 0;

  const interval = setInterval(() => {
    setBubblingCoin(indexes[currentIndex]);

    currentIndex++;

    if (currentIndex >= indexes.length) {
      clearInterval(interval);

      setTimeout(() => {
        const selectedCoin = coins[randomIndex];

        const colors = getNumberColors(
          selectedCoin.num
        );

        setBubblingCoin(null);
        setRandomizing(false);

        setOpen(
          selectedCoin.num,
          colors,
          multi
        );
      }, 120);
    }
  }, 120);
};

  return (
    <div
      className="
        bg-background1
        relative
        rounded-xl
        w-full
        mt-3
        mb-3
        p-2.5
        sm:p-3
      "
    >
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <button
          onClick={() => onColorClick("green", multi)}
          disabled={showCountdown || randomizing}
          className="
            flex-1
            bg-green
            h-[37.33px]
            rounded-bl-xl
            rounded-tr-xl
            disabled:opacity-50
            disabled:cursor-not-allowed
            font-medium
            text-[14px]
          "
        >
          Green
        </button>

        <button
          onClick={() => onColorClick("violet", multi)}
          disabled={showCountdown || randomizing}
          className="
            flex-1
            bg-voilet
            h-[37.33px]
            rounded-lg
            disabled:opacity-50
            disabled:cursor-not-allowed
            font-medium
            text-[14px]
          "
        >
          Violet
        </button>

        <button
          onClick={() => onColorClick("red", multi)}
          disabled={showCountdown || randomizing}
          className="
            flex-1
            bg-red
            h-[37.33px]
            rounded-br-xl
            rounded-tl-xl
            disabled:opacity-50
            disabled:cursor-not-allowed
            font-medium
            text-[14px]
          "
        >
          Red
        </button>
      </div>

      <div
        className="
          grid
          grid-cols-5
          gap-1
          sm:gap-2
          bg-theme
          rounded-xl
          my-2.5
          py-2
          px-1.5
          sm:px-2.5
        "
      >
        {coins.map((coin, index) => {
          const colors =
            getNumberColors(coin.num);

          const isBubbling =
            bubblingCoin === index;

          return (
            <button
              key={index}
              onClick={() =>
                setOpen(
                  coin.num,
                  colors,
                  multi
                )
              }
              disabled={
                showCountdown || randomizing
              }
              className={`
                disabled:cursor-not-allowed
                transition-transform
                duration-100
                flex
                items-center
                justify-center
                ${
                  isBubbling
                    ? "scale-[1.10]"
                    : "scale-100"
                }
              `}
            >
              <img
                src={coin.image}
                alt={coin.num}
                className="w-full max-w-[50px] aspect-square object-contain mx-auto"
              />
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-1 sm:gap-1.5 mt-2.5 justify-between">
        <button
          onClick={handleRandom}
          disabled={
            showCountdown || randomizing
          }
          className="
            border
            border-red-500
            text-red-500
            py-1
            px-2
            sm:px-3
            rounded-lg
            text-[11.5px]
            sm:text-xs
            font-medium
            shrink-0
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          Random
        </button>

        {[
          "X1",
          "X5",
          "X10",
          "X20",
          "X50",
          "X100",
        ].map((x) => (
          <button
            key={x}
            onClick={() => setMulti(x)}
            disabled={
              showCountdown || randomizing
            }
            className={`
              h-7
              sm:h-8
              flex-1
              min-w-[28px]
              rounded-lg
              text-[11px]
              sm:text-xs
              font-medium
              flex
              items-center
              justify-center
              border

              ${
                multi === x
                  ? "bg-green border-transparent text-white"
                  : "bg-theme border-transparent text-[#a6aac0]"
              }

              ${
                showCountdown ||
                randomizing
                  ? "cursor-not-allowed"
                  : ""
              }
            `}
          >
            {x}
          </button>
        ))}
      </div>

      <div
        className="
          flex
          mt-2.5
          h-10
          sm:h-11
          rounded-full
          overflow-hidden
          text-[16px]
          sm:text-[18px]
          font-bold
        "
      >
        <button
          onClick={() => onColorClick("big", multi)}
          disabled={showCountdown || randomizing}
          className="
            flex-1
            bg-big
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          Big
        </button>

        <button
          onClick={() => onColorClick("small", multi)}
          disabled={showCountdown || randomizing}
          className="
            flex-1
            bg-small
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          Small
        </button>
      </div>

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
          <div className="flex items-center justify-center gap-3 sm:gap-6 px-2 w-full">
            <div
              className="
                w-[105px]
                sm:w-[130px]
                h-[145px]
                sm:h-[180px]
                rounded-[20px]
                bg-background
                flex
                items-center
                justify-center
                shadow-2xl
              "
            >
              <span
                className="
                  text-[#65a8ff]
                  text-[95px]
                  sm:text-[130px]
                  leading-none
                  font-semibold
                  select-none
                "
              >
                {countdown[0]}
              </span>
            </div>

            <div
              className="
                w-[105px]
                sm:w-[130px]
                h-[145px]
                sm:h-[180px]
                rounded-[20px]
                bg-background
                flex
                items-center
                justify-center
                shadow-2xl
              "
            >
              <span
                className="
                  text-[#65a8ff]
                  text-[95px]
                  sm:text-[130px]
                  leading-none
                  font-semibold
                  select-none
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