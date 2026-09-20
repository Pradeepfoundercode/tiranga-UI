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
import PaymentMethod from "../../components/wihtdraw/PaymentMethod";
import HistoryPage from "../../components/common/HistoryPage";
import nodata from "../../assets/withdraw/902f2b37-6129-405d-9e91-08a31f861d69.png";
import {
  withdrawHistoryTabs,
  depositHistoryTabs,
} from "../../constants/historyData";
import useGameHistory from "../../hooks/useGameHistory";
const GAME_IDS = {
  WinGo: 1,
  "WinGo 1": 2,
  "WinGo 3": 3,
  "WinGo 5": 4,
};
export default function WingoPage() {
  const [active, setActive] = useState(tabs[0]);

  const [open, setOpen] = useState(false);

  const [selectedNum, setSelectedNum] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedMulti, setSelectedMulti] = useState("X1");

  const [openWithdraw, setOpenWithdraw] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openAddUPI, setOpenAddUPI] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [isVoiceOn, setIsVoiceOn] = useState(true);

  const [openWithdrawHistory, setOpenWithdrawHistory] = useState(false);

  const [openDepositHistory, setOpenDepositHistory] = useState(false);

  const seconds = useWingoTimer(active);

  const gameId = GAME_IDS[active] ?? 1;

  const { history, loading, error, refetch } = useGameHistory(gameId, 100, 0);

  const handleCoinClick = (num, colors = [], multi = "X1") => {
    if (seconds <= 5) return;

    setSelectedNum(num);
    setSelectedColors(colors);
    setSelectedMulti(multi);
    setOpen(true);
  };

  const handleColorClick = (color, multi = "X1") => {
    if (seconds <= 5) return;

    setSelectedNum(color.charAt(0).toUpperCase() + color.slice(1));

    setSelectedColors([color]);

    setSelectedMulti(multi);

    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#989ba8">
      <main className="w-full max-w-100 mx-auto min-h-screen bg-theme text-white shadow-2xl">
        {openAddUPI ? (
          <PaymentMethod onBack={() => setOpenAddUPI(false)} />
        ) : openWithdrawHistory ? (
          <HistoryPage
            title="Withdrawal history"
            tabs={withdrawHistoryTabs}
            emptyImage={nodata}
            onBack={() => setOpenWithdrawHistory(false)}
          />
        ) : openDepositHistory ? (
          <HistoryPage
            title="Deposit history"
            tabs={depositHistoryTabs}
            emptyImage={nodata}
            onBack={() => setOpenDepositHistory(false)}
          />
        ) : openWithdraw ? (
          <WithdrawPage
            onBack={() => setOpenWithdraw(false)}
            onAddUPI={() => setOpenAddUPI(true)}
            onHistory={() => setOpenWithdrawHistory(true)}
          />
        ) : openDeposit ? (
          <Deposite
            onBack={() => setOpenDeposit(false)}
            onHistory={() => setOpenDepositHistory(true)}
          />
        ) : openNotification ? (
          <Details onBack={() => setOpenNotification(false)} />
        ) : (
          <>
            <Header
  isVoiceOn={isVoiceOn}
  setIsVoiceOn={setIsVoiceOn}
/>

            <div className="px-4 mt-4.5">
              <WalletCard
                onWithdraw={() => setOpenWithdraw(true)}
                onDeposit={() => setOpenDeposit(true)}
              />

              <Announcement onDetail={() => setOpenNotification(true)} />

              <GameTabs active={active} setActive={setActive} />

              <PeriodCard
                seconds={seconds}
                active={active}
                history={history}
                loading={loading}
              />

             <Coin
  setOpen={handleCoinClick}
  onColorClick={handleColorClick}
  seconds={seconds}
  isVoiceOn={isVoiceOn}
/>

              <History history={history} loading={loading} error={error} />
            </div>

            {open && (
              <div
                className="
                  fixed
                  inset-0
                  z-50
                  bg-black/60
                  flex
                  items-end
                  justify-center
                "
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
                    selectedMulti={selectedMulti}
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
