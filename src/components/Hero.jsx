const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2000&q=90"
          alt="Gym training"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32">

        <div className="w-full max-w-5xl">

          {/* Small Heading */}
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.4em] text-[#c7ff00]">
            Premium Fitness Club
          </p>

          {/* Main Heading */}
          <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[105px]">

            <span className="block text-white">
              Build
            </span>

            <span className="block text-white/30">
              Your
            </span>

            <span className="block text-white">
              Legacy<span className="text-[#c7ff00]">.</span>
            </span>

          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Train harder. Move smarter. Become stronger.
            Experience a premium fitness environment designed
            for people who refuse to settle.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-[#c7ff00] px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-[#d5ff33]"
            >
              Start Training
              <span className="ml-2 text-xl">
                →
              </span>
            </a>

            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:border-[#c7ff00] hover:text-[#c7ff00]"
            >
              Explore Programs
            </a>

          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-3xl grid-cols-3 border-t border-white/10 pt-8">

            {/* Members */}
            <div className="border-r border-white/10 pr-4">
              <p className="text-3xl font-black sm:text-4xl">
                15K<span className="text-[#c7ff00]">+</span>
              </p>

              <p className="mt-2 text-[10px] font-medium uppercase tracking-widest text-white/40 sm:text-xs">
                Members
              </p>
            </div>

            {/* Trainers */}
            <div className="px-4 text-center">
              <p className="text-3xl font-black sm:text-4xl">
                42
              </p>

              <p className="mt-2 text-[10px] font-medium uppercase tracking-widest text-white/40 sm:text-xs">
                Expert Trainers
              </p>
            </div>

            {/* Open */}
            <div className="border-l border-white/10 pl-4 text-right">
              <p className="text-3xl font-black sm:text-4xl">
                24<span className="text-[#c7ff00]">/7</span>
              </p>

              <p className="mt-2 text-[10px] font-medium uppercase tracking-widest text-white/40 sm:text-xs">
                Open
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
