export function NeonBlobBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -right-32 -top-32 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,179,0,0.45),rgba(255,0,128,0.25)_55%,rgba(76,0,255,0.2)_100%)] blur-3xl" />
      <div className="absolute -left-32 -bottom-44 h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,0,128,0.45),rgba(76,0,255,0.25)_55%,rgba(255,179,0,0.25)_100%)] blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />
    </div>
  );
}
