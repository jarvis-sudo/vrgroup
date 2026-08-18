import React, { useState } from "react";
import {
  ArrowRight,
  Building2,
  MapPin,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function RealEstateProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleEnquiry = (project) => {
    const message = `Hello VR Group,

I am interested in the project "${project.name}" located in ${project.location}.

I would like to know more about the project, pricing and availability.`;

    const whatsappNumber = "919999999999";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB] text-[#111020]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
  className="relative overflow-hidden bg-[#071a33] pt-[140px]"
  style={{
    backgroundImage: "url('/hero-property.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-[#071a33]/55" />

  {/* Extra gradient for readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#071a33]/95 via-[#071a33]/70 to-[#071a33]/40" />

  {/* Gold glow */}
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c9a227]/10 blur-3xl" />

  {/* Blue glow */}
  <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#1D5FA7]/20 blur-3xl" />


  {/* CONTENT */}
  <div className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-8">

    <div className="max-w-3xl">

      {/* Small heading */}
      <div className="mb-5 flex items-center gap-3">

        <span className="h-[1px] w-10 bg-[#c9a227]" />

        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a227]">
          VR Group Real Estate
        </span>

      </div>


      {/* Main heading */}
      <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">

        Find a Place Worth

        <span className="block text-[#c9a227]">
          Investing In
        </span>

      </h1>


      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">

        Explore carefully selected residential and real estate
        opportunities with guidance from the VR Group team.

      </p>


      {/* CTA */}
      <a
        href="#projects"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c9a227] px-7 py-3.5 text-sm font-bold text-[#071a33] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9b63a] hover:shadow-xl hover:shadow-[#c9a227]/20"
      >

        Explore Projects

        <ArrowRight size={17} />

      </a>

    </div>

  </div>

</section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8"
      >

        {/* Section heading */}

        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c9a227]">
              Our Projects
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#071a33] sm:text-4xl">
              Discover Our Properties
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#5F6470] sm:text-base">
              Explore properties selected with location, quality and
              long-term value in mind.
            </p>

          </div>


          {/* Project count */}

          <div className="flex items-center gap-3 rounded-xl border border-[#071a33]/10 bg-white px-5 py-3 shadow-sm">

            <Building2
              size={20}
              className="text-[#c9a227]"
            />

            <span className="text-sm font-semibold text-[#071a33]">
              {projects.length} Project{projects.length !== 1 ? "s" : ""}
            </span>

          </div>

        </div>


        {/* Project grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject}
            />

          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#071a33]">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c9a227]">
                Looking for a Property?
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold text-white">
                Let us help you find the right opportunity.
              </h2>

            </div>


            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#c9a227] px-7 py-3.5 text-sm font-bold text-[#071a33] transition-all duration-300 hover:bg-[#d9b63a]"
            >

              Talk to Our Team

              <ArrowRight size={17} />

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      {selectedProject && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071a33]/80 px-4 py-6 backdrop-blur-sm">

          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

            {/* Close */}

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#071a33]/80 text-white transition-colors hover:bg-[#c9a227] hover:text-[#071a33]"
              aria-label="Close"
            >

              <X size={20} />

            </button>


            {/* Image */}

            <div className="h-64 overflow-hidden sm:h-80">

              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="h-full w-full object-cover"
              />

            </div>


            {/* Content */}

            <div className="p-6 sm:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a227]">
                {selectedProject.type}
              </p>

              <h2 className="mt-2 font-serif text-3xl font-semibold text-[#071a33]">
                {selectedProject.name}
              </h2>


              <div className="mt-3 flex items-center gap-2 text-sm text-[#5F6470]">

                <MapPin
                  size={16}
                  className="text-[#c9a227]"
                />

                {selectedProject.location}

              </div>


              <p className="mt-6 text-sm leading-7 text-[#5F6470]">
                {selectedProject.description}
              </p>


              {/* Details */}

              <div className="mt-7 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-[#F5F7FA] p-4">

                  <p className="text-xs uppercase tracking-wider text-[#5F6470]">
                    Area
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#071a33]">
                    {selectedProject.area}
                  </p>

                </div>


                <div className="rounded-xl bg-[#F5F7FA] p-4">

                  <p className="text-xs uppercase tracking-wider text-[#5F6470]">
                    Starting Price
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#071a33]">
                    {selectedProject.price}
                  </p>

                </div>

              </div>


              {/* Actions */}

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <button
                  onClick={() => handleEnquiry(selectedProject)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#c9a227] px-5 py-3.5 text-sm font-bold text-[#071a33] transition-colors hover:bg-[#d9b63a]"
                >

                  <MessageCircle size={17} />

                  WhatsApp Enquiry

                </button>


                <a
                  href="tel:+919999999999"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#071a33] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1D5FA7]"
                >

                  <Phone size={17} />

                  Call Us

                </a>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}