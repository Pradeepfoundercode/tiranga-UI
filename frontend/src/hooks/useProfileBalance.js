import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/api/wingoServices";

export default function useProfileBalance(userId = 1) {
  const query = useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getProfile(userId),
    select: (response) => Number(response?.data?.data?.wallet ?? 0),
  });

  return {
    balance: query.data ?? 0,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
