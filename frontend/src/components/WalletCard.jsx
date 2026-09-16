import walletBg from "../assets/images/walletbg-BHlbEDRE.png";
import wallet from "../assets/images/ChatGPT Image Sep 5, 2026, 11_44_14 AM.png";
import refresh from "../assets/images/refresh.png";
import useProfileBalance from "../hooks/useProfileBalance";

export default function WalletCard({ onWithdraw, onDeposit }) {
  const walletBalance = useProfileBalance();

  return (
    <section
      className="relative overflow-hidden rounded-3xl w-[372.28px] h-[142.97px] mt-4 bg-[#374992]"
      style={{
        backgroundImage: `url(${walletBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center pt-[18.6668px] pr-[21.8668px] pb-4">

        <div className="flex w-[328.55px] h-[23.47px] justify-center">
          <p className="font-bold text-xl ml-14">
            ₹{Number(walletBalance).toFixed(2)}
          </p>

          <img
            src={refresh}
            alt="refresh"
            className="h-[19.2px] ml-10"
          />
        </div>

        <div className="flex w-[328.55px] h-[21.33px] justify-center items-center mt-[7.4668px]">
          <img
            src={wallet}
            alt="wallet"
            className="w-8 h-8 mr-[1.3332px] mt-0.5"
          />

          <p className="text-[#F0F1F5] text-[13.8668px]">
            Wallet balance
          </p>
        </div>

        <div className="flex w-[328.55px] h-[37.33px] mt-[18.6668px] justify-between">

          <button
            onClick={onWithdraw}
            className="w-[138.66px] h-[37.33px] rounded-full bg-[#d23838]"
          >
            <span className="font-bold">
              Withdraw
            </span>
          </button>

          <button
            onClick={onDeposit}
            className="w-[138.66px] h-[37.33px] rounded-full bg-[#17b153]"
          >
            <span className="font-bold">
              Deposit
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}