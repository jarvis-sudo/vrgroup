import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Landmark,
  Plane,
} from "lucide-react";

/* =========================================================
   GROUP COMPANIES

   The four businesses under the VR Group umbrella.
   Edit `companies` below, or pass your own via the
   `companies` prop.

   Usage:
     <GroupCompanies />
========================================================= */

const defaultCompanies = [
  {
    id: "vr-homes",
    name: "VR Homes",
    tagline: "Real Estate",
    description:
      "Residential and commercial properties built for how people actually live and work.",
    icon: Building2,
    href: "/real-estate",
  },
  {
    id: "vr-overseas",
    name: "VR Overseas",
    tagline: "Overseas Education & Immigration",
    description:
      "Guiding students and families through visas, university admissions, and relocation.",
    icon: Plane,
    href: "/overseas",
  },
  {
    id: "vr-education",
    name: "VR Education",
    tagline: "Coaching & Academic Support",
    description:
      "Test prep, mentoring, and academic guidance that gets students into the right programs.",
    icon: GraduationCap,
    href: "/education",
  },
  {
    id: "vr-loans",
    name: "VR Loan Assistance",
    tagline: "Financial Services",
    description:
      "Simplifying home loans, education loans, and the paperwork that comes with both.",
    icon: Landmark,
    href: "/loan-assistance",
  },
];

export default function GroupCompanies({ companies = defaultCompanies }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227] sm:text-sm">
            Under One Roof
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-semibold text-[#071a33] sm:text-4xl">
            The Companies of VR Group
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Four specialised teams, one group you only have to trust once.
          </p>

        </div>

        {/* Companies Grid */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2">

          {companies.map((company) => {
            const Icon = company.icon;

            return (
              <Link
                key={company.id}
                to={company.href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071a33] text-[#c9a227]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-[#071a33] sm:text-2xl">
                  {company.name}
                </h3>

                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#c9a227]">
                  {company.tagline}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {company.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#1D5FA7] transition-all duration-300 group-hover:gap-3">
                  Explore {company.name}
                  <ArrowUpRight size={16} />
                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}
