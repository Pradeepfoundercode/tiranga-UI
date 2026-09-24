import React from "react";
import lotterybg from "../assets/home/lotterybg.png"

const LotterySection = ({
  title = "Lottery",
  items = [],
  background,
  onItemClick,
  showAllButton = true,
}) => {
  return (
    <section className="w-full px-4 pt-4 pb-2">
      <div className="mb-2 flex h-[27px] items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-[20px] w-[6px] rounded-full bg-[#62aefc]" />

          <h2 className="text-[18px] font-bold leading-none text-white">
            {title}
          </h2>
        </div>

        {showAllButton && (
          <button
            type="button"
            className="flex h-[21px] min-w-[80px] items-center justify-center gap-2 rounded-[7px] border border-text1 bg-theme px-3 text-[13px] font-medium text-text1"
          >
            <span>All</span>
            <span>{items.length}</span>
            <span className="text-[17px] leading-none">›</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-3 gap-x-[11px] gap-y-[10px]">
        {items.map((item, index) => (
          <div
  key={item.id ?? index}
  onClick={() => onItemClick?.(item)}
  className="relative h-[168px] cursor-pointer overflow-hidden rounded-[12px]"
  style={{
    backgroundImage: `url(${lotterybg})`,
    
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h3 className="absolute left-0 top-5 z-10 w-full truncate text-center font-serif text-[15px] font-bold leading-none text-white">
    {item.name}
  </h3>

  <img
    src={item.image}
    alt={item.name || "Game"}
    className="absolute inset-x-0 bottom-1 mx-auto h-[125px] w-[90%] object-contain"
  />
</div>
        ))}
      </div>
    </section>
  );
};

export default LotterySection;