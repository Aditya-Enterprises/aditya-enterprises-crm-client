"use client";

import { useState } from "react";
import Icon from "@/app/components/Icon";
import { summaryCards, tasks, schedule } from "@/app/data/data";
import { SummaryCardComponent } from "../../components/SummaryCard";
import { TaskBoard } from "../../components/TaskBoard";
import { SchedulePanel } from "../../components/SchedulePanel";
import { NewTaskModal } from "../../components/NewTaskModal";

export default function TasksPage() {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  return (
    <div className="mx-auto max-w-360 px-4 py-6 pb-28 sm:px-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            Tasks
          </h1>
          <p className="mt-1 text-sm text-slate-500 sm:text-[15px]">
            Track priority follow ups, visits, and deal paperwork for the team.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-[#90e0ef] bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-sky-50">
            <Icon name="filter_list" className="text-lg" />
            <span>Filters</span>
          </button>
          <button
            type="button"
            onClick={() => setIsNewTaskOpen(true)}
            className="group inline-flex items-center gap-2.5 rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 active:translate-y-0"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-[#0077b6] transition-colors group-hover:bg-sky-100">
              <Icon name="calendar_month" className="text-base" />
            </span>
            <span>Add Task</span>
          </button>
        </div>
      </div>
      <NewTaskModal open={isNewTaskOpen} onClose={() => setIsNewTaskOpen(false)} />

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
  );
}
