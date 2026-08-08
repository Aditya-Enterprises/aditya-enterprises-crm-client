import Icon from "@/app/components/Icon";
import { Property } from "../utils/types";
import { StatusBadge } from "./StatusBadge";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#90e0ef] bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#03045e]/10">
      <div className="relative h-52 overflow-hidden sm:h-56">
        <div
          aria-label={property.imageAlt}
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          role="img"
          style={{ backgroundImage: `url(${property.image})` }}
        />
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${property.transaction === "Sale" ? "bg-[#0077b6] text-white" : "bg-[#67bafd] text-[#004972]"}`}
          >
            {property.transaction}
          </span>
          <StatusBadge status={property.status} />
        </div>
        <button
          aria-label={`Save ${property.title}`}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-400 shadow-sm backdrop-blur transition-colors hover:text-red-600"
        >
          <Icon name="check_circle" className="text-lg" />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold leading-tight text-slate-900">
            {property.title}
          </h2>
          <span className="whitespace-nowrap text-lg font-bold text-[#0077b6]">
            {property.price}
          </span>
        </div>
        <p className="mb-4 flex items-center gap-1 text-sm text-slate-500">
          <Icon name="location_on" className="text-base" />
          <span>{property.location}</span>
        </p>
        <div className="flex items-center justify-between gap-3 border-t border-sky-50 pt-4">
          <div className="flex min-w-0 items-center gap-4 text-slate-600">
            <span className="flex items-center gap-1 text-xs font-bold">
              <Icon name="bed" className="text-base" />
              {property.beds}
            </span>
            <span className="flex items-center gap-1 text-xs font-bold">
              <Icon name="bathtub" className="text-base" />
              {property.baths}
            </span>
            <span className="flex items-center gap-1 text-xs font-bold">
              <Icon name="square_foot" className="text-base" />
              {property.area}
            </span>
          </div>
          <button className="text-xs font-bold uppercase text-[#0077b6] transition-colors hover:text-[#48cae4]">
            Details
          </button>
        </div>
      </div>
    </article>
  );
}
