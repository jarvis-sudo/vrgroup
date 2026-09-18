import React from "react";

export default function Herore() {
  return (
    <section
      className="relative overflow-hidden bg-[#071a33]"
      style={{
        backgroundImage: "url('/hero-property.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#071a33]/75" />

      {/* Optional subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071a33]/95 via-[#071a33]/70 to-[#071a33]/40" />

      {/* Decorative glow */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#c9a227]/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#1D5FA7]/20 blur-3xl" />

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32 lg:pt-28">

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227] sm:text-sm">
          VR Group Real Estate
        </p>

        {/* Big brand name */}
        <h2 className="mt-3 font-serif text-6xl font-bold leading-none tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
          <span className="text-white">VR </span>
          <span className="text-[#c9a227]">HOMES</span>
        </h2>

        <h1 className="mt-6 max-w-3xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Find a Property
          <br />
          <span className="text-[#c9a227]">
            That Feels Like Home.
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
          Explore carefully selected properties across residential,
          commercial and investment categories.
        </p>

      </div>
    </section>
  );
}
