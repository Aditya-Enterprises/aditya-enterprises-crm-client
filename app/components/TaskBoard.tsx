import Icon from "@/app/components/Icon";
import { Task } from "@/app/utils/types";
import { filters } from "@/app/data/data";
import { TaskCard } from "./TaskCard";

export function TaskBoard({ tasks }: { tasks: Task[] }) {
  return (
    <section className="card-elevation overflow-hidden rounded-xl border border-sky-100 bg-white">
      <div className="flex flex-col gap-4 border-b border-sky-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Task Queue</h2>
          <p className="text-sm text-slate-500">
            Follow ups, site visits, and documentation work.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <button
              className={`rounded-lg px-3 py-2 text-xs font-bold transition-colors ${
                index === 0
                  ? "bg-[#0077b6] text-white"
                  : "bg-[#f5f2fa] text-slate-600 hover:bg-[#ade8f4]"
              }`}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 p-5 sm:p-6 xl:grid-cols-2">
        {tasks.map((task) => (
          <TaskCard key={`${task.title}-${task.contact}`} task={task} />
        ))}
      </div>
    </section>
  );
}
