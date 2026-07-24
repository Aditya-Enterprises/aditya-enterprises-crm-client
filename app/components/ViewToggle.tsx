import Icon from "@/app/components/Icon";

export function ViewToggle() {
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
