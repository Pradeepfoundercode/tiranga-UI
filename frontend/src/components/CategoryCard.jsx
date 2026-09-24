export default function CategoryCard({
  title,
  image,
  background,
  variant = "small",
  onClick,
}) {
  const isLarge = variant === "large";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative h-full w-full overflow-hidden ${
        isLarge ? "rounded-xl" : "rounded-lg"
      }`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={image}
        alt={title}
        className={`absolute z-10 object-contain ${
          isLarge
            ? "left-5 top-5 h-14 w-[62%]"
            : "left-2 top-5 h-17 w-[72%]"
        }`}
      />

      <span
        className={`absolute z-20 max-w-[55%] truncate font-serif font-bold leading-none text-white ${
          isLarge
            ? "bottom-10 right-4 text-[17px]"
            : "right-4 top-5 text-[13px]"
        }`}
      >
        {title}
      </span>
    </button>
  );
}