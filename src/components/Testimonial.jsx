const Testimonial = () => {
  return (
    <section className="bg-[#0a0a0a] py-28 lg:py-36">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c7ff00]">
          Member Stories
        </p>

        <blockquote className="mt-10 text-3xl font-bold leading-tight sm:text-5xl">
          “IronVault completely changed the way I train.
          I came for the equipment and stayed for the community.”
        </blockquote>

        <div className="mt-10">

          <p className="font-bold">
            Rahul Sharma
          </p>

          <p className="mt-2 text-sm text-white/40">
            Member since 2022
          </p>

        </div>

      </div>

    </section>
  );
};

export default Testimonial;