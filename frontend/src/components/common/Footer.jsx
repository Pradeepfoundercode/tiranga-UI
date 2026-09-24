import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import homeIcon from "../../assets/home/footerHome.png";
import activityIcon from "../../assets/home/footerActivity.png";
import promotionIcon from "../../assets/home/footerPromotion.png";
import accountIcon from "../../assets/home/footerAccount.png";
import wheelIcon from "../../assets/home/wheel.png";
import bottomBg from "../../assets/home/footerbg.png";

const footerItems = [
  {
    label: "Home",
    path: "/",
    icon: homeIcon,
  },
  {
    label: "Activity",
    path: "/activity",
    icon: activityIcon,
  },
  {
    label: "Promotion",
    path: "/promotion",
    icon: promotionIcon,
  },
  {
    label: "Account",
    path: "/account",
    icon: accountIcon,
  },
];

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-[400px]">
        <div className="relative h-[73px] w-full">
          <img
            src={bottomBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 grid h-full grid-cols-5 items-end">
            <button
              type="button"
              onClick={() => navigate(footerItems[0].path)}
              className="flex h-full min-w-0 flex-col items-center justify-end pb-[5px]"
            >
              <img
                src={footerItems[0].icon}
                alt=""
                className="h-[30px] w-[30px] object-contain"
              />

              <span
                className={`mt-[2px] text-[14px] ${
                  isActive("/")
                    ? "text-[#4ca2ff]"
                    : "text-[#aeb4c9]"
                }`}
              >
                {footerItems[0].label}
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigate(footerItems[1].path)}
              className="flex h-full min-w-0 flex-col items-center justify-end pb-[5px]"
            >
              <img
                src={footerItems[1].icon}
                alt=""
                className="h-[30px] w-[30px] object-contain"
              />

              <span
                className={`mt-[2px] text-[14px] ${
                  isActive("/activity")
                    ? "text-[#4ca2ff]"
                    : "text-[#aeb4c9]"
                }`}
              >
                {footerItems[1].label}
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/promotion")}
              className="relative flex h-full min-w-0 flex-col items-center"
            >
              <div className="absolute bottom-5 left-1/2 z-20 w-[100px] -translate-x-1/2">
                <img
                  src={wheelIcon}
                  alt=""
                  className="mx-auto h-[80px] w-[80px]"
                />
              </div>

              <div className="absolute left-1/2 top-6.5 z-30 flex h-[27px] w-[78px] -translate-x-1/2 items-center justify-center bg-[#25223d]">
                <span className="whitespace-nowrap text-[14px] font-semibold text-[#39a1ff]">
                  Get ₹500
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => navigate(footerItems[2].path)}
              className="flex h-full min-w-0 flex-col items-center justify-end pb-[5px]"
            >
              <img
                src={footerItems[2].icon}
                alt=""
                className="h-[30px] w-[30px] object-contain"
              />

              <span
                className={`mt-[2px] text-[14px] ${
                  isActive("/promotion")
                    ? "text-[#4ca2ff]"
                    : "text-[#aeb4c9]"
                }`}
              >
                {footerItems[2].label}
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigate(footerItems[3].path)}
              className="flex h-full min-w-0 flex-col items-center justify-end pb-[5px]"
            >
              <img
                src={footerItems[3].icon}
                alt=""
                className="h-[30px] w-[30px] object-contain"
              />

              <span
                className={`mt-[2px] text-[14px] ${
                  isActive("/account")
                    ? "text-[#4ca2ff]"
                    : "text-[#aeb4c9]"
                }`}
              >
                {footerItems[3].label}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;