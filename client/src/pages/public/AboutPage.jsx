import { motion } from "framer-motion";
import SEO from "../../components/common/SEO";
import SectionHeading from "../../components/common/SectionHeading";
import { useSite } from "../../context/SiteContext";

const AboutPage = () => {
  const { settings } = useSite();

  return (
    <>
      <SEO
        title={`About | ${settings?.companyName}`}
        description={settings?.about?.overview}
      />
      <section className="section-space">
        <div className="page-shell space-y-12">
          <SectionHeading
            eyebrow="About Us"
            title="A business-first partner for enterprise technology, talent, and growth execution."
            description={settings?.about?.overview}
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: "Overview", body: settings?.about?.overview },
              { title: "Mission", body: settings?.about?.mission },
              { title: "Vision", body: settings?.about?.vision },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-panel p-8"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{item.title}</p>
                <p className="mt-4 text-base leading-8 text-slate-700">{item.body}</p>
              </motion.article>
            ))}
          </div>

          <div>
            <SectionHeading
              eyebrow="Leadership Team"
              title="Leaders focused on practical transformation and accountable outcomes."
              description="Every profile below is fully dynamic and editable from the admin dashboard."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {(settings?.leadershipTeam || []).map((leader, index) => (
                <motion.article
                  key={leader.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-panel overflow-hidden"
                >
                  {leader.image ? (
                    <img src={leader.image} alt={leader.name} className="h-72 w-full object-cover" loading="lazy" />
                  ) : null}
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-bold text-midnight">{leader.name}</h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{leader.role}</p>
                    <p className="mt-5 text-sm leading-7 text-slate-600">{leader.bio}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

