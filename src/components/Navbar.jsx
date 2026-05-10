import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Assessment", to: "/assessment" },
  { label: "Chatbot", to: "/chatbot" },
  { label: "Resources", to: "/resources" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender-50 text-lavender-600 shadow-card">
            <svg viewBox="0 0 48 48" className="h-7 w-7 fill-none stroke-current stroke-[1.8]">
              <path d="M24 8c-7.7 0-14 6.3-14 14 0 6.6 4.6 12.2 10.8 13.6V40h6.4v-4.4C33.4 34.2 38 28.6 38 22 38 14.3 31.7 8 24 8Z" />
              <path d="M18 18c1.5-2 4.5-3 6-1 .9 1.2.8 2.9 0 4-.8 1.1-1 2.2-.3 3.5M30 18c-1.5-2-4.5-3-6-1-.9 1.2-.8 2.9 0 4 .8 1.1 1 2.2.3 3.5M18 28c1.6.9 3.6 1.4 6 1.4s4.4-.5 6-1.4" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lavender-500">
              Mental Health
            </p>
            <h1 className="text-base font-bold text-ink-800 sm:text-lg">
              Multilingual Mental Health Chatbot
            </h1>
          </div>
        </NavLink>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:gap-6">
          <nav className="flex flex-wrap items-center gap-2 rounded-full bg-lavender-50/90 p-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-white text-lavender-600 shadow-sm"
                      : "text-ink-700 hover:bg-white/80 hover:text-lavender-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-sm"
          >
            <span className="text-base font-semibold">EN</span>
            English
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
