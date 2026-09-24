import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import PageHeader from "./PageHeader";
import CustomCalendar from "./CustomCalendar";

export default function HistoryPage({
  title,
  tabs,
  filterOptions = ["All", "To Be Paid", "Complete", "Failed"],
  emptyImage,
  backPath = "/",
}) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const [selectedFilter, setSelectedFilter] = useState("All");

  const [tempFilter, setTempFilter] = useState("All");

  const [showFilter, setShowFilter] = useState(false);

  const [showCalendar, setShowCalendar] = useState(false);

  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const openFilter = () => {
    setTempFilter(selectedFilter);
    setShowFilter(true);
  };

  const handleFilterCancel = () => {
    setTempFilter(selectedFilter);
    setShowFilter(false);
  };

  const handleFilterConfirm = () => {
    setSelectedFilter(tempFilter);
    setShowFilter(false);
  };

  const formatDate = (date) => {
    if (!date) return "";

    const day = String(date.getDate()).padStart(2, "0");

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const dateText =
    selectedStartDate && selectedEndDate
      ? `${formatDate(selectedStartDate)} - ${formatDate(selectedEndDate)}`
      : "Choose a date";

  const handleCalendarConfirm = ({ startDate, endDate }) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
    setShowCalendar(false);
  };

  return (
    <div className="min-h-screen bg-theme text-white">
      <PageHeader
        title={title}
        onBack={() => navigate(backPath)}
        titleClassName="text-[16px] font-semibold text-text"
        className="relative h-12.25 bg-background1 flex items-center px-3"
        titleWrapperClassName="absolute left-1/2 -translate-x-1/2"
      />

      <div className="px-2.25 pt-2.75 mx-2">
        <div className="flex gap-1.75 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`
                  shrink-0
                  h-10.5
                  rounded-[5px]
                  px-4.75
                  flex
                  items-center
                  justify-center
                  gap-1.25
                  ${
                    active
                      ? "bg-active text-white"
                      : "bg-background1 text-text1"
                  }
                `}
              >
                <img
                  src={tab.icon}
                  alt=""
                  className="w-6.25 h-6.25 object-contain"
                />

                <span className="text-[15px] whitespace-nowrap">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-3.25 flex gap-2.75">
          <button
            type="button"
            onClick={openFilter}
            className="flex-1 h-10.5 rounded-[5px] bg-background1 px-2.75 flex items-center justify-between text-[#c5c9df] min-w-0"
          >
            <span className="text-[14px] truncate">{selectedFilter}</span>

            <ChevronDown size={18} className="shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => setShowCalendar(true)}
            className="flex-1 h-10.5 rounded-[5px] bg-background1 px-2.75 flex items-center justify-between text-[#c5c9df] min-w-0"
          >
            <span className="text-[14px] truncate">{dateText}</span>

            <ChevronDown size={18} className="shrink-0" />
          </button>
        </div>

        <div className="mt-2.5 flex flex-col items-center">
          <img
            src={emptyImage}
            alt=""
            className="w-50 h-50 object-contain"
          />

          <span className="mt-2 text-[14px] text-[#8f97c9]">No data</span>
        </div>
      </div>

      {showFilter && (
        <div className="fixed inset-0 z-1000 flex justify-center bg-black/70">
          <div className="relative w-full max-w-100 h-full flex items-end">
            <div className="w-full h-77.5 bg-background rounded-t-[17px] overflow-hidden">
              <div className="h-10.75 bg-background1 flex items-center justify-between px-3.75">
                <button
                  type="button"
                  onClick={handleFilterCancel}
                  className="text-[14px] font-semibold text-[#929397]"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleFilterConfirm}
                  className="text-[14px] font-semibold text-[#61a8ff]"
                >
                  Confirm
                </button>
              </div>

              <div className="relative h-66.75 overflow-hidden bg-linear-to-b from-[#202342] via-[#282d63] to-[#202342]">
                <div className="absolute left-0 right-0 top-27.25 h-14 bg-background1 z-10" />

                <div className="absolute left-0 right-0 top-0 h-18.75 bg-linear-to-b from-[#202342] via-[#202342]/90 to-transparent z-30" />

                <div className="absolute left-0 right-0 bottom-0 h-18.75 bg-linear-to-t from-[#202342] via-[#202342]/90 to-transparent z-30" />

                <div className="absolute inset-0 z-20">
                  {filterOptions.map((option, index) => {
                    const selectedIndex = filterOptions.indexOf(tempFilter);

                    const position = index - selectedIndex;

                    const active = tempFilter === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setTempFilter(option)}
                        className={`
                            absolute
                            left-0
                            w-full
                            h-13
                            flex
                            items-center
                            justify-center
                            text-[18px]
                            font-semibold
                            transition-all
                            duration-500
                            ease-out
                            ${active ? "text-[#d5d8e5]" : "text-[#737791]"}
                          `}
                        style={{
                          top: `${109 + position * 52}px`,
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CustomCalendar
        open={showCalendar}
        onClose={() => setShowCalendar(false)}
        initialStartDate={selectedStartDate}
        initialEndDate={selectedEndDate}
        onConfirm={handleCalendarConfirm}
      />
    </div>
  );
}