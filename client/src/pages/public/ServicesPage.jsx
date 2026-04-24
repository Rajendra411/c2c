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
import itServicesImage from "../../assets/illustrations/it-services.svg";
import digitalMarketingImage from "../../assets/illustrations/digital-marketing.svg";
import eduTechImage from "../../assets/illustrations/edutech.svg";
import staffingImage from "../../assets/illustrations/staffing.svg";

const serviceCategories = [
  {
    title: "IT Services",
    image: itServicesImage,
    description: "Modernize core platforms, improve reliability, and ship measurable outcomes faster.",
    highlights: ["Cloud & DevOps", "App Development", "Cybersecurity", "Data & Analytics"],
  },
  {
    title: "Digital Marketing",
    image: digitalMarketingImage,
    description: "Build demand, improve conversion, and connect campaigns to revenue-impacting metrics.",
    highlights: ["SEO & Content", "Performance Marketing", "Brand & Creative", "Marketing Analytics"],
  },
  {
    title: "EduTech",
    image: eduTechImage,
    description: "Education platforms and learning experiences that drive engagement, mastery, and outcomes.",
    highlights: ["LMS & Portals", "Course & Content", "Assessments", "Student Success"],
  },
  {
    title: "Staffing (IT & Non-IT)",
    image: staffingImage,
    description: "Flexible hiring models to scale delivery teams across IT, operations, and shared services.",
    highlights: ["Contract Staffing", "Permanent Hiring", "RPO", "Managed Teams"],
  },
];

const ServicesPage = () => {
  const { settings } = useSite();
  const { data: services, loading } = useAsyncData(async () => {
    const { data } = await http.get("/services");
    return data.data;
  }, []);

  if (loading) {
    return <LoadingScreen fullScreen label="Loading services..." variant="cards" />;
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
            {serviceCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-panel overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-56 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <h2 className="font-display text-3xl font-bold text-midnight">{category.title}</h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">{category.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {category.highlights.map((item) => (
                      <span key={item} className="rounded-full bg-mist px-4 py-2 text-sm font-semibold text-slateblue">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14">
            <SectionHeading
              eyebrow="EduTech capabilities"
              title="What EduTech websites and platforms typically include"
              description="A practical baseline for education product sites: clear outcomes, content discovery, trust signals, and conversion paths."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Programs & Courses",
                  body: "Catalog pages with filters, course detail pages, curriculum outlines, prerequisites, and FAQs.",
                },
                {
                  title: "Learning Platform (LMS)",
                  body: "Student dashboards, progress tracking, assignments, quizzes, certificates, and mobile-first learning.",
                },
                {
                  title: "Outcomes & Credibility",
                  body: "Placement stats, partner logos, accreditation, testimonials, case studies, and success stories.",
                },
                {
                  title: "Admissions & Enrollment",
                  body: "Lead capture, counselor booking, application flows, payments, and cohort start dates.",
                },
                {
                  title: "Integrations",
                  body: "SSO, CRM, payments, email/SMS, content authoring tools, analytics, and proctoring integrations.",
                },
                {
                  title: "Community & Support",
                  body: "Mentorship, discussion forums, live classes, help center, and structured learner support.",
                },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="rounded-[18px] border border-slate-200 bg-[#f7f9fd] p-7 shadow-panel"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">EduTech</p>
                  <h3 className="mt-3 text-xl font-bold text-midnight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                </motion.article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="primary-pill">
              Talk to our team
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/courses" className="pill-link">
              Explore courses
            </Link>
            <Link to="/auth" className="pill-link">
              Register/Signin
            </Link>
            </div>
          </div>

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
