import Icon from "@/app/components/Icon";
import { ScheduleItem } from "@/app/utils/types";

export function SchedulePanel({ schedule }: { schedule: ScheduleItem[] }) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
      <section className="rounded-xl border border-sky-100 bg-white p-5 shadow-xl shadow-[#03045e]/10">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Today</h2>
            <p className="text-sm text-slate-500">May 20, 2026</p>
          </div>
          <button
            aria-label="Change date"
            className="rounded-lg p-2 text-[#0077b6] transition-colors hover:bg-sky-50"
          >
            <Icon name="calendar_month" />
          </button>
        </div>
        <div className="space-y-3">
          {schedule.map((item) => (
            <article
              className={`rounded-lg border-l-4 p-3 ${item.active ? "border-[#0077b6] bg-[#f5f2fa]" : "border-transparent bg-slate-50"}`}
              key={item.title}
            >
              <p className="text-xs font-bold uppercase tracking-[0.05em] text-slate-400">
                {item.time}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500">{item.type}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-sky-100 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Quick Add</h2>
        <div className="space-y-3">
          <input
            className="w-full rounded-lg border border-sky-100 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-sky-100"
            placeholder="Task title"
            type="text"
          />
          <select className="w-full rounded-lg border border-sky-100 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-sky-100">
            <option>Follow Up</option>
            <option>Site Visit</option>
            <option>Documentation</option>
          </select>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-slate-800">
            <Icon name="add" className="text-lg" />
            <span>Add Task</span>
          </button>
        </div>
      </section>
    </aside>
  );
}
