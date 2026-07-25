import { navigationItems } from "../data/NavigationItems";
import Icon from "./Icon";
import Link from "next/link";

function MobileNav({ activePath }: { activePath: string }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-5 border-t border-sky-100 bg-slate-900 px-2 py-2 shadow-2xl lg:hidden">
      {navigationItems.slice(0, 5).map((item) => {
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

export default MobileNav;
