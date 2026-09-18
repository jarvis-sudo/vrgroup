import React from "react";

/* =========================================================
   STATS BAR

   A slim strip of headline numbers, placed between the
   narrative sections to reinforce scale and trust.

   Usage:
     <StatsBar />
     <StatsBar stats={customStats} />
========================================================= */

const defaultStats = [
  { id: 1, value: "15+", label: "Years in Business" },
  { id: 2, value: "2,500+", label: "Families Served" },
  { id: 3, value: "4", label: "Companies, One Group" },
  { id: 4, value: "10+", label: "Cities Across India" },
];

export default function StatsBar({ stats = defaultStats }) {
  return (
    <section className="bg-[#071a33] py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">

          {stats.map((stat) => (
            <div key={stat.id} className="text-center sm:text-left">

              <p className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-1.5 text-xs uppercase tracking-wide text-slate-400 sm:text-sm">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
