:root {
  --bg: #f1f5f9;
  --panel: #ffffff;
  --text: #0f172a;
  --muted: #64748b;
  --border: #e2e8f0;
  --soft: #f8fafc;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background: var(--bg); color: var(--text); }
a { color: inherit; text-decoration: none; }
button, input, select { font: inherit; }

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 24px;
}

.hero {
  background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
  color: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

.hero p { color: #cbd5e1; max-width: 780px; line-height: 1.6; }

.stats,
.filters,
.results-grid,
.meta-grid {
  display: grid;
  gap: 16px;
}

.stats { grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 20px; }
.filters { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.results-grid { grid-template-columns: 1fr; }
.meta-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

.card,
.stat,
.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: 0 3px 10px rgba(15, 23, 42, 0.04);
}

.stat,
.panel { padding: 18px; }
.card { padding: 20px; }

.label { color: var(--muted); font-size: 13px; }
.value { font-size: 28px; font-weight: 700; margin-top: 6px; }

.field {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--soft);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 12px 14px;
}

.field input,
.field select {
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
}

.toolbar,
.row-between,
.card-header,
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.badge {
  background: #e2e8f0;
  color: #334155;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 600;
}

.softbox {
  background: var(--soft);
  border-radius: 16px;
  padding: 14px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--border);
  background: white;
  border-radius: 14px;
  padding: 10px 14px;
  cursor: pointer;
}

.btn:disabled { opacity: 0.5; cursor: not-allowed; }

.muted { color: var(--muted); }
.h1 { font-size: 40px; font-weight: 800; margin: 8px 0 0; }
.h2 { font-size: 28px; font-weight: 800; margin: 0; }
.h3 { font-size: 20px; font-weight: 800; margin: 0; }
.mono { font-family: "Courier New", monospace; }
.pre {
  overflow: auto;
  background: #020617;
  color: #e2e8f0;
  border-radius: 16px;
  padding: 16px;
  font-size: 12px;
  line-height: 1.6;
}

@media (max-width: 1000px) {
  .stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .filters { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 700px) {
  .container { padding: 16px; }
  .stats, .filters, .meta-grid { grid-template-columns: 1fr; }
  .h1 { font-size: 32px; }
}
