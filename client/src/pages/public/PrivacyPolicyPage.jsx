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
            description="How we collect, use, and protect information shared through this website."
          />

          <div className="glass-panel p-8 text-slate-700">
            <div className="prose prose-slate max-w-none">
              <p>
                This Privacy Policy explains how <strong>{companyName}</strong> collects and uses information when you
                visit our website, submit forms, or contact our team.
              </p>
              <h3>Information we collect</h3>
              <ul>
                <li>Contact details you submit (name, email, phone, company, and message).</li>
                <li>Basic usage data (pages visited, device/browser metadata) for performance and analytics.</li>
              </ul>
              <h3>How we use information</h3>
              <ul>
                <li>To respond to inquiries and provide requested services or information.</li>
                <li>To improve website performance, security, and user experience.</li>
                <li>To comply with legal obligations where applicable.</li>
              </ul>
              <h3>Data sharing</h3>
              <p>
                We do not sell personal information. We may share information with service providers that support site
                operations (hosting, analytics, email) under appropriate contractual safeguards.
              </p>
              <h3>Security</h3>
              <p>
                We use reasonable technical and organizational measures to protect information. No method of
                transmission or storage is 100% secure.
              </p>
              <h3>Contact</h3>
              <p>
                If you have questions about this policy, contact us at{" "}
                <strong>{settings?.contact?.email || "your@email.com"}</strong>.
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

