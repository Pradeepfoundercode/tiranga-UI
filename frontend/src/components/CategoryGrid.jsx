export default function CategoryGrid({
  categories = [],
  onCategoryClick,
}) {
  const topCategories = categories.slice(0, 2);
  const middleCategories = categories.slice(2, 5);
  const bottomCategories = categories.slice(5, 8);

  const renderLargeCard = (item) => (
    <button
      key={item.id}
      type="button"
      onClick={() => onCategoryClick?.(item)}
      className="relative h-full w-full overflow-hidden rounded-xl"
      style={{
        backgroundImage: `url(${item.background})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute left-3 top-4 z-10 h-[60px] w-[65%] object-contain object-left"
      />

      <span className="absolute right-4 top-5 z-20 max-w-[50%] truncate font-serif text-[17px] font-bold leading-none text-white">
        {item.title}
      </span>
    </button>
  );

  const renderSmallCard = (item) => (
    <button
      key={item.id}
      type="button"
      onClick={() => onCategoryClick?.(item)}
      className="relative h-full w-full overflow-hidden rounded-lg"
      style={{
        backgroundImage: `url(${item.background})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute left-2 top-4 z-10 h-[55px] w-[72%] object-contain"
      />

      <span className="absolute right-3 top-5 z-20 max-w-[48%] truncate font-serif text-[14px] font-bold leading-none text-white">
        {item.title}
      </span>
    </button>
  );

  return (
    <div className="px-1.5">
      <div className="grid h-[93px] grid-cols-2 gap-1.5">
        {topCategories.map(renderLargeCard)}
      </div>

      <div className="mt-1 grid h-[100px] grid-cols-3 gap-1.5">
        {middleCategories.map(renderSmallCard)}
      </div>

      <div className="mt-1 grid h-[100px] grid-cols-3 gap-1.5">
        {bottomCategories.map(renderSmallCard)}
      </div>
    </div>
  );
}