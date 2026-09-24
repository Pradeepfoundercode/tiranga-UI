import { useNavigate } from "react-router-dom";

export default function GameSection({
  title,
  items = [],
  type = "platform",
  background,
  cardBackground,
  totalCount,
  showRtp,
}) {
  const navigate = useNavigate();

  const shouldShowRtp =
    showRtp !== undefined ? showRtp : type === "platform";

  const isCategory = type === "category";

  const handleGameClick = (item) => {
    if (item.name?.toLowerCase() === "wingo") {
      navigate("/wingo");
    }
  };

  return (
    <section className="relative w-full scroll-mt-[90px] px-3 pt-4 pb-2">
      <div className="mb-2 flex h-[27px] items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-[20px] w-[5px] rounded-full bg-[#62aefc]" />

          <h2 className="text-[18px] font-bold leading-none text-white">
            {title}
          </h2>
        </div>

        <button
          type="button"
          className="flex h-[21px] min-w-[80px] items-center justify-center gap-2 rounded-[7px] border border-text1 bg-theme px-3 text-[13px] font-medium text-text1"
        >
          <span>All</span>
          <span>{totalCount ?? items.length}</span>
          <span className="text-[17px] leading-none">›</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-x-[11px] gap-y-[17px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-0 cursor-pointer"
            onClick={() => handleGameClick(item)}
          >
            <div
              className={`relative overflow-hidden rounded-[13px] ${
                isCategory ? "h-[190px]" : "aspect-[148/200]"
              }`}
              style={{
                backgroundColor: cardBackground || undefined,
                ...(background
                  ? {
                      backgroundImage: `url(${background})`,
                      backgroundSize: "100% 100%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }
                  : {}),
              }}
            >
              {isCategory && (
                <div className="absolute left-0 top-0 z-10 w-full px-3 pt-4">
                  <h3 className="text-center text-[18px] font-bold leading-tight text-white">
                    {item.name}
                  </h3>
                </div>
              )}

              <img
                src={item.image}
                alt={item.name || "Game"}
                className={
                  isCategory
                    ? "block h-full w-full object-contain"
                    : "block h-full w-full object-cover"
                }
              />
            </div>

            {!isCategory && shouldShowRtp && item.rtp && (
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
}