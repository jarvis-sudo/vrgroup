

import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Home,
  Landmark,
  MapPin,
  Trees,
} from "lucide-react";

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    id: "all",
    name: "All Properties",
    image: "/buildings.jpg",
    icon: Building2,
  },
  {
    id: "apartments",
    name: "Flats & Apartments",
    image: "/apartments.avif",
    icon: Building2,
  },
  {
    id: "villas",
    name: "Villas",
    image: "/villa.webp",
    icon: Home,
  },
  {
    id: "plots",
    name: "Residential Plots",
    image: "/plots.avif",
    icon: MapPin,
  },
  {
    id: "commercial",
    name: "Commercial Spaces",
    image: "/commercial-space.png",
    icon: Landmark,
  },
  {
    id: "houses",
    name: "Independent Houses",
    image: "/house.webp",
    icon: Home,
  },
 /* {
    id: "farm",
    name: "Farm Lands",
    image: "/farmland.webp",
    icon: Trees,
  },
  */
];

/* =========================================================
   PROPERTY DATA
========================================================= */

const properties = [
  /* =======================================================
     FLATS & APARTMENTS
  ======================================================= */

  {
    id: 1,
    title: "Cyber Homes",
    category: "apartments",
    categoryName: "Flats & Apartments",
    location: "Kokapet, Hyderabad",
    price: "₹1.25 Cr",
    details: "3 BHK • 3 Baths • 1,850 sq.ft",
    image: "/apartments.avif",

    description:
      "A premium residential apartment opportunity in Kokapet, Hyderabad, designed for comfortable modern living with excellent connectivity to major parts of the city.",

    bedrooms: "3 BHK",
    bathrooms: "3",
    area: "1,850 sq.ft",
    propertyType: "Apartment",

    highlights: [
      "Premium residential community",
      "Modern architecture",
      "Excellent connectivity",
      "Spacious living areas",
      "Family-friendly environment",
      "Close to major IT corridors",
    ],
  },
  {
    id: 2,
    title: "Mathru Bhoomi Farm Land",
    category: "farm",
    categoryName: "Farm Lands",
    location: "Khammam, Telangana",
    price: "₹62 Lakhs",
    details: "1 Acre • Gated Community",
    image: "/farmland.webp",

    description:
      "Beautiful farm land in Chevella offering a peaceful environment away from the city with good future investment potential.",

    bedrooms: "-",
    bathrooms: "-",
    area: "1 Acre",
    propertyType: "Farm Land",

    highlights: [
      "1 acre property",
      "Green surroundings",
      "Peaceful location",
      "Gated development",
      "Investment potential",
      "Weekend getaway opportunity",
    ],
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function RealEstateProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  /* =======================================================
     FILTER PROPERTIES
  ======================================================= */

  const filteredProperties = useMemo(() => {
    if (selectedCategory === "all") {
      return properties;
    }

    return properties.filter(
      (property) => property.category === selectedCategory
    );
  }, [selectedCategory]);

  /* =======================================================
     CATEGORY CLICK
  ======================================================= */

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);

    setTimeout(() => {
      document
        .getElementById("property-listings")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  /* =======================================================
     CURRENT CATEGORY NAME
  ======================================================= */

  const currentCategoryName =
    selectedCategory === "all"
      ? "Explore Our Properties"
      : categories.find(
          (category) => category.id === selectedCategory
        )?.name;

  return (
    <main className="min-h-screen bg-white text-[#071a33]">

      {/* =====================================================
          HERO
      ===================================================== */}
{/*
      <section
  className="relative overflow-hidden bg-[#071a33]"
  style={{
    backgroundImage: "url('/hero-property.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  
  <div className="absolute inset-0 bg-[#071a33]/75" />

  
  <div className="absolute inset-0 bg-gradient-to-r from-[#071a33]/95 via-[#071a33]/70 to-[#071a33]/40" />

  
  <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#c9a227]/10 blur-3xl" />

  <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#1D5FA7]/20 blur-3xl" />

  
  <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32 lg:pt-36">

    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227] sm:text-sm">
      VR Group Real Estate
    </p>

    <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
      Find a Property
      <br />
      <span className="text-[#c9a227]">
        That Feels Like Home.
      </span>
    </h1>

    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
      Explore carefully selected properties across residential,
      commercial and investment categories.
    </p>

  </div>
</section>
*/}



      {/* =====================================================
          CATEGORY SECTION
          IMAGE CARDS
      ===================================================== */}

      <section
        id="property-categories"
        className="overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-20"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227] sm:text-sm">
              Explore Properties
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#071a33] sm:text-4xl">
              Find the Right Property Type
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Choose a property category to explore available
              properties.
            </p>

          </div>

          {/* =================================================
              HORIZONTAL CATEGORY SCROLLER
          ================================================= */}

          <div className="mt-10 overflow-x-auto pb-5 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            <div className="flex w-max gap-4 sm:gap-5">

              {categories.map((category) => {

                const Icon = category.icon;

                const isActive =
                  selectedCategory === category.id;

                return (

                  <button
                    key={category.id}
                    type="button"
                    onClick={() =>
                      handleCategoryClick(category.id)
                    }
                    className={`
                      group
                      relative
                      h-48
                      w-[240px]
                      shrink-0
                      overflow-hidden
                      rounded-2xl
                      text-left
                      shadow-sm
                      transition-all
                      duration-300
                      active:scale-[0.98]

                      sm:h-52
                      sm:w-[280px]

                      lg:h-56
                      lg:w-[300px]

                      ${
                        isActive
                          ? "ring-4 ring-[#c9a227]/40"
                          : ""
                      }
                    `}
                  >

                    {/* Category Image */}

                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 lg:group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/95 via-[#071a33]/40 to-transparent" />

                    {/* Icon */}

                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[#071a33] shadow-md sm:h-11 sm:w-11">

                      <Icon size={18} />

                    </div>

                    {/* Active Indicator */}

                    {isActive && (

                      <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#c9a227] text-[#071a33]">

                        <CheckCircle2 size={16} />

                      </div>

                    )}

                    {/* Card Content */}

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">

                      <h3 className="font-serif text-lg font-semibold text-white sm:text-xl">
                        {category.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-[#c9a227] sm:text-xs">

                        {category.id === "all"
                          ? "View All"
                          : "View Properties"}

                        <ArrowRight size={13} />

                      </div>

                    </div>

                  </button>

                );
              })}

            </div>

          </div>

          {/* Mobile Swipe Message */}

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 sm:hidden">

            <span>
              Swipe to explore categories
            </span>

            <ArrowRight size={13} />

          </div>

        </div>

      </section>

      {/* =====================================================
          PROPERTY LISTINGS
      ===================================================== */}

      <section
        id="property-listings"
        className="scroll-mt-20 py-12 sm:py-16 lg:py-20"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Section Header */}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a227]">
                Properties
              </p>

              <h2 className="mt-2 font-serif text-3xl font-semibold text-[#071a33] sm:text-4xl">
                {currentCategoryName}
              </h2>

            </div>

            <p className="text-sm text-slate-500">

              {filteredProperties.length}{" "}

              {filteredProperties.length === 1
                ? "property"
                : "properties"}

            </p>

          </div>

          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {filteredProperties.length === 0 && (

            <div className="mt-12 rounded-2xl border border-slate-200 p-10 text-center">

              <Building2
                size={40}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-4 font-serif text-xl font-semibold">
                No properties found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Please select another category.
              </p>

              <button
                type="button"
                onClick={() =>
                  handleCategoryClick("all")
                }
                className="mt-5 rounded-full bg-[#071a33] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0c294c]"
              >
                View All Properties
              </button>

            </div>

          )}

          {/* =================================================
              PROPERTY GRID
          ================================================= */}

          {filteredProperties.length > 0 && (

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredProperties.map((property) => (

                <article
                  key={property.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Image */}

                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

                    <img
                      src={property.image}
                      alt={property.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 lg:group-hover:scale-105"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/50 via-transparent to-transparent" />

                    {/* Category */}

                    <div className="absolute left-4 top-4">

                      <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#071a33] shadow-sm">

                        {property.categoryName}

                      </span>

                    </div>

                    {/* Available */}

                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-green-700 shadow-sm">

                      <CheckCircle2 size={12} />

                      Available

                    </div>

                  </div>

                  {/* Card Content */}

                  <div className="p-5 sm:p-6">

                    <h3 className="font-serif text-xl font-semibold text-[#071a33]">

                      {property.title}

                    </h3>

                    {/* Location */}

                    <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">

                      <MapPin
                        size={15}
                        className="shrink-0 text-[#c9a227]"
                      />

                      {property.location}

                    </div>

                    {/* Price */}

                    <div className="mt-5 border-t border-slate-100 pt-5">

                      <p className="text-lg font-bold text-[#071a33]">
                        {property.price}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {property.details}
                      </p>

                    </div>

                    {/* MORE INFO */}

                    <Link
                      to={`/real-estate/property/${property.id}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1D5FA7] transition-all duration-300 hover:gap-3 hover:text-[#071a33]"
                    >

                      More Info

                      <ArrowUpRight size={16} />

                    </Link>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="bg-[#071a33] py-14 sm:py-16">

        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227]">
            Need Help?
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Not sure which property is right for you?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Talk to our team and we'll help you find a property
            that matches your requirements.
          </p>

          <a
            href="/#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c9a227] px-7 py-3.5 text-sm font-bold text-[#071a33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9b63a]"
          >

            Talk to Us

            <ArrowUpRight size={17} />

          </a>

        </div>

      </section>

    </main>
  );
}