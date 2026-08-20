export const navigationItems = [
  {
    label: "Dashboard",
    icon: "dashboard",
    href: "/dashboard",
    visibleToRole: ["agent", "administrator"],
  },
  {
    label: "Deals",
    icon: "view_kanban",
    href: "/deals",
    visibleToRole: ["agent", "administrator"],
  },
  {
    label: "Leads",
    icon: "person_search",
    href: "/leads",
    visibleToRole: ["agent", "administrator"],
  },
  {
    label: "Tasks",
    icon: "assignment",
    href: "/tasks",
    visibleToRole: ["agent", "administrator"],
  },
  {
    label: "Properties",
    icon: "domain",
    href: "/properties",
    visibleToRole: ["agent", "administrator"],
  },
  {
    label: "Employees",
    icon: "person_search",
    href: "/employees",
    visibleToRole: ["administrator"],
  },
];
