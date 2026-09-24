import { useQuery } from "@tanstack/react-query";
import { getResults } from "../services/api/wingoServices";

export default function useGameHistory(gameId = 1, limit = 100, offset = 0) {
  const query = useQuery({
    queryKey: ["game-results", gameId, limit, offset],
    queryFn: () => getResults(gameId, limit, offset),
    select: (response) => response?.data?.data ?? [],
    refetchInterval: 15_000,
  });

  const history = query.data ?? [];
  const latestGameNumber = history[0]?.games_no ?? null;
  const nextGameNumber = latestGameNumber
    ? String(BigInt(latestGameNumber) + 1n)
    : null;

  return {
    history,
    latestGameNumber,
    nextGameNumber,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}