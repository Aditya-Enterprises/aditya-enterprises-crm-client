import Icon from "@/app/components/Icon";
import { propertyTypes, amenities } from "./data";

export function FilterSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
      <section className="rounded-xl border border-[#90e0ef] bg-white p-5 shadow-xl shadow-[#03045e]/10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Icon name="filter_list" className="text-[#0077b6]" />
            Search Filters
          </h2>
          <button className="text-xs font-bold uppercase text-[#0077b6] hover:underline">
            Reset
          </button>
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-xs font-bold uppercase tracking-[0.05em] text-slate-400">
            Property Type
          </label>
          <div className="space-y-2">
            {propertyTypes.map((type, index) => (
              <label
                className="flex cursor-pointer items-center text-sm text-slate-700 transition-colors hover:text-[#0077b6]"
                key={type}
              >
                <input
                  className="h-4 w-4 rounded border-sky-100 text-[#0077b6]"
                  defaultChecked={index === 0}
                  type="checkbox"
                />
                <span className="ml-3">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-xs font-bold uppercase tracking-[0.05em] text-slate-400">
            Price Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="w-full rounded-lg border border-sky-100 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-sky-100"
              placeholder="Min"
              type="text"
            />
            <input
              className="w-full rounded-lg border border-sky-100 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-sky-100"
              placeholder="Max"
              type="text"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-xs font-bold uppercase tracking-[0.05em] text-slate-400">
            Transaction Type
          </label>
          <div className="flex rounded-lg border border-sky-100 bg-slate-50 p-1">
            <button className="flex-1 rounded-md bg-white py-1.5 text-xs font-bold text-[#0077b6] shadow">
              For Sale
            </button>
            <button className="flex-1 rounded-md py-1.5 text-xs font-bold text-slate-500 transition-colors hover:text-slate-700">
              For Rent
            </button>
          </div>
        </div>

        <div className="mb-8">
          <label className="mb-3 block text-xs font-bold uppercase tracking-[0.05em] text-slate-400">
            Amenities
          </label>
          <div className="grid grid-cols-2 gap-2">
            {amenities.map((amenity) => (
              <button
                className="flex items-center gap-2 rounded-lg border border-sky-50 px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-sky-50"
                key={amenity.label}
              >
                <Icon name={amenity.icon} className="text-base" />
                <span>{amenity.label}</span>
              </button>
            ))}
          </div>
        </div>

        <button className="flex w-full items-center justify-center rounded-lg bg-slate-900 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-slate-800">
          Apply Filters
        </button>
      </section>

      <section className="relative overflow-hidden rounded-xl bg-[#070a61] p-6 text-white">
        <div className="relative z-10">
          <h2 className="mb-1 text-lg font-bold">New Market Report</h2>
          <p className="mb-4 text-xs text-white/70">
            Mumbai luxury values increased by 12% last month.
          </p>
          <button className="rounded-full bg-white px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#070a61]">
            Download PDF
          </button>
        </div>
        <Icon
          name="analytics"
          className="absolute -bottom-5 -right-5 h-24 w-24 text-white/20"
        />
      </section>
    </aside>
  );
}
