const Footer = () => {
  return (
    <footer className="border-t border-white/10">

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-12 md:flex-row md:items-center">

        <div>

          <p className="text-2xl font-black tracking-tighter">
            IRON
            <span className="text-[#c7ff00]">
              VAULT
            </span>
          </p>

          <p className="mt-2 text-sm text-white/40">
            Build your strength. Build your legacy.
          </p>

        </div>

        <div className="flex gap-6 text-sm text-white/50">

          <a
            href="#home"
            className="hover:text-white"
          >
            Instagram
          </a>

          <a
            href="#home"
            className="hover:text-white"
          >
            Facebook
          </a>

          <a
            href="#home"
            className="hover:text-white"
          >
            YouTube
          </a>

        </div>

        <p className="text-sm text-white/30">
          © 2026 IronVault Fitness
        </p>

      </div>

    </footer>
  );
};

export default Footer;