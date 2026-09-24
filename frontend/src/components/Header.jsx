import { useState } from "react";
import { ChevronLeft } from "lucide-react";

import logo from "../assets/logo/tiranga.png";
import voiceIcon from "../assets/images/voice.png";
import voiceOff from "../assets/images/voice-off.png";
import kefu from "../assets/images/kefu.png";
import downArrow from "../assets/home/downArrow.png";

export default function Header({
  isVoiceOn,
  setIsVoiceOn,
  home = false,
  compact = false,
  categories = [],
  onCategoryClick,
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (item) => {
    setSelectedCategory(item.id);
    onCategoryClick?.(item);
  };

  if (home) {
    return (
      <header
        className={`sticky top-0 z-50 overflow-hidden bg-theme transition-all duration-200 px-2`}
      >
        {compact ? (
          <div className="grid h-15 grid-cols-4 gap-1.5">
            {categories.slice(0, 4).map((item) => {
              const isSelected =
                selectedCategory === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleCategoryClick(item)}
                  className={`flex h-12 my-1 min-w-0 flex-col items-center justify-center rounded-[7px] transition-colors duration-200 ${
                    isSelected
                      ? "bg-[#5968d8]"
                      : "bg-[#303976]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[30px] w-[30px] object-contain"
                  />

                  <span className="truncate text-[14px] font-semibold leading-[17px] text-white">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex h-13 items-center justify-between mx-3">
            <img
              src={logo}
              alt="Tiranga"
              className="h-[60px] w-[150px] object-contain"
            />

            <img
              src={downArrow}
              alt="Menu"
              className="h-auto w-[30px] object-contain"
            />
          </div>
        )}
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 flex h-[49.07px] items-center bg-theme px-3">
      <ChevronLeft className="mr-24 h-full w-7" />

      <img
        src={logo}
        alt="Tiranga"
        className="h-[44.9px] w-[119.47px] object-contain"
      />

      <div className="ml-14 flex gap-2.5">
        <img
          src={kefu}
          alt="Customer service"
          className="w-[25.6px] object-contain"
        />

        <img
          src={isVoiceOn ? voiceIcon : voiceOff}
          alt="Voice"
          className="w-[25.6px] cursor-pointer object-contain"
          onClick={() =>
            setIsVoiceOn?.((prev) => !prev)
          }
        />
      </div>
    </header>
  );
}