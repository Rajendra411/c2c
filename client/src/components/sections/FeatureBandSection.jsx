import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureBandSection = ({ featureImage }) => (
  <section className="navy-surface">
    <div className="page-shell py-12 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_0.75fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-[3rem]">
            Enterprise AI Expertise for
            <span className="block text-[#5ea7ff]">Sharper, Faster Outcomes</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
            We combine data, automation, and delivery discipline to help organizations modernize operations, elevate
            customer experiences, and create new momentum for growth.
          </p>
          <Link to="/contact" className="mt-8 primary-pill">
            Talk to Our Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto w-full max-w-[440px]"
        >
          <div className="relative overflow-hidden rounded-[26px] border border-[#6ea3ff]/55 bg-[radial-gradient(circle_at_80%_20%,rgba(126,90,255,0.35),transparent_30%),linear-gradient(145deg,rgba(18,37,74,0.9),rgba(57,43,107,0.9))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
            <img
              src={featureImage || "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"}
              alt="AI capability preview"
              className="h-[260px] w-full rounded-[18px] object-cover opacity-90"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeatureBandSection;
