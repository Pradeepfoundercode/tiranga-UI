import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import downloadBanner from "../../assets/home/banner-DmKeHgAO.png";

export default function DownloadApp() {
  const navigate = useNavigate();

  const handleQuickInstall = () => {
    // Quick installation handler
  };

  const handleCompleteInstall = () => {
    // Complete installation handler
  };

  return (
    <div className="min-h-screen w-full bg-theme text-white pb-10">
      {/* Header */}
      <PageHeader title="Download page" />

      {/* Main Content */}
      <div className="pt-3 px-3.5 flex flex-col items-center">
        {/* Banner */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src={downloadBanner}
            alt="Download popular app games"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Action Buttons */}
        <div className="w-full mt-7 space-y-4">
          {/* Quick Installation */}
          <button
            type="button"
            onClick={handleQuickInstall}
            className="w-full h-[50px] rounded-full bg-[#fca104] hover:bg-[#e69303] transition active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-md shadow-[#fca104]/25 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white shrink-0">
              <path d="M13 2L3 14h7v8l10-12h-7l0-8z" />
            </svg>
            <span className="text-[17px] font-bold text-white tracking-wide">
              Quick installation
            </span>
          </button>

          {/* Complete Installation */}
          <button
            type="button"
            onClick={handleCompleteInstall}
            className="w-full h-[50px] rounded-full bg-[#fa5d5d] hover:bg-[#e24e4e] transition active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-md shadow-[#fa5d5d]/25 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white shrink-0">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            <span className="text-[17px] font-bold text-white tracking-wide">
              Complete Installation
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
