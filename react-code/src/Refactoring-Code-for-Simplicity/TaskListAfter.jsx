

function matchesQuery(task, q) {
  return !q || task.name.toLowerCase().includes(q.toLowerCase());
}

function matchesPriority(task, selected) {
  return selected === "ALL" || task.priority === selected;
}

function makeComparator(sortKey) {
  if (sortKey === "name") {
    return (a, b) => a.name.localeCompare(b.name);
  }
  return (a, b) => {
    const ad = a.due ? new Date(a.due).getTime() : Infinity;
    const bd = b.due ? new Date(b.due).getTime() : Infinity;
    return ad - bd || a.name.localeCompare(b.name);
  };
}

function formatTaskLabel(task) {
  const dueText = task.due ? ` (due ${new Date(task.due).toLocaleDateString()})` : "";
  return `${task.completed ? "✅ " : ""}${task.name}${dueText}`;
}

export default function TaskListAfter({ tasks = [] }) {
  const [q, setQ] = useState("");
  const [priority, setPriority] = useState("ALL");
  const [sort, setSort] = useState("due");

  const processed = useMemo(() => {
    return tasks
      .filter(t => matchesQuery(t, q) && matchesPriority(t, priority))
      .slice()
      .sort(makeComparator(sort))
      .map(t => ({ ...t, label: formatTaskLabel(t) }));
  }, [tasks, q, priority, sort]);

  return (
    <div style={{ padding: 16 }}>
      <h2>Tasks (After)</h2>
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
        {processed.map(t => <li key={t.id}>{t.label}</li>)}
      </ul>
    </div>
  );
}
