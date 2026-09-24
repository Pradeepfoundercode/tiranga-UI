export default function EmptyState({
  image,
  text = "No data",
  imageClassName = "h-32",
  className = "mt-3.5 flex flex-col items-center",
  textClassName = "text-[14px] text-[#8f97c9] font-sans mt-3",
}) {
  return (
    <div className={className}>
      <img src={image} alt="" className={imageClassName} />
      <span className={textClassName}>{text}</span>
    </div>
  );
}
