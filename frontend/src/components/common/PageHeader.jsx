import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PageHeader({
  title,
  rightText,
  rightIcon,
  onBack,
  onRightClick,

  titleClassName = "text-[18px] text-text",
  rightClassName = "text-[12px] text-text",

  className = "bg-background1",

  showBack = true,
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      <header
        className={`fixed left-1/2 top-0 z-[100] flex h-[49px] w-full max-w-[400px] -translate-x-1/2 items-center bg-background1 ${className}`}
      >
        <div className="grid h-full w-full grid-cols-3 items-center px-3">
          <div className="flex items-center justify-start">
            {showBack && (
              <button
                type="button"
                onClick={handleBack}
                className="flex h-8 w-8 shrink-0 items-center justify-center"
              >
                <ChevronLeft
                  className="h-7 w-7 text-white"
                  strokeWidth={2}
                />
              </button>
            )}
          </div>

          <div className="flex min-w-0 items-center justify-center overflow-hidden">
            <h1
              className={`${titleClassName} max-w-full truncate whitespace-nowrap`}
            >
              {title}
            </h1>
          </div>

          <div className="flex min-w-0 items-center justify-end overflow-hidden">
            {(rightText || rightIcon) && (
              <button
                type="button"
                onClick={onRightClick}
                className={`${rightClassName} flex max-w-full shrink-0 items-center justify-end overflow-hidden whitespace-nowrap`}
              >
                {rightIcon || rightText}
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="h-[49px] w-full" />
    </>
  );
}