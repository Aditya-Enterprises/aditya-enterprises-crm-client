import Icon from "@/app/components/Icon";
import { CrmShell } from "../../components/crm-shell";
import { summaryCards, tasks, schedule } from "./data";
import { SummaryCardComponent } from "./SummaryCard";
import { TaskBoard } from "./TaskBoard";
import { SchedulePanel } from "./SchedulePanel";

export default function TasksPage() {
  return (
    <CrmShell activePath="/crm/tasks">
      <div className="mx-auto max-w-360 px-4 py-6 pb-28 sm:px-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Tasks
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-[15px]">
              Track priority follow ups, visits, and deal paperwork for the
              team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-[#90e0ef] bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-sky-50">
              <Icon name="filter_list" className="text-lg" />
              <span>Filters</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-[#0077b6] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition-all hover:bg-[#48cae4] active:scale-95">
              <Icon name="add" className="text-lg" />
              <span>New Task</span>
            </button>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <SummaryCardComponent card={card} key={card.label} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <TaskBoard tasks={tasks} />
          <SchedulePanel schedule={schedule} />
        </div>
      </div>
    </CrmShell>
  );
}
