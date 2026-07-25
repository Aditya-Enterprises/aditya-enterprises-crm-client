import Image from "next/image";
import Logo from "../assets/Logo.png";
import { navigationItems } from "../data/NavigationItems";
import Link from "next/link";
import Icon from "./Icon";

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
        <div className="flex h-10 items-center justify-center rounded-lg bg-white">
          <Image src={Logo} alt="logo" className="p-2" />
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

export default Sidebar;
