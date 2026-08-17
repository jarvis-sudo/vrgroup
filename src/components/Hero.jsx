import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const navigate = useNavigate();

  const slides = [
    {
      image: "/hero-study.jpg",
      preHeadline: "Your Journey Starts Here",
      headline: "Study Abroad With Confidence",
      subtext:
        "Expert guidance for university selection, applications, scholarships and visa assistance to help you achieve your international education goals.",
      cta: "Explore Study Abroad",
      route: "/study-abroad",
    },

    {
      image: "/hero-loan.jpg",
      preHeadline: "Fund Your Dreams",
      headline: "Education Loan Assistance",
      subtext:
        "Get personalized guidance for education loans, documentation and financial assistance for your studies abroad.",
      cta: "Get Loan Assistance",
      route: "/education-loans",
    },

    {
      image: "/hero-property.jpg",
      preHeadline: "Find Your Place",
      headline: "Real Estate Made Simple",
      subtext:
        "Discover the right property for living, investment or future growth with trusted real estate guidance.",
      cta: "Explore Properties",
      route: "/properties",
    },

    {
      image: "/hero-global.jpg",
      preHeadline: "One Trusted Partner",
      headline: "Building Your Future",
      subtext:
        "From international education to financial assistance and real estate, we're here to guide your next big decision.",
      cta: "Talk To An Expert",
      route: "/contact",
    },
  ];

  /* =========================================================
      AUTOMATIC SLIDER
  ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(false);

      setTimeout(() => {
        setCurrentSlide(
          (prev) => (prev + 1) % slides.length
        );

        setIsAnimating(true);
      }, 300);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);


  /* =========================================================
      GO TO SPECIFIC SLIDE
  ========================================================= */

  const goToSlide = (index) => {
    if (index === currentSlide) return;

    setIsAnimating(false);

    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(true);
    }, 300);
  };


  /* =========================================================
      NEXT SLIDE
  ========================================================= */

  const nextSlide = () => {
    setIsAnimating(false);

    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % slides.length
      );

      setIsAnimating(true);
    }, 300);
  };


  /* =========================================================
      PREVIOUS SLIDE
  ========================================================= */

  const prevSlide = () => {
    setIsAnimating(false);

    setTimeout(() => {
      setCurrentSlide(
        (prev) =>
          (prev - 1 + slides.length) %
          slides.length
      );

      setIsAnimating(true);
    }, 300);
  };


  /* =========================================================
      CTA
  ========================================================= */

  const handleCTA = () => {
    navigate(slides[currentSlide].route);
  };


  return (
    <section
      id="home"
      className="relative h-screen min-h-[650px] w-full overflow-hidden bg-[#111020]"
    >

      {/* =====================================================
          SLIDES
      ===================================================== */}

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "z-[5] scale-100 opacity-100"
              : "pointer-events-none z-0 scale-110 opacity-0"
          }`}
        >

          {/* =================================================
              BACKGROUND IMAGE
          ================================================= */}

          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ${
              index === currentSlide
                ? "scale-110"
                : "scale-100"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >

            {/* Main Navy Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#111020]/95 via-[#111020]/75 to-[#111020]/30" />

            {/* Bottom Fade */}

            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#111020]/80 to-transparent" />

          </div>


          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div className="relative flex h-full items-center pt-20 md:pt-16">

            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

              <div className="max-w-4xl">

                {/* ==========================================
                    PRE HEADLINE
                =========================================== */}

                <div
                  className={`mb-5 transition-all duration-1000 ${
                    isAnimating &&
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "200ms",
                  }}
                >

                  <div className="flex items-center gap-3">

                    <span className="h-px w-10 bg-[#1D5FA7]" />

                    <p className="text-lg font-medium tracking-wide text-[#1474C4] md:text-2xl">
                      {slide.preHeadline}
                    </p>

                  </div>

                </div>


                {/* ==========================================
                    MAIN HEADLINE
                =========================================== */}

                <h1
                  className={`mb-6 font-serif text-5xl font-semibold leading-[1.05] text-white transition-all duration-1000 sm:text-6xl md:text-7xl lg:text-8xl ${
                    isAnimating &&
                    index === currentSlide
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "400ms",
                  }}
                >
                  {slide.headline}
                </h1>


                {/* ==========================================
                    DESCRIPTION
                =========================================== */}

                <p
                  className={`mb-9 max-w-2xl text-lg leading-8 text-slate-200 transition-all duration-1000 md:text-xl ${
                    isAnimating &&
                    index === currentSlide
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "600ms",
                  }}
                >
                  {slide.subtext}
                </p>


                {/* ==========================================
                    CTA
                =========================================== */}

                <div
                  className={`transition-all duration-1000 ${
                    isAnimating &&
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "800ms",
                  }}
                >

                  <button
                    onClick={handleCTA}
                    className="group inline-flex items-center gap-3 rounded-full bg-[#1D5FA7] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#111020]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1474C4] hover:shadow-[#1D5FA7]/30 md:px-10 md:py-5 md:text-lg"
                  >

                    {slide.cta}

                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </button>

                </div>


                {/* ==========================================
                    ACCENT LINE
                =========================================== */}

                <div
                  className={`mt-12 transition-all duration-1000 ${
                    isAnimating &&
                    index === currentSlide
                      ? "w-32 opacity-100"
                      : "w-0 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "1000ms",
                  }}
                >

                  <div className="h-1 rounded-full bg-gradient-to-r from-[#1D5FA7] to-[#1474C4]" />

                </div>

              </div>

            </div>

          </div>

        </div>
      ))}


      {/* =====================================================
          PREVIOUS ARROW

          hidden on mobile
          visible from md breakpoint
      ===================================================== */}

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="group absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#1D5FA7] hover:bg-[#1D5FA7] md:flex md:left-8 md:p-4"
      >

        <ChevronLeft
          className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1 md:h-7 md:w-7"
        />

      </button>


      {/* =====================================================
          NEXT ARROW

          hidden on mobile
          visible from md breakpoint
      ===================================================== */}

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="group absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/30 bg-black/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#1D5FA7] hover:bg-[#1D5FA7] md:flex md:right-8 md:p-4"
      >

        <ChevronRight
          className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:h-7 md:w-7"
        />

      </button>


      {/* =====================================================
          SLIDER INDICATORS

          These remain visible on mobile
      ===================================================== */}

      <div className="absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "h-2.5 w-12 bg-[#1D5FA7]"
                : "h-2.5 w-2.5 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}

      </div>


      {/* =====================================================
          SLIDE COUNTER
      ===================================================== */}

    {/*  <div className="absolute right-5 top-24 z-20 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md md:right-8">

        <span className="text-[#1474C4]">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>

        <span className="mx-2 text-white/40">
          /
        </span>

        <span className="text-white/70">
          {String(slides.length).padStart(2, "0")}
        </span>

      </div>
*/}

      {/* =====================================================
          DECORATIVE BLUE GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-72 w-72 rounded-full bg-[#1D5FA7]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-72 w-72 rounded-full bg-[#111020]/80 blur-3xl" />

    </section>
  );
}