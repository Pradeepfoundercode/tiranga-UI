import { Volume2, Flame } from "lucide-react";
import { useEffect, useState } from "react";
import { messages } from "../data/gameData";

export default function Announcement() {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="flex items-center gap-3 px-3 py-5 text-[15px] leading-6">

      <Volume2
        size={22}
        className="shrink-0 text-[#55a7f4]"
      />

      
      <div className="relative flex-1 h-8 overflow-hidden ">
        <div
          key={index}
          className="announcement-slide  flex items-center text-xs text-white"
        >
          {messages[index]}
        </div>
      </div>

    
      <button
        type="button"
        className="flex h-8 shrink-0 items-center gap-1 rounded-full border border-[#67b8ff] bg-[#2d8ce8] px-4 text-sm"
      >
        <Flame size={14} fill="white" />
        Detail
      </button>
    </div>
  );
}