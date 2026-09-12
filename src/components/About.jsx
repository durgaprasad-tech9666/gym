const About = () => {
  return (
    <section
      id="about"
      className="py-28 lg:py-36"
    >

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        {/* Image */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
            alt="IronVault gym"
            className="h-[600px] w-full rounded-3xl object-cover"
          />

          <div className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl">

            <p className="text-4xl font-black text-[#c7ff00]">
              12+
            </p>

            <p className="mt-1 text-sm text-white/50">
             10 Years of Excellence
            </p>

          </div>

        </div>

        {/* Content */}
        <div>

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c7ff00]">
            About IronVault
          </p>

          <h2 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">

            More Than
            <span className="text-white/30">
              {" "}A Gym.
            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-white/60">
            IronVault is a high-performance training environment
            built for ambitious people.
          </p>

          <p className="mt-5 leading-8 text-white/50">
            From elite equipment and expert coaching to recovery
            zones and personalized programs, everything is designed
            to help you become your strongest self.
          </p>

          <div className="mt-10">

            <a
              href="#programs"
              className="inline-block border-b border-[#c7ff00] pb-2 font-bold text-[#c7ff00]"
            >
              Discover Our Approach →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;