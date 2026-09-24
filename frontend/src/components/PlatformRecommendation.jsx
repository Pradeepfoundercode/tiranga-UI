import React from "react";

const PlatformRecommendation = ({
  title = "Platform recommendation",
  items = [],
  onItemClick,
  showAllButton = true,
}) => {
  return (
    <section className="w-full px-3 mt-2 mb-10">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-[17px] font-bold leading-none text-white">
          <span className="mr-1 text-[#62aefc]">◒</span>
          {title}
        </h2>

        {showAllButton && (
          <button
            type="button"
            className="flex h-[21px] min-w-[80px] items-center justify-center gap-2 rounded-sm border border-text1 bg-theme px-3 text-[13px] font-medium text-text1"
          >
            <span>All</span>
            <span>{items.length}</span>
            <span className="text-[17px] leading-none">›</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-3 gap-x-[11px] gap-y-[17px]">
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            onClick={() => onItemClick?.(item)}
            className="min-w-0 cursor-pointer"
          >
            <div className="overflow-hidden rounded-[13px]">
              <img
                src={item.image}
                alt={item.name || "Game"}
                className="block aspect-[148/200] w-full object-cover"
              />
            </div>

            {item.rtp && (
              <div className="mt-[8px] flex h-[20px] items-center justify-between rounded-[5px] bg-[#5caafa] px-[7px] text-[13px] font-bold text-white">
                <span>RTP</span>
                <span>{item.rtp}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformRecommendation;