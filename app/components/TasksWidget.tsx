import React from "react";
import Icon from "./Icon";
import { tasks } from "../data/data";
function TasksWidget() {
  return (
    <section className="card-elevation flex flex-col rounded-xl border border-sky-100 bg-white">
      <div className="border-b border-sky-50 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Today&apos;s Tasks
        </h2>
        <p className="text-sm text-slate-500">Priority focus for May 20</p>
      </div>
      <div className="flex-1 space-y-4 p-5 sm:p-6">
        {tasks.map((task) => (
          <article
            className={`flex items-start gap-3 rounded-lg border-l-4 p-3 transition-colors ${
              task.active
                ? "border-[#0077b6] bg-[#f5f2fa]"
                : "border-transparent hover:bg-slate-50"
            }`}
            key={task.title}
          >
            <Icon
              name={task.icon}
              className={`mt-0.5 ${task.active ? "text-[#0077b6]" : "text-slate-400"}`}
            />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900">
                {task.title}
              </h3>
              <p className="text-xs text-slate-500">{task.description}</p>
              <div className="mt-2 flex items-center text-[10px] font-bold text-slate-400">
                <Icon name="schedule" className="mr-1 text-xs" />
                {task.time}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="rounded-b-xl border-t border-sky-50 bg-slate-50 p-4">
        <button className="w-full py-2 text-xs font-bold uppercase tracking-widest text-[#0077b6] transition-colors hover:text-[#48cae4]">
          View All Tasks
        </button>
      </div>
    </section>
  );
}

export default TasksWidget;
