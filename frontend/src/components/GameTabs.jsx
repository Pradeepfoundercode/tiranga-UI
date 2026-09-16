import timeColor from "../assets/time_a-JJ2F4gSL.png";
import { tabs } from "../constants/gameData";

export default function GameTabs({ active, setActive }) {
  return (
    <div className="grid grid-cols-4 bg-[#3b4d9a] rounded-xl   h-24">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={` w-[93.33px] items-center  justify-center text-[#acafc2] ${
            active === tab ? "bg-[#2b9fee] rounded-2xl shadow-lg" : ""
          }`}
        >
          
            <div className="flex flex-col items-center justify-center">
              <img
              src={timeColor}
              alt="time"
              className="w-[46.93px]  h-[46.93px] -mb-1 mt-3"
            />
             <p className={`text-[13px]  ${active === tab ? "text-[#f0f1f5]" : "text-[#acafc2]"}`}>
              {index === 0 ? "WinGo" : tab}
            </p>

           
            <p className={`text-[13px] -mt-1.5  ${active === tab ? "text-[#f0f1f5]" : "text-[#acafc2]"}`}>
              {index === 0 ? "30sec" : "min"}
            </p>
            </div>
         
        </button>
      ))}
    </div>
  );
}
