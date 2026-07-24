import Icon from "@/app/components/Icon";
import { CrmShell } from "../../components/crm-shell";
import { dealsColumns } from "@/app/data/data";
import { ViewToggle } from "../../components/ViewToggle";
import { KanbanColumn } from "../../components/KanbanColumn";

export default function DealsPage() {
  return (
    <CrmShell activePath="/crm/deals" showFab={false}>
      <div className="flex min-h-[calc(100vh-4rem)] flex-col">
        <div className="flex flex-col gap-4 bg-white px-4 py-6 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900">
              Deals Pipeline
            </h1>
            <p className="mt-1 text-[15px] text-slate-500">
              Manage 24 active high-value property negotiations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <ViewToggle />
            <button className="flex items-center gap-2 rounded-lg border border-[#90e0ef] bg-[#f0ecf4] px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-[#ade8f4]">
              <Icon name="filter_list" className="text-lg" />
              <span>Filters</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-[#0077b6] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition-all hover:bg-[#48cae4] active:scale-95">
              <Icon name="add" className="text-lg" />
              <span>New Deal</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto bg-[#fbf8ff] px-4 py-6 pb-28 sm:px-6 lg:px-8">
          <div className="flex min-h-[640px] w-max gap-6">
            {dealsColumns.map((column) => (
              <KanbanColumn column={column} key={column.title} />
            ))}
            <button className="flex min-w-[300px] max-w-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-sky-100 text-sky-600 transition-colors hover:bg-sky-50 sm:min-w-[320px] sm:max-w-[320px]">
              <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sky-400 shadow-sm">
                <Icon name="add" className="text-2xl" />
              </span>
              <span className="font-semibold">Add Column</span>
            </button>
          </div>
        </div>
      </div>
    </CrmShell>
  );
}
