import { FilterOption, Lead, Insight } from "../utils/types";
import { Property, PropertyTab, Amenity } from "../utils/types";
import { DealColumn } from "../utils/types";
import { ScheduleItem, Task, SummaryCard } from "../utils/types";
export const metrics = [
  {
    label: "TOTAL LEADS",
    value: "1,284",
    icon: "groups",
    badge: "+12.5%",
    badgeClass: "bg-green-50 text-green-600",
    iconClass: "bg-sky-50 text-[#0077b6]",
  },
  {
    label: "ACTIVE DEALS",
    value: "45",
    icon: "handshake",
    badge: "Active",
    badgeClass: "bg-blue-50 text-blue-600",
    iconClass: "bg-blue-50 text-[#006399]",
  },
  {
    label: "TOTAL REVENUE",
    value: "Rs 2.4Cr",
    icon: "payments",
    badge: "YTD",
    badgeClass: "bg-slate-100 text-slate-500",
    iconClass: "bg-indigo-50 text-[#070a61]",
  },
  {
    label: "PENDING TASKS",
    value: 0,
    icon: "assignment_late",
    badge: "Due Today",
    badgeClass: "bg-amber-50 text-amber-600",
    iconClass: "bg-amber-50 text-amber-600",
  },
];

export const Dashboardtasks = [
  {
    title: "Call Rajesh Mehta",
    description: "Follow up on Andheri office space",
    time: "10:30 AM",
    icon: "call",
    active: true,
  },
  {
    title: "Viewing: Palm Heights",
    description: "Show 3BHK unit to Shah family",
    time: "01:00 PM",
    icon: "meeting_room",
  },
  {
    title: "Agreement Review",
    description: "Finalize lease draft for Unit 4B",
    time: "04:15 PM",
    icon: "contract_edit",
  },
];

export const recentLeads = [
  {
    name: "Eleanor Hughes",
    initials: "EH",
    intent: "Luxury Condos, Downtown",
    source: "Website",
    date: "May 20, 2026",
    status: "New Lead",
    statusClass: "bg-blue-100 text-blue-700",
    avatarClass: "bg-[#bfc2ff] text-[#070a61]",
  },
  {
    name: "Robert Palmer",
    initials: "RP",
    intent: "Single Family, Suburbs",
    source: "Referral",
    date: "May 19, 2026",
    status: "In Progress",
    statusClass: "bg-amber-100 text-amber-700",
    avatarClass: "bg-[#ffb4a7] text-[#7a2e23]",
  },
  {
    name: "Alice Morgen",
    initials: "AM",
    intent: "Commercial Space",
    source: "Portal",
    date: "May 18, 2026",
    status: "Closed",
    statusClass: "bg-green-100 text-green-700",
    avatarClass: "bg-[#cde5ff] text-[#004b74]",
  },
];

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

export const leadsFilters: FilterOption[] = [
  {
    label: "Status",
    options: ["All Statuses", "New", "Contacted", "Qualified", "Negotiating"],
  },
  {
    label: "Agent",
    options: ["All Agents", "Marcus Sterling", "Priya Shah", "Raj Malhotra"],
  },
  {
    label: "Property Type",
    options: ["All Types", "Residential", "Commercial", "Industrial"],
  },
];

export const leadsData: Lead[] = [
  {
    name: "Julianne Sterling",
    initials: "JS",
    added: "Added 2 hours ago",
    email: "julianne.s@email.com",
    phone: "+91 98765 12340",
    property: "The Azure Penthouse",
    intent: "High Intent - Rs 2.4Cr",
    status: "NEW",
    statusClass: "bg-sky-100 text-sky-700 border-sky-200",
    agent: "Marcus Sterling",
    agentInitials: "MS",
    avatarClass: "bg-[#bfc2ff] text-[#070a61]",
  },
  {
    name: "Marcus Thompson",
    initials: "MT",
    added: "Added yesterday",
    email: "m.thompson@corp.com",
    phone: "+91 99887 65432",
    property: "Industrial Lofts Unit 4B",
    intent: "Viewing Scheduled - Rs 7.1Cr",
    status: "CONTACTED",
    statusClass: "bg-amber-100 text-amber-700 border-amber-200",
    agent: "Priya Shah",
    agentInitials: "PS",
    avatarClass: "bg-[#cde5ff] text-[#004b74]",
  },
  {
    name: "Rebecca Bloom",
    initials: "RB",
    added: "Added 3 days ago",
    email: "rebecca@bloomdesign.io",
    phone: "+91 91234 56780",
    property: "Greenwood Estate",
    intent: "Qualified Lead - Rs 4.2Cr",
    status: "QUALIFIED",
    statusClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
    agent: "Marcus Sterling",
    agentInitials: "MS",
    avatarClass: "bg-[#ffdad4] text-[#7a2e23]",
  },
  {
    name: "Kevin Lansing",
    initials: "KL",
    added: "Added 1 week ago",
    email: "klansing@techhub.com",
    phone: "+91 90123 45678",
    property: "Modern Coastal Villa",
    intent: "Nurturing - Rs 3.8Cr",
    status: "NEW",
    statusClass: "bg-sky-100 text-sky-700 border-sky-200",
    agent: "Raj Malhotra",
    agentInitials: "RM",
    avatarClass: "bg-slate-200 text-slate-600",
  },
];

