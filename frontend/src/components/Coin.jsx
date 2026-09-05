import { useState } from "react";
import { coins } from "../data/gameData";



export default function Coin({setOpen}) {

    console.log(coins)
  
  const [multi, setMulti] = useState("X1");
 

  return (
    <div className="mt-3 bg-[#293775] rounded-2xl p-2">
      <div className="grid grid-cols-3 gap-4">
        <button className="bg-[#0db65e] p-2 rounded-bl-xl rounded-tr-xl">Green</button>
        <button className="bg-[#9b42dc] p-2 rounded-lg">Violet</button>
        <button className="bg-[#df3735] p-2 rounded-br-xl rounded-tl-xl">Red</button>
      </div>

     
      <div className="grid grid-cols-5 gap-2 bg-[#1f2b67] rounded-xl mt-4 p-3">
         {coins.map((coin, index) => (
  <button
    key={index}
    onClick={() => setOpen(coin.num)}
  >
    <img src={coin.image} alt={coin.num} />
  </button>
))}
      </div>

      <div className="flex gap-1 mt-3">
      <button className="border border-red-500 text-red-500 py-1 px-2 rounded-lg mr-1">Random</button>
        {["X1", "X5", "X10", "X20", "X50", "X100"].map((x) => (
          <button
            key={x}
            onClick={() => setMulti(x)}
            className={`h-8 px-1.5 rounded-xl text-xs border ${
              multi === x
                ? "bg-[#13b85d] border-transparent text-white"
                : "bg-[#202b68] border-transparent text-[#a6aac0]"
            } ${
              x === "Random"
                ? "border-[#e23c3d] text-[#e23c3d] bg-transparent"
                : ""
            }`}
          >
            {x}
          </button>
        ))}
      </div>

      <div className="flex mt-3 h-11 rounded-full overflow-hidden text-[18px] font-bold">
        <button className="flex-1 bg-[#e89b2e]">
          Big
        </button>

        <button
        
          className="bg-[#5790da] flex-1"
        >
          Small
        </button>
        <p>

</p>
      </div>
    </div>
  );
}