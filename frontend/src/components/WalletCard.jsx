import { RefreshCw } from "lucide-react";
import walletBg from "../assets/walletbg-BHlbEDRE.png";
import wallet from "../assets/wallets.png";
import refresh from "../assets/refresh.png";
export default function WalletCard() {
  return (
    <section
      className="relative overflow-hidden rounded-[25px] h-[168px] mt-4 bg-[#374992]"
      style={{
        backgroundImage: `url(${walletBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center pt-6">
        <div className="flex items-center gap-3">
          <span className="text-[20px] font-bold">₹0.00</span>
          <img src={refresh} alt="refresh" className="h-6"/>
        </div>
        <div className="flex items-center gap-2 mt-2 text-[16px]">
          <img src={wallet} className="w-6 h-6" />
          Wallet balance
        </div>
        <div className="flex gap-8 mt-5">
          <button className="w-[140px] h-10 rounded-full bg-[#df3735] font-bold text-[19px]">
            Withdraw
          </button>
          <button className="w-[140px] h-10 rounded-full bg-[#0db65e] font-bold text-[19px]">
            Deposit
          </button>
        </div>
      </div>
    </section>
  );
}
