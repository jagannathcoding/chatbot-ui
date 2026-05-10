import { Link } from "react-router-dom";

const features = [
  {
    title: "Private & Secure",
    description: "Your responses are kept within a calm, protected prototype experience.",
    icon: "PS",
  },
  {
    title: "Multilingual Support",
    description: "Designed to grow into a mental health space that supports multiple languages.",
    icon: "ML",
  },
  {
    title: "Emotional Support",
    description: "A gentle chatbot experience for reflection, support, and next-step guidance.",
    icon: "ES",
  },
];

const HomePage = () => {
  return (
    <div className="space-y-10">
      <section className="grid items-center gap-8 overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/80 p-6 shadow-soft sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div>
          <span className="inline-flex rounded-full bg-lavender-50 px-4 py-2 text-sm font-medium text-lavender-600">
            Your mental well-being matters
          </span>
          <h2 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight text-ink-800 sm:text-5xl">
            Multilingual Mental Health Chatbot
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A web app using deep learning to provide emotional support, detect depression
            risk, and offer multilingual mental health resources.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center rounded-2xl bg-lavender-600 px-6 py-3 text-base font-semibold text-white shadow-card transition hover:bg-lavender-700"
            >
              Start Assessment
            </Link>
            <Link
              to="/chatbot"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-teal-400 to-mintsoft-500 px-6 py-3 text-base font-semibold text-white shadow-card transition hover:opacity-95"
            >
              Open Chatbot
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-lavender-100 blur-3xl" />
          <div className="relative flex w-full items-center justify-center rounded-[2.5rem] border border-lavender-100 bg-gradient-to-br from-lavender-50 to-skysoft-100 p-8 shadow-card">
            <div className="text-center">
              <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-white/80 shadow-soft">
                <div className="relative">
                  <div className="text-[5rem] font-black text-lavender-500">MH</div>
                  <span className="absolute -right-5 top-2 text-3xl font-bold text-lavender-400">
                    *
                  </span>
                  <span className="absolute -left-4 top-10 text-2xl font-bold text-sky-300">
                    +
                  </span>
                </div>
              </div>
              <p className="mt-5 text-sm font-medium text-slate-500">
                Calm support, self-reflection, and accessible care pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-card"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lavender-50 text-sm font-bold tracking-wide text-lavender-600">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-ink-800">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[2rem] border border-lavender-100 bg-lavender-50/70 px-6 py-5 text-center text-sm font-medium text-ink-700 shadow-card">
        You are not alone. We are here for you.
      </section>
    </div>
  );
};

export default HomePage;
