import { useCallback, useEffect, useState } from "react";
import { getResults } from "../services/api/wingoServices";

export default function useGameHistory(
  gameId = 1,
  limit = 100,
  offset = 0
) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHistory = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getResults(gameId, limit, offset);

      const data = response?.data?.data ?? [];

      setHistory(data);
    } catch (error) {
      console.error("Failed to fetch game history:", error);
      setError(error);
      setHistory([]);
    } finally {
      setLoading(false);
    }
  }, [gameId, limit, offset]);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const latestGameNumber = history[0]?.games_no ?? null;

  const nextGameNumber = latestGameNumber
    ? String(BigInt(latestGameNumber) + 1n)
    : null;

  return {
    history,
    latestGameNumber,
    nextGameNumber,
    loading,
    error,
    refetch: fetchHistory,
  };
}