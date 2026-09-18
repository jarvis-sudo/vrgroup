import React from "react";
import { HandHeart, ShieldCheck, Sparkles, Users } from "lucide-react";

/* =========================================================
   OUR VALUES

   What holds the four companies together as one group.

   Usage:
     <OurValues />
========================================================= */

const defaultValues = [
  {
    id: 1,
    title: "Transparency First",
    description:
      "Clear pricing, honest timelines, and no fine print you find out about later.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "One Relationship",
    description:
      "Whichever company you start with, your history travels with you across the group.",
    icon: Users,
  },
  {
    id: 3,
    title: "Personal Guidance",
    description:
      "A named person you can call, not a ticket number — from enquiry to years after.",
    icon: HandHeart,
  },
  {
    id: 4,
    title: "Standards That Compound",
    description:
      "What we learn serving one family gets applied to the way we serve the next.",
    icon: Sparkles,
  },
];

export default function OurValues({ values = defaultValues }) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227] sm:text-sm">
            What Guides Us
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-semibold text-[#071a33] sm:text-4xl">
            The Same Standard, Every Company
          </h2>

        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div key={value.id}>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071a33]/5 text-[#071a33]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 font-serif text-lg font-semibold text-[#071a33] sm:text-xl">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {value.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
