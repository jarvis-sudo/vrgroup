import React from "react";
import { Quote } from "lucide-react";

export default function MdMessage() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-20 sm:py-28">

      {/* Decorative accents */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#1D5FA7]/5 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#c9a227]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section eyebrow */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1D5FA7] sm:text-sm">
            From the Desk of
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#111020] sm:text-4xl lg:text-5xl">
            Managing Director's Message
          </h2>
        </div>

        {/* Content card */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-[#111020]/5 lg:mt-16">

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* Photo side */}
            <div className="relative h-80 lg:h-full">
              <img
                src="/vr-1.jpg"
                alt="Managing Director, VR Group"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/80 via-transparent to-transparent lg:bg-gradient-to-r" />

              {/* Name plate overlay (mobile/tablet) */}
              <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                <p className="font-serif text-2xl font-bold text-white">
                  Veera Reddy
                </p>
                <p className="text-sm font-medium text-[#c9a227]">
                  Managing Director, VR Group
                </p>
              </div>
            </div>

            {/* Message side */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

              <Quote
                size={40}
                className="text-[#c9a227]/40"
                fill="currentColor"
              />

              <p className="mt-4 font-serif text-xl italic leading-relaxed text-[#111020] sm:text-2xl sm:leading-relaxed">
                At VR Group, we build trust, one milestone at a time — through
                VR Overseas, guiding students toward the right global
                opportunities, and VR Homes, delivering properties families
                are proud to call their own.
              </p>

              <p className="mt-6 text-sm leading-7 text-[#5F6470] sm:text-base sm:leading-8">
                Whether it's a career abroad or a home to come back to, our
                promise stays the same: honest guidance, dependable delivery,
                and outcomes built around the way you actually live.
              </p>

              {/* Signature block (desktop) */}
              <div className="mt-8 hidden items-center gap-4 border-t border-[#111020]/10 pt-6 lg:flex">
                <div>
                  <p className="font-serif text-xl font-bold text-[#111020]">
                    Veera Reddy
                  </p>
                  <p className="text-sm font-medium text-[#1D5FA7]">
                    Managing Director, VR Group
                  </p>
                </div>
              </div>

              {/* Signature block (mobile) */}
              <div className="mt-8 border-t border-[#111020]/10 pt-6 lg:hidden">
                <p className="text-sm font-medium text-[#1D5FA7]">
                  Veera Reddy, Managing Director
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
