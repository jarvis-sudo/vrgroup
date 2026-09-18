import React, { useState } from "react";
import {
  ArrowRight,
  Building2,
  MapPin,
  Home,
  ShieldCheck,
  Waves,
  Cpu,
  Briefcase,
  Dumbbell,
  Phone,
  X,
} from "lucide-react";

const GALLERY_IMAGES = [
 // "/ch1.png",
  "/ch2.webp",
  "/ch3.png",
  "/ch4.png",
  "/ch5.png",
  "/ch6.webp",
  "/ch7.webp",
  "/ch8.png",
 // "/ch9.png",



];

const AMENITIES = [
  {
    icon: Waves,
    title: "Sky Lounge",
    desc: "A rooftop infinity pool and observatory deck, above the city's skyline.",
  },
  {
    icon: Cpu,
    title: "Automated Homes",
    desc: "Climate and lighting control from your phone, in every unit.",
  },
  {
    icon: Briefcase,
    title: "Business Hub",
    desc: "Co-working desks, private meeting rooms, and fibre-fast Wi-Fi.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Club",
    desc: "A full gym, a yoga studio, and courts for indoor sport.",
  },
];

const FACTS = [
  { icon: ShieldCheck, label: "Status", value: "Under Approvals" },
  { icon: Home, label: "Typology", value: "3 & 4 BHK" },
  { icon: Building2, label: "RERA", value: "Expected in 6 months" },
  { icon: MapPin, label: "Address", value: "Green Hills Road, Hyderabad" },
];

export default function CyberHomesTowersPage() {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="relative flex min-h-[85vh] items-end overflow-hidden bg-[#071a33]"
        style={{
          backgroundImage:
            "url('https://cyberhomesinfra.com/assets/project-cyberhomes.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#071a33] via-[#071a33]/40 to-[#071a33]/10" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#c9a227]">
            Financial District, Hyderabad
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Cyber Homes Towers
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
            High-rise residences in the heart of the district, with the
            skyline as the view from every floor.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full bg-[#c9a227] px-6 py-3 text-sm font-semibold text-[#071a33] transition-transform duration-300 hover:-translate-y-0.5"
            >
              See the Towers
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+918179915749"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#071a33]"
            >
              <Phone size={16} />
              Speak to Us
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FACT BAR — overlaps hero bottom edge
      ===================================================== */}
      <section className="relative mx-auto -mt-10 max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#111020]/10 shadow-xl sm:grid-cols-4">
          {FACTS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white p-5 sm:p-6">
              <Icon size={18} className="text-[#1D5FA7]" />
              <p className="mt-3 text-xs font-medium text-[#5F6470]">
                {label}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#111020] sm:text-base">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          STORY — two column
      ===================================================== */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#111020] sm:text-4xl">
              A different vantage point on the city
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#5F6470] sm:text-base sm:leading-8">
              Cyber Homes Towers sits inside the Financial District, built
              around wide layouts, smart-home systems, and unobstructed
              views over Hyderabad. It's designed for people who work in the
              district and want to live minutes from it, without giving up
              space or quiet.
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#5F6470] sm:text-base sm:leading-8">
              Every apartment is planned around light and airflow first,
              with the building's systems — climate, security, access —
              running quietly in the background so residents don't have to
              think about them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src={GALLERY_IMAGES[0]}
              alt="Cyber Homes Towers"
              className="col-span-2 h-56 w-full rounded-xl object-cover sm:h-64"
            />
            <img
              src={GALLERY_IMAGES[1]}
              alt="Cyber Homes Towers"
              className="h-40 w-full rounded-xl object-cover sm:h-48"
            />
            <img
              src={GALLERY_IMAGES[2]}
              alt="Cyber Homes Towers"
              className="h-40 w-full rounded-xl object-cover sm:h-48"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY — masonry grid, click to expand
      ===================================================== */}
      <section id="gallery" className="bg-[#F5F7FA] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-[#111020] sm:text-4xl">
            Inside the Towers
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-7 text-[#5F6470] sm:text-base">
            A closer look at the design, the finishes, and the views.
          </p>

          <div className="mt-10 columns-2 gap-4 sm:columns-3 [&>img]:mb-4">
            {GALLERY_IMAGES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Cyber Homes Towers view ${i + 1}`}
                onClick={() => setLightboxImg(src)}
                className="w-full cursor-pointer rounded-xl object-cover transition-opacity duration-300 hover:opacity-90"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#071a33]/95 p-6"
            onClick={() => setLightboxImg(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxImg(null)}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <img
              src={lightboxImg}
              alt="Cyber Homes Towers enlarged view"
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>

      {/* =====================================================
          AMENITIES — horizontal rail
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-[#111020] sm:text-4xl">
          Built for daily life
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#111020]/8 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1D5FA7]/10">
                <Icon size={19} className="text-[#1D5FA7]" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-[#111020]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#5F6470]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CLOSING CTA
      ===================================================== */}
      <section className="bg-[#071a33] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Reserve your floor before launch
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
            RERA approvals are expected within six months. Early registrations
            get first choice of floor and layout.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 rounded-full bg-[#c9a227] px-7 py-3.5 text-sm font-semibold text-[#071a33] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              +91 9999999999
            </a>
            <a
              href="https://wa.me/918179915749"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#071a33]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
