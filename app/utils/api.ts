const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://localhost:7136/api/v1";
const accessTokenKey = "aditya-crm-access-token";
export const authExpiredEvent = "aditya-crm-auth-expired";
export const currentUserStorageKey = "aditya-crm-current-user";

export function setAccessToken(token: string) {
  window.localStorage.setItem(accessTokenKey, token);
}

export function getAccessToken() {
  if (typeof window === "undefined") return null;

  return window.localStorage.getItem(accessTokenKey);
}

export function hasValidAccessToken() {
  const token = getAccessToken();
  if (!token) return false;

  const tokenParts = token.split(".");
  const encodedPayload = tokenParts[1];
  if (tokenParts.length !== 3 || !encodedPayload) return false;

  try {
    const base64Payload = encodedPayload.replace(/-/g, "+").replace(/_/g, "/");
    const paddedPayload = base64Payload.padEnd(
      base64Payload.length + ((4 - (base64Payload.length % 4)) % 4),
      "=",
    );
    const payload = JSON.parse(
      window.atob(paddedPayload),
    ) as { exp?: unknown };

    return typeof payload.exp === "number" && payload.exp > Date.now() / 1000;
  } catch {
    return false;
  }
}

export function clearAccessToken() {
  window.localStorage.removeItem(accessTokenKey);
}

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const token = getAccessToken();

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (response.status === 401) {
    if (typeof window !== "undefined") {
      clearAccessToken();
      window.dispatchEvent(new Event(authExpiredEvent));
    }
  }

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json() as Promise<T>;
}
