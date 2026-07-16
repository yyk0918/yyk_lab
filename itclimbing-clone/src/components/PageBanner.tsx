export default function PageBanner({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-primary-dark to-slate-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-300">
          {subtitle}
        </p>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
