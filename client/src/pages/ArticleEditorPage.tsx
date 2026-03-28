import MarkdownPreview from "../components/MarkdownPreview";

export default function ArticleEditorPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Secure / Input Safety</p>
          <h1 className="mt-2 text-3xl font-semibold">Unsafe Markdown Preview</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">Markdown preview renders unsafe user content and allows script injection. Sanitize dangerous content without breaking normal formatting behavior.</p>
        </header>
      <MarkdownPreview />
      </div>
    </main>
  );
}
