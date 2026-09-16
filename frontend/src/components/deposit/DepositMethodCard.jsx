export default function DepositMethodCard({ method, active, onClick, bonusImage }) {
  return (
    <button
      onClick={onClick}
      className={`relative h-[95px] rounded-[5px] flex flex-col items-center justify-center overflow-hidden transition ${
        active ? "bg-[#2998ee]" : "bg-[#303675]"
      }`}
    >
      <div className="flex items-center justify-center">
        <img src={method.icon} alt="" className="h-10 w-10" />
      </div>

      <div className="absolute top-0 right-0 w-[36px] h-[42px]">
        <img src={bonusImage} alt="" className="absolute top-0 right-0 w-full h-full object-fill" />
        <span className="absolute top-[20px] left-0 w-full text-center text-[10px] font-bold text-white">
          +3%
        </span>
      </div>

      <span className={`text-[13px] mt-[2px] ${active ? "text-white" : "text-[#acafc2]"}`}>
        {method.label}
      </span>
    </button>
  );
}
