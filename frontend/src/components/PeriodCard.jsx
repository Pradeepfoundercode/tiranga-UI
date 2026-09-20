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
              className="w-47.5 max-w-full h-6 rounded-full border border-[#2B3270] text-[14px] flex items-center justify-center gap-0.5"
            >
              <img
                src={note}
                alt="note"
                className="w-8 h-6.5"
              />

              <span className="text-xs text-[#f0f1f5]">
                How to play
              </span>
            </button>

            {/* GAME NAME */}
            <div className="w-full mt-2 text-left pl-2 text-xs">
              {active === "WinGo"
                ? "WinGo 30sec"
                : `${active} min`}
            </div>

            {/* COINS */}
            <div className="flex gap-2 mt-2">
  {history.slice(0, 5).map((item, index) => (
    <div key={item.id || index}>
      <img
        src={coinImages[item.number]}
        alt={String(item.number)}
      />
    </div>
  ))}
</div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex flex-col items-end pr-4 gap-1 mt-2.5">

            <span className="text-[13px] font-semibold w-25 text-[#f0f1f5]">
              Time remaining
            </span>

           <div className="flex items-center gap-1">

  {/* FIRST 0 */}
  <b
    className="
      bg-[#2b3270]
      w-[21.33px]
      h-8
      text-xl
      flex
      items-center
      justify-center
      [clip-path:polygon(30%_0,100%_0,100%_100%,0%_100%,0_75%,0_30%)]
    "
  >
   {minuteText[0]}
  </b>

  {/* SECOND 0 */}
  <b
    className="
      bg-[#2b3270]
      w-[21.33px]
      h-8
      text-xl
      flex
      items-center
      justify-center
    "
  >
  {minuteText[1]}
  </b>

  {/* : */}
  <span
    className="
      bg-[#2b3270]
      w-4
      h-8
      text-xl
      flex
      items-center
      justify-center
    "
  >
    :
  </span>

  {/* FIRST SECOND DIGIT */}
  <b
    className="
      bg-[#2b3270]
      w-[21.33px]
      h-8
      text-xl
      flex
      items-center
      justify-center
    "
  >
   {secondText[0]}
  </b>

  {/* LAST DIGIT */}
  <b
    className="
      bg-[#2b3270]
      w-[21.33px]
      h-8
      text-xl
      flex
      items-center
      justify-center
      [clip-path:polygon(0_0,100%_0,100%_25%,100%_75%,70%_100%,0_100%)]
    "
  >
    {secondText[1]}
  </b>

</div>
            <strong className="mt-1.5 text-[14px]">
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
      z-[999]
      bg-black/60
      flex
      items-center
      justify-center
      px-[21px]
    "
    onClick={() => setShowHowToPlay(false)}
  >

    {/* MODAL */}
    <div
      className="
        w-[320px]
        h-[480px]
        max-w-[400px]
        bg-[#211f2d]
        rounded-[18px]
        overflow-hidden
        shadow-2xl
        flex
        flex-col
      "
      onClick={(e) => e.stopPropagation()}
    >

      {/* ================= MODAL HEADER ================= */}
      <div
        className="
          h-[45px]
          min-h-[45px]
          shrink-0
          flex
          items-center
          justify-center
          bg-gradient-to-r
          from-[#27aee8]
          to-[#2878ef]
        "
      >
        <h2 className="text-[15px] font-semibold text-white">
          · {gameName} ·
        </h2>
      </div>


      {/* ================= SCROLL CONTENT ================= */}
      <div
        className="
          flex-1
          min-h-0
          overflow-y-auto
          px-[13px]
          pt-[12px]
          pb-[10px]
          text-[#f0eef5]
          text-[14px]
          font-medium
          leading-[20px]

          [&::-webkit-scrollbar]:w-[10px]
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

        <p className="mt-[27px]">
          If you spend 100 to trade, after deducting 2 service fee,
          your contract amount is 98:
        </p>

        <p className="mt-[27px]">
          1. Select green: if the result shows 1,3,7,9 you will get
          (98*2) 196;If the result shows 5, you will get (98*1.5)
          147
        </p>

        <p className="mt-[27px]">
          2. Select red: if the result shows 2,4,6,8 you will get
          (98*2) 196;If the result shows 0, you will get (98*1.5)
          147
        </p>

        <p className="mt-[27px]">
          3. Select violet:if the result shows 0 or 5, you will get
          (98*4.5) 441
        </p>

        <p className="mt-[27px]">
          5. Select big: if the result shows 5,6,7,8,9 you will get
          (98 * 2) 196
        </p>

        <p className="mt-[27px]">
          6. Select small: if the result shows 0,1,2,3,4 you will get
          (98 * 2) 196
        </p>

      </div>


      {/* ================= CLOSE BUTTON ================= */}
      <div
        className="
          h-[60px]
          min-h-[78px]
          shrink-0
          flex
          items-center
          justify-center
          bg-[#211f2d]
        "
      >

        <button
          type="button"
          onClick={() => setShowHowToPlay(false)}
          className="
            w-[214px]
            h-[43px]
            rounded-full
            bg-[#5ca5f3]
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