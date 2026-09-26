export default function BalanceBanner({
  backgroundImage,
  balanceIcon,
  refreshIcon,
  label,
  balance = 0,
  balanceClassName = "text-[22px] font-semibold ml-3 font-inter",
  labelClassName = "text-text text-[13px]",
  containerClassName = "relative overflow-hidden w-full aspect-[371/136] min-h-[120px] rounded-[10px] bg-no-repeat px-3 py-3",
  contentClassName = "relative z-10 mt-1",
}) {
  return (
    <div
      className={containerClassName}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className={contentClassName}>
        <div className="flex items-center gap-2 text-[15px]">
          <img src={balanceIcon} alt="" className="h-4" />
          <span className={labelClassName}>{label}</span>
        </div>

        <div className="mt-1 flex items-center">
          <span className={balanceClassName}>
            ₹{Number(balance).toFixed(2)}
          </span>
          <img src={refreshIcon} alt="refresh" className="h-3.5 ml-3" />
        </div>
      </div>
    </div>
  );
}