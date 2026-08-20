"use client";

import { FormEvent, useEffect, useState } from "react";
import Icon from "./Icon";
import { createLead, getEmployees, getProperties } from "../utils/api-client";
import type { ApiEmployee, ApiProperty } from "../utils/api-types";

type Props = { open: boolean; onClose: () => void; onCreated?: () => void };
const inputClass = "w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-800 outline-none focus:border-[#0077b6] focus:ring-4 focus:ring-sky-100";
const emptyForm = { contactName: "", email: "", phone: "", intent: "", expectedValue: "", source: "", propertyId: "", assignedEmployeeId: "" };

export function NewLeadModal({ open, onClose, onCreated }: Props) {
  const [properties, setProperties] = useState<ApiProperty[]>([]);
  const [employees, setEmployees] = useState<ApiEmployee[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm(emptyForm);
    setError("");
    setLoading(true);
    Promise.all([getProperties(1, 100), getEmployees(1, 100)])
      .then(([propertyResult, employeeResult]) => {
        setProperties(propertyResult.items);
        setEmployees(employeeResult.items.filter((item) => item.isActive));
      })
      .catch((cause) => setError(cause instanceof Error ? cause.message : "Unable to load lead options. Please try again."))
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
      await createLead({ contactName: form.contactName.trim(), email: form.email.trim(), phone: form.phone.trim() || undefined, intent: form.intent.trim() || undefined, expectedValue: form.expectedValue ? Number(form.expectedValue) : undefined, source: form.source.trim() || undefined, propertyId: form.propertyId || undefined, assignedEmployeeId: form.assignedEmployeeId || undefined });
      onCreated?.();
      onClose();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to create the lead.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4" role="dialog" aria-modal="true" aria-labelledby="new-lead-title">
      <div className="max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0077b6]">Lead pipeline</p><h2 id="new-lead-title" className="mt-1 text-2xl font-bold text-slate-900">Add new lead</h2><p className="mt-1 text-sm text-slate-500">Capture a prospective client and their property interest.</p></div><button type="button" onClick={onClose} aria-label="Close dialog" className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><Icon name="close" /></button></div>
        <form onSubmit={submit} className="space-y-5 px-6 py-6">
          {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
          {loading ? <p className="py-8 text-center text-sm text-slate-500">Loading lead options...</p> : <>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">{label("Contact name", true)}<input required value={form.contactName} onChange={(e) => update("contactName", e.target.value)} placeholder="e.g. Priya Sharma" className={inputClass} /></label>
              <label className="space-y-2">{label("Email", true)}<input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="priya@example.com" className={inputClass} /></label>
              <label className="space-y-2">{label("Phone")}<input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 98765 43210" className={inputClass} /></label>
              <label className="space-y-2">{label("Source")}<select value={form.source} onChange={(e) => update("source", e.target.value)} className={inputClass}><option value="">Select a source</option><option value="Walk-in">Walk-in</option><option value="Referral">Referral</option><option value="Website">Website</option></select></label>
              <label className="space-y-2">{label("Intent")}<input value={form.intent} onChange={(e) => update("intent", e.target.value)} placeholder="e.g. Looking for a 3 BHK" className={inputClass} /></label>
              <label className="space-y-2">{label("Expected value")}<input min="0" step="0.01" type="number" value={form.expectedValue} onChange={(e) => update("expectedValue", e.target.value)} placeholder="e.g. 7500000" className={inputClass} /></label>
              <label className="space-y-2">{label("Property interest")}<select value={form.propertyId} onChange={(e) => update("propertyId", e.target.value)} className={inputClass}><option value="">No property selected</option>{properties.map((item) => <option key={item.id} value={item.id}>{item.title} · {item.location}</option>)}</select></label>
              <label className="space-y-2">{label("Assigned agent")}<select value={form.assignedEmployeeId} onChange={(e) => update("assignedEmployeeId", e.target.value)} className={inputClass}><option value="">Unassigned</option>{employees.map((item) => <option key={item.id} value={item.id}>{item.fullName} · {item.role}</option>)}</select></label>
            </div>
            <div className="flex justify-end gap-3 border-t border-slate-100 pt-5"><button type="button" onClick={onClose} className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100">Cancel</button><button type="submit" disabled={saving} className="rounded-xl bg-[#2a2c94] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0077b6] disabled:opacity-60">{saving ? "Creating..." : "Create lead"}</button></div>
          </>}
        </form>
      </div>
    </div>
  );
}
