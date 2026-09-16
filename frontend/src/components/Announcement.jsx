import { Volume2 } from "lucide-react";
import fire from "../assets/images/fire.png";
import { useEffect, useState } from "react";
import { messages } from "../constants/gameData";

export default function Announcement({ onDetail }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-[372.28px] h-[39.47px] my-[18.1332px] px-[10.6668px] items-center">

      <Volume2
        className="shrink-0 text-[#55a7f4] w-[17.0668px] mr-[12.0068px]"
      />

      <div className="relative flex-1 w-[236.3px] h-[39.46px] overflow-hidden">

        <div
          key={index}
          className="announcement-slide flex items-center text-[12.18px] text-white"
        >
          {messages[index]}
        </div>

      </div>

      {/* DETAIL */}
      <button
        type="button"
        onClick={onDetail}
        className="
          flex
          w-20
          h-[26.66px]
          px-3
          shrink-0
          items-center
          gap-1
          rounded-full
          border
          border-[#67b8ff]
          bg-[#2aa3f3]
          text-sm
          ml-0.5
        "
      >
        <div>
          <img
            src={fire}
            alt="fire.png"
            className="w-3 h-3.5"
          />
        </div>

        <span className="text-[13px]">
          Detail
        </span>
      </button>

    </div>
  );
}