"use client";

import { useCallback, useEffect, useState } from "react";
import { useCurrentUser } from "../../components/CurrentUserProvider";
import RecentLeadsTable from "../../components/RecentLeadsTable";
import MetricCard from "../../components/MetricCard";
import SalesChart from "../../components/SalesChart";
import TasksWidget from "../../components/TasksWidget";
import { NewDealModal } from "@/app/components/NewDealModal";
import { NewLeadModal } from "@/app/components/NewLeadModal";
import { NewTaskModal } from "@/app/components/NewTaskModal";
import { metrics } from "../../data/data";
import { getDashboardSummary } from "../../utils/api-client";
import type { DashboardSummary } from "../../utils/api-types";
import Icon from "@/app/components/Icon";

const formatRevenue = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function Home() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isNewDealOpen, setIsNewDealOpen] = useState(false);
  const [isNewLeadOpen, setIsNewLeadOpen] = useState(false);
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const { firstName } = useCurrentUser();

  const loadSummary = useCallback(async () => {
    try {
      setSummary(await getDashboardSummary());
    } catch {
      setError("Unable to load dashboard metrics.");
    }
  }, []);

  useEffect(() => {
    void getDashboardSummary()
      .then(setSummary)
      .catch(() => setError("Unable to load dashboard metrics."));
  }, []);

  const metricValues = summary
    ? [
        summary.activeDeals.toLocaleString("en-IN"),
        summary.totalLeads.toLocaleString("en-IN"),
        summary.pendingTasks.toLocaleString("en-IN"),
        formatRevenue(summary.totalRevenue),
      ]
    : null;

  return (
    <div className="mx-auto max-w-360 px-4 py-6 pb-28 sm:px-6 lg:p-6">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            Performance Overview
          </h1>
          <p className="mt-1 text-sm text-slate-500 sm:text-[15px]">
            Welcome back, {firstName}. Here is what is happening with your
            pipeline today.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => setIsNewDealOpen(true)}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-[#2a2c94] px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-[#03045e]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0077b6] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b6] focus-visible:ring-offset-2 active:translate-y-0"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#ade8f4] transition-colors group-hover:bg-white/20">
              <Icon name="trending_up" className="text-base" />
            </span>
            <span>New Deal</span>
          </button>
          <button
            type="button"
            onClick={() => setIsNewLeadOpen(true)}
            className="group inline-flex items-center gap-2.5 rounded-xl border border-[#48cae4] bg-[#caf0f8] px-3 py-2 text-sm font-semibold text-[#03045e] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#00b4d8] hover:bg-[#ade8f4] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b4d8] focus-visible:ring-offset-2 active:translate-y-0"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/70 text-[#0077b6] transition-colors group-hover:bg-white">
              <Icon name="group" className="text-base" />
            </span>
            <span>New Lead</span>
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

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.label}
            metric={metric}
            value={metricValues?.[index] ?? "—"}
          />
        ))}
      </div>

      {error && (
        <div className="mb-6 flex items-center justify-between gap-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <span>{error}</span>
          <button
            type="button"
            onClick={() => void loadSummary()}
            className="font-semibold underline underline-offset-2"
          >
            Retry
          </button>
        </div>
      )}

      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <SalesChart />
        <TasksWidget />
      </div>

      <RecentLeadsTable />
      <NewDealModal
        open={isNewDealOpen}
        onClose={() => setIsNewDealOpen(false)}
      />
      <NewLeadModal
        open={isNewLeadOpen}
        onClose={() => setIsNewLeadOpen(false)}
        onCreated={() => void loadSummary()}
      />
      <NewTaskModal
        open={isNewTaskOpen}
        onClose={() => setIsNewTaskOpen(false)}
        onCreated={() => void loadSummary()}
      />
    </div>
  );
}
