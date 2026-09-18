import React from "react";

/* =========================================================
   ABOUT HERO

   Matches the real-estate page's hero treatment (dark navy,
   background image, gold accent) so the About page feels
   like part of the same site.
========================================================= */

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#071a33]"
      style={{
        backgroundImage: "url('/hero-global.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="absolute inset-0 bg-[#071a33]/80" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071a33]/95 via-[#071a33]/70 to-[#071a33]/40" />

      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#c9a227]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#1D5FA7]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32 lg:pt-36">

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227] sm:text-sm">
          About VR Group
        </p>

        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Two companies,
          <br />
          <span className="text-[#c9a227]">one family's promise.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
          From the start, VR Group has helped families find homes, students
          find their path abroad, and both find the financial support to get
          there — under one roof, with one standard of trust.
        </p>

      </div>

    </section>
  );
}
