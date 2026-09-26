import timeColor from "../assets/images/time_a-JJ2F4gSL.png";
import { tabs } from "../constants/gameData";

export default function GameTabs({ active, setActive }) {
  return (
    <div className="grid grid-cols-4 bg-background rounded-xl h-24 p-1">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActive(tab)}
          className={`w-full flex flex-col items-center justify-center text-text1 transition ${
            active === tab ? "bg-active rounded-xl shadow-lg" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src={timeColor}
              alt="time"
              className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] -mb-1 mt-1.5 object-contain"
            />
            <p className={`text-[11.5px] sm:text-[13px] font-medium ${active === tab ? "text-text" : "text-text1"}`}>
              {index === 0 ? "WinGo" : tab}
            </p>
            <p className={`text-[11px] sm:text-[12px] -mt-1 ${active === tab ? "text-text" : "text-text1"}`}>
              {index === 0 ? "30sec" : "min"}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}