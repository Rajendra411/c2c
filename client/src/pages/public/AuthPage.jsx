import { useState } from "react";
import SEO from "../../components/common/SEO";
import SectionHeading from "../../components/common/SectionHeading";
import { useSite } from "../../context/SiteContext";

const AuthPage = () => {
  const { settings } = useSite();
  const companyName = settings?.companyName || "Enterprise Brand";
  const [mode, setMode] = useState("signin");

  return (
    <>
      <SEO title={`Register/Signin | ${companyName}`} description="Access your account or create a new one." />
      <section className="section-space">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel p-8">
            <SectionHeading
              eyebrow="Account"
              title="Register/Signin"
              description="This is a UI placeholder page. Connect it to your auth backend when ready."
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

            <form className="mt-8 space-y-5">
              {mode === "register" ? (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-midnight">First name</label>
                    <input type="text" className="w-full rounded-2xl border-slate-200 bg-white" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-midnight">Last name</label>
                    <input type="text" className="w-full rounded-2xl border-slate-200 bg-white" />
                  </div>
                </div>
              ) : null}

              <div>
                <label className="mb-2 block text-sm font-semibold text-midnight">Email</label>
                <input type="email" className="w-full rounded-2xl border-slate-200 bg-white" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-midnight">Password</label>
                <input type="password" className="w-full rounded-2xl border-slate-200 bg-white" />
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-midnight px-5 py-3.5 text-sm font-bold text-white transition hover:bg-slateblue"
              >
                {mode === "signin" ? "Sign in" : "Create account"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPage;

