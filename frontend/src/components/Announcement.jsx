import { Volume2 } from "lucide-react";
import fire from "../assets/images/fire.png";
import { useEffect, useState } from "react";
import { messages } from "../constants/gameData";
import { useNavigate } from "react-router-dom";

export default function Announcement() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full h-[40px] my-2.5 px-3 items-center justify-between gap-2.5">
      {/* Sound Speaker Icon */}
      <Volume2
        className="shrink-0 text-active w-[18px] h-[18px]"
      />

      {/* Sliding Message Text */}
      <div className="relative flex-1 min-w-0 h-[36px] overflow-hidden flex items-center">
        <div
          key={index}
          className="announcement-slide truncate text-[12.5px] leading-tight text-white pr-1"
        >
          {messages[index]}
        </div>
      </div>

      {/* Detail Button - Always visible and never cut off */}
      <button
        type="button"
        onClick={() => navigate("/notification")}
        className="
          flex
          h-[26px]
          shrink-0
          items-center
          gap-1
          rounded-full
          border
          border-[#67b8ff]
          bg-active
          px-3
          text-[12px]
          font-medium
          text-white
          shadow-sm
          transition
          active:scale-95
          hover:brightness-110
          cursor-pointer
        "
      >
        <img
          src={fire}
          alt="fire"
          className="w-3 h-3.5 object-contain"
        />
        <span className="leading-none">
          Detail
        </span>
      </button>
    </div>
  );
}