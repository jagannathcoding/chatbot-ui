import { Link, useLocation } from "react-router-dom";

const getRiskLevel = (score) => {
  if (score <= 7) {
    return { label: "Low", color: "text-emerald-500" };
  }

  if (score <= 15) {
    return { label: "Moderate", color: "text-amber-500" };
  }

  return { label: "High", color: "text-rose-500" };
};

const ScoreCircle = ({ score }) => {
  const percentage = (score / 30) * 100;

  return (
    <div
      className="mx-auto flex h-48 w-48 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(#ef4444 ${percentage}%, #cbd5e1 ${percentage}% 100%)`,
      }}
    >
      <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-white shadow-inner">
        <span className="text-5xl font-extrabold text-ink-800">{score}</span>
        <span className="mt-1 text-sm font-medium text-slate-500">out of 30</span>
      </div>
    </div>
  );
};

const ResultPage = () => {
  const location = useLocation();
  const storedResult = JSON.parse(localStorage.getItem("mental-health-assessment") || "{}");
  const totalScore = location.state?.totalScore ?? storedResult.totalScore ?? 0;
  const risk = getRiskLevel(totalScore);

  return (
    <div className="mx-auto max-w-3xl">
      <section className="rounded-[2.25rem] border border-white/80 bg-white/90 p-8 text-center shadow-soft sm:p-10">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lavender-50 text-base font-bold tracking-[0.25em] text-lavender-600">
          RS
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lavender-500">
          Your Assessment Result
        </p>

        <div className="mt-8">
          <ScoreCircle score={totalScore} />
        </div>

        <div className="mt-8 text-2xl font-semibold text-ink-800">
          Risk Level: <span className={risk.color}>{risk.label}</span>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-rose-100 bg-rose-50 px-6 py-5 text-sm leading-7 text-slate-700">
          This is not a medical diagnosis. Please consult a mental health professional if
          you feel distressed.
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/chatbot"
            className="inline-flex items-center justify-center rounded-2xl bg-lavender-600 px-6 py-3 font-semibold text-white shadow-card transition hover:bg-lavender-700"
          >
            Go to Chatbot
          </Link>
          <Link
            to="/resources"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-teal-400 to-mintsoft-500 px-6 py-3 font-semibold text-white shadow-card transition hover:opacity-95"
          >
            View Resources
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResultPage;
