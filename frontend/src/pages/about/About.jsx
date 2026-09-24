import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/common/PageHeader";
import aboutBg from "../../assets/banner/about.png";
import { aboutmenus } from "../../constants/homeData";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#252d69]">
      <PageHeader
        title="About us"
        onBack={() => navigate(-1)}
        titleClassName="text-[18px] text-white"
        
      />

      <div className="w-full mb-3">
        <img
          src={aboutBg}
          alt="About us"
          className="block w-full object-cover"
        />
      </div>

      <div className="px-5">
        {aboutmenus.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => navigate(item.path)}
            className={`flex h-[73px] w-full items-center ${
              index !== aboutmenus.length - 1
                ? "border-b border-[#353e78]"
                : ""
            }`}
          >
            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[7px] ">
              <img
                src={item.icon}
                alt=""
                className="h-[29px] w-[29px] object-contain"
              />
            </div>

            <span className="ml-[15px] flex-1 text-left text-[15px] text-white">
              {item.title}
            </span>

            <ChevronRight
              size={28}
              strokeWidth={1.8}
              className="shrink-0 text-[#a3a8c8]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default About;