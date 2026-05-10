import ResourceCard from "../components/ResourceCard";
import { resourceItems } from "../data/resources";

const ResourcesPage = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <section className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lavender-500">
          Resource Center
        </p>
        <h2 className="mt-4 text-4xl font-extrabold text-ink-800">Mental Health Resources</h2>
        <p className="mt-4 text-lg text-slate-600">
          Helpful resources and support options for your well-being.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <section className="rounded-[2rem] border border-rose-100 bg-rose-50/80 p-7 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sm font-bold tracking-wide text-rose-500 shadow-sm">
              SOS
            </div>
            <div>
              <h3 className="text-2xl font-bold text-rose-600">Emergency Support</h3>
              <p className="mt-3 max-w-2xl leading-8 text-slate-700">
                If you are in immediate danger or having thoughts of self-harm, please seek
                help right away.
              </p>
              <ul className="mt-4 space-y-2 text-sm font-medium text-slate-700">
                <li>India: 112 (Emergency)</li>
                <li>AASRA: +91 98204 66726 (24x7)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-amber-100 bg-amber-50/80 p-7 shadow-card">
          <h3 className="text-2xl font-bold text-amber-700">Multilingual Support</h3>
          <p className="mt-4 leading-8 text-slate-700">
            Translation API integration will be added later.
          </p>
        </section>
      </div>

      <section>
        <h3 className="mb-5 text-2xl font-bold text-ink-800">Helpful Resources</h3>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resourceItems.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
