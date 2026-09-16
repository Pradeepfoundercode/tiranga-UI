export default function EmptyState({ image, text = "No data", imageClassName = "h-32" }) {
  return (
    <div className="mt-[14px] flex flex-col items-center">
      <img src={image} alt="" className={imageClassName} />
      <span className="text-[14px] text-[#8f97c9] font-sans mt-3">{text}</span>
    </div>
  );
}
