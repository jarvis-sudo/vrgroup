import React from "react";
import { ArrowUpRight } from "lucide-react";

/* =========================================================
   ABOUT CTA

   Closing call-to-action, matching the bottom CTA style
   used on the real estate page for visual consistency.
========================================================= */

export default function AboutCTA() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227]">
          Get In Touch
        </p>

        <h2 className="mt-3 font-serif text-3xl font-semibold text-[#071a33] sm:text-4xl">
          Not sure which of our companies you need?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
          Tell us what you're trying to do — buy a home, study abroad, or
          finance either — and we'll point you to the right team.
        </p>

        <a
          href="/#contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#071a33] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c294c]"
        >
          Talk to Us
          <ArrowUpRight size={17} />
        </a>

      </div>

    </section>
  );
}
