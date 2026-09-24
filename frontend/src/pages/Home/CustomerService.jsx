import React from "react";
import { House, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../components/common/PageHeader";
import customerService from "../../assets/customerService/customerBg-CfgWBx8.png";
import callIcon from "../../assets/customerService/CStype3-B4cc0WOQ.png";

function CustomerService() {
  const navigate = useNavigate();

  return (
    <div >
      <PageHeader
        title="Customer Service"
        rightIcon={<House size={25} strokeWidth={2} />}
        onBack={() => navigate(-1)}
        onRightClick={() => navigate("/")}
        titleClassName="text-[18px] text-white"
        rightClassName="text-white"
       
      />

      <div className="w-full">
        <img
          src={customerService}
          alt="Customer Service"
          className="block h-auto w-full object-cover"
        />
      </div>

      <div className="px-3 pt-[18px]">
        <button
          type="button"
          className="flex h-[58px] w-full items-center rounded-sm bg-[#303976] px-4"
        >
          <img
            src={callIcon}
            alt="Live Chat"
            className="h-[38px] w-[38px] shrink-0 object-contain"
          />

          <span className="ml-[12px] flex-1 text-left text-[14px] text-white">
            LiveChat
          </span>

          <ChevronRight
            size={30}
            strokeWidth={1.8}
            className="text-[#9da3c9]"
          />
        </button>
      </div>
    </div>
  );
}

export default CustomerService;