const CTA = () => {
  return (
    <section
      id="contact"
      className="px-6 pb-24"
    >

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#c7ff00] px-8 py-20 text-black sm:px-16 lg:py-28">

        <div className="relative z-10 max-w-4xl">

          <p className="text-sm font-black uppercase tracking-[0.35em] text-black/50">
            Your transformation starts now
          </p>

          <h2 className="mt-6 text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
            STOP WAITING.
            <br />
            START BUILDING.
          </h2>

          <a
            href="#pricing"
            className="mt-10 inline-block rounded-full bg-black px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            Become a Member →
          </a>

        </div>

        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/30 blur-3xl" />

      </div>

    </section>
  );
};

export default CTA;