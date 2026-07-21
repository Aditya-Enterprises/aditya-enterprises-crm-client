"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../assets/Logo.png";

const authStorageKey = "aditya-crm-authenticated";

export const navigationItems = [
  { label: "Dashboard", icon: "dashboard", href: "/dashboard" },
  { label: "Leads", icon: "person_search", href: "/leads" },
  { label: "Properties", icon: "domain", href: "/properties" },
  { label: "Deals", icon: "view_kanban", href: "/deals" },
  { label: "Tasks", icon: "assignment", href: "/tasks" },
];

const iconPaths: Record<string, string[]> = {
  add: ["M12 5v14", "M5 12h14"],
  add_home: [
    "M3 21h18",
    "M5 21V9l7-6 7 6v12",
    "M9 21v-7h6v7",
    "M18 3v6",
    "M15 6h6",
  ],
  analytics: ["M3 3v18h18", "M7 16v-4", "M12 16V8", "M17 16v-6"],
  assignment: ["M9 5h6", "M9 12h6", "M9 17h4", "M7 3h10v3H7z", "M5 5h14v16H5z"],
  assignment_late: ["M7 3h10v3H7z", "M5 5h14v16H5z", "M12 9v4", "M12 17h.01"],
  bolt: ["M13 2L3 14h8l-1 8 10-12h-8z"],
  bathtub: [
    "M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z",
    "M6 12V6a3 3 0 0 1 6 0",
    "M4 20l-1 2",
    "M20 20l1 2",
  ],
  bed: [
    "M3 11V5",
    "M21 13v8",
    "M3 21v-8h18",
    "M7 11h14",
    "M7 11V8a2 2 0 0 0-2-2H3",
  ],
  calendar_month: [
    "M8 2v4",
    "M16 2v4",
    "M3 10h18",
    "M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  ],
  call: [
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2z",
  ],
  chevron_left: ["M15 18l-6-6 6-6"],
  chevron_right: ["M9 18l6-6-6-6"],
  contract_edit: [
    "M6 3h9l3 3v6",
    "M6 3v18h7",
    "M14 3v4h4",
    "M8 10h6",
    "M8 14h4",
    "M15 19l4-4 2 2-4 4h-2z",
  ],
  dashboard: [
    "M3 13h8V3H3z",
    "M13 21h8V11h-8z",
    "M13 3v6h8V3z",
    "M3 21h8v-6H3z",
  ],
  domain: [
    "M3 21h18",
    "M5 21V5a2 2 0 0 1 2-2h7v18",
    "M14 8h3a2 2 0 0 1 2 2v11",
    "M8 7h2",
    "M8 11h2",
    "M8 15h2",
  ],
  download: ["M12 3v12", "M7 10l5 5 5-5", "M5 21h14"],
  filter_alt: ["M3 5h18", "M6 12h12", "M10 19h4"],
  filter_list: ["M4 6h16", "M7 12h10", "M10 18h4"],
  fitness_center: ["M6 6v12", "M18 6v12", "M2 9v6", "M22 9v6", "M6 12h12"],
  garage: ["M3 21V9l9-6 9 6v12", "M7 21v-7h10v7", "M9 17h6"],
  group: [
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    "M22 21v-2a4 4 0 0 0-3-3.9",
    "M16 3.1a4 4 0 0 1 0 7.8",
  ],
  groups: [
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    "M22 21v-2a4 4 0 0 0-3-3.9",
    "M16 3.1a4 4 0 0 1 0 7.8",
  ],
  handshake: [
    "M11 17l-2 2a3 3 0 0 1-4.2 0L2 16.2",
    "M22 16.2L19.2 19a3 3 0 0 1-4.2 0l-5-5",
    "M8 13l3-3 3 3 2-2-4-4H9l-4 4",
    "M2 9l5-5",
    "M22 9l-5-5",
  ],
  help: [
    "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
    "M9.1 9a3 3 0 1 1 5.7 1.4c-.8 1.2-2.1 1.6-2.6 2.6",
    "M12 17h.01",
  ],
  check_circle: ["M22 11.1V12a10 10 0 1 1-5.9-9.1", "M22 4L12 14.01l-3-3"],
  list: [
    "M8 6h13",
    "M8 12h13",
    "M8 18h13",
    "M3 6h.01",
    "M3 12h.01",
    "M3 18h.01",
  ],
  location_on: [
    "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z",
    "M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  ],
  lock: ["M6 10V8a6 6 0 0 1 12 0v2", "M5 10h14v11H5z", "M12 15v2"],
  logout: [
    "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    "M16 17l5-5-5-5",
    "M21 12H9",
  ],
  mail: ["M4 4h16v16H4z", "M22 6l-10 7L2 6"],
  meeting_room: [
    "M4 21h16",
    "M6 21V4l10-2v19",
    "M16 6h2a2 2 0 0 1 2 2v13",
    "M11 12h.01",
  ],
  more_horiz: ["M5 12h.01", "M12 12h.01", "M19 12h.01"],
  more_vert: ["M12 5h.01", "M12 12h.01", "M12 19h.01"],
  outdoor_garden: [
    "M12 21V11",
    "M12 11c-5 0-7-3-7-7 4 0 7 2 7 7z",
    "M12 11c5 0 7-3 7-7-4 0-7 2-7 7z",
  ],
  notifications: [
    "M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8",
    "M13.7 21a2 2 0 0 1-3.4 0",
  ],
  payments: [
    "M3 7h18v10H3z",
    "M3 10h18",
    "M7 15h.01",
    "M17 15h.01",
    "M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  ],
  person_search: [
    "M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    "M3 21v-2a4 4 0 0 1 4-4h4",
    "M18 18l4 4",
    "M17 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  ],
  phone: [
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2z",
  ],
  schedule: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 6v6l4 2"],
  search: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M21 21l-4.3-4.3"],
  settings: [
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7.1 4l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 20 7.1l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.8 1z",
  ],
  square_foot: [
    "M4 20h16",
    "M4 20V4",
    "M8 20v-4",
    "M12 20v-4",
    "M16 20v-4",
    "M4 16h4",
    "M4 12h4",
    "M4 8h4",
  ],
  trending_up: ["M3 17l6-6 4 4 8-8", "M14 7h7v7"],
  view_kanban: [
    "M3 5h18v14H3z",
    "M8 5v14",
    "M16 5v14",
    "M5.5 9h5",
    "M13.5 13h5",
  ],
};

function iconSizeClass(className: string) {
  if (className.includes("text-xs")) return "h-3 w-3";
  if (className.includes("text-base")) return "h-4 w-4";
  if (className.includes("text-lg")) return "h-5 w-5";
  if (className.includes("text-xl")) return "h-5 w-5";
  if (className.includes("text-2xl")) return "h-6 w-6";
  return "h-6 w-6";
}

export function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const paths = iconPaths[name] ?? iconPaths.help;

  return (
    <svg
      aria-hidden="true"
      className={`shrink-0 ${iconSizeClass(className)} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {paths.map((path) => (
        <path d={path} key={path} />
      ))}
    </svg>
  );
}

function Sidebar({
  activePath,
  onLogout,
}: {
  activePath: string;
  onLogout: () => void;
}) {
  return (
    <aside className="sidebar-shadow fixed left-0 top-0 z-50 hidden h-screen w-65 flex-col space-y-2 bg-slate-900 px-4 py-6 lg:flex">
      <div className="mb-8 flex items-center gap-3 px-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
          <Image src={Logo} alt="logo" />
        </div>
        <div>
          <h1 className="text-lg font-black leading-none text-white">
            ADITYA ENTERPRISES
          </h1>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
            Real Estate CRM
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navigationItems.map((item) => {
          const active = activePath === item.href;

          return (
            <Link
              href={item.href}
              key={item.label}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm tracking-wide transition-all duration-200 ${
                active
                  ? "bg-sky-600 text-white shadow-lg shadow-sky-900/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="space-y-1 border-t border-slate-800 pt-6">
        <a
          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm tracking-wide text-slate-400 transition-all duration-200 hover:bg-slate-800 hover:text-white"
          href="#"
        >
          <Icon name="help" />
          <span>Help Center</span>
        </a>
        <button
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm tracking-wide text-slate-400 transition-all duration-200 hover:bg-slate-800 hover:text-white"
          onClick={onLogout}
          type="button"
        >
          <Icon name="logout" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="fixed right-0 top-0 z-40 flex h-16 w-full items-center justify-between border-b border-sky-100 bg-white/85 px-4 shadow-sm backdrop-blur-md lg:w-[calc(100%-260px)] lg:px-6">
      <div className="flex items-center gap-3 lg:hidden">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
          <Icon name="domain" />
        </div>
        <div>
          <p className="text-sm font-black leading-none text-slate-900">
            ADITYA ENTERPRISES
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-slate-500">
            CRM
          </p>
        </div>
      </div>

      <div className="hidden max-w-xl flex-1 items-center md:flex">
        <div className="relative w-full">
          <Icon
            name="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400"
          />
          <input
            className="w-full rounded-full border-none bg-[#f5f2fa] py-2 pl-10 pr-4 text-sm text-slate-700 outline-none transition-all focus:ring-2 focus:ring-sky-200"
            placeholder="Search leads, properties, or deals..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          aria-label="Search"
          className="rounded-full p-2 text-slate-500 transition-colors hover:bg-sky-50 md:hidden"
        >
          <Icon name="search" />
        </button>
        <button
          aria-label="Notifications"
          className="relative rounded-full p-2 text-slate-500 transition-colors hover:bg-sky-50"
        >
          <Icon name="notifications" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-600" />
        </button>
        <button
          aria-label="Settings"
          className="hidden rounded-full p-2 text-slate-500 transition-colors hover:bg-sky-50 sm:block"
        >
          <Icon name="settings" />
        </button>
        <div className="hidden h-8 w-px bg-sky-100 sm:block" />
        <div className="flex cursor-pointer items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-sky-100 text-xs font-bold text-sky-800 shadow-sm">
            MS
          </div>
          <div className="hidden text-right lg:block">
            <p className="text-sm font-semibold leading-tight text-slate-900">
              Marcus Sterling
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Senior Agent
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileNav({ activePath }: { activePath: string }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 border-t border-sky-100 bg-slate-900 px-2 py-2 shadow-2xl lg:hidden">
      {navigationItems.slice(0, 4).map((item) => {
        const active = activePath === item.href;

        return (
          <Link
            className={`flex flex-col items-center gap-1 rounded-lg px-2 py-2 text-[11px] ${
              active ? "bg-sky-600 text-white" : "text-slate-400"
            }`}
            href={item.href}
            key={item.label}
          >
            <Icon name={item.icon} className="text-xl" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

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
    router.replace("/");
  }

  if (!authChecked) {
    return <div className="min-h-screen bg-[#fbf8ff]" />;
  }

  return (
    <div className="min-h-screen bg-[#fbf8ff] text-slate-900">
      <Sidebar activePath={activePath} onLogout={handleLogout} />
      <Header />
      <main className="min-h-screen pt-16 lg:ml-[260px]">{children}</main>
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
