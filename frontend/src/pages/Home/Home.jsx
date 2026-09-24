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

import {
  categories,
  games,
  lotteryCard,
  menus,
  originalCard,
  rankings,
  slotsCard,
  winningData,
} from "../../constants/homeData";

import { getSlider } from "../../services/api/homeServices";
import { useQuery } from "@tanstack/react-query";
import TodaysEarningsChart from "../../components/TodaysEarningsChart";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/common/Footer";

function Home() {
  const navigate = useNavigate();
  const [compactHeader, setCompactHeader] = useState(false);

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

      <div className="my-1 mx-3">
        {isLoading ? (
          <div className="w-full h-[160px] rounded-2xl bg-[#303978] animate-pulse" />
        ) : error ? (
          <div className="w-full h-[160px] rounded-2xl bg-[#303978] flex items-center justify-center text-white">
            Failed to load banners
          </div>
        ) : (
          <ImageSlider images={sliderImages} width={378} height={160} />
        )}
      </div>

      <div className="ml-2">
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

      <section className="w-full bg-[#252d69] px-3 py-2 mt-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-[22px] w-[5px] rounded-full bg-[#5fa9ff]" />

          <h2 className="text-[18px] font-bold  leading-[26px] text-white">
            Winning information
          </h2>
        </div>

        <div className="flex flex-col gap-[8px]">
          {winningData.map((item, index) => (
            <div
              key={index}
              className="flex h-[60px] w-full items-center rounded-[7px] bg-[#303878] px-3"
            >
              {/* Avatar + Name */}
              <div className="flex min-w-0 flex-1 items-center gap-[9px]">
                <img
                  src={item.avatar}
                  alt=""
                  className="h-[45px] w-[45px] shrink-0 rounded-full object-cover"
                />

                <span className="truncate whitespace-nowrap text-[11px] font-bold text-white">
                  {item.name}
                </span>
              </div>

              {/* Winning Image */}
              <div className="h-[45px] w-[65px] shrink-0 overflow-hidden rounded-[11px]">
                <img
                  src={winimage}
                  alt=""
                  className="h-full w-full object-fill"
                />
              </div>

              {/* Amount */}
              <div className="flex w-[144px] shrink-0 flex-col justify-center pl-[11px]">
                <p className="whitespace-nowrap text-[13px] font-bold leading-[16px] text-white">
                  Receive {item.amount}
                </p>

                <p className="mt-[3px] whitespace-nowrap text-[12px] font-medium leading-[20px] text-[#d5d5e8]">
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

        <div className="relative mt-18 w-full">
          <img src={podium} alt="" className="h-auto w-full object-contain" />

          <div className="absolute left-[16%] top-[-24px] flex w-[68px] flex-col items-center">
            <div className="relative h-[60px] w-[60px]">
              <img
                src={avatarBorder}
                alt=""
                className="absolute inset-0 h-full w-full"
              />

              <img
                src={no2crown}
                alt=""
                className="absolute -top-4 left-1/2 h-11 w-11 -translate-x-1/2"
              />

              <img
                src={firstPerson}
                alt=""
                className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full"
              />
            </div>

            <img
              src={no2}
              alt=""
              className="mt-[-2px] h-5 w-16 object-contain"
            />

            <span className="mt-1 whitespace-nowrap text-[11px] font-bold">
              Mem***VZ2
            </span>

            <span className="mt-1 whitespace-nowrap rounded-xl bg-[#b4bbd4] px-3 py-1 text-[10px] font-semibold">
              ₹1,983,079.00
            </span>
          </div>

          <div className="absolute left-1/2 top-[-48px] flex w-[70px] -translate-x-1/2 flex-col items-center">
            <div className="relative h-[60px] w-[60px]">
              <img
                src={avatarBorder}
                alt=""
                className="absolute inset-0 h-full w-full"
              />

              <img
                src={no1crown}
                alt=""
                className="absolute -top-4 left-1/2 h-11 w-11 -translate-x-1/2"
              />

              <img
                src={firstPerson}
                alt=""
                className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full"
              />
            </div>

            <img
              src={no1}
              alt=""
              className="mt-[-2px] h-5 w-17 object-contain"
            />

            <span className="mt-1 whitespace-nowrap text-[12px] font-bold">
              Rit***mar
            </span>

            <span className="mt-1 whitespace-nowrap rounded-xl bg-[#fc9694] px-3 py-1 text-[10px] font-semibold">
              ₹1,983,079.00
            </span>
          </div>

          <div className="absolute right-[16%] top-[-24px] flex w-[68px] flex-col items-center">
            <div className="relative h-[60px] w-[60px]">
              <img
                src={avatarBorder}
                alt=""
                className="absolute inset-0 h-full w-full"
              />

              <img
                src={no3crown}
                alt=""
                className="absolute -top-4 left-1/2 h-11 w-11 -translate-x-1/2"
              />

              <img
                src={firstPerson}
                alt=""
                className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full"
              />
            </div>

            <img
              src={no3}
              alt=""
              className="mt-[-2px] h-5 w-16 object-contain"
            />

            <span className="mt-1 whitespace-nowrap text-[11px] font-bold">
              Mem***Gor
            </span>

            <span className="mt-1 whitespace-nowrap rounded-xl bg-[#f2a87b] px-3 py-1 text-[10px] font-semibold">
              ₹1,983,079.00
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#252d69] px-[10px] py-[1px]">
        <div className="space-y-[11px]">
          {rankings.map(([rank, image, name, earning]) => (
            <div
              key={rank}
              className="flex h-[58px] w-full items-center rounded-[6px] bg-[#303a7c] px-[10px]"
            >
              <div className="w-[30px] shrink-0 text-center text-[16px] font-medium text-[#b1b9dd]">
                {rank}
              </div>

              <div className="ml-[2px] h-[45px] w-[45px] shrink-0 overflow-hidden rounded-full">
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="ml-[6px] min-w-0 flex-1">
                <span className="text-[13px] font-medium text-[#b8bee0]">
                  {name}
                </span>
              </div>

              <div className="flex h-[30px] w-[153px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#21b6f5] to-[#2879ef]">
                <span className="text-[14px] font-bold text-white">
                  {earning}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#252d69] px-[12px] mt-5 pb-30">
  <div className="overflow-hidden rounded-lg bg-[#303a7c] px-[12px]">
    {menus.map((item, index) => (
      <div
        key={item.title}
        onClick={() => {
          if (item.path) {
            navigate(item.path);
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

      <Footer />
    </div>
  );
}

export default Home;
