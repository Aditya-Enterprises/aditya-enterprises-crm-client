import React from "react";
import Icon from "./Icon";
import { metrics } from "../data/data";

function MetricCard({ metric }: { metric: (typeof metrics)[number] }) {
  return (
    <section className="card-elevation rounded-xl border border-sky-100 bg-white p-5">
      <div className="mb-4 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${metric.iconClass}`}
        >
          <Icon name={metric.icon} />
        </div>
        <span
          className={`rounded-full px-2 py-1 text-xs font-bold ${metric.badgeClass}`}
        >
          {metric.badge}
        </span>
      </div>
      <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
        {metric.label}
      </h2>
      <p className="text-3xl font-bold leading-tight text-slate-900">
        {metric.value}
      </p>
    </section>
  );
}

export default MetricCard;
