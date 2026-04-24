import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import SEO from "../../components/common/SEO";
import SectionHeading from "../../components/common/SectionHeading";
import { useSite } from "../../context/SiteContext";
import { useLearnerAuth } from "../../context/LearnerAuthContext";

const AuthPage = () => {
  const { settings } = useSite();
  const companyName = settings?.companyName || "Enterprise Brand";
  const [mode, setMode] = useState("signin");
  const [formState, setFormState] = useState({ name: "", email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const { login, register } = useLearnerAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const nextPath = useMemo(() => location.state?.from?.pathname || "/dashboard", [location.state]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSubmitting(true);
      if (mode === "signin") {
        await login({ email: formState.email, password: formState.password });
      } else {
        await register({ name: formState.name, email: formState.email, password: formState.password });
      }
      navigate(nextPath, { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to continue.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO title={`Register/Signin | ${companyName}`} description="Access your account or create a new one." />
      <section className="section-space">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel p-8">
            <SectionHeading
              eyebrow="Account"
              title="Register/Signin"
              description="Sign in to access your learner dashboard, enrollments, and certificates."
            />
            <div className="mt-8 flex rounded-full border border-slate-200 bg-white p-1">
              <button
                type="button"
                onClick={() => setMode("signin")}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  mode === "signin" ? "bg-midnight text-white" : "text-midnight hover:bg-slate-50"
                }`}
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={() => setMode("register")}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  mode === "register" ? "bg-midnight text-white" : "text-midnight hover:bg-slate-50"
                }`}
              >
                Register
              </button>
            </div>
            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              <div className="rounded-[18px] border border-slate-200 bg-[#f7f9fd] p-5 shadow-panel">
                <p className="font-semibold text-midnight">What you get</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Course catalog and enrollment</li>
                  <li>Progress tracking and completion status</li>
                  <li>Certificates for eligible completions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              {mode === "signin" ? "Sign in" : "Register"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-midnight">
              {mode === "signin" ? "Welcome back." : "Create your account."}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {mode === "signin"
                ? "Use your email and password to access your account."
                : "Enter your details to create an account. You can replace this with SSO when needed."}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {mode === "register" ? (
                <div>
                  <label className="mb-2 block text-sm font-semibold text-midnight">Full name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                    className="w-full rounded-2xl border-slate-200 bg-white"
                    required
                  />
                </div>
              ) : null}

              <div>
                <label className="mb-2 block text-sm font-semibold text-midnight">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                  className="w-full rounded-2xl border-slate-200 bg-white"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-midnight">Password</label>
                <input
                  type="password"
                  value={formState.password}
                  onChange={(event) => setFormState((current) => ({ ...current, password: event.target.value }))}
                  className="w-full rounded-2xl border-slate-200 bg-white"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-midnight px-5 py-3.5 text-sm font-bold text-white transition hover:bg-slateblue disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Please wait..." : mode === "signin" ? "Sign in" : "Create account"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPage;

