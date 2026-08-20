"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Icon from "./Icon";
import {
  authExpiredEvent,
  clearAccessToken,
  hasValidAccessToken,
} from "../utils/api";
import { clearCurrentUser } from "../utils/current-user";

export function CrmShell({
  activePath,
  children,
  showFab = false,
}: {
  activePath: string;
  children: React.ReactNode;
  showFab?: boolean;
}) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!hasValidAccessToken()) {
      clearAccessToken();
      router.replace("/");
      return;
    }

    const timeoutId = window.setTimeout(() => setAuthChecked(true), 0);

    return () => window.clearTimeout(timeoutId);
  }, [router]);

  useEffect(() => {
    function handleAuthExpired() {
      clearAccessToken();
      clearCurrentUser();
      router.replace("/");
    }

    window.addEventListener(authExpiredEvent, handleAuthExpired);
    return () =>
      window.removeEventListener(authExpiredEvent, handleAuthExpired);
  }, [router]);

  function handleLogout() {
    clearAccessToken();
    clearCurrentUser();
    router.replace("/");
  }

  if (!authChecked) {
    return <div className="min-h-screen bg-[#fbf8ff]" />;
  }

  return (
    <div className="min-h-screen bg-[#fbf8ff] text-slate-900">
      <Sidebar activePath={activePath} onLogout={handleLogout} />
      <Header />
      <main className="min-h-screen min-w-0 pt-16 lg:ml-65">{children}</main>
      {showFab ? (
        <button
          aria-label="Create new item"
          className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#0077b6] text-white shadow-xl shadow-sky-700/30 transition-transform hover:scale-110 hover:bg-[#48cae4] active:scale-95 lg:bottom-6 lg:right-6"
        >
          <Icon
            name="add"
            className="text-2xl transition-transform duration-300"
          />
        </button>
      ) : null}
      <MobileNav activePath={activePath} />
    </div>
  );
}
