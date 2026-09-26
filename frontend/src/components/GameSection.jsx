import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
  const { requireAuth } = useAuth();

  const shouldShowRtp =
    showRtp !== undefined ? showRtp : type === "platform";

  const isCategory = type === "category";

  const handleGameClick = (item) => {
    requireAuth(() => {
      const normalizedName = item.name?.toLowerCase().replace(/[\s_-]+/g, "") || "";
      if (normalizedName.includes("wingo")) {
        navigate("/wingo");
      }
    });
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
                isCategory ? "h-[160px]" : "aspect-[148/200]"
              }`}
              style={{
                backgroundColor: cardBackground || undefined,
                ...(background
                  ? {
                      backgroundImage: `url(${background})`,
                      
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }
                  : {}),
              }}
            >
              {isCategory && (
                <div className="absolute left-0 top-0 z-10 w-full px-2 pt-3">
                  <h3 className="text-center text-[17px] font-bold leading-tight tracking-wide text-white">
                    {item.name}
                  </h3>
                </div>
              )}

              <img
                src={item.image}
                alt={item.name || "Game"}
                className={
                  isCategory
                    ? "absolute bottom-2 left-1/2 -translate-x-1/2 max-h-[102px] w-auto max-w-[90%] object-contain pointer-events-none"
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