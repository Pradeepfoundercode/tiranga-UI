import { useEffect, useRef, useState } from "react";

import Header from "../../components/Header";
import ImageSlider from "../../components/ImageSlider";
import Announcement from "../../components/Announcement";
import CategoryGrid from "../../components/CategoryGrid";
import GameSection from "../../components/GameSection";

import lotterybg from "../../assets/home/lotterybg.png";
import winimage from "../../assets/person/42.png";

import no1crown from "../../assets/person/no1.png";
import no2crown from "../../assets/person/no2.png";
import no3crown from "../../assets/person/no3.png";
import avatarBorder from "../../assets/person/border3-Dc5eCVuH.png";
import podium from "../../assets/person/DailyProfitRankStage-Dj5L7gPp.png";

import no1 from "../../assets/person/no1badge.png";
import no2 from "../../assets/person/no2badge.png";
import no3 from "../../assets/person/no3badge.png";

import firstPerson from "../../assets/person/5.png";

import homeIcon from "../../assets/home/footerHome.png";
import activityIcon from "../../assets/home/footerActivity.png";
import promotionIcon from "../../assets/home/footerPromotion.png";
import accountIcon from "../../assets/home/footerAccount.png";
import wheelIcon from "../../assets/home/wheel.png";
import bottomBg from "../../assets/home/footerbg.png";
import tIcon from "../../assets/home/h5setting_20231017190406lyb3.ico";

import {
  categories,
  games,
  lotteryCard,
  menus,
  originalCard,
  rankings,
  slotsCard,
  winningData,
  extraDepositBonusTiers,
} from "../../constants/homeData";

