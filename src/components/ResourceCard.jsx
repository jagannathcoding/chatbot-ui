const toneClasses = {
  blue: "from-skysoft-100 to-white text-sky-700",
  teal: "from-mintsoft-100 to-white text-teal-700",
  purple: "from-lavender-100 to-white text-lavender-700",
};

const ResourceCard = ({ title, description, actionLabel, actionHref, tone = "purple" }) => {
  return (
    <article className="rounded-[1.75rem] border border-white/80 bg-white/90 p-6 shadow-card">
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${toneClasses[tone]}`}
      >
        <span className="text-lg font-bold">+</span>
      </div>
      <h3 className="text-xl font-semibold text-ink-800">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <a
        href={actionHref}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lavender-600 transition hover:text-lavender-700"
      >
        {actionLabel}
        <span aria-hidden="true">-&gt;</span>
      </a>
    </article>
  );
};

export default ResourceCard;
