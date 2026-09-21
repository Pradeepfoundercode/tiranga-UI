export default function DepositMethodCard({ method, active, onClick, bonusImage }) {
  return (
    <button
      onClick={onClick}
      className={`relative h-23.75 rounded-[5px] flex flex-col items-center justify-center overflow-hidden transition ${
        active ? "bg-active" : "bg-background1"
      }`}
    >
      <div className="flex items-center justify-center">
        <img src={method.icon} alt="" className="h-10 w-10" />
      </div>

      <div className="absolute top-0 right-0 w-9 h-10.5">
        <img src={bonusImage} alt="" className="absolute top-0 right-0 w-full h-full object-fill" />
        <span className="absolute top-5 left-0 w-full text-center text-[10px] font-bold text-white">
          +3%
        </span>
      </div>

      <span className={`text-[13px] mt-0.5 ${active ? "text-white" : "text-text1"}`}>
        {method.label}
      </span>
    </button>
  );
}
