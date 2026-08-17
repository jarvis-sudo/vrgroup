import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navText = scrolled
    ? "text-[#111020] hover:text-[#1D5FA7]"
    : "text-white hover:text-white/80";

  return (
    <header className="fixed left-0 right-0 top-0 z-50">

      <nav
  className={`transition-all duration-500 ${
    scrolled
      ? "bg-white/95 shadow-lg shadow-[#111020]/5 backdrop-blur-xl"
      : "bg-transparent"
  }`}
>

        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* =========================
              LOGO
          ========================== */}

          <a
  href="#home"
  className="group flex items-center gap-2.5"
>
  {/* Logo */}

  <div className="flex h-12 w-[70px] shrink-0 items-center justify-center rounded-lg bg-white px-2 shadow-md ring-1 ring-black/5 sm:h-14 sm:w-[78px]">
    <img
      src="/vr-logo.png"
      alt="VR Group"
      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Brand Name */}

  <div className="leading-none">
    <h1
      className={`font-serif text-base font-semibold tracking-tight transition-colors duration-500 sm:text-xl ${
        scrolled
          ? "text-[#111020]"
          : "text-white"
      }`}
    >
      VR Group
    </h1>

    <p
      className={`mt-1 text-[6px] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 sm:text-[8px] sm:tracking-[0.25em] ${
        scrolled
          ? "text-[#1D5FA7]"
          : "text-white/80"
      }`}
    >
      Your Future. Our Guidance.
    </p>
  </div>
</a>


          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <div className="hidden items-center gap-8 lg:flex">

            {/* HOME */}

            <a
              href="#home"
              className={`group relative text-sm font-medium transition-colors duration-300 ${navText}`}
            >
              Home

              <span
                className={`absolute -bottom-2 left-0 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                  scrolled
                    ? "bg-[#1D5FA7]"
                    : "bg-white"
                }`}
              />
            </a>


            {/* ABOUT */}

            <a
              href="#about"
              className={`text-sm font-medium transition-colors duration-300 ${navText}`}
            >
              About Us
            </a>


            {/* =========================
                SERVICES DROPDOWN
            ========================== */}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >

              <button
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${navText}`}
              >
                Services

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>


              {servicesOpen && (
                <div className="absolute left-1/2 top-full mt-5 w-72 -translate-x-1/2 rounded-2xl border border-[#111020]/10 bg-white p-2 shadow-2xl">

                  {/* Study Abroad */}

                  <a
                    href="#study-abroad"
                    className="group block rounded-xl px-4 py-3 transition-all duration-200 hover:bg-[#F5F7FA]"
                  >
                    <div className="flex items-center justify-between">

                      <p className="text-sm font-semibold text-[#111020]">
                        Study Abroad
                      </p>

                      <ArrowRight
                        size={15}
                        className="text-[#1D5FA7] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                      />

                    </div>

                    <p className="mt-1 text-xs text-[#5F6470]">
                      Universities, applications & visa guidance
                    </p>
                  </a>


                  {/* Education Loans */}

                  <a
                    href="#loans"
                    className="group block rounded-xl px-4 py-3 transition-all duration-200 hover:bg-[#F5F7FA]"
                  >
                    <div className="flex items-center justify-between">

                      <p className="text-sm font-semibold text-[#111020]">
                        Education Loans
                      </p>

                      <ArrowRight
                        size={15}
                        className="text-[#1D5FA7] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                      />

                    </div>

                    <p className="mt-1 text-xs text-[#5F6470]">
                      Financial assistance & loan guidance
                    </p>
                  </a>


                  {/* Real Estate */}

                  <a
                    href="#real-estate"
                    className="group block rounded-xl px-4 py-3 transition-all duration-200 hover:bg-[#F5F7FA]"
                  >
                    <div className="flex items-center justify-between">

                      <p className="text-sm font-semibold text-[#111020]">
                        Real Estate
                      </p>

                      <ArrowRight
                        size={15}
                        className="text-[#1D5FA7] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                      />

                    </div>

                    <p className="mt-1 text-xs text-[#5F6470]">
                      Buy, sell & property assistance
                    </p>
                  </a>

                </div>
              )}

            </div>


            {/* PROPERTIES */}

            <a
              href="#properties"
              className={`text-sm font-medium transition-colors duration-300 ${navText}`}
            >
              Properties
            </a>


            {/* CONTACT */}

            <a
              href="#contact"
              className={`text-sm font-medium transition-colors duration-300 ${navText}`}
            >
              Contact
            </a>

          </div>


          {/* =========================
              CTA
          ========================== */}

          <div className="hidden lg:block">

            <a
              href="#contact"
              className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-[#1D5FA7] text-white shadow-md shadow-[#1D5FA7]/20 hover:-translate-y-0.5 hover:bg-[#1474C4] hover:shadow-lg"
                  : "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#111020]"
              }`}
            >
              Book Consultation

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>


          {/* =========================
              MOBILE BUTTON
          ========================== */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 transition-colors lg:hidden ${
              scrolled
                ? "text-[#111020] hover:bg-[#F5F7FA]"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>


        {/* =========================
            MOBILE MENU
        ========================== */}

        {isOpen && (
          <div className="border-t border-[#111020]/10 bg-white px-5 py-5 shadow-xl lg:hidden">

            <div className="mx-auto max-w-7xl space-y-1">

              {[
                ["#home", "Home"],
                ["#about", "About Us"],
                ["#study-abroad", "Study Abroad"],
                ["#loans", "Education Loans"],
                ["#real-estate", "Real Estate"],
                ["#properties", "Properties"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-3 font-medium text-[#111020] transition-colors hover:bg-[#F5F7FA] hover:text-[#1D5FA7]"
                >
                  {label}
                </a>
              ))}

              <div className="pt-3">

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#1D5FA7] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#1474C4]"
                >
                  Book Consultation
                  <ArrowRight size={17} />
                </a>

              </div>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}