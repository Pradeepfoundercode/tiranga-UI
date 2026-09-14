import { useState } from "react";
import { coins } from "../data/gameData";



export default function Coin({setOpen}) {

    console.log(coins)
  
  const [multi, setMulti] = useState("X1");
 

  return (
    <div className=" bg-[#2b3270] relative #0e1024  rounded-xl w-[372.26px] h-[304.52px] mt-[11.7332px] mr-[13.875px] mb-[12.8px]  pt-[7.4668px] pr-[10.6668px] pb-[10.1332px] pl-[7.4668px]">
   
    <div className=" absolute top-0 left-0   w-[372.26px] h-[304.52px] bg-[#0e1024] rounded-xl opacity-50 "></div>
      <div className="grid grid-cols-3 gap-4">
        <button className="bg-[#0db65e] w-[107.38px] h-[37.33px] rounded-bl-xl rounded-tr-xl">Green</button>
        <button className="bg-[#9b42dc] w-[107.38px] h-[37.33px]  rounded-lg">Violet</button>
        <button className="bg-[#df3735] w-[107.38px] h-[37.33px]  rounded-br-xl rounded-tl-xl">Red</button>
      </div>

     
      <div className="grid grid-cols-5 gap-1 bg-[#1f2b67] rounded-xl my-[13.8668px] py-[6.9332px] px-[10.6668px]">
         {coins.map((coin, index) => (
  <button
    key={index}
    onClick={() => setOpen(coin.num)}
  >
    <img src={coin.image} alt={coin.num} className="w-[58.67px] h-14.75" />
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