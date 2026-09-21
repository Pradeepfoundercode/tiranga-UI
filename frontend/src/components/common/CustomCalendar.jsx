import React, { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

const WEEK_DAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

const isSameDate = (date1, date2) => {
  if (!date1 || !date2) return false;

  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const isDateBetween = (date, startDate, endDate) => {
  if (!date || !startDate || !endDate) return false;

  return (
    date.getTime() > startDate.getTime() &&
    date.getTime() < endDate.getTime()
  );
};

const formatDate = (date) => {
  if (!date) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const getMonthDays = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const daysInPreviousMonth = new Date(
    year,
    month,
    0
  ).getDate();

  const days = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    const day = daysInPreviousMonth - i;

    days.push({
      day,
      date: new Date(year, month - 1, day),
      currentMonth: false,
    });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      day,
      date: new Date(year, month, day),
      currentMonth: true,
    });
  }

  let nextDay = 1;

  while (days.length < 42) {
    days.push({
      day: nextDay,
      date: new Date(year, month + 1, nextDay),
      currentMonth: false,
    });

    nextDay++;
  }

  return days;
};

export default function CustomCalendar({
  open = false,
  onClose,
  onConfirm,
  initialStartDate = null,
  initialEndDate = null,
  monthCount = 12,
}) {
  const today = new Date();

  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const [visibleMonth, setVisibleMonth] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const scrollRef = useRef(null);

  const months = useMemo(() => {
    const result = [];

    const firstMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      1
    );

    for (let i = 0; i < monthCount; i++) {
      const date = new Date(
        firstMonth.getFullYear(),
        firstMonth.getMonth() + i,
        1
      );

      result.push({
        year: date.getFullYear(),
        month: date.getMonth(),
      });
    }

    return result;
  }, [monthCount]);

  useEffect(() => {
    if (!open) return;

    setStartDate(initialStartDate || null);
    setEndDate(initialEndDate || null);

    if (months.length > 0) {
      setVisibleMonth(months[0]);
    }

    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    });
  }, [
    open,
    initialStartDate,
    initialEndDate,
    months,
  ]);

  useEffect(() => {
    if (!open || !scrollRef.current) return;

    const container = scrollRef.current;

    const handleScroll = () => {
      const monthSections = container.querySelectorAll(
        "[data-month-section]"
      );

      let currentMonth = months[0];

      monthSections.forEach((section, index) => {
        if (
          section.offsetTop <=
          container.scrollTop + 20
        ) {
          currentMonth = months[index];
        }
      });

      if (currentMonth) {
        setVisibleMonth(currentMonth);
      }
    };

    handleScroll();

    container.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      container.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [open, months]);

  useEffect(() => {
    if (!open) return;

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        oldOverflow;
    };
  }, [open]);

  const handleDateClick = (date) => {
    if (!startDate) {
      setStartDate(date);
      setEndDate(null);
      return;
    }

    if (startDate && !endDate) {
      if (
        date.getTime() <
        startDate.getTime()
      ) {
        setStartDate(date);
        setEndDate(startDate);
      } else {
        setEndDate(date);
      }

      return;
    }

    setStartDate(date);
    setEndDate(null);
  };

  const handleClose = () => {
    setStartDate(initialStartDate || null);
    setEndDate(initialEndDate || null);

    onClose?.();
  };

  const handleConfirm = () => {
    if (!startDate || !endDate) return;

    onConfirm?.({
      startDate,
      endDate,
      startDateFormatted:
        formatDate(startDate),
      endDateFormatted:
        formatDate(endDate),
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-black/70 flex justify-center">
      <div className="relative w-full max-w-100 h-full flex items-end">
        <div className="relative w-full h-145 bg-background rounded-t-[17px] overflow-hidden">

          <div className="absolute top-0 left-0 right-0 h-12 bg-background1 z-50 flex items-center justify-center">
            <h2 className="text-[16px] font-semibold text-white">
              Calendar
            </h2>

            <button
              type="button"
              onClick={handleClose}
              className="absolute right-2.5 top-0.5 w-10 h-10 flex items-center justify-center"
            >
              <X
                size={28}
                strokeWidth={1.8}
                className="text-text"
              />
            </button>
          </div>

          <div className="absolute top-12 left-0 right-0 h-10.75 bg-background1 flex items-center justify-center z-40">
            <span className="text-[16px] font-semibold text-white">
              {visibleMonth.year}/
              {visibleMonth.month + 1}
            </span>
          </div>

          <div className="absolute top-22.75 left-0 right-0 h-10.75 bg-background1 grid grid-cols-7 items-center z-40">
            {WEEK_DAYS.map((day) => (
              <div
                key={day}
                className="text-center text-[13px] text-text"
              >
                {day}
              </div>
            ))}
          </div>

          <div
            ref={scrollRef}
            className="absolute top-33.5 bottom-17.5 left-0 right-0 overflow-y-auto overflow-x-hidden bg-theme [&::-webkit-scrollbar]:w-1.75 [&::-webkit-scrollbar-track]:bg-[#eeeeee] [&::-webkit-scrollbar-thumb]:bg-[#888888] [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {months.map(({ year, month }) => {
              const days = getMonthDays(
                year,
                month
              );

              return (
                <div
                  key={`${year}-${month}`}
                  data-month-section
                  className="w-full"
                >
                  <div className="grid grid-cols-7">
                    {days.map(
                      (item, index) => {
                        const isStart =
                          isSameDate(
                            item.date,
                            startDate
                          );

                        const isEnd =
                          isSameDate(
                            item.date,
                            endDate
                          );

                        const isBetween =
                          isDateBetween(
                            item.date,
                            startDate,
                            endDate
                          );

                        const isSelected =
                          isStart ||
                          isEnd ||
                          isBetween;

                        return (
                          <div
                            key={`${year}-${month}-${index}`}
                            className="relative h-17.5 flex items-center justify-center"
                          >
                            {isSelected && (
                              <div
                                className={`
                                  absolute
                                  left-0
                                  right-0
                                  top-3.25
                                  bottom-3.25
                                  bg-active
                                  ${
                                    isStart &&
                                    !isEnd
                                      ? "rounded-l-sm"
                                      : ""
                                  }
                                  ${
                                    isEnd &&
                                    !isStart
                                      ? "rounded-r-sm"
                                      : ""
                                  }
                                  ${
                                    isStart &&
                                    isEnd
                                      ? `rounded-sm`
                                      : ""
                                  }
                                `}
                              />
                            )}

                            <button
                              type="button"
                              onClick={() =>
                                handleDateClick(
                                  item.date
                                )
                              }
                              className="relative z-10 w-full h-full flex flex-col items-center justify-center outline-none"
                            >
                              <span
                                className={`
                                  absolute
                                  top-4
                                  left-0
                                  right-0
                                  text-center
                                  text-[16px]
                                  leading-none
                                  ${
                                    item.currentMonth
                                      ? "text-text"
                                      : "text-text1"
                                  }
                                `}
                              >
                                {item.day}
                              </span>

                              {isStart && (
                                <span className="absolute bottom-3.75 left-0 right-0 text-center text-[11px] text-white">
                                  Start
                                </span>
                              )}

                              {isEnd && (
                                <span className="absolute bottom-3.75 left-0 right-0 text-center text-[11px] text-white">
                                  End
                                </span>
                              )}
                            </button>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-17.5 bg-background1 z-50 flex items-center px-5.25">
            <button
              type="button"
              disabled={
                !startDate || !endDate
              }
              onClick={handleConfirm}
              className={`
                w-full
              h-11
                rounded-full
                text-[16px]
                font-semibold
                bg-active
              `}
            >
              Confirm
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}