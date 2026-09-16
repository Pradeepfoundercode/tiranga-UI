import { useState } from "react";
import Header from "../../components/Header";
import WalletCard from "../../components/WalletCard";
import Announcement from "../../components/Announcement";
import GameTabs from "../../components/GameTabs";
import PeriodCard from "../../components/PeriodCard";
import History from "../../components/History";
import Coin from "../../components/Coin";
import WinGo from "../../components/WinGo";
import WithdrawPage from "./WithdrawPage";
import Deposite from "./Deposite";
import Details from "./Details";
import { tabs } from "../../constants/gameData";
import useWingoTimer from "../../hooks/useWingoTimer";

export default function WingoPage() {
  
  const [active, setActive] = useState(tabs[0]);
  const [open, setOpen] = useState(false);
  const [selectedNum, setSelectedNum] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [openWithdraw, setOpenWithdraw] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const seconds = useWingoTimer(active);

  const handleCoinClick = (num, colors = []) => {
    if (seconds <= 5) return;
    setSelectedNum(num);
    setSelectedColors(colors);
    setOpen(true);
  };

  const handleColorClick = (color) => {
    if (seconds <= 5) return;
    setSelectedNum(color.charAt(0).toUpperCase() + color.slice(1));
    setSelectedColors([color]);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#989ba8]">
      <main className="w-full max-w-100 mx-auto min-h-screen bg-[#262b5e] text-white shadow-2xl">
        {openWithdraw ? (
          <WithdrawPage onBack={() => setOpenWithdraw(false)} />
        ) : openDeposit ? (
          <Deposite onBack={() => setOpenDeposit(false)} />
        ) : openNotification ? (
          <Details onBack={() => setOpenNotification(false)} />
        ) : (
          <>
            <Header />

            <div className="px-4 mt-4.5">
              <WalletCard
                onWithdraw={() => setOpenWithdraw(true)}
                onDeposit={() => setOpenDeposit(true)}
              />

              <Announcement onDetail={() => setOpenNotification(true)} />

              <GameTabs active={active} setActive={setActive} />

              <PeriodCard seconds={seconds} active={active} />

              <Coin
                setOpen={handleCoinClick}
                onColorClick={handleColorClick}
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
                    selectedColors={selectedColors}
                    setOpen={setOpen}
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
