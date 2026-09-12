const features = [
  {
    number: "01",
    title: "Elite Equipment",
    text: "Premium strength and conditioning equipment selected for serious training.",
  },
  {
    number: "02",
    title: "Expert Coaches",
    text: "Certified trainers who understand performance, movement and results.",
  },
  {
    number: "03",
    title: "Recovery Zone",
    text: "Dedicated spaces designed to help your body recover and perform better.",
  },
  {
    number: "04",
    title: "Community",
    text: "Train alongside ambitious people who push themselves every day.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-28 lg:py-36">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c7ff00]">
            The IronVault Difference
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
            Built For
            <span className="text-white/30">
              {" "}More.
            </span>
          </h2>

        </div>

        <div className="mt-16 grid border-t border-white/10 md:grid-cols-2">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="group border-b border-white/10 p-8 transition hover:bg-white/[0.03]"
            >

              <div className="flex justify-between">

                <span className="text-sm font-bold text-[#c7ff00]">
                  {feature.number}
                </span>

                <span className="text-xl text-white/20 transition group-hover:text-[#c7ff00]">
                  ↗
                </span>

              </div>

              <h3 className="mt-12 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 max-w-md leading-7 text-white/50">
                {feature.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;