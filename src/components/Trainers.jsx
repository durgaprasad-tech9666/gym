const trainers = [
  {
    name: "Alex Morgan",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Maya Wilson",
    role: "Performance Coach",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "David Carter",
    role: "Transformation Coach",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
  },
];

const Trainers = () => {
  return (
    <section
      id="trainers"
      className="bg-[#0a0a0a] py-28 lg:py-36"
    >

      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c7ff00]">
          The Team
        </p>

        <h2 className="mt-5 text-5xl font-black sm:text-6xl">
          Meet Your
          <span className="text-white/30">
            {" "}Coaches.
          </span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {trainers.map((trainer) => (
            <div key={trainer.name}>

              <div className="overflow-hidden rounded-3xl">

                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-[480px] w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {trainer.name}
              </h3>

              <p className="mt-2 text-sm text-[#c7ff00]">
                {trainer.role}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Trainers;