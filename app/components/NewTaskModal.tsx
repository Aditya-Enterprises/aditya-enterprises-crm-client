"use client";

import { FormEvent, useEffect, useState } from "react";
import Icon from "./Icon";
import { createTask, getDeals, getEmployees, getLeads, getProperties } from "../utils/api-client";
import type { ApiDeal, ApiEmployee, ApiLead, ApiProperty } from "../utils/api-types";

type Props = { open: boolean; onClose: () => void; onCreated?: () => void };
const inputClass = "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-800 outline-none focus:border-[#0077b6] focus:ring-4 focus:ring-sky-100";
const emptyForm = { title: "", description: "", contactName: "", dueAt: "", priority: "Medium" as "Low" | "Medium" | "High", taskType: "", assignedEmployeeId: "", leadId: "", dealId: "", propertyId: "" };

function defaultDueAt() {
  const date = new Date(Date.now() + 60 * 60 * 1000);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 16);
}

export function NewTaskModal({ open, onClose, onCreated }: Props) {
  const [employees, setEmployees] = useState<ApiEmployee[]>([]);
  const [leads, setLeads] = useState<ApiLead[]>([]);
  const [deals, setDeals] = useState<ApiDeal[]>([]);
  const [properties, setProperties] = useState<ApiProperty[]>([]);
  const [form, setForm] = useState({ ...emptyForm, dueAt: defaultDueAt() });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm({ ...emptyForm, dueAt: defaultDueAt() });
    setError("");
    setLoading(true);
    Promise.all([getEmployees(1, 100), getLeads(1, 100), getDeals(1, 100), getProperties(1, 100)])
      .then(([employeeResult, leadResult, dealResult, propertyResult]) => {
        setEmployees(employeeResult.items.filter((item) => item.isActive));
        setLeads(leadResult.items);
        setDeals(dealResult.items);
        setProperties(propertyResult.items);
      })
      .catch((cause) => setError(cause instanceof Error ? cause.message : "Unable to load task options. Please try again."))
      .finally(() => setLoading(false));
  }, [open]);

  if (!open) return null;
  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const label = (text: string, required = false) => <span className="text-sm font-semibold text-slate-700">{text} {required && <span className="text-red-500">*</span>}</span>;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSaving(true);
    try {
      await createTask({
        title: form.title.trim(), description: form.description.trim() || undefined, contactName: form.contactName.trim() || undefined,
        dueAtUtc: new Date(form.dueAt).toISOString(), priority: form.priority, taskType: form.taskType || undefined,
        assignedEmployeeId: form.assignedEmployeeId || undefined, leadId: form.leadId || undefined, dealId: form.dealId || undefined, propertyId: form.propertyId || undefined,
      });
      onCreated?.();
      onClose();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to create the task.");
    } finally { setSaving(false); }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4" role="dialog" aria-modal="true" aria-labelledby="new-task-title">
      <div className="max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0077b6]">Task management</p><h2 id="new-task-title" className="mt-1 text-2xl font-bold text-slate-900">Add new task</h2><p className="mt-1 text-sm text-slate-500">Create a follow-up, visit, or paperwork reminder.</p></div>
          <button type="button" onClick={onClose} aria-label="Close dialog" className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><Icon name="close" /></button>
        </div>
        <form onSubmit={submit} className="space-y-5 px-6 py-6">
          {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
          {loading ? <p className="py-8 text-center text-sm text-slate-500">Loading task options...</p> : <>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 sm:col-span-2">{label("Task title", true)}<input required value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="e.g. Follow up on site visit" className={inputClass} /></label>
              <label className="space-y-2">{label("Due date and time", true)}<input required type="datetime-local" value={form.dueAt} onChange={(e) => update("dueAt", e.target.value)} className={inputClass} /></label>
              <label className="space-y-2">{label("Priority", true)}<select required value={form.priority} onChange={(e) => update("priority", e.target.value)} className={inputClass}><option>Low</option><option>Medium</option><option>High</option></select></label>
              <label className="space-y-2">{label("Task type")}<select value={form.taskType} onChange={(e) => update("taskType", e.target.value)} className={inputClass}><option value="">Select a type</option><option value="Call">Call</option><option value="Meeting">Meeting</option><option value="Site Visit">Site Visit</option><option value="Paperwork">Paperwork</option><option value="Follow-up">Follow-up</option></select></label>
              <label className="space-y-2">{label("Assigned agent")}<select value={form.assignedEmployeeId} onChange={(e) => update("assignedEmployeeId", e.target.value)} className={inputClass}><option value="">Unassigned</option>{employees.map((item) => <option key={item.id} value={item.id}>{item.fullName} · {item.role}</option>)}</select></label>
              <label className="space-y-2">{label("Contact name")}<input value={form.contactName} onChange={(e) => update("contactName", e.target.value)} placeholder="e.g. Priya Sharma" className={inputClass} /></label>
              <label className="space-y-2">{label("Lead")}<select value={form.leadId} onChange={(e) => update("leadId", e.target.value)} className={inputClass}><option value="">No lead linked</option>{leads.map((item) => <option key={item.id} value={item.id}>{item.contactName} · {item.status}</option>)}</select></label>
              <label className="space-y-2">{label("Deal")}<select value={form.dealId} onChange={(e) => update("dealId", e.target.value)} className={inputClass}><option value="">No deal linked</option>{deals.map((item) => <option key={item.id} value={item.id}>{item.client} · {item.stage}</option>)}</select></label>
              <label className="space-y-2">{label("Property")}<select value={form.propertyId} onChange={(e) => update("propertyId", e.target.value)} className={inputClass}><option value="">No property linked</option>{properties.map((item) => <option key={item.id} value={item.id}>{item.title} · {item.location}</option>)}</select></label>
              <label className="space-y-2 sm:col-span-2">{label("Description")}<textarea rows={3} value={form.description} onChange={(e) => update("description", e.target.value)} placeholder="Add any useful context for the team" className={inputClass} /></label>
            </div>
            <div className="flex justify-end gap-3 border-t border-slate-100 pt-5"><button type="button" onClick={onClose} className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100">Cancel</button><button type="submit" disabled={saving} className="rounded-xl bg-[#2a2c94] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0077b6] disabled:opacity-60">{saving ? "Creating..." : "Create task"}</button></div>
          </>}
        </form>
      </div>
    </div>
  );
}
