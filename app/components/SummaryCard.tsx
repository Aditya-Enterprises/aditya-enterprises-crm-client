import Icon from "@/app/components/Icon";
import { SummaryCard } from "@/app/utils/types";

export function SummaryCardComponent({ card }: { card: SummaryCard }) {
  return (
    <section className="card-elevation rounded-xl border border-sky-100 bg-white p-5">
      <div className="mb-4 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.iconClass}`}
        >
          <Icon name={card.icon} />
        </div>
        <span
          className={`rounded-full px-2 py-1 text-xs font-bold ${card.badgeClass}`}
        >
          {card.badge}
        </span>
      </div>
      <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.05em] text-slate-400">
        {card.label}
      </h2>
      <p className="text-3xl font-bold leading-tight text-slate-900">
        {card.value}
      </p>
    </section>
  );
}
