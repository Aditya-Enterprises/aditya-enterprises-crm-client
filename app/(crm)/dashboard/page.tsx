"use client";

import { CrmShell } from "../../components/crm-shell";
import { useState } from "react";
import RecentLeadsTable from "../../components/RecentLeadsTable";
import MetricCard from "../../components/MetricCard";
import SalesChart from "../../components/SalesChart";
import TasksWidget from "../../components/TasksWidget";
import { metrics } from "../../data/data";
import Icon from "@/app/components/Icon";

export default function Home() {
  const [value, setValue] = useState(metrics[3].value);
  return (
    <div className="mx-auto max-w-360 px-4 py-6 pb-28 sm:px-6 lg:p-6">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            Performance Overview
          </h1>
          <p className="mt-1 text-sm text-slate-500 sm:text-[15px]">
            Welcome back, Marcus. Here is what is happening with your pipeline
            today.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            className="flex items-center gap-2 rounded-lg border border-[#90e0ef] bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-sky-50"
            onClick={() => setValue(Number(value) + 1)}
          >
            <Icon name="calendar_month" className="text-lg" />
            <span>Add Task</span>
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-[#0077b6] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition-all hover:bg-[#48cae4] active:scale-95">
            <Icon name="add" className="text-lg" />
            <span>New Deal</span>
          </button>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} value={value} />
        ))}
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <SalesChart />
        <TasksWidget />
      </div>

      <RecentLeadsTable />
    </div>
  );
}
