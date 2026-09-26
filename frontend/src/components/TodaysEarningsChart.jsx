import React from "react";

import crown from "../assets/person/crown3-BmAJ-LDo.png";
import avatarBorder from "../assets/person/border3-Dc5eCVuH.png";
import podium from "../assets/person/DailyProfitRankStage-Dj5L7gPp.png";

import firstPerson from "../assets/person/person6.png";
import secondPerson from "../assets/person/person6.png";
import thirdPerson from "../assets/person/person6.png";

const winners = [
  {
    position: "NO2",
    name: "Mem***VZ2",
    earning: "₹1,983,079.00",
    type: "second",
    image: secondPerson,
  },
  {
    position: "NO1",
    name: "Rit***mar",
    earning: "₹6,658,316.00",
    type: "first",
    image: firstPerson,
  },
  {
    position: "NO3",
    name: "Mem***GOR",
    earning: "₹1,962,177.52",
    type: "third",
    image: thirdPerson,
  },
];

function Winner({ winner }) {
  const isFirst = winner.type === "first";
  const isSecond = winner.type === "second";

  return (
    <div
      className={`absolute bottom-0 flex flex-col items-center ${
        isSecond
          ? "left-[0px]"
          : isFirst
          ? "left-1/2 -translate-x-1/2"
          : "right-[0px]"
      }`}
    >
      <div
        className={`relative flex items-center justify-center ${
          isFirst ? "h-[100px] w-[100px]" : "h-[90px] w-[90px]"
        }`}
      >
        <img
          src={avatarBorder}
          alt=""
          className="absolute inset-0 z-[2] h-full w-full object-contain"
        />

        <div
          className={`absolute z-[1] overflow-hidden rounded-full ${
            isFirst ? "h-[76px] w-[76px]" : "h-[67px] w-[67px]"
          }`}
        >
          <img
            src={winner.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <img
          src={crown}
          alt=""
          className={`absolute z-[5] object-contain ${
            isFirst
              ? "left-[-5px] top-[-20px] h-[58px] w-[60px]"
              : "left-[-5px] top-[-14px] h-[50px] w-[52px]"
          }`}
        />
      </div>

      <div
        className={`relative z-20 flex items-center justify-center font-medium ${
          isFirst
            ? "mt-[-2px] h-[28px] w-[80px] text-[13px]"
            : "mt-[-1px] h-[26px] w-[72px] text-[12px]"
        }`}
      >
        <div
          className={`absolute inset-0 ${
            winner.type === "second"
              ? "bg-gradient-to-b from-[#edf2ff] to-[#a1afd2]"
              : winner.type === "first"
              ? "bg-gradient-to-b from-[#ffe72b] to-[#ffb600]"
              : "bg-gradient-to-b from-[#f6d2a9] to-[#d99856]"
          }`}
          style={{
            clipPath:
              "polygon(0 25%, 14% 25%, 18% 0, 82% 0, 86% 25%, 100% 25%, 88% 100%, 12% 100%)",
          }}
        />

        <span
          className={`relative z-10 ${
            winner.type === "first"
              ? "text-[#d78300]"
              : winner.type === "second"
              ? "text-[#7184b6]"
              : "text-[#a76d34]"
          }`}
        >
          {winner.position}
        </span>
      </div>

      <div
        className={`relative z-30 mt-[4px] whitespace-nowrap text-center font-semibold text-white ${
          isFirst ? "text-[14px]" : "text-[13px]"
        }`}
      >
        {winner.name}
      </div>

      <div
        className={`relative z-30 mt-[10px] flex items-center justify-center rounded-full bg-white/25 font-bold text-white ${
          isFirst
            ? "h-[35px] w-[135px] text-[13px]"
            : "h-[34px] w-[135px] text-[13px]"
        }`}
      >
        {winner.earning}
      </div>
    </div>
  );
}

export default function TodaysEarningsChart() {
  return (
    <section className="w-full overflow-hidden px-[10px] pb-[10px] pt-[9px]">
      <div className="mb-[7px] flex h-[23px] items-center gap-[6px]">
        <span className="h-[18px] w-[4px] rounded-full bg-[#63a8ff]" />

        <h2 className="m-0 text-[21px] font-bold leading-[22px] text-white">
          Today's earnings chart
        </h2>
      </div>

      <div className="relative mx-auto h-[250px] w-full max-w-[702px]">
        <img
          src={podium}
          alt=""
          className="absolute inset-x-0 bottom-0 h-[250px] w-full object-fill"
        />

        <div className="absolute inset-x-0 bottom-0 h-[250px]">
          <Winner winner={winners[0]} />
          <Winner winner={winners[1]} />
          <Winner winner={winners[2]} />
        </div>
      </div>
    </section>
  );
}