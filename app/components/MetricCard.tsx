import React from "react";
import Icon from "./Icon";
import { metrics } from "../data/data";

function MetricCard({
  metric,
  value,
}: {
  metric: (typeof metrics)[number];
  value: string | number;
}) {
  return (
    <section className="card-elevation rounded-xl border border-sky-100 bg-white p-5">
      <div className="mb-4 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
            metric.label == "PENDING TASKS"
              ? metric.value == "0"
                ? "bg-green-50 text-green-600"
                : metric.iconClass
              : metric.iconClass
          }`}
        >
          <Icon name={metric.icon} />
        </div>
        <span
          className={`rounded-full px-2 py-1 text-xs font-bold ${
            metric.label == "PENDING TASKS"
              ? metric.value == "0"
                ? "bg-green-50 text-green-600"
                : metric.badgeClass
              : metric.badgeClass
          }`}
        >
          {metric.label == "PENDING TASKS"
            ? metric.value == "0"
              ? "All Clear"
              : metric.badge
            : metric.badge}
        </span>
      </div>
      <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
        {metric.label}
      </h2>
      <p className="text-3xl font-bold leading-tight text-slate-900">
        {metric.label == "PENDING TASKS" ? value : metric.value}
      </p>
    </section>
  );
}

export default MetricCard;
