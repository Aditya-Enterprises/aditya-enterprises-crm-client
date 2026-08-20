"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { getTodaySchedule } from "../utils/api-client";
import type { DashboardScheduleItem } from "../utils/api-types";

const taskIcons: Record<string, string> = {
  Call: "call",
  Meeting: "meeting_room",
  Viewing: "meeting_room",
  Documentation: "contract_edit",
};

const formatDueTime = (dueAtUtc: string) =>
  new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dueAtUtc));

const formatToday = () =>
  new Intl.DateTimeFormat("en-IN", {
    month: "long",
    day: "numeric",
  }).format(new Date());

function TasksWidget() {
  const [tasks, setTasks] = useState<DashboardScheduleItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getTodaySchedule()
      .then((result) => {
        if (isMounted) setTasks(result.slice(0, 3));
      })
      .catch(() => {
        if (isMounted) setTasks([]);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="card-elevation flex flex-col rounded-xl border border-sky-100 bg-white">
      <div className="border-b border-sky-50 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Today&apos;s Tasks
        </h2>
        <p className="text-sm text-slate-500">Priority focus for {formatToday()}</p>
      </div>
      <div className="flex-1 space-y-4 p-5 sm:p-6">
        {isLoading ? (
          <p className="py-6 text-center text-sm text-slate-500">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p className="py-6 text-center text-sm text-slate-500">No tasks found.</p>
        ) : (
          tasks.map((task, index) => {
            const isActive = task.status === "InProgress" || index === 0;

            return (
              <article
                className={`flex items-start gap-3 rounded-lg border-l-4 p-3 transition-colors ${
                  isActive
                    ? "border-[#0077b6] bg-[#f5f2fa]"
                    : "border-transparent hover:bg-slate-50"
                }`}
                key={task.id}
              >
                <Icon
                  name={taskIcons[task.taskType ?? ""] ?? "assignment"}
                  className={`mt-0.5 ${isActive ? "text-[#0077b6]" : "text-slate-400"}`}
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {task.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {task.contactName ?? "Task follow-up"}
                  </p>
                  <div className="mt-2 flex items-center text-[10px] font-bold text-slate-400">
                    <Icon name="schedule" className="mr-1 text-xs" />
                    {formatDueTime(task.dueAtUtc)}
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
      <div className="rounded-b-xl border-t border-sky-50 bg-slate-50 p-4">
        <Link
          href="/tasks"
          className="block w-full py-2 text-center text-xs font-bold uppercase tracking-widest text-[#0077b6] transition-colors hover:text-[#48cae4]"
        >
          View All Tasks
        </Link>
      </div>
    </section>
  );
}

export default TasksWidget;
