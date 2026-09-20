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
      <div className="grid grid-cols-3 gap-4">
        <button
  onClick={() => onColorClick("green", multi)}
  disabled={showCountdown || randomizing}
  className="
    bg-[#0db65e]
    w-[107.38px]
    h-[37.33px]
    rounded-bl-xl
    rounded-tr-xl
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  Green
</button>
       <button
  onClick={() => onColorClick("violet", multi)}
  disabled={showCountdown || randomizing}
  className="
    bg-[#9b42dc]
    w-[107.38px]
    h-[37.33px]
    rounded-lg
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  Violet
</button>

        <button
  onClick={() => onColorClick("red", multi)}
  disabled={showCountdown || randomizing}
  className="
    bg-[#df3735]
    w-[107.38px]
    h-[37.33px]
    rounded-br-xl
    rounded-tl-xl
    disabled:opacity-50
    disabled:cursor-not-allowed
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
          bg-[#1f2b67]
          rounded-xl
          my-[13.8668px]
          py-[6.9332px]
          px-[10.6668px]
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
                className="w-[58.67px] h-14.75"
              />
            </button>
          );
        })}
      </div>

      <div className="flex gap-2 mt-3">
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
            px-5
            rounded-lg
            mr-1
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
          mt-3
          h-11
          rounded-full
          overflow-hidden
          text-[18px]
          font-bold
        "
      >
        <button
  onClick={() => onColorClick("big", multi)}
  disabled={showCountdown || randomizing}
  className="
    flex-1
    bg-[#e89b2e]
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
    bg-[#5790da]
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