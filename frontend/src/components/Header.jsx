import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo/tiranga.png";
import voiceIcon from "../assets/images/voice.png";
import voiceOff from "../assets/images/voice-off.png";
import kefu from "../assets/images/kefu.png";
import downArrow from "../assets/home/downArrow.png";
import { useAuth } from "../context/AuthContext";

export default function Header({
  isVoiceOn,
  setIsVoiceOn,
  home = false,
  compact = false,
  logoOnly = false,
  showRight = true,
  onBack,
  className = "bg-background1",
  categories = [],
  onCategoryClick,
}) {
  const navigate = useNavigate();
  const { isAuthenticated, openLoginModal } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (item) => {
    setSelectedCategory(item.id);
    onCategoryClick?.(item);
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  if (home) {
    return (
      <>
        <header className="fixed left-1/2 top-0 z-[100] w-full max-w-[400px] -translate-x-1/2 overflow-hidden bg-background1 px-2">
          {compact ? (
            <div className="grid h-[60px] w-full grid-cols-4 gap-1.5">
              {categories.slice(0, 4).map((item) => {
                const isSelected = selectedCategory === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleCategoryClick(item)}
                    className={`my-1 flex h-12 min-w-0 flex-col items-center justify-center overflow-hidden rounded-[7px] transition-colors duration-200 ${
                      isSelected ? "bg-[#5968d8]" : "bg-[#303976]"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[30px] w-[30px] shrink-0 object-contain"
                    />

                    <span className="max-w-full truncate px-1 text-[14px] font-semibold leading-[17px] text-white">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mx-3 flex h-[52px] items-center justify-between">
              <img
                src={logo}
                alt="Tiranga"
                className="h-[60px] w-[min(150px,40vw)] shrink-0 object-contain cursor-pointer"
                onClick={() => navigate("/")}
              />

              {isAuthenticated ? (
                <button
                  type="button"
                  onClick={() => navigate("/notification")}
                  className="flex h-8 w-8 shrink-0 items-center justify-center"
                >
                  <img
                    src={downArrow}
                    alt="Menu"
                    className="h-auto w-[27px] object-contain"
                  />
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="flex h-[30px] items-center justify-center rounded-[6px] border border-[#2b9fee] px-3.5 text-[13px] font-medium text-[#2b9fee] transition active:scale-95 hover:bg-[#2b9fee]/10 cursor-pointer"
                  >
                    Log in
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/register")}
                    className="flex h-[30px] items-center justify-center rounded-[6px] bg-[#2b9fee] px-3.5 text-[13px] font-medium text-white shadow-sm transition active:scale-95 hover:bg-[#258de0]"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          )}
        </header>

        <div className={compact ? "h-[60px]" : "h-[52px]"} />
      </>
    );
  }

  if (logoOnly) {
    return (
      <>
        <header className="fixed left-1/2 top-0 z-[100] flex h-[49px] w-full max-w-[400px] -translate-x-1/2 items-center justify-center bg-background1">
          <img
            src={logo}
            alt="Tiranga"
            className="h-[45px] w-[119px] object-contain"
          />
        </header>

        <div className="h-[49px]" />
      </>
    );
  }

  return (
    <>
      <header className={`fixed left-1/2 top-0 z-[100] h-[49px] w-full max-w-[400px] -translate-x-1/2 ${className}`}>
        <div className="grid h-full w-full grid-cols-3 items-center px-2">
          <div className="flex items-center justify-start">
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
          </div>

          <div className="flex min-w-0 items-center justify-center">
            <img
              src={logo}
              alt="Tiranga"
              className="h-[45px] w-[119px] shrink-0 object-contain"
            />
          </div>

          <div className="flex items-center justify-end gap-2.5">
            {showRight && (
              <>
                <button
                  type="button"
                  onClick={() => navigate("/customer-service")}
                  className="flex h-8 w-8 shrink-0 items-center justify-center"
                >
                  <img
                    src={kefu}
                    alt="Customer service"
                    className="h-[26px] w-[26px] object-contain"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => setIsVoiceOn?.((prev) => !prev)}
                  className="flex h-8 w-8 shrink-0 items-center justify-center"
                >
                  <img
                    src={isVoiceOn ? voiceIcon : voiceOff}
                    alt="Voice"
                    className="h-[26px] w-[26px] object-contain"
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="h-[49px]" />
    </>
  );
}