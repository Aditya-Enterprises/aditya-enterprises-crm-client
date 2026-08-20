"use client";

import Icon from "@/app/components/Icon";
import { NewDealModal } from "@/app/components/NewDealModal";
import { dealsColumns } from "@/app/data/data";
import { useState } from "react";
import { ViewToggle } from "../../components/ViewToggle";
import { KanbanColumn } from "../../components/KanbanColumn";

export default function DealsPage() {
  const [isNewDealOpen, setIsNewDealOpen] = useState(false);
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      <div className="flex flex-col gap-4 bg-white px-4 py-6 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-slate-900">
            Deals Pipeline
          </h1>
          <p className="mt-1 text-[15px] text-slate-500">
            Manage 24 active high-value property negotiations.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ViewToggle />
          <button className="flex items-center gap-2 rounded-lg border border-[#90e0ef] bg-[#f0ecf4] px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-[#ade8f4]">
            <Icon name="filter_list" className="text-lg" />
            <span>Filters</span>
          </button>
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
        </div>
      </div>

      <div className="flex-1 overflow-x-auto bg-[#fbf8ff] px-4 py-6 pb-28 sm:px-6 lg:px-8">
        <div className="flex min-h-160 w-max gap-6">
          {dealsColumns.map((column) => (
            <KanbanColumn column={column} key={column.title} />
          ))}
          <button className="flex min-w-75 max-w-75 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-sky-100 text-sky-600 transition-colors hover:bg-sky-50 sm:min-w-[320px] sm:max-w-[320px]">
            <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sky-400 shadow-sm">
              <Icon name="add" className="text-2xl" />
            </span>
            <span className="font-semibold">Add Column</span>
          </button>
        </div>
      </div>
      <NewDealModal open={isNewDealOpen} onClose={() => setIsNewDealOpen(false)} />
    </div>
  );
}
