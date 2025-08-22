import React, { useState, useMemo } from "react";

export default function TaskListBefore({ tasks = [] }) {
  const [q, setQ] = useState("");
  const [priority, setPriority] = useState("ALL");
  const [sort, setSort] = useState("due");

  const computed = useMemo(() => {
    let out = tasks.slice();

    out = out.filter(t => {
      if (q && !t.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (priority !== "ALL" && t.priority !== priority) return false;
      return true;
    });

    out.sort((a, b) => {
      if (sort === "due") {
        const ad = a.due ? new Date(a.due).getTime() : Infinity;
        const bd = b.due ? new Date(b.due).getTime() : Infinity;
        return ad - bd;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

    return out.map(t => ({
      ...t,
      label: `${t.completed ? "✅ " : ""}${t.name}${t.due ? ` (due ${new Date(t.due).toLocaleDateString()})` : ""}`
    }));
  }, [tasks, q, priority, sort]);

  return (
    <div style={{ padding: 16 }}>
      <h2>Tasks (Before)</h2>
      <div style={{ display: "flex", gap: 8 }}>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search…" />
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option>ALL</option><option>LOW</option><option>MEDIUM</option><option>HIGH</option>
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="due">Due date</option>
          <option value="name">Name</option>
        </select>
      </div>
      <ul style={{ marginTop: 12 }}>
        {computed.map(t => <li key={t.id}>{t.label}</li>)}
      </ul>
    </div>
  );
}
