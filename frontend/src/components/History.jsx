import { useState } from "react";
import { results } from "../data/gameData";

export default function History() {
  const [tab, setTab] = useState("Game history");

  const tabs = ["Game history", "Chart", "Follow Strategy", "My history", ];

  return (
    <section className="mt-4">
    
      <div className="flex gap-2 overflow-hidden">
        {tabs.map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`h-10 rounded-xl text-xs ${
              item === "Follow Strategy" ? "min-w-[124px]" : "min-w-[110px]"
            } ${
              tab === item
                ? "bg-[#2a9ef0] text-white"
                : "bg-[#2a3375] text-[#999eae]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      
      <div className="mt-4 overflow-hidden rounded-lg">
      
        <div className="grid grid-cols-4 h-12 items-center pl-12 bg-[#40549e] text-sm">
          <span>Period</span>
          <span>Number</span>
          <span>Big Small</span>
          <span>Color</span>
        </div>

       
        {results.map(([period, num, size, colors]) => (
          <div
            key={period}
            className="grid grid-cols-[1.7fr_.6fr_.9fr_.65fr] min-h-[51px] items-center px-4 bg-[#303b80] text-[14px]"
          >
            <span>{period}</span>

            <span
              className={`text-[28px] font-bold ${
                colors.includes("violet")
                  ? "text-[#b044df]"
                  : colors[0] === "red"
                  ? "text-[#ed4744]"
                  : "text-[#21bb71]"
              }`}
            >
              {num}
            </span>

            <span>{size}</span>

            <span className="flex gap-2">
              {colors.map((c, index) => (
                <i
                  key={`${c}-${index}`}
                  className={`w-3 h-3 rounded-full ${
                    c === "red"
                      ? "bg-[#f44343]"
                      : c === "green"
                      ? "bg-[#43c27f]"
                      : "bg-[#d847dc]"
                  }`}
                />
              ))}
            </span>
          </div>
        ))}
      </div>

   
      <div className="flex justify-between items-center bg-[#303b80] mt-4 p-5">
        <button className="w-12 h-12 rounded-lg bg-[#40559e] text-3xl">
          ‹
        </button>

        <span>1/50</span>

        <button className="w-12 h-12 rounded-lg bg-[#59a3ef] text-3xl">
          ›
        </button>
      </div>
    </section>
  );
}