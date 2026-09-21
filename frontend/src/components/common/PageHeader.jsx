import { ChevronLeft } from "lucide-react";

export default function PageHeader({
  title,
  rightText,
  onBack,
  onRightClick,
  titleClassName = "text-[18px] text-text",
  rightClassName = "text-[12px] text-text",
  className = "sticky top-0 z-30 h-12.25 bg-background1 flex items-center px-3 justify-between",
  titleWrapperClassName = "text-center ml-12",
}) {
  return (
    <header className={className}>
      <button
        onClick={onBack}
        className="w-8 h-8 flex items-center justify-center shrink-0"
      >
        <ChevronLeft
          size={27}
          strokeWidth={2}
          className="text-white"
        />
      </button>

      <div className={titleWrapperClassName}>
        <h1 className={titleClassName}>
          {title}
        </h1>
      </div>

      {rightText ? (
        <button
          onClick={onRightClick}
          className={rightClassName}
        >
          {rightText}
        </button>
      ) : (
        <div className="w-8" />
      )}
    </header>
  );
}