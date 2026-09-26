import walletBg from "../assets/images/walletbg-BHlbEDRE.png";
import wallet from "../assets/images/ChatGPT Image Sep 5, 2026, 11_44_14 AM.png";
import refresh from "../assets/images/refresh.png";
import useProfileBalance from "../hooks/useProfileBalance";

export default function WalletCard({ onWithdraw, onDeposit }) {
  const { balance: walletBalance } = useProfileBalance();

  return (
    <section
      className="relative overflow-hidden rounded-3xl w-full min-h-[142px] mt-4 bg-background"
      style={{
        backgroundImage: `url(${walletBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-between p-4">
        {/* Balance & Refresh */}
        <div className="flex w-full items-center justify-center gap-3">
          <p className="font-bold text-xl text-white">
            ₹{Number(walletBalance).toFixed(2)}
          </p>

          <img
            src={refresh}
            alt="refresh"
            className="h-[18px] w-[18px] cursor-pointer object-contain"
          />
        </div>

        {/* Wallet Balance Label */}
        <div className="flex items-center justify-center gap-1.5 -mt-1">
          <img
            src={wallet}
            alt="wallet"
            className="w-6 h-6 object-contain"
          />

          <p className="text-text text-[13px]">
            Wallet balance
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full justify-center gap-3 px-1">
          <button
            onClick={onWithdraw}
            type="button"
            className="flex-1 max-w-[150px] h-[36px] sm:h-[38px] rounded-full bg-withdraw text-white font-bold text-[14px] flex items-center justify-center transition active:scale-95 shadow-md"
          >
            Withdraw
          </button>

          <button
            onClick={onDeposit}
            type="button"
            className="flex-1 max-w-[150px] h-[36px] sm:h-[38px] rounded-full bg-green text-white font-bold text-[14px] flex items-center justify-center transition active:scale-95 shadow-md"
          >
            Deposit
          </button>
        </div>
      </div>
    </section>
  );
}