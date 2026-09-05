import { FileText } from "lucide-react";
import issueBg from "../assets/wingoissue-CBY5Mmvc.png";
import { useEffect, useState } from "react";

export default function PeriodCard() {
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev === 0 ? 59 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const coins = [
    { image: "../src/assets/5.png" },
    { image: "../src/assets/2.png" },
    { image: "../src/assets/4.png" },
    { image: "../src/assets/6.png" },
    { image: "../src/assets/0.png" },
  ];

  const time = String(seconds).padStart(2, "0");

  return (
    <div
      className="relative h-[126px] mt-5 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${issueBg})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="absolute inset-0 grid grid-cols-2">
        {/* Left */}
        <div className="p-3 flex flex-col items-center">
          <button className="w-[190px] max-w-full h-8 rounded-full border border-[#1d4c9e] text-[14px] flex items-center justify-center gap-1">
            <FileText size={16} />
            How to play
          </button>

          <div className="w-full mt-2 text-left pl-2 text-[14px]">
            WinGo 30sec
          </div>

          <div className="flex gap-2 mt-2">
            {coins.map((coin, index) => (
              <div key={index}>
                <img src={coin.image} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end pr-4 gap-2 justify-center">
          <span className="text-sm font-bold">Time remaining</span>

          <div className="flex items-center gap-1 mt-1 ">
            <b className="bg-[#1d2c6b] px-1">0</b>
            <b className="bg-[#1d2c6b] px-1">0</b>
            <span>:</span>
            <b className="bg-[#1d2c6b] px-1">{time[0]}</b>

            <b className="bg-[#1d2c6b] px-1">{time[1]}</b>
          </div>

          <strong className="mt-1 text-[16px]">20260903100051992</strong>
        </div>
      </div>
    </div>
  );
}
