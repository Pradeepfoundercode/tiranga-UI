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
        <div className="relative flex h-full w-full items-center justify-between px-3">
          <div className="flex w-10 items-center justify-start z-10">
            {showBack && (
              <button
                type="button"
                onClick={handleBack}
                className="flex h-8 w-8 shrink-0 items-center justify-center cursor-pointer"
              >
                <ChevronLeft
                  className="h-7 w-7 text-white"
                  strokeWidth={2}
                />
              </button>
            )}
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-16 sm:px-20 pointer-events-none">
            <h1
              className={`${titleClassName} text-center font-medium whitespace-nowrap truncate`}
            >
              {title}
            </h1>
          </div>

          <div className="flex min-w-10 max-w-[50%] items-center justify-end z-10">
            {(rightText || rightIcon) && (
              <button
                type="button"
                onClick={onRightClick}
                className={`${rightClassName} flex shrink-0 items-center justify-end whitespace-nowrap cursor-pointer`}
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