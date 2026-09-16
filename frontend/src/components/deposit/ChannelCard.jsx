export default function ChannelCard({ channel, active, isUsdt, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-left rounded-[9px] p-[12px] ${
        isUsdt
          ? "w-full h-[83px] flex items-center gap-[12px]"
          : "w-full min-h-[80px]"
      } ${
        active
          ? "bg-[#2f8aee] text-white"
          : "bg-[#40549e] text-[#c2c5d8]"
      }`}
    >
      {isUsdt && (
        <img
          src={channel.icon}
          alt=""
          className="w-[43px] h-[43px] object-contain shrink-0"
        />
      )}

      <div>
        <p className="text-[14px] leading-[20px]">{channel.name}</p>
        <p className="text-[14px] leading-[20px]">Balance: {channel.balance}</p>
        <p className="text-[12px] leading-[18px]">Bonus: {channel.bonus}</p>
      </div>
    </button>
  );
}
