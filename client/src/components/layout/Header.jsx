import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import http from "../../api/http";
import { useSite } from "../../context/SiteContext";
import useAsyncData from "../../hooks/useAsyncData";
import { getIcon } from "../../utils/icons";
import BrandMark from "../common/BrandMark";

const navItems = [
  { label: "Industries", href: "/#industries" },
  { label: "Services", href: "/services", mega: true },
  { label: "Solutions", href: "/case-studies" },
  { label: "Insights", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { settings } = useSite();
  const location = useLocation();
  const { data: services } = useAsyncData(async () => {
    const { data } = await http.get("/services");
    return data.data;
  }, [], []);

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="page-shell">
        <div className="flex items-center justify-between gap-6 py-5">
          <Link to="/">
            <BrandMark settings={settings} compact wordmarkOnly />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" onMouseLeave={() => setMegaOpen(false)}>
            {navItems.map((item) =>
              item.mega ? (
                <button
                  key={item.href}
                  type="button"
                  onMouseEnter={() => setMegaOpen(true)}
                  onClick={() => setMegaOpen((current) => !current)}
                  className="flex items-center gap-2 text-sm font-semibold text-midnight transition hover:text-slateblue"
                >
                  {item.label}
                  <span className={`text-xs transition ${megaOpen ? "rotate-180" : ""}`}>v</span>
                </button>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-semibold ${isActive ? "text-slateblue" : "text-midnight hover:text-slateblue"}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button type="button" className="text-midnight transition hover:text-slateblue" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="rounded-[10px] bg-midnight px-5 py-3 text-sm font-semibold text-white transition hover:bg-slateblue"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-2xl border border-slate-200 p-3 text-midnight lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {megaOpen && services?.length ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="page-shell">
              <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-panel">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {services.map((service) => {
                    const Icon = getIcon(service.icon);

                    return (
                      <Link
                        key={service._id}
                        to={`/services/${service.slug}`}
                        className="group rounded-[20px] border border-slate-200 px-5 py-6 transition hover:border-slateblue hover:bg-[#f5f7fb]"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3fa] text-slateblue">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold leading-7 text-midnight">{service.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="page-shell flex flex-col gap-3 py-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-3 py-2 text-sm font-semibold text-midnight hover:bg-[#f4f7fb] hover:text-slateblue"
                >
                  {item.label}
                </Link>
              ))}
              {services?.length ? (
                <div className="mt-2 rounded-[24px] border border-slate-200 bg-[#f8fafc] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Services</p>
                  <div className="mt-3 space-y-3">
                    {services.map((service) => (
                      <Link
                        key={service._id}
                        to={`/services/${service.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-midnight"
                      >
                        {service.title}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-[10px] bg-midnight px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Header;
