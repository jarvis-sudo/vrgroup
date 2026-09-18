import React from "react";
import {  Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";


/* =========================================================
   TEAM SECTION — Editorial Portrait Wall

   Full-bleed portraits are the design; there's no card
   chrome competing with the faces. Name and role sit
   directly on the photo, revealed on hover along with
   contact links.

   Usage:
     <TeamSection />
     <TeamSection members={leadership} />
========================================================= */

const defaultMembers = [
  {
    id: 1,
    name: "Ramesh Varma",
    role: "Managing Director",
    image: "/vr-2.jpg",
    linkedin: "#",
    email: "ramesh@vrgroup.com",
  },
  {
    id: 2,
    name: "Priya Reddy",
    role: "Director, Sales & Marketing",
    image: "/person-1.jpg",
    linkedin: "#",
    email: "priya@vrgroup.com",
  },
  {
    id: 3,
    name: "Suresh Kumar",
    role: "Head of Projects",
    image: "/person-1.jpg",
    linkedin: "#",
    email: "suresh@vrgroup.com",
  },
];

export default function TeamSection({ members = defaultMembers }) {
  return (
    <section className="bg-[#071a33] pb-20 pt-20 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-32">

      {/* Section Header */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c9a227] sm:text-base">
            Leadership
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            The Team Behind All Four Companies
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Every property on this site is backed by a team with decades of
            combined experience, guiding you from the first visit to the
            keys in your hand.
          </p>

        </div>

      </div>

      {/* Full-bleed portrait wall */}

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3">

        {members.map((member) => (

          <div
            key={member.id}
            className="group relative aspect-[3/4] overflow-hidden bg-slate-800 sm:min-h-[560px] lg:min-h-[720px]"
          >

            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />

            {/* Base gradient — always visible so text stays readable */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#071a33] via-[#071a33]/10 to-transparent" />

            {/* Name / role */}

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">

              <h3 className="font-serif text-2xl font-semibold text-white sm:text-4xl">
                {member.name}
              </h3>

              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[#c9a227] sm:text-base">
                {member.role}
              </p>

              {/* Social links — revealed on hover */}

              <div className="mt-5 flex items-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#071a33] shadow-sm transition-colors hover:bg-[#c9a227]"
                  >
                    <FaLinkedin size={15} />
                  </a>
                )}

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#071a33] shadow-sm transition-colors hover:bg-[#c9a227]"
                  >
                    <Mail size={15} />
                  </a>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