import { getSlider } from "../../services/api/homeServices";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight, X, Check } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../components/common/Footer";
import { useAuth } from "../../context/AuthContext";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const { requireAuth } = useAuth();
  const [compactHeader, setCompactHeader] = useState(false);

  // Popup shown every time home page renders/refreshes
  const [showBonusPopup, setShowBonusPopup] = useState(true);
  const [noMoreToday, setNoMoreToday] = useState(false);

  useEffect(() => {
    if (location.state?.showPopup) {
      setShowOfferPopup(true);
    }
  }, [location.state]);

  const handleClosePopup = () => {
    setShowBonusPopup(false);
  };

  const categoryRef = useRef(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!categoryRef.current) return;
      if (tickingRef.current) return;

      tickingRef.current = true;

      requestAnimationFrame(() => {
        const categoryTop = categoryRef.current.getBoundingClientRect().top;

        const shouldCompact = categoryTop <= 69;

        setCompactHeader((previous) => {
          if (previous === shouldCompact) {
            return previous;
          }

          return shouldCompact;
        });

        tickingRef.current = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCategoryClick = (category) => {
    const target = document.getElementById(category.id);

    if (!target) return;

    const headerOffset = 90;

    const position =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const {
    data: sliderResponse,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["slider"],
    queryFn: getSlider,
  });

  const sliderImages =
    sliderResponse?.data?.data?.map((item) => item.image) || [];

  return (
    <div className="min-h-screen w-full bg-theme">
      <Header
        home
        compact={compactHeader}
        categories={categories}
        onCategoryClick={handleCategoryClick}
      />

      <div className="mt-3.5 mb-2 mx-3">
        {isLoading ? (
          <div className="w-full aspect-[372/155] rounded-2xl bg-[#303978] animate-pulse" />
        ) : error ? (
          <div className="w-full aspect-[372/155] rounded-2xl bg-[#303978] flex items-center justify-center text-white">
            Failed to load banners
          </div>
        ) : (
          <ImageSlider images={sliderImages} />
        )}
      </div>

      <div className="w-full">
        <Announcement />
      </div>

      <main ref={categoryRef}>
        <CategoryGrid
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
      </main>

      <section id="popular" className="scroll-mt-[90px]">
        <GameSection
          title="Platform recommendation"
          items={games}
          type="platform"
        />
      </section>

      <section id="lottery" className="scroll-mt-[90px]">
        <GameSection
          title="Lottery"
          items={lotteryCard}
          type="category"
          background={lotterybg}
          showRtp={false}
        />
      </section>

      <section id="original" className="scroll-mt-[90px]">
        <GameSection
          title="Original"
          items={originalCard}
          type="platform"
          showRtp={false}
          totalCount={137}
        />
      </section>

      <section id="slots" className="scroll-mt-[90px]">
        <GameSection
          title="Slots"
          items={slotsCard}
          type="platform"
          showRtp={false}
          totalCount={137}
          cardBackground="#2a9df3"
        />
      </section>

      <section className="w-full px-3 py-2 mt-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-[22px] w-[5px] rounded-full bg-[#5fa9ff]" />

          <h2 className="text-[18px] font-bold  leading-[26px] text-white">
            Winning information
          </h2>
        </div>

        <div className="flex flex-col gap-[7px]">
          {winningData.map((item, index) => (
            <div
              key={index}
              className="flex h-[52px] sm:h-[56px] w-full items-center justify-between rounded-[8px] bg-[#303878] px-2.5 sm:px-3"
            >
              {/* Avatar + Name */}
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-[36px] w-[36px] sm:h-[40px] sm:w-[40px] shrink-0 rounded-full object-cover"
                />

                <span className="truncate whitespace-nowrap text-[11.5px] sm:text-[12px] font-semibold text-white">
                  {item.name}
                </span>
              </div>

              {/* Winning Image Badge */}
              <div className="h-[36px] w-[54px] sm:w-[60px] shrink-0 overflow-hidden rounded-[8px] mx-1.5 sm:mx-2.5">
                <img
                  src={item.gameImage || winimage}
                  alt=""
                  className="h-full w-full object-cover rounded-[8px]"
                />
              </div>

              {/* Amount Details */}
              <div className="flex shrink-0 flex-col justify-center text-left">
                <p className="whitespace-nowrap text-[12px] sm:text-[13px] font-bold leading-tight text-white">
                  Receive {item.amount}
                </p>

                <p className="mt-0.5 whitespace-nowrap text-[10px] sm:text-[11px] font-medium leading-tight text-[#8e9bc5]">
                  Winning amount
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 mx-4">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-[22px] w-[5px] rounded-full bg-[#5fa9ff]" />

          <h2 className="text-[18px] font-bold  leading-[26px] text-white">
            Today Earning Chart
          </h2>
        </div>

        <div className="relative mt-16 sm:mt-18 w-full select-none">
          <img src={podium} alt="" className="h-auto w-full object-contain" />

          {/* NO2 - Left (Silver) */}
          <div className="absolute left-[16%] top-[-20px] sm:top-[-24px] flex w-[110px] sm:w-[125px] -translate-x-1/2 flex-col items-center">
            <div className="relative h-[58px] w-[58px] sm:h-[66px] sm:w-[66px]">
              <img
                src={avatarBorder}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-contain"
              />

              <img
                src={firstPerson}
                alt=""
                className="absolute left-1/2 top-1/2 z-10 h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
              />

              <img
                src={no2crown}
                alt=""
                className="absolute -top-3.5 -left-2.5 sm:-top-4 sm:-left-3 z-20 h-10 w-10 sm:h-11 sm:w-11 object-contain drop-shadow"
              />
            </div>

            <img
              src={no2}
              alt=""
              className="relative z-20 -mt-3 h-[20px] sm:h-[23px] w-[66px] sm:w-[76px] object-contain"
            />

            <span className="mt-1 sm:mt-1.5 whitespace-nowrap text-center text-[12px] sm:text-[13px] font-bold text-white tracking-wide">
              Mem***K3E
            </span>

            <div className="mt-1 sm:mt-1.5 flex items-center justify-center rounded-full bg-[#8fa0c7]/40 px-2.5 sm:px-3.5 py-0.5 sm:py-1 shadow-sm">
              <span className="whitespace-nowrap text-[10px] sm:text-[11px] font-bold text-white">
                ₹1,719,524.50
              </span>
            </div>
          </div>

          {/* NO1 - Center (Gold/Red) */}
          <div className="absolute left-1/2 top-[-44px] sm:top-[-50px] z-10 flex w-[120px] sm:w-[136px] -translate-x-1/2 flex-col items-center">
            <div className="relative h-[66px] w-[66px] sm:h-[74px] sm:w-[74px]">
              <img
                src={avatarBorder}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-contain"
              />

              <img
                src={firstPerson}
                alt=""
                className="absolute left-1/2 top-1/2 z-10 h-[60px] w-[60px] sm:h-[68px] sm:w-[68px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
              />

              <img
                src={no1crown}
                alt=""
                className="absolute -top-4 -left-2.5 sm:-top-5 sm:-left-3 z-20 h-11 w-11 sm:h-12 sm:w-12 object-contain drop-shadow"
              />
            </div>

            <img
              src={no1}
              alt=""
              className="relative z-20 -mt-3.5 h-[22px] sm:h-[25px] w-[74px] sm:w-[84px] object-contain"
            />

            <span className="mt-1 sm:mt-1.5 whitespace-nowrap text-center text-[13px] sm:text-[14px] font-bold text-white tracking-wide">
              Mem***ITW
            </span>

            <div className="mt-1 sm:mt-1.5 flex items-center justify-center rounded-full bg-[#ff7b7b]/50 px-3 sm:px-4 py-0.5 sm:py-1 shadow-sm">
              <span className="whitespace-nowrap text-[10.5px] sm:text-[11.5px] font-bold text-white">
                ₹2,128,014.08
              </span>
            </div>
          </div>

          {/* NO3 - Right (Bronze) */}
          <div className="absolute left-[84%] top-[-20px] sm:top-[-24px] flex w-[110px] sm:w-[125px] -translate-x-1/2 flex-col items-center">
            <div className="relative h-[58px] w-[58px] sm:h-[66px] sm:w-[66px]">
              <img
                src={avatarBorder}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-contain"
              />

              <img
                src={firstPerson}
                alt=""
                className="absolute left-1/2 top-1/2 z-10 h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
              />

              <img
                src={no3crown}
                alt=""
                className="absolute -top-3.5 -left-2.5 sm:-top-4 sm:-left-3 z-20 h-10 w-10 sm:h-11 sm:w-11 object-contain drop-shadow"
              />
            </div>

            <img
              src={no3}
              alt=""
              className="relative z-20 -mt-3 h-[20px] sm:h-[23px] w-[66px] sm:w-[76px] object-contain"
            />

            <span className="mt-1 sm:mt-1.5 whitespace-nowrap text-center text-[12px] sm:text-[13px] font-bold text-white tracking-wide">
              Mem***9P9
            </span>

            <div className="mt-1 sm:mt-1.5 flex items-center justify-center rounded-full bg-[#f4a065]/50 px-2.5 sm:px-3.5 py-0.5 sm:py-1 shadow-sm">
              <span className="whitespace-nowrap text-[10px] sm:text-[11px] font-bold text-white">
                ₹1,542,953.67
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-2.5 sm:px-3 py-1">
        <div className="space-y-2">
          {rankings.map(([rank, image, name, earning]) => (
            <div
              key={rank}
              className="flex h-[54px] sm:h-[58px] w-full items-center rounded-[10px] bg-[#303a7c] px-2.5 sm:px-3 shadow-sm"
            >
              <div className="w-[24px] shrink-0 text-center text-[15px] sm:text-[16px] font-bold text-[#8390c2]">
                {rank}
              </div>

              <div className="ml-1 sm:ml-2 h-[38px] w-[38px] sm:h-[42px] sm:w-[42px] shrink-0 overflow-hidden rounded-full border border-white/10">
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="ml-2.5 sm:ml-3 min-w-0 flex-1">
                <span className="block truncate text-[13px] sm:text-[14px] font-medium text-[#c5cef0]">
                  {name}
                </span>
              </div>

              <div className="flex h-[32px] shrink-0 items-center justify-center rounded-full bg-[#1e88e5] px-3 sm:px-4 shadow-sm">
                <span className="whitespace-nowrap text-[12px] sm:text-[13px] font-bold text-white">
                  {earning}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-[12px] mt-5 pb-50">
  <div className="overflow-hidden rounded-lg bg-[#303a7c] px-[12px]">
    {menus.map((item, index) => (
      <div
        key={item.title}
        onClick={() => {
          if (item.path) {
            if (item.path === "/about") {
              requireAuth(() => navigate(item.path));
            } else {
              navigate(item.path);
            }
          }
        }}
        className={`flex h-[57px] items-center ${
          index !== menus.length - 1
            ? "border-b border-[#414a87]"
            : ""
        } ${item.path ? "cursor-pointer" : ""}`}
      >
        <img
          src={item.icon}
          alt=""
          className="h-[30px] w-[30px] shrink-0 object-contain"
        />

        <span className="ml-[14px] flex-1 text-[15px] font-semibold text-white">
          {item.title}
        </span>

        <ChevronRight
          size={21}
          strokeWidth={1.8}
          className="text-[#777b91]"
        />
      </div>
    ))}
  </div>
</section>

      {/* Fixed "Add to Desktop" Button */}
      <div className="fixed bottom-[130px] left-0 right-0 z-40 pointer-events-none">
        <div className="mx-auto flex w-full max-w-[400px] justify-center px-4">
          <button
            type="button"
            onClick={() => navigate("/download-app")}
            className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#21b6f5] to-[#2879ef] px-6 py-2.5 shadow-lg shadow-[#2879ef]/35 transition active:scale-95 hover:brightness-110 cursor-pointer"
          >
            <img
              src={tIcon}
              alt="Tiranga"
              className="h-[28px] w-[28px] rounded-[7px] object-contain shrink-0 shadow-sm"
            />
            <span className="text-[15px] font-bold text-white tracking-wide">
              Add to Desktop
            </span>
          </button>
        </div>
      </div>

      <Footer />

      {/* Extra First Deposit Bonus Popup Modal */}
      {showBonusPopup && (
        <div
          onClick={handleClosePopup}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/60 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex h-[530px] max-h-[85vh] w-full max-w-[340px] flex-col overflow-hidden rounded-2xl bg-[#202b61] shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="bg-[#32448b] px-4 pt-4 pb-3 text-center">
              <h3 className="text-[17px] font-bold text-text tracking-normal">
                Extra first deposit bonus
              </h3>
              <p className="mt-1 text-[12px] text-text1">
                Each account can only receive rewards once
              </p>
            </div>

            {/* Scrollable Bonus Tiers List */}
            <div className="flex-1 overflow-y-auto bg-[#202b61] px-3 py-2.5 space-y-2 scrollbar-thin scrollbar-thumb-white/80 scrollbar-track-white/10">
              {extraDepositBonusTiers.map((tier) => (
                <div
                  key={tier.deposit}
                  className="rounded-[10px] bg-[#364b97] px-3 py-2 shadow-sm"
                >
                  {/* Top Row: Deposit Target & Bonus */}
                  <div className="flex items-center justify-between text-[12.5px]">
                    <span className="font-medium text-text">
                      First deposit{" "}
                      <span className="font-semibold text-[#ffa128]">
                        {tier.deposit}
                      </span>
                    </span>
                    <span className="font-semibold text-[#ffa128]">
                      + ₹{tier.bonus.toFixed(2)}
                    </span>
                  </div>

                  {/* Subtitle description */}
                  <p className="mt-0.5 text-[11px] leading-tight text-text1">
                    {tier.description}
                  </p>

                  {/* Bottom Row: Progress & Golden Deposit Button */}
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <div className="flex h-[25px] w-[56%] items-center justify-center rounded-full bg-[#18214d] text-[11.5px] font-medium text-text">
                      0/{tier.deposit}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setShowBonusPopup(false);
                        requireAuth(() => navigate("/deposit"));
                      }}
                      className="flex h-[25px] items-center justify-center rounded-[6px] border border-[#ffa128] px-4 text-[12px] font-semibold text-[#ffa128] transition active:scale-95 hover:bg-[#ffa128]/10"
                    >
                      Deposit
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Bottom Footer */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#32448b]">
              <label
                onClick={() => setNoMoreToday((prev) => !prev)}
                className="flex cursor-pointer select-none items-center gap-2 text-[13px] text-text1"
              >
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border transition ${
                    noMoreToday
                      ? "border-[#208cf0] bg-[#208cf0]"
                      : "border-[#7182b8] bg-transparent"
                  }`}
                >
                  {noMoreToday && (
                    <Check className="h-3 w-3 stroke-[3] text-white" />
                  )}
                </div>
                <span>No more reminders today</span>
              </label>

              <button
                type="button"
                onClick={() => {
                  setShowBonusPopup(false);
                  requireAuth(() => navigate("/activity/FirstRecharge"));
                }}
                className="flex h-[34px] items-center justify-center rounded-full bg-[#208cf0] px-7 text-[14px] font-bold text-white shadow-md shadow-[#208cf0]/30 transition active:scale-95 hover:bg-[#1a7cd9]"
              >
                Activity
              </button>
            </div>
          </div>

          {/* Close Button below modal */}
          <button
            type="button"
            onClick={handleClosePopup}
            className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-transparent text-white/90 transition active:scale-90 hover:border-white hover:text-white"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
