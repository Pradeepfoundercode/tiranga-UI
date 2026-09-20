import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import PageHeader from "./PageHeader";
import CustomCalendar from "./CustomCalendar";

export default function HistoryPage({
  title,
  tabs,
  filterOptions = [
    "All",
    "To Be Paid",
    "Complete",
    "Failed",
  ],
  emptyImage,
  onBack,
}) {
  const [activeTab, setActiveTab] =
    useState("All");

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [tempFilter, setTempFilter] =
    useState("All");

  const [showFilter, setShowFilter] =
    useState(false);

  const [showCalendar, setShowCalendar] =
    useState(false);

  const [selectedStartDate, setSelectedStartDate] =
    useState(null);

  const [selectedEndDate, setSelectedEndDate] =
    useState(null);

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

    const day = String(
      date.getDate()
    ).padStart(2, "0");

    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");

    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const dateText =
    selectedStartDate &&
    selectedEndDate
      ? `${formatDate(
          selectedStartDate
        )} - ${formatDate(
          selectedEndDate
        )}`
      : "Choose a date";

  const handleCalendarConfirm = ({
    startDate,
    endDate,
  }) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
    setShowCalendar(false);
  };

  return (
    <div className="min-h-screen bg-[#262b5e] text-white">

      <PageHeader
        title={title}
        onBack={onBack}
        titleClassName="text-[16px] font-semibold text-[#f0f1f5]"
        className="relative h-12.25 bg-[#2d3474] flex items-center px-3"
        titleWrapperClassName="absolute left-1/2 -translate-x-1/2"
      />

      <div className="px-[9px] pt-[11px] mx-2">

        <div className="flex gap-[7px] overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const active =
              activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  setActiveTab(tab.id)
                }
                className={`
                  shrink-0
                  h-[42px]
                  rounded-[5px]
                  px-[19px]
                  flex
                  items-center
                  justify-center
                  gap-[5px]
                  ${
                    active
                      ? "bg-gradient-to-r from-[#28a8ef] to-[#287de9] text-white"
                      : "bg-[#303675] text-[#aeb5e2]"
                  }
                `}
              >
                <img
                  src={tab.icon}
                  alt=""
                  className="w-[25px] h-[25px] object-contain"
                />

                <span className="text-[15px] whitespace-nowrap">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-[13px] flex gap-[11px]">

          <button
            type="button"
            onClick={openFilter}
            className="flex-1 h-[42px] rounded-[5px] bg-[#303675] px-[11px] flex items-center justify-between text-[#c5c9df] min-w-0"
          >
            <span className="text-[14px] truncate">
              {selectedFilter}
            </span>

            <ChevronDown
              size={18}
              className="shrink-0"
            />
          </button>

          <button
            type="button"
            onClick={() =>
              setShowCalendar(true)
            }
            className="flex-1 h-[42px] rounded-[5px] bg-[#303675] px-[11px] flex items-center justify-between text-[#c5c9df] min-w-0"
          >
            <span className="text-[14px] truncate">
              {dateText}
            </span>

            <ChevronDown
              size={18}
              className="shrink-0"
            />
          </button>

        </div>

        <div className="mt-[10px] flex flex-col items-center">

          <img
            src={emptyImage}
            alt=""
            className="w-[200px] h-[200px] object-contain"
          />

          <span className="mt-[8px] text-[14px] text-[#8f97c9]">
            No data
          </span>

        </div>
      </div>

      {showFilter && (
        <div className="fixed inset-0 z-[1000] flex justify-center bg-black/70">

          <div className="relative w-full max-w-[400px] h-full flex items-end">

            <div className="w-full h-[310px] bg-[#202342] rounded-t-[17px] overflow-hidden">

              <div className="h-[43px] bg-[#303675] flex items-center justify-between px-[15px]">

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

              <div className="relative h-[267px] overflow-hidden bg-gradient-to-b from-[#202342] via-[#282d63] to-[#202342]">

                <div className="absolute left-0 right-0 top-[109px] h-[56px] bg-[#303675] z-10" />

                <div className="absolute left-0 right-0 top-0 h-[75px] bg-gradient-to-b from-[#202342] via-[#202342]/90 to-transparent z-30" />

                <div className="absolute left-0 right-0 bottom-0 h-[75px] bg-gradient-to-t from-[#202342] via-[#202342]/90 to-transparent z-30" />

                <div className="absolute inset-0 z-20">

                  {filterOptions.map(
                    (option, index) => {

                      const selectedIndex =
                        filterOptions.indexOf(
                          tempFilter
                        );

                      const position =
                        index -
                        selectedIndex;

                      const active =
                        tempFilter === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setTempFilter(
                              option
                            )
                          }
                          className={`
                            absolute
                            left-0
                            w-full
                            h-[52px]
                            flex
                            items-center
                            justify-center
                            text-[18px]
                            font-semibold
                            transition-all
                            duration-500
                            ease-out
                            ${
                              active
                                ? "text-[#d5d8e5]"
                                : "text-[#737791]"
                            }
                          `}
                          style={{
                            top: `${
                              109 +
                              position * 52
                            }px`,
                          }}
                        >
                          {option}
                        </button>
                      );
                    }
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CustomCalendar
        open={showCalendar}
        onClose={() =>
          setShowCalendar(false)
        }
        initialStartDate={
          selectedStartDate
        }
        initialEndDate={
          selectedEndDate
        }
        onConfirm={
          handleCalendarConfirm
        }
      />

    </div>
  );
}