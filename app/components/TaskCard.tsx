import Icon from "@/app/components/Icon";
import { Task } from "@/app/utils/types";
import { StatusBadge, PriorityBadge } from "./TaskBadges";

export function TaskCard({ task }: { task: Task }) {
  const highlighted = task.status === "Due Today" || task.status === "Overdue";

  return (
    <article
      className={`rounded-xl border bg-white p-4 shadow-sm transition-all hover:border-[#0077b6] hover:shadow-lg hover:shadow-[#03045e]/10 ${
        highlighted ? "border-[#90e0ef]" : "border-sky-100"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl ${highlighted ? "bg-sky-50 text-[#0077b6]" : "bg-slate-50 text-slate-400"}`}
        >
          <Icon name={task.icon} className="text-lg" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <StatusBadge status={task.status} />
            <PriorityBadge priority={task.priority} />
          </div>
          <h2 className="text-base font-semibold leading-tight text-slate-900">
            {task.title}
          </h2>
          <p className="mt-1 text-sm leading-5 text-slate-500">
            {task.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1">
              <Icon name="schedule" className="text-base" />
              {task.time}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="group" className="text-base" />
              {task.contact}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button
            aria-label={`Open actions for ${task.title}`}
            className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-50 hover:text-slate-600"
          >
            <Icon name="more_vert" />
          </button>
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold ${task.ownerClass}`}
          >
            {task.ownerInitials}
          </div>
        </div>
      </div>
    </article>
  );
}
