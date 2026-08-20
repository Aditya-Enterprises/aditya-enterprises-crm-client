import Icon from "@/app/components/Icon";
import { leadsFilters, leadsInsights } from "../../data/data";
import { FilterPanel } from "../../components/FilterPanel";
import { LeadsTable } from "../../components/LeadsTable";
import { InsightCards } from "../../components/InsightCards";

export default function LeadsPage() {
  return (
    <div className="mx-auto max-w-360 px-4 py-6 pb-28 sm:px-6 lg:p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-slate-900">
            Lead Pipeline
          </h1>
          <p className="mt-1 text-[15px] text-slate-500">
            Manage and track potential client engagements across all properties.
          </p>
        </div>
        <button
          type="button"
          className="group inline-flex items-center gap-2.5 rounded-xl border border-[#48cae4] bg-[#caf0f8] px-3 py-2 text-sm font-semibold text-[#03045e] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#00b4d8] hover:bg-[#ade8f4] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b4d8] focus-visible:ring-offset-2 active:translate-y-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/70 text-[#0077b6] transition-colors group-hover:bg-white">
            <Icon name="group" className="text-base" />
          </span>
          <span>New Lead</span>
        </button>
      </div>

      <FilterPanel filters={leadsFilters} />
      <LeadsTable />
      <InsightCards insights={leadsInsights} />
    </div>
  );
}
