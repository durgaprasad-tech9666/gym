import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tighter"
        >
          IRON
          <span className="text-[#c7ff00]">
            VAULT
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#programs"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Programs
          </a>

          <a
            href="#trainers"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Trainers
          </a>

          <a
            href="#pricing"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Membership
          </a>

          <a
            href="#about"
            className="text-sm text-white/60 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#pricing"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Book
          </a>

        </div>

        {/* Join Now → Register Page */}
        <Link
          to="/register"
          className="rounded-full bg-[#c7ff00] px-6 py-3 text-sm font-bold text-black transition hover:scale-105"
        >
          Join Now
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;