export const leadsInsights: Insight[] = [
  {
    label: "Conversion Rate",
    value: "24.8%",
    icon: "trending_up",
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Active Leads",
    value: "156",
    icon: "group",
    iconClass: "bg-sky-50 text-sky-600",
  },
  {
    label: "Avg. Response Time",
    value: "14m",
    icon: "bolt",
    iconClass: "bg-amber-50 text-amber-600",
  },
];

export const propertyTabs: PropertyTab[] = [
  { label: "All Properties", count: 24, active: true },
  { label: "Active", count: 18 },
  { label: "Pending", count: 4 },
  { label: "Sold", count: 2 },
];

export const properties: Property[] = [
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

export const propertyTypes = [
  "Residential",
  "Commercial",
  "Industrial",
  "Land",
];

export const amenities: Amenity[] = [
  { label: "Pool", icon: "analytics" },
  { label: "Garage", icon: "garage" },
  { label: "Garden", icon: "outdoor_garden" },
  { label: "Gym", icon: "fitness_center" },
];

export const summaryCards: SummaryCard[] = [
  {
    label: "DUE TODAY",
    value: "08",
    icon: "assignment_late",
    badge: "3 High",
    badgeClass: "bg-amber-50 text-amber-600",
    iconClass: "bg-amber-50 text-amber-600",
  },
  {
    label: "COMPLETED",
    value: "24",
    icon: "check_circle",
    badge: "+6",
    badgeClass: "bg-emerald-50 text-emerald-600",
    iconClass: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "FOLLOW UPS",
    value: "16",
    icon: "call",
    badge: "This Week",
    badgeClass: "bg-sky-50 text-sky-700",
    iconClass: "bg-sky-50 text-[#0077b6]",
  },
  {
    label: "SITE VISITS",
    value: "05",
    icon: "meeting_room",
    badge: "Scheduled",
    badgeClass: "bg-indigo-50 text-indigo-700",
    iconClass: "bg-indigo-50 text-[#070a61]",
  },
];

export const tasks: Task[] = [
  {
    title: "Call Rajesh Mehta",
    description:
      "Follow up on Andheri office space requirements and budget approval.",
    contact: "Rajesh Mehta",
    time: "10:30 AM",
    status: "Due Today",
    priority: "High",
    icon: "call",
    ownerInitials: "MS",
    ownerClass: "bg-sky-600 text-white",
  },
  {
    title: "Viewing: Palm Heights",
    description:
      "Show 3BHK unit and share parking details with the Shah family.",
    contact: "Shah Family",
    time: "01:00 PM",
    status: "Due Today",
    priority: "High",
    icon: "meeting_room",
    ownerInitials: "PS",
    ownerClass: "bg-[#cde5ff] text-[#004b74]",
  },
  {
    title: "Agreement Review",
    description: "Finalize lease draft for Unit 4B before sending it to legal.",
    contact: "Amit Desai",
    time: "04:15 PM",
    status: "Due Today",
    priority: "Medium",
    icon: "contract_edit",
    ownerInitials: "MS",
    ownerClass: "bg-sky-600 text-white",
  },
  {
    title: "Send Property Shortlist",
    description:
      "Share Bandra commercial options with updated rental comparison.",
    contact: "Neha Kapoor",
    time: "Tomorrow",
    status: "Upcoming",
    priority: "Medium",
    icon: "domain",
    ownerInitials: "RM",
    ownerClass: "bg-slate-200 text-slate-600",
  },
  {
    title: "Collect KYC Documents",
    description: "Request missing company PAN and authorization letter.",
    contact: "Viraj Holdings",
    time: "May 22",
    status: "Upcoming",
    priority: "Low",
    icon: "assignment",
    ownerInitials: "PS",
    ownerClass: "bg-[#cde5ff] text-[#004b74]",
  },
  {
    title: "Update Deal Notes",
    description: "Add negotiation remarks from the Worli villa inspection.",
    contact: "Dr. Patel",
    time: "Yesterday",
    status: "Overdue",
    priority: "High",
    icon: "contract_edit",
    ownerInitials: "MS",
    ownerClass: "bg-sky-600 text-white",
  },
  {
    title: "Confirm Payment Schedule",
    description: "Record token timeline and milestone payment dates.",
    contact: "Kumar Group",
    time: "Completed",
    status: "Completed",
    priority: "Low",
    icon: "payments",
    ownerInitials: "RM",
    ownerClass: "bg-slate-200 text-slate-600",
  },
];

export const schedule: ScheduleItem[] = [
  {
    time: "10:30",
    title: "Rajesh Mehta call",
    type: "Follow up",
    active: true,
  },
  { time: "13:00", title: "Palm Heights viewing", type: "Site visit" },
  { time: "16:15", title: "Agreement review", type: "Documentation" },
];

export const filters = ["All Tasks", "Due Today", "High Priority", "Completed"];
