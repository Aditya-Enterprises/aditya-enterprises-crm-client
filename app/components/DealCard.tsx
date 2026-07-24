import Icon from "@/app/components/Icon";
import { Deal } from "@/app/utils/types";

export function DealCard({
  deal,
  closed = false,
}: {
  deal: Deal;
  closed?: boolean;
}) {
  return (
    <article
      className={`rounded-xl border border-[#90e0ef] p-4 transition-all ${
        closed
          ? "bg-[#f5f2fa] opacity-80 shadow-sm"
          : "bg-white shadow-[0_8px_30px_rgba(3,4,94,0.04)] hover:border-[#0077b6]"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${deal.tagClass}`}
        >
          {deal.tagIcon ? (
            <Icon name={deal.tagIcon} className="text-xs" />
          ) : null}
          {deal.tag}
        </span>
        <button
          aria-label={`Open actions for ${deal.client}`}
          className="rounded p-1 text-slate-300 transition-colors hover:bg-slate-50 hover:text-slate-600"
        >
          <Icon name="more_vert" className="text-lg" />
        </button>
      </div>
      <h3 className="mb-1 text-lg font-semibold leading-tight text-slate-900">
        {deal.client}
      </h3>
      <p className="mb-4 flex items-center gap-1 text-[13px] text-slate-500">
        <Icon name="location_on" className="text-base" />
        <span>{deal.property}</span>
      </p>
      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-slate-400">
            Value
          </p>
          <p
            className={`font-bold ${closed ? "text-slate-700" : "text-[#0077b6]"}`}
          >
            {deal.value}
          </p>
        </div>
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold ${deal.ownerClass}`}
        >
          {deal.owner}
        </div>
      </div>
    </article>
  );
}
