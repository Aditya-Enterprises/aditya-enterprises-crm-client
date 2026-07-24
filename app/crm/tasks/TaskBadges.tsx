import { TaskStatus, TaskPriority } from "./data";

export function StatusBadge({ status }: { status: TaskStatus }) {
  const classes: Record<TaskStatus, string> = {
    "Due Today": "border-amber-200 bg-amber-50 text-amber-700",
    Upcoming: "border-sky-200 bg-sky-50 text-sky-700",
    Completed: "border-emerald-200 bg-emerald-50 text-emerald-700",
    Overdue: "border-red-200 bg-red-50 text-red-700",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${classes[status]}`}
    >
      {status}
    </span>
  );
}

export function PriorityBadge({ priority }: { priority: TaskPriority }) {
  const classes: Record<TaskPriority, string> = {
    High: "bg-red-50 text-red-700",
    Medium: "bg-amber-50 text-amber-700",
    Low: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${classes[priority]}`}
    >
      {priority}
    </span>
  );
}
