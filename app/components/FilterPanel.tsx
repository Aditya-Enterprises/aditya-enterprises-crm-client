import Icon from "@/app/components/Icon";
import { FilterOption } from "@/app/utils/types";

export function FilterPanel({ filters }: { filters: FilterOption[] }) {
  return (
    <section className="mb-8 grid grid-cols-1 gap-4 rounded-xl border border-[#90e0ef] bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
      {filters.map((filter) => (
        <label className="space-y-2" key={filter.label}>
          <span className="block text-xs font-bold uppercase tracking-[0.05em] text-slate-500">
            {filter.label}
          </span>
          <select className="w-full rounded-lg border-none bg-[#f5f2fa] py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#0077b6]">
            {filter.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      ))}
      <div className="flex items-end">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#ade8f4] py-2.5 font-semibold text-[#006399] transition-colors hover:bg-[#67bafd]">
          <Icon name="filter_alt" className="text-lg" />
          <span>Clear Filters</span>
        </button>
      </div>
    </section>
  );
}
