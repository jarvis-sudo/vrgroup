import React from "react";

/* =========================================================
   OUR STORY

   Narrative section: who VR Group is and why it exists,
   paired with a supporting image.
========================================================= */

export default function OurStory() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* Image */}

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 order-2 lg:order-1">
            <img
              src="/hero-global.jpg"
              alt="VR Group team at work"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}

          <div className="order-1 lg:order-2">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227] sm:text-sm">
              Our Story
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#071a33] sm:text-4xl">
              Started with one house.
              <br />
              Grown into one group.
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              VR Group began as a single real estate venture, built on a
              simple idea: property decisions shouldn't feel overwhelming.
              As families came back to us for more — a loan, a child's
              overseas education, a second home — we grew into the four
              companies we are today, each solving one part of that journey.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              What hasn't changed is how we work: transparently, personally,
              and with a long-term relationship in mind, not a one-time sale.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
