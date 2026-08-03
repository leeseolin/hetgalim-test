type StaticPageShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function StaticPageShell({ title, description, children }: StaticPageShellProps) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <header>
        <h1 className="text-3xl font-black sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{description}</p>
      </header>
      <div className="mt-8 rounded-md border border-[var(--line)] bg-white p-5 leading-8 text-[var(--muted)] shadow-sm sm:p-7">
        {children}
      </div>
    </main>
  );
}
