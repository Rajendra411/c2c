import SEO from "../../components/common/SEO";
import SectionHeading from "../../components/common/SectionHeading";
import { useSite } from "../../context/SiteContext";

const TermsAndConditionsPage = () => {
  const { settings } = useSite();
  const companyName = settings?.companyName || "Enterprise Brand";

  return (
    <>
      <SEO title={`Terms and Conditions | ${companyName}`} description={`Website terms and conditions for ${companyName}.`} />
      <section className="section-space">
        <div className="page-shell space-y-10">
          <SectionHeading
            eyebrow="Legal"
            title="Terms and Conditions"
            description="Terms governing access to and use of this website."
          />

          <div className="glass-panel p-8 text-slate-700">
            <div className="prose prose-slate max-w-none">
              <p>
                These Terms and Conditions apply to your use of the <strong>{companyName}</strong> website. By accessing
                this website, you agree to these terms.
              </p>
              <h3>Use of the site</h3>
              <ul>
                <li>Do not misuse the site, attempt unauthorized access, or disrupt service.</li>
                <li>Content is provided for informational purposes and may change without notice.</li>
              </ul>
              <h3>Intellectual property</h3>
              <p>
                Unless otherwise stated, all content and branding on this website is owned by {companyName} or licensed
                to us. You may not reproduce or distribute it without permission.
              </p>
              <h3>Third-party links</h3>
              <p>
                The site may include links to third-party services. We are not responsible for their content, policies,
                or practices.
              </p>
              <h3>Disclaimer</h3>
              <p>
                This website is provided “as is” without warranties of any kind. To the extent permitted by law, we
                disclaim all warranties and liability arising from use of the site.
              </p>
              <h3>Contact</h3>
              <p>
                Questions about these terms can be sent to <strong>{settings?.contact?.email || "your@email.com"}</strong>.
              </p>
              <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;

