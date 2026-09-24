import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bets } from "../services/api/wingoServices";

export default function usePlaceBet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ gameId, amount, gamesNo, number, userId }) => {
      const response = await bets(gameId, amount, gamesNo, number, userId);

      if (response?.data?.status !== 200) {
        const error = new Error(response?.data?.message || "Failed to place bet");
        error.response = response;
        throw error;
      }

      return response;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["profile", variables.userId] });
      queryClient.invalidateQueries({ queryKey: ["game-results", variables.gameId] });
    },
  });
}
