import { postService } from "./index";

export async function refreshTokenService(refreshToken: string) {
  const response = await postService(
    `auth/refresh?refresh_token=${encodeURIComponent(refreshToken)}`,
    {}
  );
  return response;
}
