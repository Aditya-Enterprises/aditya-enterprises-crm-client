import { DealColumn } from "@/app/utils/types";

import { DealCard } from "./DealCard";

export function KanbanColumn({ column }: { column: DealColumn }) {
  return (
    <section className="flex h-full min-w-[300px] max-w-[300px] flex-col sm:min-w-[320px] sm:max-w-[320px]">
      <div className="mb-4 flex items-center justify-between px-2">
        <div className="flex items-center">
          <span
            className={`mr-2 h-2.5 w-2.5 rounded-full ${column.dotClass}`}
          />
          <h2 className="text-lg font-semibold text-slate-900">
            {column.title}
          </h2>
          <span className="ml-2 rounded-full bg-[#ade8f4] px-2 py-0.5 text-[11px] font-bold text-[#006399]">
            {column.count}
          </span>
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.05em] text-slate-500">
          {column.value}
        </span>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {column.deals.map((deal) => (
          <DealCard
            closed={column.closed}
            deal={deal}
            key={`${column.title}-${deal.client}`}
          />
        ))}
      </div>
    </section>
  );
}
