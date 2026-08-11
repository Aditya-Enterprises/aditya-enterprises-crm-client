const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5082/api/v1";
const accessTokenKey = "aditya-crm-access-token";
export const currentUserStorageKey = "aditya-crm-current-user";

export function setAccessToken(token: string) {
  window.localStorage.setItem(accessTokenKey, token);
}

export function clearAccessToken() {
  window.localStorage.removeItem(accessTokenKey);
}

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = typeof window === "undefined"
    ? null
    : window.localStorage.getItem(accessTokenKey);

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json() as Promise<T>;
}
