import timeColor from "../assets/time_color.png";
import { tabs } from "../data/gameData";

export default function GameTabs({ active, setActive }) {
  return (
    <div className="grid grid-cols-4 bg-[#3b4d9a] rounded-2xl overflow-hidden h-[105px]">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`flex flex-col items-center justify-center  ${
            active === tab ? "bg-[#2b9fee] rounded-2xl shadow-lg" : ""
          }`}
        >
          <span className="w-10  h-10 flex flex-col items-center justify-center">
            <img
              src={timeColor}
              alt="time"
              className="w-10 h-10 object-contain"
            />
            <p className="text-xs">{tab}</p>
          </span>
        </button>
      ))}
    </div>
  );
}
