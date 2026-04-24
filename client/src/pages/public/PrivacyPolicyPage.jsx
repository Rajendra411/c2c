import SEO from "../../components/common/SEO";
import SectionHeading from "../../components/common/SectionHeading";
import { useSite } from "../../context/SiteContext";

const PrivacyPolicyPage = () => {
  const { settings } = useSite();
  const companyName = settings?.companyName || "Enterprise Brand";

  return (
    <>
      <SEO title={`Privacy Policy | ${companyName}`} description={`Privacy policy for ${companyName}.`} />
      <section className="section-space">
        <div className="page-shell space-y-10">
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            description="How we collect, use, retain, and protect information shared through our website and learning products."
          />

          <div className="glass-panel p-8 text-slate-700">
            <div className="prose prose-slate max-w-none">
              <p>
                This Privacy Policy explains how <strong>{companyName}</strong> collects and uses information when you
                visit our website, create an account, enroll in programs, submit forms, or contact our team.
              </p>
              <h3>Who this policy applies to</h3>
              <p>
                This policy applies to visitors, prospective learners, enrolled learners, and partners interacting with
                our site and services.
              </p>
              <h3>Information we collect</h3>
              <ul>
                <li>
                  <strong>Account data</strong>: name, email, password (stored as a one-way hash), and basic profile
                  details you provide.
                </li>
                <li>
                  <strong>Learning data</strong>: enrollments, progress, assessment attempts, and certification status.
                </li>
                <li>
                  <strong>Contact data</strong>: details you submit (name, email, phone, company, and message).
                </li>
                <li>
                  <strong>Usage data</strong>: pages visited, device/browser metadata, approximate location, and
                  diagnostic logs for security and performance.
                </li>
              </ul>
              <h3>How we use information</h3>
              <ul>
                <li>To create and manage accounts, enrollments, learner support, and program delivery.</li>
                <li>To respond to inquiries and provide requested information.</li>
                <li>To improve platform performance, security, and user experience.</li>
                <li>To prevent fraud, abuse, and unauthorized access.</li>
                <li>To comply with legal obligations where applicable.</li>
              </ul>
              <h3>Cookies and similar technologies</h3>
              <p>
                We use cookies and similar technologies for authentication, analytics, and basic feature functionality.
                You can control cookies through browser settings; some features may not work correctly without them.
              </p>
              <h3>Data sharing</h3>
              <p>
                We do not sell personal information. We may share information with service providers that support site
                operations (hosting, analytics, email) under appropriate contractual safeguards.
              </p>
              <h3>Data retention</h3>
              <p>
                We retain information for as long as needed to provide services, meet contractual obligations, comply
                with legal requirements, and resolve disputes. You may request deletion where applicable.
              </p>
              <h3>Security</h3>
              <p>
                We use reasonable technical and organizational measures to protect information. No method of
                transmission or storage is 100% secure.
              </p>
              <h3>Children’s privacy</h3>
              <p>
                Our services are intended for users who can legally consent to data processing in their jurisdiction.
                If we learn we collected data from a child without appropriate consent, we will take steps to delete it.
              </p>
              <h3>Your choices</h3>
              <ul>
                <li>Access and update certain profile information in your account.</li>
                <li>Request deletion or export of your data where legally required.</li>
                <li>Opt out of non-essential communications.</li>
              </ul>
              <h3>Contact</h3>
              <p>
                If you have questions about this policy, contact us at <strong>{settings?.contact?.email || "your@email.com"}</strong>.
              </p>
              <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;

