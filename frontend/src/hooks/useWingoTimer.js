import { useEffect, useMemo, useState } from "react";
import socket from "../services/socket/socket";

const initialTimer = {
  timerBetTime: 0,
  oneMinTimer: 0,
  threeMinTimer: 0,
  fiveMinTimer: 0,
  tenMinTimer: 0,
};

const timerKeys = {
  WinGo: "timerBetTime",
  "WinGo 1": "oneMinTimer",
  "WinGo 3": "threeMinTimer",
  "WinGo 5": "fiveMinTimer",
};

export default function useWingoTimer(active) {
  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    const handleTimer = (data) => {
      try {
        const newData = typeof data === "string" ? JSON.parse(data) : data;
        setTimer(newData);
      } catch (error) {
        console.error("Invalid Wingo timer socket data", error);
      }
    };

    socket.on("demobdgcasino_wingo", handleTimer);
    return () => socket.off("demobdgcasino_wingo", handleTimer);
  }, []);

  return useMemo(() => Number(timer[timerKeys[active]] || 0), [active, timer]);
}