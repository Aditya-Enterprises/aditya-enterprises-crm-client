import Icon from "@/app/components/Icon";
import { CrmShell } from "../../components/crm-shell";
import { propertyTabs, properties } from "./data";
import { PropertyCard } from "./PropertyCard";
import { FilterSidebar } from "./FilterSidebar";

export default function PropertiesPage() {
  return (
    <CrmShell activePath="/crm/properties" showFab={false}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-4 py-6 pb-28 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:p-8">
        <div className="min-w-0">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-slate-900">
                Property Inventory
              </h1>
              <p className="mt-1 text-[15px] text-slate-500">
                Manage and track listed real estate assets.
              </p>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0077b6] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition-all hover:bg-[#48cae4] active:scale-95 sm:w-auto">
              <Icon name="add_home" className="text-lg" />
              <span>List Property</span>
            </button>
          </div>

          <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
            {propertyTabs.map((tab) => (
              <button
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                  tab.active
                    ? "bg-[#67bafd] text-[#004972]"
                    : "bg-[#ade8f4] text-[#006399] hover:bg-[#cde5ff]"
                }`}
                key={tab.label}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.title} property={property} />
            ))}
          </div>
        </div>

        <FilterSidebar />
      </div>
    </CrmShell>
  );
}
