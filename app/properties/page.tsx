import { CrmShell, Icon } from "../components/crm-shell";

type Property = {
  title: string;
  location: string;
  price: string;
  transaction: "Sale" | "Rent";
  status: "Active" | "Pending" | "Sold";
  beds: number;
  baths: number;
  area: string;
  image: string;
  imageAlt: string;
};

const propertyTabs = [
  { label: "All Properties", count: 24, active: true },
  { label: "Active", count: 18 },
  { label: "Pending", count: 4 },
  { label: "Sold", count: 2 },
];

const properties: Property[] = [
  {
    title: "Sapphire Bay Villa",
    location: "Worli Sea Face, Mumbai",
    price: "Rs 12.4Cr",
    transaction: "Sale",
    status: "Active",
    beds: 5,
    baths: 4,
    area: "3,200",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Modern luxury villa with large windows and a pool",
  },
  {
    title: "Modern Loft Downtown",
    location: "Bandra Kurla Complex, Mumbai",
    price: "Rs 4.5L/mo",
    transaction: "Rent",
    status: "Pending",
    beds: 2,
    baths: 2,
    area: "1,450",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Contemporary home facade with manicured landscaping",
  },
  {
    title: "Willow Creek Estate",
    location: "Alibaug, Maharashtra",
    price: "Rs 7.8Cr",
    transaction: "Sale",
    status: "Active",
    beds: 4,
    baths: 3,
    area: "2,100",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Bright residential living space opening to greenery",
  },
  {
    title: "The Marble Residence",
    location: "Juhu, Mumbai",
    price: "Rs 18.5Cr",
    transaction: "Sale",
    status: "Sold",
    beds: 6,
    baths: 5,
    area: "5,400",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Luxury kitchen with marble island and warm lighting",
  },
];

const propertyTypes = ["Residential", "Commercial", "Industrial", "Land"];
const amenities = [
  { label: "Pool", icon: "analytics" },
  { label: "Garage", icon: "garage" },
  { label: "Garden", icon: "outdoor_garden" },
  { label: "Gym", icon: "fitness_center" },
];

function StatusBadge({ status }: { status: Property["status"] }) {
  const classes = {
    Active: "border-green-200 bg-green-100 text-green-700",
    Pending: "border-blue-200 bg-blue-100 text-blue-700",
    Sold: "border-slate-200 bg-slate-100 text-slate-600",
  };

  return <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${classes[status]}`}>{status}</span>;
}

function PropertyCard({ property }: { property: Property }) {
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
          <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${property.transaction === "Sale" ? "bg-[#0077b6] text-white" : "bg-[#67bafd] text-[#004972]"}`}>
            {property.transaction}
          </span>
          <StatusBadge status={property.status} />
        </div>
        <button aria-label={`Save ${property.title}`} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-400 shadow-sm backdrop-blur transition-colors hover:text-red-600">
          <Icon name="check_circle" className="text-lg" />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold leading-tight text-slate-900">{property.title}</h2>
          <span className="whitespace-nowrap text-lg font-bold text-[#0077b6]">{property.price}</span>
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
          <button className="text-xs font-bold uppercase text-[#0077b6] transition-colors hover:text-[#48cae4]">Details</button>
        </div>
      </div>
    </article>
  );
}

function FilterSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
      <section className="rounded-xl border border-[#90e0ef] bg-white p-5 shadow-xl shadow-[#03045e]/10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Icon name="filter_list" className="text-[#0077b6]" />
            Search Filters
          </h2>
          <button className="text-xs font-bold uppercase text-[#0077b6] hover:underline">Reset</button>
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-xs font-bold uppercase tracking-[0.05em] text-slate-400">Property Type</label>
          <div className="space-y-2">
            {propertyTypes.map((type, index) => (
              <label className="flex cursor-pointer items-center text-sm text-slate-700 transition-colors hover:text-[#0077b6]" key={type}>
                <input className="h-4 w-4 rounded border-sky-100 text-[#0077b6]" defaultChecked={index === 0} type="checkbox" />
                <span className="ml-3">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-xs font-bold uppercase tracking-[0.05em] text-slate-400">Price Range</label>
          <div className="grid grid-cols-2 gap-2">
            <input className="w-full rounded-lg border border-sky-100 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-sky-100" placeholder="Min" type="text" />
            <input className="w-full rounded-lg border border-sky-100 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-sky-100" placeholder="Max" type="text" />
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-3 block text-xs font-bold uppercase tracking-[0.05em] text-slate-400">Transaction Type</label>
          <div className="flex rounded-lg border border-sky-100 bg-slate-50 p-1">
            <button className="flex-1 rounded-md bg-white py-1.5 text-xs font-bold text-[#0077b6] shadow">For Sale</button>
            <button className="flex-1 rounded-md py-1.5 text-xs font-bold text-slate-500 transition-colors hover:text-slate-700">For Rent</button>
          </div>
        </div>

        <div className="mb-8">
          <label className="mb-3 block text-xs font-bold uppercase tracking-[0.05em] text-slate-400">Amenities</label>
          <div className="grid grid-cols-2 gap-2">
            {amenities.map((amenity) => (
              <button className="flex items-center gap-2 rounded-lg border border-sky-50 px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-sky-50" key={amenity.label}>
                <Icon name={amenity.icon} className="text-base" />
                <span>{amenity.label}</span>
              </button>
            ))}
          </div>
        </div>

        <button className="flex w-full items-center justify-center rounded-lg bg-slate-900 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-slate-800">Apply Filters</button>
      </section>

      <section className="relative overflow-hidden rounded-xl bg-[#070a61] p-6 text-white">
        <div className="relative z-10">
          <h2 className="mb-1 text-lg font-bold">New Market Report</h2>
          <p className="mb-4 text-xs text-white/70">Mumbai luxury values increased by 12% last month.</p>
          <button className="rounded-full bg-white px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#070a61]">Download PDF</button>
        </div>
        <Icon name="analytics" className="absolute -bottom-5 -right-5 h-24 w-24 text-white/20" />
      </section>
    </aside>
  );
}

export default function PropertiesPage() {
  return (
    <CrmShell activePath="/properties" showFab={false}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-4 py-6 pb-28 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:p-8">
        <div className="min-w-0">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-slate-900">Property Inventory</h1>
              <p className="mt-1 text-[15px] text-slate-500">Manage and track listed real estate assets.</p>
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
                  tab.active ? "bg-[#67bafd] text-[#004972]" : "bg-[#ade8f4] text-[#006399] hover:bg-[#cde5ff]"
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
