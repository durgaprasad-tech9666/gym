const programs = [
  {
    number: "01",
    title: "Strength",
    description:
      "Build raw power, increase strength and master compound movements.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Athletic",
    description:
      "Improve speed, mobility, endurance and overall athletic performance.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Transform",
    description:
      "A complete program combining training, nutrition and accountability.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85",
  },
];

const Programs = () => {
  return (
    <section
      id="programs"
      className="bg-[#0a0a0a] py-28 lg:py-36"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c7ff00]">
              Training Programs
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
              Train With
              <span className="text-white/30">
                {" "}Purpose.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-white/50">
            Structured programs created by professional coaches
            to help you achieve measurable results.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {programs.map((program) => (
            <div
              key={program.number}
              className="group relative overflow-hidden rounded-3xl"
            >

              <img
                src={program.image}
                alt={program.title}
                className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7">

                <span className="text-sm font-bold text-[#c7ff00]">
                  {program.number}
                </span>

                <h3 className="mt-3 text-3xl font-black">
                  {program.title}
                </h3>

                <p className="mt-3 leading-7 text-white/60">
                  {program.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Programs;