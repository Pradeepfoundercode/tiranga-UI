import { useState } from "react";
import note from "../assets/images/note.png";
import issueBg from "../assets/images/wingoissue-CBY5Mmvc.png";
import { coins } from "../constants/gameData";

import { coinImages } from "../constants/gameData";


export default function PeriodCard({
  seconds,
  active,
  history,
  loading,
}) {
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  const latestGameNumber = history[0]?.games_no ?? null;

  const nextGameNumber = latestGameNumber
    ? String(BigInt(latestGameNumber) + 1n)
    : null;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const minuteText = String(minutes).padStart(2, "0");
  const secondText = String(remainingSeconds).padStart(2, "0");


  const gameName =
    active === "WinGo"
      ? "wingo30s"
      : active === "WinGo 1"
      ? "wingo1m"
      : active === "WinGo 3"
      ? "wingo3m"
      : "wingo5m";

  return (
    <>
      
      <div
        className="relative h-27 mt-[19.3px] rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${issueBg})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0 grid grid-cols-2">

        
          <div className="p-3 flex flex-col items-center">

            <button
              type="button"
              onClick={() => setShowHowToPlay(true)}
              className="w-full max-w-[130px] sm:max-w-[150px] h-6 rounded-full border border-background text-[13px] flex items-center justify-center gap-0.5 px-2"
            >
              <img
                src={note}
                alt="note"
                className="w-5 h-5 object-contain"
              />

              <span className="text-[11.5px] sm:text-xs text-text whitespace-nowrap">
                How to play
              </span>
            </button>

            <div className="w-full mt-2 text-left pl-1 sm:pl-2 text-[11.5px] sm:text-xs text-text font-medium truncate">
              {active === "WinGo"
                ? "WinGo 30sec"
                : `${active} min`}
            </div>

            <div className="flex gap-1 sm:gap-1.5 mt-2">
              {history.slice(0, 5).map((item, index) => (
                <div key={item.id || index} className="w-[19px] h-[19px] sm:w-[22px] sm:h-[22px] shrink-0">
                  <img
                    src={coinImages[item.number]}
                    alt={String(item.number)}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end pr-2.5 sm:pr-4 gap-1 mt-2.5">
            <span className="text-[11.5px] sm:text-[13px] font-semibold text-text">
              Time remaining
            </span>

            <div className="flex items-center gap-0.5 sm:gap-1">
              <b
                className="
                  bg-background1
                  w-[18px]
                  sm:w-[21.33px]
                  h-7
                  sm:h-8
                  text-[17px]
                  sm:text-xl
                  flex
                  items-center
                  justify-center
                  [clip-path:polygon(30%_0,100%_0,100%_100%,0%_100%,0_75%,0_30%)]
                "
              >
               {minuteText[0]}
              </b>

              <b
                className="
                  bg-background1
                  w-[18px]
                  sm:w-[21.33px]
                  h-7
                  sm:h-8
                  text-[17px]
                  sm:text-xl
                  flex
                  items-center
                  justify-center
                "
              >
                {minuteText[1]}
              </b>

              <span
                className="
                  bg-background1
                  w-3
                  sm:w-4
                  h-7
                  sm:h-8
                  text-[17px]
                  sm:text-xl
                  flex
                  items-center
                  justify-center
                "
              >
                :
              </span>

              <b
                className="
                  bg-background1
                  w-[18px]
                  sm:w-[21.33px]
                  h-7
                  sm:h-8
                  text-[17px]
                  sm:text-xl
                  flex
                  items-center
                  justify-center
                "
              >
                {secondText[0]}
              </b>

              <b
                className="
                  bg-background1
                  w-[18px]
                  sm:w-[21.33px]
                  h-7
                  sm:h-8
                  text-[17px]
                  sm:text-xl
                  flex
                  items-center
                  justify-center
                  [clip-path:polygon(0_0,100%_0,100%_25%,100%_75%,70%_100%,0_100%)]
                "
              >
                {secondText[1]}
              </b>
            </div>

            <strong className="mt-1 text-[12px] sm:text-[14px] truncate font-mono tracking-tight">
              {loading ? "" : nextGameNumber || "-"}
            </strong>

          </div>

        </div>
      </div>


 

      {showHowToPlay && (
  <div
    className="
      fixed
      inset-0
      z-999
      bg-black/60
      flex
      items-center
      justify-center
      px-5.25
    "
    onClick={() => setShowHowToPlay(false)}
  >

    <div
      className="
        w-[320px]
        h-120
        max-w-100
        bg-howtoplay
        rounded-[18px]
        overflow-hidden
        shadow-2xl
        flex
        flex-col
      "
      onClick={(e) => e.stopPropagation()}
    >

    
      <div
        className="
          h-11.25
          min-h-11.25
          shrink-0
          flex
          items-center
          justify-center
          bg-active
        "
      >
        <h2 className="text-[15px] font-semibold text-white">
          · {gameName} ·
        </h2>
      </div>


      
      <div
        className="
          flex-1
          min-h-0
          overflow-y-auto
          px-3.25
          pt-3
          pb-2.5
          text-text
          text-[14px]
          font-medium
          leading-5

          [&::-webkit-scrollbar]:w-2.5
          [&::-webkit-scrollbar-track]:bg-[#eeeeee]
          [&::-webkit-scrollbar-thumb]:bg-[#777777]
          [&::-webkit-scrollbar-thumb]:rounded-full
        "
      >

        <p>
          30seconds 1 issue, 25 seconds to order, 5 seconds waiting
          for the draw.. It opens all day. The total number of trade
          is 2880 issues.
        </p>

        <p className="mt-6.75">
          If you spend 100 to trade, after deducting 2 service fee,
          your contract amount is 98:
        </p>

        <p className="mt-6.75">
          1. Select green: if the result shows 1,3,7,9 you will get
          (98*2) 196;If the result shows 5, you will get (98*1.5)
          147
        </p>

        <p className="mt-6.75">
          2. Select red: if the result shows 2,4,6,8 you will get
          (98*2) 196;If the result shows 0, you will get (98*1.5)
          147
        </p>

        <p className="mt-6.75">
          3. Select violet:if the result shows 0 or 5, you will get
          (98*4.5) 441
        </p>

        <p className="mt-6.75">
          5. Select big: if the result shows 5,6,7,8,9 you will get
          (98 * 2) 196
        </p>

        <p className="mt-6.75">
          6. Select small: if the result shows 0,1,2,3,4 you will get
          (98 * 2) 196
        </p>

      </div>


      
      <div
        className="
          h-15
          min-h-19.5
          shrink-0
          flex
          items-center
          justify-center
         
        "
      >

        <button
          type="button"
          onClick={() => setShowHowToPlay(false)}
          className="
            w-53.5
            h-10.75
            rounded-full
            bg-active
            text-white
            text-[18px]
            font-medium
            active:scale-[0.98]
            transition
          "
        >
          Close
        </button>

      </div>

    </div>
  </div>
)}
    </>
  );
}