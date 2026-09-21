export default function BalanceBanner({
  backgroundImage,
  balanceIcon,
  refreshIcon,
  label,
  balance = 0,
  balanceClassName = "text-[22px] font-semibold ml-3 font-inter",
  labelClassName = "text-text text-[13px]",
  containerClassName = "relative overflow-hidden w-[371px] h-[135.6px] rounded-[10px] bg-cover bg-center bg-no-repeat px-3 py-3",
  contentClassName = "relative z-10 mt-1",
}) {
  return (
    <div
      className={containerClassName}
      style={{ backgroundImage: `url(${backgroundImage})` }}
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
