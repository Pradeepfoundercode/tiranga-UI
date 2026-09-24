import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import WalletCard from "../../components/WalletCard";
import Announcement from "../../components/Announcement";
import GameTabs from "../../components/GameTabs";
import PeriodCard from "../../components/PeriodCard";
import History from "../../components/History";
import Coin from "../../components/Coin";
import WinGo from "../../components/WinGo";
import { tabs } from "../../constants/gameData";
import useWingoTimer from "../../hooks/useWingoTimer";
import useGameHistory from "../../hooks/useGameHistory";

const GAME_IDS = {
  WinGo: 1,
  "WinGo 1": 2,
  "WinGo 3": 3,
  "WinGo 5": 4,
  "WinGo 10": 5,
};

export default function WingoPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState(tabs[0]);
  const [open, setOpen] = useState(false);
  const [selectedNum, setSelectedNum] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedMulti, setSelectedMulti] = useState("X1");
  const [isVoiceOn, setIsVoiceOn] = useState(true);

  const seconds = useWingoTimer(active);
  const gameId = GAME_IDS[active] ?? GAME_IDS.WinGo;
  const { history, nextGameNumber, loading, error } = useGameHistory(gameId, 100, 0);

  const handleCoinClick = (num, colors = [], multi = "X1") => {
    if (seconds <= 5) return;

    setSelectedNum(num);
    setSelectedColors(colors);
    setSelectedMulti(multi);
    setOpen(true);
  };

  const handleColorClick = (color, multi = "X1") => {
    if (seconds <= 5) return;

    const selected = color === "big" || color === "small"
      ? color
      : color.charAt(0).toUpperCase() + color.slice(1);

    setSelectedNum(selected);
    setSelectedColors([color]);
    setSelectedMulti(multi);
    setOpen(true);
  };

  return (
    <>
      <Header isVoiceOn={isVoiceOn} setIsVoiceOn={setIsVoiceOn} />

      <div className="px-4 mt-4.5">
        <WalletCard
          onWithdraw={() => navigate("/withdraw")}
          onDeposit={() => navigate("/deposit")}
        />

        <Announcement onDetail={() => navigate("/notification")} />

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
          className="fixed inset-0 z-50 bg-black/60 flex items-end justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-101.25"
            onClick={(event) => event.stopPropagation()}
          >
            <WinGo
              active={active}
              gameId={gameId}
              gamesNo={nextGameNumber}
              selectedNum={selectedNum}
              selectedColors={selectedColors}
              selectedMulti={selectedMulti}
              setOpen={setOpen}
            />
          </div>
        </div>
      )}
    </>
  );
}