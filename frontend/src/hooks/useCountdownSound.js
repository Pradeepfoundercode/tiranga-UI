import { useEffect, useRef } from "react";
import timerSound from "../assets/music/countdowntwo.mp3";

export default function useCountdownSound(seconds, enabled = true) {
  const audioRef = useRef(null);
  const previousSeconds = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(timerSound);
    audioRef.current.preload = "auto";

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const currentSeconds = Number(seconds);
    const previous = previousSeconds.current;

    if (!enabled) {
      audioRef.current?.pause();
      return;
    }

    if (
      currentSeconds >= 0 &&
      currentSeconds <= 5 &&
      currentSeconds !== previous
    ) {
      const audio = audioRef.current;

      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    }

    previousSeconds.current = currentSeconds;
  }, [seconds, enabled]);
}