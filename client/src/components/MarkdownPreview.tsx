export default function MarkdownPreview() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Starter Component</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">Markdown Preview</h2>
      </div>
      <article className="prose prose-slate max-w-none rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h3>Preview</h3>
        <p>This starter intentionally keeps the rendering simple and safe.</p>
        <ul>
          <li>Lightweight content</li>
          <li>Readable structure</li>
          <li>Room for the real implementation</li>
        </ul>
      </article>
    </section>
  );
}
