import React from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071a33] text-white">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:col-span-1">

            <a
              href="/"
              className="inline-flex items-center gap-3"
            >

              {/* Logo */}

              <div className="flex h-14 w-[78px] items-center justify-center rounded-lg bg-white px-2 shadow-md">
                <img
                  src="/vr-logo.png"
                  alt="VR Group"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Name */}

              <div>
                <h2 className="font-serif text-xl font-semibold">
                  VR Group
                </h2>

                <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#c9a227]">
                  Your Future. Our Guidance.
                </p>
              </div>

            </a>


            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
              Guiding you towards the right opportunities in education,
              finance and real estate with trusted advice and personalised
              support.
            </p>


            {/* Social Icons */}

            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-[#c9a227]/40 hover:bg-[#c9a227] hover:text-[#071a33]"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-[#c9a227]/40 hover:bg-[#c9a227] hover:text-[#071a33]"
              >
                <FaFacebook size={17} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-[#c9a227]/40 hover:bg-[#c9a227] hover:text-[#071a33]"
              >
                <FaLinkedin size={17} />
              </a>

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9a227]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="/"
                  className="group flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Home

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              </li>

              <li>
                <a
                  href="/#about"
                  className="group flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  About Us

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              </li>

              <li>
                <a
                  href="/real-estate/projects"
                  className="group flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Properties

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              </li>

              <li>
                <a
                  href="/#contact"
                  className="group flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Contact

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              </li>

            </ul>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9a227]">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="/#study-abroad"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Study Abroad
                </a>
              </li>

              <li>
                <a
                  href="/#loans"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Education Loans
                </a>
              </li>

              <li>
                <a
                  href="/real-estate/projects"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Real Estate
                </a>
              </li>

              <li>
                <a
                  href="/real-estate/projects"
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  Property Assistance
                </a>
              </li>

            </ul>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9a227]">
              Get In Touch
            </h3>


            <div className="mt-6 space-y-5">

              {/* Phone */}

              <a
                href="tel:+919999999999"
                className="group flex gap-3"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#c9a227] transition-colors group-hover:bg-[#c9a227] group-hover:text-[#071a33]">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200 group-hover:text-white">
                    +91 99999 99999
                  </p>
                </div>

              </a>


              {/* Email */}

              <a
                href="mailto:info@vrgroup.com"
                className="group flex gap-3"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#c9a227] transition-colors group-hover:bg-[#c9a227] group-hover:text-[#071a33]">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Email Us
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-slate-200 group-hover:text-white">
                    info@vrgroup.com
                  </p>
                </div>

              </a>


              {/* Location */}

              <div className="flex gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#c9a227]">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium leading-6 text-slate-200">
                    Hyderabad, Telangana
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            CTA BANNER
        ===================================================== */}

        <div className="mt-16 overflow-hidden rounded-2xl border border-[#c9a227]/20 bg-gradient-to-r from-[#0c294c] to-[#0a3560]">

          <div className="relative flex flex-col gap-6 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">

            {/* Gold glow */}

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#c9a227]/10 blur-3xl" />

            <div className="relative">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a227]">
                Let's Talk
              </p>

              <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                Ready to take the next step?
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                Talk to our team and find the right opportunity for you.
              </p>

            </div>


            <a
              href="/#contact"
              className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#c9a227] px-6 py-3.5 text-sm font-bold text-[#071a33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9b63a] hover:shadow-lg hover:shadow-[#c9a227]/20"
            >
              Book a Consultation

              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <p className="text-center text-xs text-slate-400 md:text-left">
            © {currentYear} VR Group. All rights reserved.
          </p>


          <div className="flex items-center justify-center gap-5">

            <a
              href="#"
              className="text-xs text-slate-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <span className="h-3 w-px bg-white/10" />

            <a
              href="#"
              className="text-xs text-slate-400 transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}