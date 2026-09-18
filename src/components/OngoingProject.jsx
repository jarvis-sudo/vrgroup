import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OngoingProject() {
  return (
    <section className="relative overflow-hidden bg-[#071a33] py-20 sm:py-28">

      {/* Decorative glows to match hero */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#1D5FA7]/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#c9a227]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section eyebrow */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227] sm:text-sm">
              Ongoing Project
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Now Launching
            </h2>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#c9a227]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#c9a227]" />
            Booking Open
          </span>
        </div>

        {/* Main Spotlight Card */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-sm lg:mt-16">

          <div className="grid lg:grid-cols-2">

            {/* Image side */}
            <div className="relative h-72 sm:h-96 lg:h-full">
              <img
                src="/chhero.jpg"
                alt="Cyber Homes"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33] via-[#071a33]/10 to-transparent lg:bg-gradient-to-r" />

              {/* Floating badge */}
              <div className="absolute left-5 top-5 rounded-xl bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm sm:left-6 sm:top-6">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#5F6470]">
                  Starting From
                </p>
                <p className="font-serif text-lg font-bold text-[#111020] sm:text-xl">
                  ₹85 Lakhs*
                </p>
              </div>
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

              <h3 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                Cyber <span className="text-[#c9a227]">Homes</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                A landmark address engineered for the way you live and work today —
                premium residences with smart-home integration, resort-style amenities,
                and direct connectivity to the city's tech corridor.
              </p>

              {/* Key stats grid */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-white/10 py-6">
                <div>
                  <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                    2, 3 BHK
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                    Configurations
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                    12
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                    Acres
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                    2027
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                    Possession
                  </p>
                </div>
              </div>

              {/* Amenity chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Smart Home", "Clubhouse", "Sky Lounge", "24/7 Security", "EV Charging"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/real-estate/projects/cyber-homes"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a227] px-7 py-3.5 text-sm font-semibold text-[#071a33] shadow-lg shadow-[#c9a227]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dab438] hover:shadow-xl"
                >
                  View Project Details
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#111020]"
                >
                  Schedule a Site Visit
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
