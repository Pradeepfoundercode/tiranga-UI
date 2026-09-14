import { ChevronLeft } from "lucide-react";
import logo from "../assets/tiranga.png";
import voiceIcon from "../assets/voice.png";
import voiceOff from "../assets/voice-off.png";
import kefu from "../assets/kefu.png";
import { useState } from "react";

export default function Header() {
  const [isVoiceOn, setIsVoiceOn] = useState(true);

  return (
    <header className="sticky top-0 z-30 h-[49.07px] bg-[#262b5e] flex items-center px-3">
      <ChevronLeft className="h-full w-7 mr-24" />

      <img
        src={logo}
        className="w-[119.47px] h-[44.9px] object-contain"
        alt="logo"
      />

      <div className="flex gap-[10px] ml-14">
        <img
          src={kefu}
          className="w-[25.6px] h-auto object-contain"
          alt="customer service"
        />

        <img
          src={isVoiceOn ? voiceIcon : voiceOff}
          className="w-[25.6px] h-auto object-contain cursor-pointer "
          onClick={() => setIsVoiceOn(!isVoiceOn)}
          alt="voice"
        />
      </div>
    </header>
  );
}