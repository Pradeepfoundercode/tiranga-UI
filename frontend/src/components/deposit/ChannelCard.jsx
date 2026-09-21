export default function ChannelCard({ channel, active, isUsdt, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-left rounded-[9px] p-3 ${isUsdt
        ? "w-full h-20.75 flex items-center gap-3"
        : "w-full min-h-20"
        } ${active
          ? "bg-active text-white"
          : "bg-background text-[#c2c5d8]"
        }`}
    >
      {isUsdt && (
        <img
          src={channel.icon}
          alt=""
          className="w-10.75 h-10.75 object-contain shrink-0"
        />
      )}

      <div>
        <p className="text-[14px] leading-5">{channel.name}</p>
        <p className="text-[14px] leading-5">Balance: {channel.balance}</p>
        <p className="text-[12px] leading-4.5">Bonus: {channel.bonus}</p>
      </div>
    </button>
  );
}
