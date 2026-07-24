import Icon from "@/app/components/Icon";
import { CrmShell } from "../../components/crm-shell";
import { leadsFilters, leadsData, leadsInsights } from "../../data/data";
import { FilterPanel } from "../../components/FilterPanel";
import { LeadsTable } from "../../components/LeadsTable";
import { InsightCards } from "../../components/InsightCards";

export default function LeadsPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-6 pb-28 sm:px-6 lg:p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-slate-900">
            Lead Pipeline
          </h1>
          <p className="mt-1 text-[15px] text-slate-500">
            Manage and track potential client engagements across all properties.
          </p>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0077b6] px-6 py-2.5 font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:bg-[#48cae4] active:scale-95 sm:w-auto">
          <Icon name="add" className="text-lg" />
          <span>Add Lead</span>
        </button>
      </div>

      <FilterPanel filters={leadsFilters} />
      <LeadsTable leads={leadsData} />
      <InsightCards insights={leadsInsights} />
    </div>
  );
}
