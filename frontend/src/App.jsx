import { useState } from "react";
import Header from "./components/Header";
import WalletCard from "./components/WalletCard";
import Announcement from "./components/Announcement";
import GameTabs from "./components/GameTabs";
import PeriodCard from "./components/PeriodCard";
import History from "./components/History";
import Coin from "./components/Coin";
import WinGo from "./components/WinGo";
import { tabs } from "./data/gameData";

export default function App() {
  const [active, setActive] = useState(tabs[0]);

  const [open, setOpen] = useState(false);
  const [selectedNum, setSelectedNum] = useState(null);

  const handleCoinClick = (num) => {
    setSelectedNum(num);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#989ba8]">
      <main className="w-full max-w-[405px] mx-auto min-h-screen bg-[#252d70] text-white shadow-2xl">
        <Header />

        <div className="px-4 pb-8">
          <WalletCard />
          <Announcement />
          <GameTabs active={active} setActive={setActive} />
          <PeriodCard />

          <Coin setOpen={handleCoinClick} />

          <History />
        </div>

       
        {open && (
          <div
            className="fixed inset-0 z-50 bg-black/60 flex items-end justify-center"
            onClick={() => setOpen(false)}
          >
            <div
              className="w-full max-w-[405px]"
              onClick={(e) => e.stopPropagation()}
            >
              <WinGo active={active} selectedNum={selectedNum} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
