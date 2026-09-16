import { ChevronLeft } from "lucide-react";

export default function PageHeader({
  title,
  rightText,
  onBack,
  titleClassName = "text-[18px] text-[#f0f1f5]",
  rightClassName = "text-[12px] text-[#f0f1f5]",
  className = "sticky top-0 z-30 h-[49px] bg-[#2d3474] flex items-center px-3 justify-between",
  titleWrapperClassName = "text-center ml-14",
}) {
  return (
    <header className={className}>
      <button
        onClick={onBack}
        className="w-8 h-8 flex items-center justify-center shrink-0"
      >
        <ChevronLeft size={27} strokeWidth={2} className="text-white" />
      </button>

      <div className={titleWrapperClassName}>
        <h1 className={titleClassName}>{title}</h1>
      </div>

      <button className={rightClassName}>{rightText}</button>
    </header>
  );
}
