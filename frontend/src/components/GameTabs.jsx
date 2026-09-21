import timeColor from "../assets/images/time_a-JJ2F4gSL.png";
import { tabs } from "../constants/gameData";

export default function GameTabs({ active, setActive }) {
  return (
    <div className="grid grid-cols-4 bg-background rounded-xl   h-24">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={` w-[93.33px] items-center  justify-center text-text1 ${
            active === tab ? "bg-active rounded-2xl shadow-lg" : ""
          }`}
        >
          
            <div className="flex flex-col items-center justify-center">
              <img
              src={timeColor}
              alt="time"
              className="w-[46.93px]  h-[46.93px] -mb-1 mt-3"
            />
             <p className={`text-[13px]  ${active === tab ? "text-text" : "text-text1"}`}>
              {index === 0 ? "WinGo" : tab}
            </p>

           
            <p className={`text-[13px] -mt-1.5  ${active === tab ? "text-text" : "text-text1"}`}>
              {index === 0 ? "30sec" : "min"}
            </p>
            </div>
         
        </button>
      ))}
    </div>
  );
}
