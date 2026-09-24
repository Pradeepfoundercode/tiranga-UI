import { useQuery } from "@tanstack/react-query";
import { getAccountView } from "../services/api/wingoServices";

export default function useBankAccounts(userId = 1) {
  const query = useQuery({
    queryKey: ["bank-accounts", userId],
    queryFn: () => getAccountView(userId),
    select: (response) => {
      const data = response?.data?.data;
      return Array.isArray(data) ? data : data ? [data] : [];
    },
  });

  return {
    accounts: query.data ?? [],
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}