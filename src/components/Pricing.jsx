const plans = [
  {
    name: "Essential",
    price: "₹1,499",
    description: "For people building a consistent training habit.",
    features: [
      "24/7 Gym Access",
      "Full Equipment Access",
      "Locker Facilities",
    ],
  },
  {
    name: "Performance",
    price: "₹2,999",
    description: "For members serious about measurable results.",
    features: [
      "Everything in Essential",
      "Personal Training Session",
      "Nutrition Guidance",
      "Progress Tracking",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "₹5,999",
    description: "The complete IronVault performance experience.",
    features: [
      "Everything in Performance",
      "Weekly Personal Training",
      "Recovery Zone",
      "Priority Coaching",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-28 lg:py-36"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c7ff00]">
            Membership
          </p>

          <h2 className="mt-5 text-5xl font-black sm:text-6xl">
            Choose Your
            <span className="text-white/30">
              {" "}Level.
            </span>
          </h2>

        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
                plan.popular
                  ? "border-[#c7ff00] bg-[#c7ff00] text-black"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >

              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-black px-4 py-2 text-xs font-bold text-[#c7ff00]">
                  MOST POPULAR
                </span>
              )}

              <p className="text-sm font-bold uppercase tracking-widest opacity-60">
                {plan.name}
              </p>

              <p className="mt-8 text-5xl font-black">
                {plan.price}
                <span className="text-sm font-medium opacity-50">
                  {" "}/ month
                </span>
              </p>

              <p className="mt-6 leading-7 opacity-60">
                {plan.description}
              </p>

              <div className="my-8 h-px bg-current opacity-10" />

              <div className="space-y-4">

                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3"
                  >
                    <span className="font-bold">
                      ✓
                    </span>

                    <span className="text-sm opacity-70">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

              <a
                href="#contact"
                className={`mt-10 block rounded-full py-4 text-center font-bold ${
                  plan.popular
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Choose Plan
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Pricing;