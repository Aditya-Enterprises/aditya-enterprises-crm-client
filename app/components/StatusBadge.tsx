import { Property } from "./data";

export function StatusBadge({ status }: { status: Property["status"] }) {
  const classes = {
    Active: "border-green-200 bg-green-100 text-green-700",
    Pending: "border-blue-200 bg-blue-100 text-blue-700",
    Sold: "border-slate-200 bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${classes[status]}`}
    >
      {status}
    </span>
  );
}
