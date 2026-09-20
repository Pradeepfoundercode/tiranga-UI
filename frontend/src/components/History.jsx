import { useState } from "react";
import empty from "../assets/followStartegy/empty-state-Wmwn6GgG.png";
import followicon from "../assets/followStartegy/followstrategy.png";
import StrategySettings from "../components/StrategySettings";
import { chartStats, historyTabs, strategies } from "../constants/historyData";
import nodata from "../assets/withdraw/902f2b37-6129-405d-9e91-08a31f861d69.png";

export default function History({
  history = [],
  loading,
  error,
}) {
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [tab, setTab] = useState("Game history");

  

  const results = history.slice(0, 10);
  const chartResults = history;


  const getColor = (color) => {
    const value = color?.toLowerCase();

    if (value === "red") return "#ed4744";
    if (value === "green") return "#21bb71";
    if (value === "violet" || value === "voilet") return "#b044df";

    return "#ffffff";
  };

  const getColors = (item) => {
    let data = [];

    try {
      data =
        typeof item.json === "string"
          ? JSON.parse(item.json)
          : item.json || [];
    } catch {
      data = [];
    }

    const apiColor = data[2]?.toLowerCase();
    const number = Number(item.number);

    if (
      apiColor === "violet" ||
      apiColor === "voilet"
    ) {
      if (number === 0) {
        return ["red", "violet"];
      }

      if (number === 5) {
        return ["green", "violet"];
      }

      return ["violet"];
    }

    return [apiColor || "white"];
  };

  const getSize = (item) => {
    try {
      const data =
        typeof item.json === "string"
          ? JSON.parse(item.json)
          : item.json || [];

      return data[1] || "";
    } catch {
      return "";
    }
  };

  const numbers = Array.from({ length: 10 }, (_, index) => index);



  const getPointColor = (item) => {
    const colors = getColors(item);

    if (colors.length === 2) {
      return `linear-gradient(135deg, ${getColor(
        colors[0]
      )} 50%, ${getColor(colors[1])} 50%)`;
    }

    return getColor(colors[0]);
  };

  return (
    <section className="mt-4 pb-4">
      <div
        className="
          flex
          gap-3
          overflow-x-auto
          overflow-y-hidden
          pb-1
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        {historyTabs.map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`
              h-[40px]
              flex-shrink-0
              min-w-[100px]
              px-[24px]
              rounded-[10px]
              text-[14px]
              font-medium
              whitespace-nowrap
              ${
                tab === item
                  ? "bg-[#299ef0] text-white"
                  : "bg-[#303879] text-[#a2a5b8]"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

      {tab === "Game history" && (
        <>
          <div className="mt-4 overflow-hidden rounded-t-[7px]">
            <div
              className="
                grid
                grid-cols-[1.7fr_.6fr_.9fr_.65fr]
                h-[48px]
                items-center
                bg-[#40549e]
                px-4
                text-[13px]
                text-white
              "
            >
              <span className="text-center">
                Period
              </span>

              <span className="text-center">
                Number
              </span>

              <span className="text-center">
                Big Small
              </span>

              <span className="text-center">
                Color
              </span>
            </div>

            {results.map((item) => {
              const size = getSize(item);
              const colors = getColors(item);

              return (
                <div
                  key={item.id}
                  className="
                    grid
                    grid-cols-[1.7fr_.6fr_.9fr_.65fr]
                    min-h-[51px]
                    items-center
                    px-4
                    bg-[#303b80]
                    text-[13px]
                    text-white
                    border-b
                    border-[#252d6c]
                  "
                >
                  <span className="text-center">
                    {item.games_no}
                  </span>

                  <span
                    className="text-center text-[28px] font-bold"
                    style={
                      colors.length > 1
                        ? {
                            backgroundImage: `linear-gradient(
                              to bottom,
                              ${getColor(colors[0])} 50%,
                              ${getColor(colors[1])} 50%
                            )`,
                            WebkitBackgroundClip:
                              "text",
                            WebkitTextFillColor:
                              "transparent",
                          }
                        : {
                            color: getColor(
                              colors[0]
                            ),
                          }
                    }
                  >
                    {item.number}
                  </span>

                  <span className="text-center">
                    {size}
                  </span>

                  <span className="flex justify-center gap-2">
                    {colors.map((color, index) => (
                      <i
                        key={`${color}-${index}`}
                        className={`
                          w-[12px]
                          h-[12px]
                          rounded-full
                          ${
                            color === "red"
                              ? "bg-[#f44343]"
                              : color === "green"
                              ? "bg-[#43c27f]"
                              : "bg-[#d847dc]"
                          }
                        `}
                      />
                    ))}
                  </span>
                </div>
              );
            })}
          </div>

          <div
            className="
              flex
              justify-around
              items-center
              bg-[#303b80]
              mt-4
              p-4
            "
          >
            <button
              className="
                w-[43px]
                h-[40px]
                rounded-[8px]
                bg-[#40559e]
                text-[30px]
                leading-none
              "
            >
              ‹
            </button>

            <span className="text-[14px]">
              1/50
            </span>

            <button
              className="
                w-[43px]
                h-[40px]
                rounded-[8px]
                bg-[#40559e]
                text-[30px]
                leading-none
              "
            >
              ›
            </button>
          </div>
        </>
      )}

    {tab === "Chart" && (
  <div className="mt-4">
    <div className="overflow-hidden rounded-[7px] bg-[#303879]">

      <div className="grid grid-cols-[1fr_2fr] h-[42px] bg-[#40549e] items-center text-[13px] font-medium">
        <span className="text-center">
          Period
        </span>

        <span className="text-center">
          Number
        </span>
      </div>

      <div className="px-[10px] pt-[10px] pb-[8px]">

        <div className="grid grid-cols-[138px_1fr] text-[14px]">

          <div className="space-y-[7px]">
            <p>Statistic</p>
            <p>Winning Numbers</p>
            <p>Missing</p>
            <p>Avg missing</p>
            <p>Frequency</p>
            <p>Max consecutive</p>
          </div>

          <div>
            <p className="mb-[5px]">
              (last {chartResults.length || 0} Periods)
            </p>

            <div className="grid grid-cols-10 gap-[5px] mb-[7px]">
              {numbers.map((number) => (
                <span
                  key={number}
                  className="
                    flex
                    items-center
                    justify-center
                    w-[18px]
                    h-[18px]
                    rounded-full
                    border
                    border-[#ed4744]
                    text-[11px]
                    text-[#ed4744]
                  "
                  
                >
                  {number}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-10 gap-[5px] text-[13px] text-[#aeb5d3]">
              {chartStats.map((item) => (
                <span
                  key={item.number}
                  className="text-center"
                >
                  {item.missing}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-10 gap-[5px] text-[13px] text-[#aeb5d3] mt-[7px]">
              {chartStats.map((item) => (
                <span
                  key={item.number}
                  className="text-center"
                >
                  {item.avgMissing}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-10 gap-[5px] text-[13px] text-[#aeb5d3] mt-[7px]">
              {chartStats.map((item) => (
                <span
                  key={item.number}
                  className="text-center"
                >
                  {item.frequency}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-10 gap-[5px] text-[13px] text-[#aeb5d3] mt-[7px]">
              {chartStats.map((item) => (
                <span
                  key={item.number}
                  className="text-center"
                >
                  {item.maxConsecutive}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative">

       <svg
  className="
    absolute
    left-[146px]
    top-0
    z-[5]
    pointer-events-none
    w-[225px]
    h-full
    overflow-visible
  "
>
  {chartResults.slice(0, 10).map((item, index, arr) => {
    if (index === arr.length - 1) return null;

    const currentNumber = Number(item.number);
    const nextNumber = Number(arr[index + 1].number);

    const currentColors = getColors(item);
    const nextColors = getColors(arr[index + 1]);

    const currentColor = getColor(currentColors[0]);
    const nextColor = getColor(nextColors[0]);

    // 10 numbers -> exact center position
    const columnWidth = 23;

    const x1 = 11.25 + currentNumber * 20;
const x2 = 11.25 + nextNumber * 20;

    // center of each 53px row
    const y1 = index * 52 + 26.5;
    const y2 = (index + 1) * 52 + 26.5;

    return (
      <line
        key={`${item.id}-${arr[index + 1].id}`}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={currentColor || nextColor}
        strokeWidth="1"
      />
    );
  })}
</svg>

        {chartResults
          .slice(0, 10)
          .map((item) => {

            const number = Number(item.number);
            const colors = getColors(item);
            const size = getSize(item);

            return (
              <div
                key={item.id}
                className="
                  relative
                  grid
                  grid-cols-[138px_1fr]
                  h-[53px]
                  items-center
                  border-t
                  border-[#8c91b5]
                  px-[10px]
                "
              >

                <span className="text-[12px] text-white">
                  {item.games_no}
                </span>

                <div className="relative h-full flex items-center">

  {/* Numbers + B/S */}
  <div className="flex items-center w-[240px]">

    <div className="grid grid-cols-11 w-[220px]">
      {numbers.map((value) => {
        const selected = value === number;

        return (
          <span
            key={value}
            className="
              relative
              z-10
              flex
              items-center
              justify-center
              w-[16px]
              h-[16px]
              rounded-full
              border
              text-[11px]
            "
            style={
              selected
                ? {
                    borderColor: "transparent",
                    color: "#ffffff",
                    background: getPointColor(item),
                  }
                : {
                    borderColor: "#c5c9da",
                    color: "#c5c9da",
                  }
            }
          >
            {value}
          </span>
        );
      })}
    </div>

    {/* B / S */}
    <span
      className="
        -ml-[19px]
        shrink-0
        flex
        items-center
        justify-center
        w-[15px]
        h-[15px]
        rounded-full
        text-[10px]
        font-bold
      "
      style={{
        background:
          size === "Big"
            ? "#ffc400"
            : "#59a3ef",
        color: "#ffffff",
      }}
    >
      {size === "Big" ? "B" : "S"}
    </span>

  </div>

</div>
              </div>
            );
          })}
      </div>
    </div>
  </div>
)}

      {tab === "Follow Strategy" && (
        <div className="mt-4 rounded-[8px] bg-[#2b3270] p-[10px]">
          <div className="rounded-[8px] bg-[#374992] p-[10px] mt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-[15px] font-semibold">
                  Betting Strategy
                </span>

                <span className="flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#aab0c8] text-[10px] text-[#aab0c8]">
                  ?
                </span>
              </div>

              <button className="flex items-center gap-1 rounded-full bg-[#315092] px-2 py-1 text-[13px] text-[#12c98b]">
                <span>◷</span>
                History
              </button>
            </div>

            <div className="flex h-[185px] flex-col items-center justify-center">
              <img
                src={empty}
                alt=""
                className="h-20 mb-5"
              />

              <p className="text-[13px] text-[#a2a5bd]">
                Please select a strategy
              </p>
            </div>
          </div>

          <div className="mt-[10px] space-y-[10px]">
            {strategies.map((strategy) => (
              <div
                key={strategy.name}
                className="rounded-[9px] bg-[#40549e] p-[10px]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#35e2c7]">
                    <img src={followicon} alt="" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="text-[14px] font-medium">
                        {strategy.name}
                      </span>
                    </div>

                    <div className="text-[12px] text-[#ff4b52]">
                      ♟ {strategy.followed} followed
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[12px] text-white">
                        Micheal
                      </span>

                      <span
                        className={`rounded-full border px-2 py-[1px] text-[11px] ${
                          strategy.type === "red"
                            ? "border-[#ed4744] text-[#ed4744]"
                            : "border-[#e99c38] text-[#e99c38]"
                        }`}
                      >
                        {strategy.type}
                      </span>

                      <span className="rounded-full bg-[#5263a1] px-2 py-[1px] text-[11px] text-[#858eaf]">
                        martingale
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-[14px] flex items-center text-[13px]">
                  <span className="text-[#c5c9d8]">
                    Return on Investment
                  </span>

                  <span className="ml-2 text-[20px] text-[#ff4747]">
                    {strategy.return}
                  </span>

                  <span className="ml-1 text-[12px] text-[#aeb4ca]">
                    ⓘ
                  </span>
                </div>

                <div className="mt-[4px] flex items-center justify-between text-[12px]">
                  <span className="text-[#c5c9d8]">
                    Total Profit ⓘ
                  </span>

                  <span className="text-white">
                    {strategy.profit}
                  </span>
                </div>

                <div className="mt-[5px] flex items-center justify-between text-[12px]">
                  <span className="text-[#c5c9d8]">
                    Total bet amount ⓘ
                  </span>

                  <span className="text-white">
                    {strategy.bet}
                  </span>
                </div>

                <button
                  onClick={() => setStrategyOpen(true)}
                  className="
                    mt-[8px]
                    h-[43px]
                    w-full
                    rounded-[8px]
                    bg-[#269ff0]
                    text-[14px]
                    text-white
                  "
                >
                  Follow Strategy
                </button>

                {strategyOpen && (
                  <StrategySettings
                    setOpen={setStrategyOpen}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "My history" && (
        <div className="mt-4 rounded-lg bg-[#303b80] p-5 flex items-center justify-center h-52 flex-col gap-3 relative">
          <img src={nodata} alt="nodata" className="h-24" />
          <p className="text-black text-[13px]">No Data</p>
          <button className="border border-[#61a9ff] rounded-lg p-1 text-[13px] text-[#61a9ff] absolute top-3 right-3 w-24">Details </button>
        </div>
      )}
    </section>
  );
}