import Icon from "@/app/components/Icon";
import { Insight } from "./data";

export function InsightCards({ insights }: { insights: Insight[] }) {
  return (
    <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      {insights.map((insight) => (
        <article
          className="flex items-center gap-4 rounded-xl border border-[#90e0ef] bg-white p-6 shadow-sm"
          key={insight.label}
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${insight.iconClass}`}
          >
            <Icon name={insight.icon} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.05em] text-slate-500">
              {insight.label}
            </p>
            <p className="text-xl font-bold text-slate-900">{insight.value}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
