import React from "react";

function SalesChart() {
  return (
    <section className="card-elevation rounded-xl border border-sky-100 bg-white p-5 sm:p-6 lg:col-span-2">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Sales Performance
          </h2>
          <p className="text-sm text-slate-500">
            Revenue growth over the last 6 months
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#0077b6]" />
            <span className="text-xs font-medium text-slate-600">Actual</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ade8f4]" />
            <span className="text-xs font-medium text-slate-600">Target</span>
          </div>
        </div>
      </div>
      <div className="relative h-56 overflow-hidden sm:h-64">
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3].map((line) => (
            <div className="h-0 w-full border-t border-slate-100" key={line} />
          ))}
        </div>
        <svg
          aria-label="Sales performance chart"
          className="relative h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 800 200"
        >
          <path
            d="M0 180 Q 150 140 200 150 T 400 80 T 600 110 T 800 30"
            fill="none"
            stroke="#0077b6"
            strokeLinecap="round"
            strokeWidth="4"
          />
          <path
            d="M0 190 Q 150 160 200 170 T 400 110 T 600 130 T 800 60"
            fill="none"
            stroke="#ade8f4"
            strokeDasharray="8 4"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="mt-4 flex justify-between px-1 text-xs font-bold uppercase tracking-widest text-slate-400">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </section>
  );
}

export default SalesChart;
