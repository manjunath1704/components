export default function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-start justify-center gap-4 px-6 py-16">
      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Flowbite + Storybook
      </span>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900">
        This workspace is intended to be explored through Storybook.
      </h1>
      <p className="max-w-xl text-base text-slate-600">
        Run <code>npm install</code> and <code>npm run storybook</code> to browse the generated Flowbite component stories.
      </p>
    </main>
  );
}
