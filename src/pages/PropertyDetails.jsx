import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BedDouble,
  Bath,
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  Ruler,
  ShieldCheck,
  Phone,
} from "lucide-react";


/* =========================================================
   PROPERTY DATA
   ========================================================= */

const properties = [
  {
    id: 1,
    title: "Cyber Homes",
    category: "Flats & Apartments",
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


 {/* {
    id: 2,
    title: "Luxury 2 BHK Apartments",
    category: "Flats & Apartments",
    location: "Narsingi, Hyderabad",
    price: "₹85 Lakhs",
    details: "2 BHK • 2 Baths • 1,350 sq.ft",
    image: "/apartments.avif",

    description:
      "Well-designed 2 BHK apartments located in Narsingi with convenient access to schools, workplaces, shopping and major roads.",

    bedrooms: "2 BHK",
    bathrooms: "2",
    area: "1,350 sq.ft",
    propertyType: "Apartment",

    highlights: [
      "Prime Narsingi location",
      "Well-planned interiors",
      "Excellent road connectivity",
      "Modern amenities",
      "Ideal for families",
      "Strong investment potential",
    ],
  },


  {
    id: 3,
    title: "Premium 4 BHK Apartments",
    category: "Flats & Apartments",
    location: "Financial District, Hyderabad",
    price: "₹1.85 Cr",
    details: "4 BHK • 4 Baths • 2,650 sq.ft",
    image: "/apartments.avif",

    description:
      "Spacious 4 BHK apartments in the Financial District offering a premium lifestyle and convenient access to Hyderabad's major business hubs.",

    bedrooms: "4 BHK",
    bathrooms: "4",
    area: "2,650 sq.ft",
    propertyType: "Apartment",

    highlights: [
      "Located in Financial District",
      "Large floor plans",
      "Premium residential development",
      "Excellent connectivity",
      "Luxury lifestyle",
      "Ideal for premium buyers",
    ],
  },


  {
    id: 4,
    title: "Luxury Villa Community",
    category: "Villas",
    location: "Tellapur, Hyderabad",
    price: "₹2.40 Cr",
    details: "4 BHK • 4 Baths • 3,200 sq.ft",
    image: "/villa.webp",

    description:
      "A premium villa opportunity in Tellapur offering spacious interiors, privacy and a comfortable community lifestyle.",

    bedrooms: "4 BHK",
    bathrooms: "4",
    area: "3,200 sq.ft",
    propertyType: "Villa",

    highlights: [
      "Premium villa community",
      "Spacious floor plans",
      "Private living spaces",
      "Gated community",
      "Modern infrastructure",
      "Excellent location",
    ],
  },


  {
    id: 5,
    title: "Premium Independent Villa",
    category: "Villas",
    location: "Kollur, Hyderabad",
    price: "₹1.95 Cr",
    details: "4 BHK • 4 Baths • 2,850 sq.ft",
    image: "/villa.webp",

    description:
      "Beautiful independent villa opportunity in Kollur with spacious rooms and a peaceful residential environment.",

    bedrooms: "4 BHK",
    bathrooms: "4",
    area: "2,850 sq.ft",
    propertyType: "Villa",

    highlights: [
      "Independent villa",
      "Peaceful location",
      "Spacious interiors",
      "Gated surroundings",
      "Good connectivity",
      "Ideal for families",
    ],
  },


  {
    id: 6,
    title: "Modern Luxury Villas",
    category: "Villas",
    location: "Mokila, Hyderabad",
    price: "₹2.75 Cr",
    details: "5 BHK • 5 Baths • 3,800 sq.ft",
    image: "/villa.webp",

    description:
      "Large luxury villas in Mokila offering generous living spaces and a premium residential lifestyle.",

    bedrooms: "5 BHK",
    bathrooms: "5",
    area: "3,800 sq.ft",
    propertyType: "Villa",

    highlights: [
      "Luxury villa",
      "Large built-up area",
      "Premium neighbourhood",
      "Spacious rooms",
      "Private lifestyle",
      "Long-term investment opportunity",
    ],
  },


  {
    id: 7,
    title: "Premium Residential Plots",
    category: "Residential Plots",
    location: "Shadnagar, Hyderabad",
    price: "₹45 Lakhs",
    details: "200 Sq. Yards • Gated Community",
    image: "/plots.avif",

    description:
      "Premium residential plots suitable for building your future home or making a long-term real estate investment.",

    bedrooms: "-",
    bathrooms: "-",
    area: "200 Sq. Yards",
    propertyType: "Residential Plot",

    highlights: [
      "Residential plots",
      "Gated community",
      "Good road connectivity",
      "Suitable for future construction",
      "Investment opportunity",
      "Growing location",
    ],
  },


  {
    id: 8,
    title: "HMDA Approved Plots",
    category: "Residential Plots",
    location: "Maheshwaram, Hyderabad",
    price: "₹38 Lakhs",
    details: "180 Sq. Yards • HMDA Approved",
    image: "/images/properties/plot-2.jpg",

    description:
      "Residential plots in Maheshwaram offering an opportunity for home construction and long-term investment.",

    bedrooms: "-",
    bathrooms: "-",
    area: "180 Sq. Yards",
    propertyType: "Residential Plot",

    highlights: [
      "HMDA approved",
      "Residential development",
      "Good connectivity",
      "Growing location",
      "Investment potential",
      "Suitable for home construction",
    ],
  },


  {
    id: 9,
    title: "Premium Gated Plots",
    category: "Residential Plots",
    location: "Yadagirigutta, Telangana",
    price: "₹32 Lakhs",
    details: "200 Sq. Yards • Gated Community",
    image: "/images/properties/plot-3.jpg",

    description:
      "Well-planned residential plots in a gated community, suitable for future residential development.",

    bedrooms: "-",
    bathrooms: "-",
    area: "200 Sq. Yards",
    propertyType: "Residential Plot",

    highlights: [
      "Gated community",
      "Residential plots",
      "Planned development",
      "Good connectivity",
      "Affordable investment",
      "Future growth potential",
    ],
  },


  {
    id: 10,
    title: "Premium Office Space",
    category: "Commercial Spaces",
    location: "Gachibowli, Hyderabad",
    price: "₹1.80 Cr",
    details: "1,800 sq.ft • Commercial",
    image: "/images/properties/commercial-1.jpg",

    description:
      "Premium commercial office space located in Gachibowli, suitable for businesses and investors looking for a strategic location.",

    bedrooms: "-",
    bathrooms: "-",
    area: "1,800 sq.ft",
    propertyType: "Commercial",

    highlights: [
      "Prime commercial location",
      "Suitable for offices",
      "Excellent connectivity",
      "Business-friendly location",
      "Investment opportunity",
      "Close to IT corridor",
    ],
  },


  {
    id: 11,
    title: "Prime Retail Space",
    category: "Commercial Spaces",
    location: "Kondapur, Hyderabad",
    price: "₹2.10 Cr",
    details: "1,500 sq.ft • Retail",
    image: "/images/properties/commercial-2.jpg",

    description:
      "Prime retail property in Kondapur suitable for businesses looking for visibility and strong connectivity.",

    bedrooms: "-",
    bathrooms: "-",
    area: "1,500 sq.ft",
    propertyType: "Commercial",

    highlights: [
      "Prime retail location",
      "Good visibility",
      "High-growth neighbourhood",
      "Excellent connectivity",
      "Business opportunity",
      "Investment potential",
    ],
  },


  {
    id: 12,
    title: "Commercial Investment Property",
    category: "Commercial Spaces",
    location: "Madhapur, Hyderabad",
    price: "₹3.25 Cr",
    details: "2,500 sq.ft • Commercial",
    image: "/images/properties/commercial-3.jpg",

    description:
      "A commercial investment opportunity in Madhapur located close to major business and technology hubs.",

    bedrooms: "-",
    bathrooms: "-",
    area: "2,500 sq.ft",
    propertyType: "Commercial",

    highlights: [
      "Madhapur location",
      "Strong commercial demand",
      "Large floor area",
      "Business-friendly location",
      "Investment opportunity",
      "Excellent connectivity",
    ],
  },


  {
    id: 13,
    title: "Premium Independent House",
    category: "Independent Houses",
    location: "Manikonda, Hyderabad",
    price: "₹1.65 Cr",
    details: "4 BHK • 4 Baths • 2,500 sq.ft",
    image: "/images/properties/house-1.jpg",

    description:
      "Spacious independent house in Manikonda offering comfortable family living with excellent access to nearby areas.",

    bedrooms: "4 BHK",
    bathrooms: "4",
    area: "2,500 sq.ft",
    propertyType: "Independent House",

    highlights: [
      "Independent house",
      "Spacious interiors",
      "Family-friendly neighbourhood",
      "Good connectivity",
      "Residential location",
      "Long-term value",
    ],
  },


  {
    id: 14,
    title: "Spacious Family Home",
    category: "Independent Houses",
    location: "LB Nagar, Hyderabad",
    price: "₹1.15 Cr",
    details: "3 BHK • 3 Baths • 2,100 sq.ft",
    image: "/images/properties/house-2.jpg",

    description:
      "A spacious family home in LB Nagar with convenient access to schools, transport and essential services.",

    bedrooms: "3 BHK",
    bathrooms: "3",
    area: "2,100 sq.ft",
    propertyType: "Independent House",

    highlights: [
      "Family-friendly location",
      "Spacious rooms",
      "Good connectivity",
      "Independent property",
      "Established neighbourhood",
      "Ideal for families",
    ],
  },


  {
    id: 15,
    title: "Premium Farm Land",
    category: "Farm Lands",
    location: "Shankarpally, Hyderabad",
    price: "₹75 Lakhs",
    details: "1 Acre • Road Facing",
    image: "/images/properties/farm-1.jpg",

    description:
      "A premium farm land opportunity near Shankarpally, suitable for agricultural use, weekend living or long-term investment.",

    bedrooms: "-",
    bathrooms: "-",
    area: "1 Acre",
    propertyType: "Farm Land",

    highlights: [
      "1 acre land",
      "Road facing",
      "Green surroundings",
      "Peaceful location",
      "Investment opportunity",
      "Suitable for weekend living",
    ],
  },
*/},

  {
    id: 16,
    title: "Green Valley Farm Land",
    category: "Farm Lands",
    location: "Chevella, Telangana",
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
   PROPERTY DETAILS PAGE
   ========================================================= */

export default function PropertyDetails() {

  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );


  /* =======================================================
     PROPERTY NOT FOUND
     ======================================================= */

  if (!property) {

    return (

      <main className="flex min-h-[70vh] items-center justify-center bg-white px-5">

        <div className="text-center">

          <Building2
            size={45}
            className="mx-auto text-slate-300"
          />

          <h1 className="mt-5 font-serif text-3xl font-semibold text-[#071a33]">
            Property Not Found
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            The property you're looking for doesn't exist.
          </p>


          <Link
            to="/real-estate/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#071a33] px-6 py-3 text-sm font-bold text-white"
          >

            <ArrowLeft size={16} />

            Back to Properties

          </Link>

        </div>

      </main>

    );

  }


  return (

    <main className="bg-white text-[#071a33]">

      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <section className="relative h-[430px] overflow-hidden sm:h-[520px] lg:h-[600px]">

        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover"
        />


        <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/90 via-[#071a33]/30 to-transparent" />


        {/* Back Button */}

        <div className="absolute left-0 right-0 top-0">

          <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8">

            <Link
              to="/real-estate/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#071a33]/50 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-colors hover:bg-[#071a33]/80"
            >

              <ArrowLeft size={15} />

              Back to Properties

            </Link>

          </div>

        </div>


        {/* Hero Content */}

        <div className="absolute bottom-0 left-0 right-0">

          <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-6 sm:pb-10 lg:px-8 lg:pb-14">

            <div className="mb-3 inline-flex rounded-full bg-[#c9a227] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#071a33] sm:text-xs">

              {property.category}

            </div>


            <h1 className="max-w-4xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">

              {property.title}

            </h1>


            <div className="mt-3 flex items-center gap-2 text-sm text-slate-200">

              <MapPin
                size={16}
                className="text-[#c9a227]"
              />

              {property.location}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="py-12 sm:py-16 lg:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">


            {/* =================================================
                LEFT
            ================================================= */}

            <div>

              {/* Price */}

              <div className="flex flex-col gap-2 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Starting Price
                  </p>

                  <p className="mt-2 font-serif text-3xl font-semibold text-[#071a33] sm:text-4xl">
                    {property.price}
                  </p>

                </div>


                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">

                  <CheckCircle2
                    size={16}
                    className="text-green-600"
                  />

                  Property Available

                </div>

              </div>


              {/* Property Stats */}

              <div className="grid grid-cols-2 gap-3 py-7 sm:grid-cols-4 sm:gap-4">

                <div className="rounded-xl bg-slate-50 p-4">

                  <BedDouble
                    size={20}
                    className="text-[#c9a227]"
                  />

                  <p className="mt-3 text-xs text-slate-400">
                    Bedrooms
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#071a33]">
                    {property.bedrooms}
                  </p>

                </div>


                <div className="rounded-xl bg-slate-50 p-4">

                  <Bath
                    size={20}
                    className="text-[#c9a227]"
                  />

                  <p className="mt-3 text-xs text-slate-400">
                    Bathrooms
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#071a33]">
                    {property.bathrooms}
                  </p>

                </div>


                <div className="rounded-xl bg-slate-50 p-4">

                  <Ruler
                    size={20}
                    className="text-[#c9a227]"
                  />

                  <p className="mt-3 text-xs text-slate-400">
                    Area
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#071a33]">
                    {property.area}
                  </p>

                </div>


                <div className="rounded-xl bg-slate-50 p-4">

                  <Home
                    size={20}
                    className="text-[#c9a227]"
                  />

                  <p className="mt-3 text-xs text-slate-400">
                    Property Type
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#071a33]">
                    {property.propertyType}
                  </p>

                </div>

              </div>


              {/* Description */}

              <div className="border-t border-slate-200 pt-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a227]">
                  About This Property
                </p>

                <h2 className="mt-3 font-serif text-2xl font-semibold text-[#071a33] sm:text-3xl">
                  Property Overview
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {property.description}
                </p>

              </div>


              {/* Highlights */}

              <div className="mt-10">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a227]">
                  Property Highlights
                </p>

                <h2 className="mt-3 font-serif text-2xl font-semibold text-[#071a33]">
                  Key Features
                </h2>


                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                  {property.highlights.map((highlight) => (

                    <div
                      key={highlight}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
                    >

                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#c9a227]"
                      />

                      <span className="text-sm text-slate-600">
                        {highlight}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT CONTACT CARD
            ================================================= */}

            <aside>

              <div className="sticky top-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

                <div className="bg-[#071a33] p-6 sm:p-7">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a227]">
                    Interested in this property?
                  </p>

                  <h3 className="mt-3 font-serif text-2xl font-semibold text-white">
                    Talk to Our Team
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Get more information about pricing, availability,
                    location and site visits.
                  </p>

                </div>


                <div className="p-6 sm:p-7">

                  <div className="rounded-xl bg-slate-50 p-4">

                    <p className="text-xs text-slate-400">
                      Property
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#071a33]">
                      {property.title}
                    </p>

                    <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">

                      <MapPin
                        size={13}
                        className="text-[#c9a227]"
                      />

                      {property.location}

                    </div>

                  </div>


                  <a
                    href="/#contact"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#c9a227] px-6 py-3.5 text-sm font-bold text-[#071a33] transition-all hover:bg-[#d9b63a] hover:shadow-lg"
                  >

                    Request More Information

                    <ArrowUpRight size={17} />

                  </a>


                  <a
                    href="tel:+919999999999"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-sm font-bold text-[#071a33] transition-colors hover:bg-slate-50"
                  >

                    <Phone size={16} />

                    Call Us

                  </a>


                  <div className="mt-6 flex items-start gap-3 border-t border-slate-100 pt-5">

                    <ShieldCheck
                      size={19}
                      className="mt-0.5 shrink-0 text-[#c9a227]"
                    />

                    <p className="text-xs leading-5 text-slate-500">
                      Our team can help you understand the property,
                      arrange a visit and guide you through the buying
                      process.
                    </p>

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="bg-[#071a33] py-14 sm:py-16">

        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a227]">
            Take The Next Step
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Interested in this property?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300">
            Contact VR Group and get complete information about this
            property and available options.
          </p>


          <a
            href="/#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c9a227] px-7 py-3.5 text-sm font-bold text-[#071a33] transition-all hover:-translate-y-0.5 hover:bg-[#d9b63a]"
          >

            Get Property Details

            <ArrowUpRight size={17} />

          </a>

        </div>

      </section>

    </main>

  );
}