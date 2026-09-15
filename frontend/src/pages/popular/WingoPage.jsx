import { useEffect, useState } from "react";
import Header from "../../components/Header";
import WalletCard from "../../components/WalletCard";
import Announcement from "../../components/Announcement";
import GameTabs from "../../components/GameTabs";
import PeriodCard from "../../components/PeriodCard";
import History from "../../components/History";
import Coin from "../../components/Coin.jsx";
import WinGo from "../../components/WinGo.jsx";
import { tabs } from "../../data/gameData.js";
import WithdrawPage from "./WithdrawPage.jsx";
import Deposite from "./Deposite.jsx";

export default function WingoPage() {
  const [active, setActive] = useState(tabs[0]);

  const [open, setOpen] = useState(false);
  const [selectedNum, setSelectedNum] = useState(null);

  const [openWithdraw, setOpenWithdraw] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);

  // One shared timer for complete Wingo page
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          return 59;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCoinClick = (num) => {
    // Coin selection is disabled during last 5 seconds
    if (seconds <= 5) return;

    setSelectedNum(num);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#989ba8]">
      <main className="w-full max-w-[400px] mx-auto min-h-screen bg-[#262b5e] text-white shadow-2xl">

        {openWithdraw ? (
          <WithdrawPage onBack={() => setOpenWithdraw(false)} />
        ) : openDeposit ? (
          <Deposite onBack={() => setOpenDeposit(false)} />
        ) : (
          <>
            <Header />

            <div className="px-4 mt-4.5">

              <WalletCard
                onWithdraw={() => setOpenWithdraw(true)}
                onDeposit={() => setOpenDeposit(true)}
              />

              <Announcement />

              <GameTabs
                active={active}
                setActive={setActive}
              />

            
              <PeriodCard seconds={seconds} />

       
              <Coin
                setOpen={handleCoinClick}
                seconds={seconds}
              />

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
                  <WinGo
                    active={active}
                    selectedNum={selectedNum}
                  />
                </div>
              </div>
            )}

          </>
        )}

      </main>
    </div>
  );
}