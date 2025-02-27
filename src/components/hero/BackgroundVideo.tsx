export const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-10" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="Background video showing transportation scenes"
      >
        <source src="/images/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};