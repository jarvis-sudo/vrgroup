import React from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Landmark,
  Building2,
} from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#1D5FA7]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#c9a227]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c9a227]">
            About VR Group
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#071a33] sm:text-4xl lg:text-5xl">
            Guiding You Towards
            <span className="block text-[#1D5FA7]">
              Better Opportunities
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We help individuals and families make confident decisions
            across education, finance and real estate through trusted
            guidance and personalised support.
          </p>

        </div>


        {/* =====================================================
            MAIN ABOUT CONTENT
        ===================================================== */}

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">


          {/* =================================================
              LEFT - IMAGE
          ================================================= */}

          <div className="relative">

            {/* Main Image */}

            <div className="relative overflow-hidden rounded-3xl shadow-xl">

              <img
                src="/about-vr-group.jpg"
                alt="VR Group"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/70 via-transparent to-transparent" />

            </div>


            {/* =================================================
                FLOATING CARD
            ================================================= */}

            <div className="absolute -bottom-6 left-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:left-8 sm:p-6">

              <p className="font-serif text-3xl font-bold text-[#071a33]">
                VR
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#c9a227]">
                Your Future. Our Guidance.
              </p>

            </div>


            {/* Decorative Gold Circle */}

            <div className="absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-full border-[12px] border-[#c9a227]/20" />

          </div>


          {/* =================================================
              RIGHT - CONTENT
          ================================================= */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9a227]">
              Who We Are
            </p>

            <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#071a33] sm:text-4xl">
              One Group.
              <span className="text-[#1D5FA7]">
                {" "}Multiple Possibilities.
              </span>
            </h3>


            <div className="mt-6 space-y-5 text-base leading-7 text-slate-600">

              <p>
                VR Group is a diversified services organisation focused on
                helping individuals and families discover the right
                opportunities for their future.
              </p>

              <p>
                From planning your education journey and exploring
                financial options to finding the right property,
                we provide practical guidance tailored to your goals
                and requirements.
              </p>

              <p>
                Our approach is simple — understand your needs,
                provide clear information and help you move forward
                with greater confidence.
              </p>

            </div>


            {/* =================================================
                SERVICES MINI CARDS
            ================================================= */}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              {/* Education */}

              <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227]/40 hover:bg-white hover:shadow-lg">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071a33] text-[#c9a227] transition-colors duration-300 group-hover:bg-[#c9a227] group-hover:text-[#071a33]">
                  <GraduationCap size={19} />
                </div>

                <h4 className="mt-4 text-sm font-bold text-[#071a33]">
                  Education
                </h4>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Guidance for your education journey.
                </p>

              </div>


              {/* Finance */}

              <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227]/40 hover:bg-white hover:shadow-lg">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071a33] text-[#c9a227] transition-colors duration-300 group-hover:bg-[#c9a227] group-hover:text-[#071a33]">
                  <Landmark size={19} />
                </div>

                <h4 className="mt-4 text-sm font-bold text-[#071a33]">
                  Finance
                </h4>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Helping you explore financial options.
                </p>

              </div>


              {/* Real Estate */}

              <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227]/40 hover:bg-white hover:shadow-lg">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071a33] text-[#c9a227] transition-colors duration-300 group-hover:bg-[#c9a227] group-hover:text-[#071a33]">
                  <Building2 size={19} />
                </div>

                <h4 className="mt-4 text-sm font-bold text-[#071a33]">
                  Real Estate
                </h4>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Helping you find the right property.
                </p>

              </div>

            </div>


            {/* =================================================
                VALUES
            ================================================= */}

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#c9a227]"
                />

                <p className="text-sm font-medium text-slate-600">
                  Personalised guidance based on your goals
                </p>

              </div>


              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#c9a227]"
                />

                <p className="text-sm font-medium text-slate-600">
                  Clear and transparent communication
                </p>

              </div>


              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#c9a227]"
                />

                <p className="text-sm font-medium text-slate-600">
                  Support from the first conversation to the next step
                </p>

              </div>

            </div>


            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-9">

              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#071a33] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c294c] hover:shadow-lg hover:shadow-[#071a33]/20"
              >
                Talk to Our Team

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM VALUES BAR
        ===================================================== */}

        <div className="mt-20 overflow-hidden rounded-3xl bg-[#071a33]">

          <div className="grid md:grid-cols-3">

            {/* Value 1 */}

            <div className="border-b border-white/10 px-6 py-8 text-center md:border-b-0 md:border-r">

              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#c9a227]/10 text-[#c9a227]">
                <CheckCircle2 size={21} />
              </div>

              <h4 className="mt-4 text-base font-bold text-white">
                Trusted Guidance
              </h4>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-400">
                Clear and practical guidance designed around your needs.
              </p>

            </div>


            {/* Value 2 */}

            <div className="border-b border-white/10 px-6 py-8 text-center md:border-b-0 md:border-r">

              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#c9a227]/10 text-[#c9a227]">
                <CheckCircle2 size={21} />
              </div>

              <h4 className="mt-4 text-base font-bold text-white">
                Personalised Support
              </h4>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-400">
                Solutions and recommendations tailored to your goals.
              </p>

            </div>


            {/* Value 3 */}

            <div className="px-6 py-8 text-center">

              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#c9a227]/10 text-[#c9a227]">
                <CheckCircle2 size={21} />
              </div>

              <h4 className="mt-4 text-base font-bold text-white">
                Long-Term Relationships
              </h4>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-400">
                We focus on building lasting relationships and trust.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}