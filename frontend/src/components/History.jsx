import { useEffect, useState } from "react";
// import { results } from "../data/gameData";
import empty from "../assets/followStartegy/empty-state-Wmwn6GgG.png"
import followicon from "../assets/followStartegy/followstrategy.png"
import StrategySettings from "../components/StrategySettings"
import { getResults } from "../services/api/wingoServices";

export default function History() {
const [results, setResults] = useState([]);

  useEffect(() => {
  const fetchResults = async () => {
    try {
      const response = await getResults(1, 10, 0);
      console.log(response)
      setResults(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchResults();
}, []);

  const [strategyOpen, setStrategyOpen] = useState(false);

  const strategies = [
  {
    name: "BigSmall",
    followed: "338",
    type: "Big",
    return: "+96%",
    profit: "₹7,418,690.23",
    bet: "₹95,855,617.42",
  },
  {
    name: "Color",
    followed: "47",
    type: "red",
    return: "+154.8%",
    profit: "₹330,150.09",
    bet: "₹2,709,677.45",
  },
];
  const [tab, setTab] = useState("Game history");

  const tabs = ["Game history", "Chart", "Follow Strategy", "My history"];

  const getColor = (color) => {
    if (color === "red") return "#ed4744";
    if (color === "green") return "#21bb71";
    if (color === "violet") return "#b044df";

    return "#ffffff";
  };

  return (
    <section className="mt-4">
      {/* ================= TABS ================= */}
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
        {tabs.map((item) => (
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

      {/* ================= GAME HISTORY ================= */}
      {tab === "Game history" && (
        <>
          {/* TABLE HEADER */}
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
              <span className="text-center">Period</span>

              <span className="text-center">Number</span>

              <span className="text-center">Big Small</span>

              <span className="text-center">Color</span>
            </div>

            {/* TABLE ROWS */}
          {results.map((item) => {
  const data = JSON.parse(item.json);

  const size = data[1];

  const apiColor = data[2].toLowerCase();

  let colors = [];

  if (apiColor === "voilet") {
    if (item.number === 0) {
      colors = ["red", "violet"];
    } else if (item.number === 5) {
      colors = ["green", "violet"];
    } else {
      colors = ["violet"];
    }
  } else {
    colors = [apiColor];
  }

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
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }
            : {
                color: getColor(colors[0]),
              }
        }
      >
        {item.number}
      </span>

      <span className="text-center">
        {size}
      </span>

      <span className="flex justify-center gap-2">
        {colors.map((c, index) => (
          <i
            key={`${c}-${index}`}
            className={`
              w-[12px]
              h-[12px]
              rounded-full
              ${
                c === "red"
                  ? "bg-[#f44343]"
                  : c === "green"
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

          {/* ================= PAGINATION ================= */}
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

            <span className="text-[14px]">1/50</span>

            <button
              className="
                w-[43px]
                h-[40px]
                rounded-[8px]
                bg-[#59a3ef]
                text-[30px]
                leading-none
              "
            >
              ›
            </button>
          </div>
        </>
      )}

      {/* ================= CHART ================= */}
      {tab === "Chart" && (
        <div className="mt-4 rounded-lg bg-[#303b80] p-5">
          <p className="text-center text-[#a2a5b8]">Chart</p>
        </div>
      )}

     {/* ================= FOLLOW STRATEGY ================= */}
{tab === "Follow Strategy" && (
  <div className="mt-4 rounded-[8px] bg-[#2b3270] p-[10px]">

    {/* ================= TOP STRATEGY BOX ================= */}
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

      {/* EMPTY STRATEGY */}
      <div className="flex h-[185px] flex-col items-center justify-center">

        <img src={empty} alt="" className="h-20 mb-5"/>

        <p className="text-[13px] text-[#a2a5bd]">
          Please select a strategy
        </p>

      </div>
    </div>


    {/* ================= STRATEGY CARDS ================= */}
    <div className="mt-[10px] space-y-[10px]">

      {strategies.map((strategy) => (
        <div
          key={strategy.name}
          className="rounded-[9px] bg-[#40549e] p-[10px]"
        >

          {/* TOP */}
          <div className="flex items-start gap-3">

            {/* AVATAR */}
            <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#35e2c7]">
              <img src={followicon} alt="" />
            </div>

            {/* NAME */}
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


          {/* ROI */}
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


          {/* TOTAL PROFIT */}
          <div className="mt-[4px] flex items-center justify-between text-[12px]">

            <span className="text-[#c5c9d8]">
              Total Profit ⓘ
            </span>

            <span className="text-white">
              {strategy.profit}
            </span>

          </div>


          {/* TOTAL BET */}
          <div className="mt-[5px] flex items-center justify-between text-[12px]">

            <span className="text-[#c5c9d8]">
              Total bet amount ⓘ
            </span>

            <span className="text-white">
              {strategy.bet}
            </span>

          </div>


          {/* FOLLOW BUTTON */}
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


      {/* Strategy Modal */}
      {strategyOpen && (
        <StrategySettings setOpen={setStrategyOpen} />
      )}

        </div>
      ))}

    </div>

  </div>
)}

      {/* ================= MY HISTORY ================= */}
      {tab === "My history" && (
        <div className="mt-4 rounded-lg bg-[#303b80] p-5">
          <p className="text-center text-[#a2a5b8]">My history</p>
        </div>
      )}
    </section>
  );
}
