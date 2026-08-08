"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MobileNav from "./MobileNav";
import Icon from "./Icon";
import { clearAccessToken } from "../utils/api";

const authStorageKey = "aditya-crm-authenticated";

export function CrmShell({
  activePath,
  children,
  showFab = true,
}: {
  activePath: string;
  children: React.ReactNode;
  showFab?: boolean;
}) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(authStorageKey) !== "true") {
      router.replace("/");
      return;
    }

    const timeoutId = window.setTimeout(() => setAuthChecked(true), 0);

    return () => window.clearTimeout(timeoutId);
  }, [router]);

  function handleLogout() {
    window.localStorage.removeItem(authStorageKey);
    clearAccessToken();
    router.replace("/");
  }

  // if (!authChecked) {
  //   return <div className="min-h-screen bg-[#fbf8ff]" />;
  // }

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
