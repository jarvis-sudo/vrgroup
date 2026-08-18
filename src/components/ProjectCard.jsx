import React from "react";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";

export default function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#111020]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* IMAGE */}
      <div className="relative h-[260px] overflow-hidden">

        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/80 via-transparent to-transparent" />

        {/* Status */}
        <div className="absolute left-5 top-5">

          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#c9a227] px-4 py-2 text-xs font-bold text-[#071a33] shadow-lg">

            <CheckCircle size={13} />

            {project.status}

          </span>

        </div>

        {/* Type */}
        <div className="absolute bottom-5 left-5">

          <span className="rounded-full border border-white/30 bg-[#071a33]/70 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
            {project.type}
          </span>

        </div>

      </div>


      {/* CONTENT */}
      <div className="p-6">

        <h3 className="font-serif text-2xl font-semibold text-[#111020]">
          {project.name}
        </h3>


        {/* Location */}
        <div className="mt-3 flex items-center gap-2 text-sm text-[#5F6470]">

          <MapPin
            size={16}
            className="shrink-0 text-[#c9a227]"
          />

          {project.location}

        </div>


        {/* Details */}
        <div className="mt-6 grid grid-cols-2 gap-3 border-y border-[#111020]/10 py-5">

          <div>

            <p className="text-xs uppercase tracking-wider text-[#5F6470]">
              Configuration
            </p>

            <p className="mt-1 text-sm font-semibold text-[#111020]">
              {project.configuration}
            </p>

          </div>


          <div>

            <p className="text-xs uppercase tracking-wider text-[#5F6470]">
              Area
            </p>

            <p className="mt-1 text-sm font-semibold text-[#111020]">
              {project.area}
            </p>

          </div>

        </div>


        {/* Price */}
        <div className="mt-5">

          <p className="text-xs uppercase tracking-wider text-[#5F6470]">
            Starting From
          </p>

          <p className="mt-1 font-serif text-xl font-semibold text-[#071a33]">
            {project.price}
          </p>

        </div>


        {/* Button */}
        <button
          onClick={() => onViewDetails(project)}
          className="group/button mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#071a33] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#c9a227] hover:text-[#071a33]"
        >

          View Project

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover/button:translate-x-1"
          />

        </button>

      </div>

    </article>
  );
}