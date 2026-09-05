import { ChevronLeft , } from "lucide-react";
import logo from "../assets/tiranga.png";
import voice from "../assets/voice.png";
import kefu from "../assets/kefu.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 h-14 bg-[#30377e] flex items-center justify-between px-4  ">
      <ChevronLeft  size={25} />
      <img src={logo} className="w-[120px] h-auto object-contain" />
      <div className="flex gap-4">
      <img src={kefu} className="w-[25px] h-auto object-contain" />
      <img src={voice} className="w-[25px] h-auto object-contain" />
      </div>
    </header>
  );
}
