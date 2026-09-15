import note from "../assets/note.png";
import issueBg from "../assets/wingoissue-CBY5Mmvc.png";
import { coins } from "../data/gameData";

export default function PeriodCard({ seconds }) {

  const time = String(seconds).padStart(2, "0");

  return (
    <div
      className="relative h-27 mt-[19.3px] rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${issueBg})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="absolute inset-0 grid grid-cols-2">

        {/* LEFT */}
        <div className="p-3 flex flex-col items-center">

          <button className="w-47.5 max-w-full h-6 rounded-full border border-[#2B3270] text-[14px] flex items-center justify-center gap-0.5">
            <img
              src={note}
              alt="note.png"
              className="w-8 h-6.5"
            />

            <span className="text-xs text-[#f0f1f5]">
              How to play
            </span>
          </button>

          <div className="w-full mt-2 text-left pl-2 text-xs">
            WinGo 30sec
          </div>

          <div className="flex gap-2 mt-2">
            {coins.slice(0, 5).map((coin, index) => (
              <div key={index}>
                <img
                  src={coin.image}
                  alt=""
                />
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end pr-4 gap-1 mt-2.5">

          <span className="text-[13px] font-semibold w-25 text-[#f0f1f5]">
            Time remaining
          </span>

          <div className="flex items-center gap-1">

            <b className="bg-[#2b3270] w-[21.33px] h-8 text-xl flex items-center justify-center">
              0
            </b>

            <b className="bg-[#2b3270] w-[21.33px] h-8 text-xl flex items-center justify-center">
              0
            </b>

            <span className="bg-[#2b3270] w-4 h-8 text-xl flex items-center justify-center">
              :
            </span>

            <b className="bg-[#2b3270] w-[21.33px] h-8 text-xl flex items-center justify-center">
              {time[0]}
            </b>

            <b className="bg-[#2b3270] w-[21.33px] h-8 text-xl flex items-center justify-center">
              {time[1]}
            </b>

          </div>

          <strong className="mt-1.5 text-[14px]">
            20260914100051428
          </strong>

        </div>

      </div>
    </div>
  );
}