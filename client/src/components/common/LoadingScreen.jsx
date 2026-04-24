const LoadingScreen = ({ fullScreen = false, label = "Loading experience..." }) => (
  <div
    className={`${
      fullScreen ? "min-h-screen" : "min-h-[280px]"
    } flex items-center justify-center px-4`}
  >
    <div className="glass-panel flex flex-col items-center gap-4 px-8 py-10 text-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-slateblue" />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
    </div>
  </div>
);

export default LoadingScreen;

