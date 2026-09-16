import { useEffect, useState } from "react";
import { getProfile } from "../services/api/wingoServices";

export default function useProfileBalance(userId = 1) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    let mounted = true;

    const fetchBalance = async () => {
      try {
        const response = await getProfile(userId);
        if (mounted) setBalance(response.data.data.wallet);
      } catch (error) {
        console.error("Failed to fetch wallet balance", error);
      }
    };

    fetchBalance();

    return () => {
      mounted = false;
    };
  }, [userId]);

  return balance;
}
