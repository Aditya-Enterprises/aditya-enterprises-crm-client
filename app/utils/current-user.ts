import { currentUserStorageKey } from "./api";

export type CurrentUser = {
  id?: string;
  firstName: string;
  lastName: string;
  name: string;
  email?: string;
  role: string;
};

export const defaultUser: CurrentUser = {
  firstName: "User",
  lastName: "",
  name: "User",
  role: "Agent",
};

export function getCurrentUser(): CurrentUser {
  if (typeof window === "undefined") return defaultUser;

  const storedUser = window.localStorage.getItem(currentUserStorageKey);
  if (!storedUser) return defaultUser;

  try {
    const parsedUser = JSON.parse(storedUser) as Partial<CurrentUser>;
    const name = parsedUser.name?.trim() || defaultUser.name;
    const nameParts = name.split(/\s+/);

    return {
      id: parsedUser.id,
      firstName: parsedUser.firstName?.trim() || nameParts[0] || defaultUser.firstName,
      lastName: parsedUser.lastName?.trim() || nameParts.slice(1).join(" "),
      name,
      email: parsedUser.email?.trim(),
      role: parsedUser.role?.trim() || defaultUser.role,
    };
  } catch {
    window.localStorage.removeItem(currentUserStorageKey);
    return defaultUser;
  }
}

export function setCurrentUser(user: CurrentUser) {
  window.localStorage.setItem(currentUserStorageKey, JSON.stringify(user));
  window.dispatchEvent(new Event("aditya-crm-user-changed"));
}

export function clearCurrentUser() {
  window.localStorage.removeItem(currentUserStorageKey);
  window.dispatchEvent(new Event("aditya-crm-user-changed"));
}
