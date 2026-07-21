import { CrmShell, Icon } from "../components/crm-shell";

type Deal = {
  client: string;
  property: string;
  value: string;
  tag: string;
  tagClass: string;
  tagIcon?: string;
  owner: string;
  ownerClass: string;
};

type DealColumn = {
  title: string;
  count: number;
  value: string;
  dotClass: string;
  closed?: boolean;
  deals: Deal[];
};

const columns: DealColumn[] = [
  {
    title: "New",
    count: 8,
    value: "Rs 4.2Cr",
    dotClass: "bg-[#00b4d8]",
    deals: [
      {
        client: "Robert Chen",
        property: "Waterfront Villa, Worli",
        value: "Rs 1.25Cr",
        tag: "Premium",
        tagClass: "bg-sky-50 text-sky-700",
        owner: "RC",
        ownerClass: "bg-[#bfc2ff] text-[#070a61]",
      },
      {
        client: "Elena Rodriguez",
        property: "Skyline Penthouse, Unit 42B",
        value: "Rs 89L",
        tag: "Standard",
        tagClass: "bg-[#eae7ee] text-slate-600",
        owner: "ER",
        ownerClass: "bg-sky-100 text-sky-700",
      },
    ],
  },
  {
    title: "Site Visit",
    count: 5,
    value: "Rs 3.8Cr",
    dotClass: "bg-[#67bafd]",
    deals: [
      {
        client: "Marcus Thorne",
        property: "Historic District Loft",
        value: "Rs 2.1Cr",
        tag: "Urgent",
        tagClass: "bg-red-50 text-red-700",
        tagIcon: "schedule",
        owner: "MS",
        ownerClass: "bg-sky-600 text-white",
      },
    ],
  },
  {
    title: "Negotiation",
    count: 3,
    value: "Rs 6.1Cr",
    dotClass: "bg-[#48cae4]",
    deals: [
      {
        client: "Amanda G.",
        property: "Corporate HQ Site C",
        value: "Rs 4.5Cr",
        tag: "Hot Lead",
        tagClass: "bg-[#e0e0ff] text-[#0077b6]",
        owner: "+1",
        ownerClass: "bg-slate-100 text-slate-600",
      },
    ],
  },
  {
    title: "Closed",
    count: 8,
    value: "Rs 1.2Cr",
    dotClass: "bg-[#03045e]",
    closed: true,
    deals: [
      {
        client: "Dr. Patel",
        property: "Medical Office Suite",
        value: "Rs 1.2Cr",
        tag: "Success",
        tagClass: "bg-[#03045e] text-white",
        tagIcon: "check_circle",
        owner: "DP",
        ownerClass: "bg-slate-200 text-slate-600",
      },
    ],
  },
];

function ViewToggle() {
  return (
    <div className="flex rounded-lg border border-[#90e0ef] bg-[#f0ecf4] p-1">
      <button className="flex items-center gap-1.5 rounded bg-white px-3 py-1.5 text-xs font-semibold text-[#0077b6] shadow-sm">
        <Icon name="view_kanban" className="text-base" />
        <span>Board</span>
      </button>
      <button className="flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-900">
        <Icon name="list" className="text-base" />
        <span>List</span>
      </button>
    </div>
  );
}

function DealCard({ deal, closed = false }: { deal: Deal; closed?: boolean }) {
  return (
    <article
      className={`rounded-xl border border-[#90e0ef] p-4 transition-all ${
        closed
          ? "bg-[#f5f2fa] opacity-80 shadow-sm"
          : "bg-white shadow-[0_8px_30px_rgba(3,4,94,0.04)] hover:border-[#0077b6]"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${deal.tagClass}`}>
          {deal.tagIcon ? <Icon name={deal.tagIcon} className="text-xs" /> : null}
          {deal.tag}
        </span>
        <button aria-label={`Open actions for ${deal.client}`} className="rounded p-1 text-slate-300 transition-colors hover:bg-slate-50 hover:text-slate-600">
          <Icon name="more_vert" className="text-lg" />
        </button>
      </div>
      <h3 className="mb-1 text-lg font-semibold leading-tight text-slate-900">{deal.client}</h3>
      <p className="mb-4 flex items-center gap-1 text-[13px] text-slate-500">
        <Icon name="location_on" className="text-base" />
        <span>{deal.property}</span>
      </p>
      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-slate-400">Value</p>
          <p className={`font-bold ${closed ? "text-slate-700" : "text-[#0077b6]"}`}>{deal.value}</p>
        </div>
        <div className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold ${deal.ownerClass}`}>
          {deal.owner}
        </div>
      </div>
    </article>
  );
}

function KanbanColumn({ column }: { column: DealColumn }) {
  return (
    <section className="flex h-full min-w-[300px] max-w-[300px] flex-col sm:min-w-[320px] sm:max-w-[320px]">
      <div className="mb-4 flex items-center justify-between px-2">
        <div className="flex items-center">
          <span className={`mr-2 h-2.5 w-2.5 rounded-full ${column.dotClass}`} />
          <h2 className="text-lg font-semibold text-slate-900">{column.title}</h2>
          <span className="ml-2 rounded-full bg-[#ade8f4] px-2 py-0.5 text-[11px] font-bold text-[#006399]">{column.count}</span>
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.05em] text-slate-500">{column.value}</span>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {column.deals.map((deal) => (
          <DealCard closed={column.closed} deal={deal} key={`${column.title}-${deal.client}`} />
        ))}
      </div>
    </section>
  );
}

export default function DealsPage() {
  return (
    <CrmShell activePath="/deals" showFab={false}>
      <div className="flex min-h-[calc(100vh-4rem)] flex-col">
        <div className="flex flex-col gap-4 bg-white px-4 py-6 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900">Deals Pipeline</h1>
            <p className="mt-1 text-[15px] text-slate-500">Manage 24 active high-value property negotiations.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <ViewToggle />
            <button className="flex items-center gap-2 rounded-lg border border-[#90e0ef] bg-[#f0ecf4] px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-[#ade8f4]">
              <Icon name="filter_list" className="text-lg" />
              <span>Filters</span>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-[#0077b6] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition-all hover:bg-[#48cae4] active:scale-95">
              <Icon name="add" className="text-lg" />
              <span>New Deal</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto bg-[#fbf8ff] px-4 py-6 pb-28 sm:px-6 lg:px-8">
          <div className="flex min-h-[640px] w-max gap-6">
            {columns.map((column) => (
              <KanbanColumn column={column} key={column.title} />
            ))}
            <button className="flex min-w-[300px] max-w-[300px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-sky-100 text-sky-600 transition-colors hover:bg-sky-50 sm:min-w-[320px] sm:max-w-[320px]">
              <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sky-400 shadow-sm">
                <Icon name="add" className="text-2xl" />
              </span>
              <span className="font-semibold">Add Column</span>
            </button>
          </div>
        </div>
      </div>
    </CrmShell>
  );
}
