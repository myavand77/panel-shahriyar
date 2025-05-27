import { useState } from "react";
import { refreshTokenService } from "@/services";

export function useRefreshTokenMutation() {
  const [loading, setLoading] = useState(false);

  const mutate = async (refreshToken: string) => {
    setLoading(true);
    try {
      return await refreshTokenService(refreshToken);
    } finally {
      setLoading(false);
    }
  };

  return [mutate, { loading }] as const;
}
