import Icon from "./Icon";
import Logo from "../assets/Logo.png";
import Image from "next/image";

function Header() {
  return (
    <header className="fixed right-0 top-0 z-40 flex h-16 w-full min-w-0 items-center justify-between border-b border-sky-100 bg-white/85 px-4 shadow-sm backdrop-blur-md lg:w-[calc(100%-260px)] lg:px-6">
      <div className="flex items-center gap-3 lg:hidden">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-white">
          <Image src={Logo} className="" alt="Logo" />
        </div>
        <div>
          <p className="text-sm font-black leading-none text-slate-900">
            ADITYA ENTERPRISES
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-wide text-slate-500">
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

      <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-4">
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

export default Header;
