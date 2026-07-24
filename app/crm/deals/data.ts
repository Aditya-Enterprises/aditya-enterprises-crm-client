export type Deal = {
  client: string;
  property: string;
  value: string;
  tag: string;
  tagClass: string;
  tagIcon?: string;
  owner: string;
  ownerClass: string;
};

export type DealColumn = {
  title: string;
  count: number;
  value: string;
  dotClass: string;
  closed?: boolean;
  deals: Deal[];
};

export const dealsColumns: DealColumn[] = [
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
