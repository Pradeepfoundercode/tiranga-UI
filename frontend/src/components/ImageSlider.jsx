import React, { useState, useEffect, useRef } from "react";

const ImageSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const formattedImages = images
    .map((item) => (typeof item === "string" ? item : item?.url || item?.image))
    .filter(Boolean);

  const total = formattedImages.length;

  useEffect(() => {
    if (total <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  if (!total) return null;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 40) {
      setCurrentIndex((prev) => (prev + 1) % total);
    } else if (diff < -40) {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl aspect-[372/155] bg-[#303978] shadow-md select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {formattedImages.map((src, idx) => (
          <div key={idx} className="h-full w-full flex-shrink-0">
            <img
              src={src}
              alt={`Banner ${idx + 1}`}
              className="h-full w-full object-cover rounded-2xl pointer-events-none"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Indicator Bullets (Matching reference design) */}
      {total > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {formattedImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? "h-2 w-2 bg-white scale-110 shadow-sm"
                  : "h-2 w-2 bg-black/30 border border-white/80 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;