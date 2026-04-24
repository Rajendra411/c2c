const LoadingScreen = ({ fullScreen = false, label = "Loading..." }) => (
  <div className={fullScreen ? "min-h-screen" : "min-h-[280px]"}>
    <div className="page-shell py-10 sm:py-14">
      <div className="glass-panel overflow-hidden p-8">
        <div className="flex items-center justify-between gap-6">
          <div className="min-w-0 flex-1 space-y-3">
            <div className="skeleton-block shimmer h-6 w-40 sm:w-56" />
            <div className="skeleton-block shimmer h-4 w-64 sm:w-80" />
          </div>
          <div className="hidden sm:block">
            <div className="skeleton-block shimmer h-10 w-28 rounded-full" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-[22px] border border-slate-200/60 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="skeleton-block shimmer h-12 w-12 rounded-2xl" />
                <div className="flex-1 space-y-3">
                  <div className="skeleton-block shimmer h-4 w-40" />
                  <div className="skeleton-block shimmer h-3 w-full" />
                  <div className="skeleton-block shimmer h-3 w-5/6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-3">
          <div className="skeleton-block shimmer h-3 w-full" />
          <div className="skeleton-block shimmer h-3 w-11/12" />
          <div className="skeleton-block shimmer h-3 w-9/12" />
        </div>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">{label}</p>
      </div>
    </div>
  </div>
);

export default LoadingScreen;

