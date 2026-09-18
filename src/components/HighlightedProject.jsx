import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

/* =========================================================
   HIGHLIGHTED PROJECT

   A single flagship property, shown as a large spotlight.
   Pass your real property object in as a prop — falls back
   to `defaultProject` below if none is given.

   Usage:
     <HighlightedProject />
     <HighlightedProject project={properties[0]} />
========================================================= */

const defaultProject = {
  id: 1,
  title: "Cyber Homes",
  categoryName: "Flats & Apartments",
  location: "Kokapet, Hyderabad",
  price: "₹1.25 Cr",
  details: "3 BHK • 3 Baths • 1,850 sq.ft",
  image: "/apartments.avif",
  description:
    "A premium residential apartment opportunity in Kokapet, Hyderabad, designed for comfortable modern living with excellent connectivity to major parts of the city.",
  highlights: [
    "Premium residential community",
    "Modern architecture",
    "Excellent connectivity",
    "Spacious living areas",
  ],
};

export default function HighlightedProject({ project = defaultProject }) {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c9a227] sm:text-base">
            Featured Project
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-semibold text-[#071a33] sm:text-5xl lg:text-6xl">
            Our Pick of the Season
          </h2>

        </div>

        {/* Spotlight Card */}

        <div className="mt-14 overflow-hidden rounded-3xl border-2 border-[#c9a227]/30 shadow-2xl shadow-[#071a33]/10 lg:grid lg:grid-cols-2">

          {/* Image */}

          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[640px]">

            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/60 via-transparent to-transparent" />

            <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#071a33] shadow-md sm:text-sm">
              {project.categoryName}
            </span>

            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-green-700 shadow-md sm:text-sm">
              <CheckCircle2 size={16} />
              Available
            </div>

          </div>

          {/* Content */}

          <div className="flex flex-col justify-center bg-[#071a33] p-10 sm:p-14 lg:p-16">

            <h3 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
              {project.title}
            </h3>

            <div className="mt-4 flex items-center gap-2 text-base text-slate-300 sm:text-lg">
              <MapPin size={20} className="shrink-0 text-[#c9a227]" />
              {project.location}
            </div>

            <p className="mt-7 text-base leading-8 text-slate-300 sm:text-lg">
              {project.description}
            </p>

            {/* Highlights */}

            {project.highlights?.length > 0 && (
              <ul className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {project.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-slate-200 sm:text-base"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#c9a227]"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {/* Price + CTA */}

            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">

              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {project.price}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {project.details}
                </p>
              </div>

              <Link
                to={`/real-estate/property/${project.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#c9a227] px-8 py-4 text-base font-bold text-[#071a33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9b63a]"
              >
                More Info
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
