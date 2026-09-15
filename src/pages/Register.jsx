import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    plan: "",
  });

  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    setSubmitted(true);

  };


  return (
    <div className="min-h-screen bg-[#050505] px-6 py-10 text-white">

      {/* Header */}

      <div className="mx-auto flex max-w-6xl items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-black uppercase"
        >
          IRON
          <span className="text-[#c7ff00]">
            VAULT
          </span>
        </Link>


        <Link
          to="/"
          className="text-sm text-white/50 transition hover:text-white"
        >
          ← Back Home
        </Link>

      </div>


      {/* Registration */}

      <div className="mx-auto max-w-2xl py-16">


        <div className="mb-10 text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#c7ff00]">
            Membership
          </p>

          <h1 className="text-5xl font-black uppercase md:text-7xl">

            Join The

            <span className="block text-white/20">
              Vault.
            </span>

          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/40">
            Start your transformation today.
            Become part of the IronVault community.
          </p>

        </div>


        {/* Success */}

        {submitted ? (

          <div className="rounded-3xl border border-[#c7ff00]/30 bg-[#c7ff00]/5 p-10 text-center">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c7ff00] text-3xl text-black">
              ✓
            </div>

            <h2 className="text-3xl font-black uppercase">
              You're In.
            </h2>

            <p className="mt-4 text-white/50">
              Your registration was submitted successfully.
            </p>

            <Link
              to="/"
              className="mt-8 inline-block rounded-full bg-[#c7ff00] px-8 py-4 font-bold text-black"
            >
              Back To Home
            </Link>

          </div>

        ) : (

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10"
          >

            <div className="grid gap-6 sm:grid-cols-2">


              {/* Name */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-sm outline-none placeholder:text-white/20 focus:border-[#c7ff00]"
                />

              </div>


              {/* Email */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-sm outline-none placeholder:text-white/20 focus:border-[#c7ff00]"
                />

              </div>


              {/* Phone */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-sm outline-none placeholder:text-white/20 focus:border-[#c7ff00]"
                />

              </div>


              {/* Age */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">
                  Age
                </label>

                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="25"
                  min="16"
                  max="80"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-sm outline-none placeholder:text-white/20 focus:border-[#c7ff00]"
                />

              </div>


              {/* Gender */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none focus:border-[#c7ff00]"
                >

                  <option value="">
                    Select Gender
                  </option>

                  <option value="male">
                    Male
                  </option>

                  <option value="female">
                    Female
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>


              {/* Plan */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">
                  Membership
                </label>

                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none focus:border-[#c7ff00]"
                >

                  <option value="">
                    Select Plan
                  </option>

                  <option value="starter">
                    Starter
                  </option>

                  <option value="pro">
                    Pro
                  </option>

                  <option value="elite">
                    Elite
                  </option>

                </select>

              </div>

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-[#c7ff00] px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:scale-[1.02]"
            >
              Complete Registration →
            </button>


          </form>

        )}

      </div>

    </div>
  );
}

export default Register;