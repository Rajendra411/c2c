import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import http from "../../api/http";
import LoadingScreen from "../../components/common/LoadingScreen";
import SEO from "../../components/common/SEO";
import SectionHeading from "../../components/common/SectionHeading";
import { useSite } from "../../context/SiteContext";
import useAsyncData from "../../hooks/useAsyncData";
import { getIcon } from "../../utils/icons";

const ServicesPage = () => {
  const { settings } = useSite();
  const { data: services, loading } = useAsyncData(async () => {
    const { data } = await http.get("/services");
    return data.data;
  }, []);

  if (loading) {
    return <LoadingScreen fullScreen />;
  }

  return (
    <>
      <SEO
        title={`Services | ${settings?.companyName}`}
        description={`Discover ${settings?.companyName || "enterprise"} services across IT delivery, staffing, digital growth, and workforce capability programs.`}
      />
      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Services"
            title="A modern services portfolio built to move technology and business programs faster."
            description="Each practice can run standalone or combine into a more complete transformation program."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services?.map((service, index) => {
              const Icon = getIcon(service.icon);

              return (
                <motion.article
                  key={service._id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="glass-panel overflow-hidden"
                >
                  {service.image ? (
                    <img src={service.image} alt={service.title} className="h-60 w-full object-cover" loading="lazy" />
                  ) : null}
                  <div className="p-8">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-midnight text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="font-display text-3xl font-bold text-midnight">{service.title}</h2>
                    </div>

                    <p className="mt-5 text-base leading-8 text-slate-600">{service.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {(service.highlights || []).map((item) => (
                        <span key={item} className="rounded-full bg-mist px-4 py-2 text-sm font-semibold text-slateblue">
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-midnight px-5 py-3 text-sm font-bold text-white transition hover:bg-slateblue"
                    >
                      View service detail
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
