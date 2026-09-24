import React from "react";
import { useNavigate } from "react-router-dom";


import Footer from "../../components/common/Footer";

import giftsImage from "../../assets/activity/gifts.png";
import attendanceImage from "../../assets/activity/attendenceBonus.png";

import { activityCards, activityMenus, promotions } from "../../constants/activityData";
import Header from "../../components/Header";

function Activity() {
  const navigate = useNavigate();

  return (
    <div >
      <div className="mx-auto min-h-screen w-full max-w-[495px] bg-theme pb-[85px]">
       <Header logoOnly />

        <section className="bg-background1 px-13 pb-[11px] pt-4">
          <div className="flex justify-center gap-[65px] text-center">
            <div >
              <p className="text-[13px] leading-[15px] text-white">
                Today's bonus
              </p>

              <p className="text-[17px] font-semibold leading-[18px] text-white mt-2">
                ₹0.00
              </p>
            </div>
<div className="bg-background h-10 w-[1.5px]"></div>

            <div>
              <p className="text-[13px] leading-[15px] text-white">
                Total bonus
              </p>

              <p className="text-[17px] font-semibold leading-[18px] text-white">
                ₹0.00
              </p>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
  <button
    type="button"
    className="h-[40px] w-[135px] rounded-full border border-background bg-theme text-[13px] text-[#75aefc]"
  >
    Bonus details
  </button>
</div>
        </section>

       <section className="px-[13px] pt-[10px]">
  <div className="grid grid-cols-4 gap-x-2 gap-y-7">
    {activityMenus.map((item) => (
      <button
        key={item.title}
        type="button"
        onClick={() => item.path && navigate(item.path)}
        className="flex min-w-0 flex-col items-center justify-start"
      >
        <div className="flex h-[42px] w-[42px] items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="mt-[4px] w-full truncate text-center text-[9px] text-white">
          {item.title}
        </span>
      </button>
    ))}
  </div>
</section>

        <section className="px-[12px] pt-[16px]">
  <div className="grid grid-cols-2 gap-[8px] bg rounded-lg">
    {activityCards.map((item) => (
      <button
        key={item.id}
        type="button"
        onClick={() => item.path && navigate(item.path)}
        className="min-w-0 overflow-hidden text-left bg-background1 rounded-lg"
      >
        <img
          src={item.image}
          alt={item.title}
          className="block h-auto w-full object-cover"
        />

        <div className="px-[8px] pb-[8px] pt-[4px]">
          <h3 className="text-[15px] font-semibold leading-[16px] text-white">
            {item.title}
          </h3>

          <p className="mt-1 text-[12px] leading-[14px] text-[#d0d4e9]">
            {item.description}
          </p>
        </div>
      </button>
    ))}
  </div>
</section>

        <section className="px-[12px] pt-[10px] mb-20">
          <div className="space-y-[9px]">
            {promotions.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => item.path && navigate(item.path)}
                className="block w-full overflow-hidden rounded-[6px] bg-[#303976] text-left"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="block w-full object-cover"
                />

                <div className="flex h-[30px] items-center px-[10px]">
                  <span className="text-[10px] font-medium text-white">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="py-[15px] text-center text-[16px] text-text1">
            No more
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Activity;