import React, { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  // ==========================================
  // POPUP TIMING
  // ==========================================

  useEffect(() => {
    if (submitted) return;

    const firstPopup = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    const interval = setInterval(() => {
      setIsOpen(true);
    }, 60000);

    return () => {
      clearTimeout(firstPopup);
      clearInterval(interval);
    };
  }, [submitted]);


  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // ==========================================
  // CLOSE
  // ==========================================

  const handleClose = () => {
    setIsOpen(false);
  };


  // ==========================================
  // WHATSAPP
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service } = formData;

    const serviceName =
      service === "study-abroad"
        ? "Study Abroad"
        : service === "education-loan"
        ? "Education Loan Assistance"
        : service === "real-estate"
        ? "Real Estate"
        : "General Enquiry";

    const message = `
🔔 *New VR Group Enquiry*

👤 *Name:* ${name}
📱 *Phone:* ${phone}
🎯 *Interested In:* ${serviceName}

Please contact this person regarding their enquiry.
    `.trim();

    // CHANGE THIS TO YOUR NUMBER
    const whatsappNumber = "919876543210";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setIsOpen(false);

    setFormData({
      name: "",
      phone: "",
      service: "",
    });
  };


  if (!isOpen || submitted) {
    return null;
  }


  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-end justify-center
        bg-[#071A33]/75
        px-3 pb-3
        backdrop-blur-md

        sm:items-center
        sm:px-5
        sm:pb-0
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >

      {/* ==========================================
          POPUP CARD
      ========================================== */}

      <div
        className="
          relative
          flex
          max-h-[94vh]
          w-full
          max-w-[430px]
          flex-col
          overflow-hidden
          rounded-[24px]
          bg-white
          shadow-[0_25px_80px_rgba(0,0,0,0.4)]
          animate-[popupIn_.45s_ease-out]

          md:max-h-[90vh]
          md:max-w-[900px]
          md:flex-row
        "
      >

        {/* ==========================================
            CLOSE
        ========================================== */}

        <button
          onClick={handleClose}
          className="
            absolute
            right-3
            top-3
            z-50
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-[#111020]
            shadow-lg
            backdrop-blur-md
            transition-all
            duration-300
            hover:rotate-90
            hover:text-[#1D5FA7]

            md:right-4
            md:top-4
          "
        >
          <X size={18} />
        </button>


        {/* ==========================================
            IMAGE SECTION
        ========================================== */}

        <div
          className="
            relative
            h-[200px]
            min-h-[200px]
            w-full
            shrink-0
            overflow-hidden

            sm:h-[220px]
            sm:min-h-[220px]

            md:h-auto
            md:min-h-[540px]
            md:w-[43%]
          "
        >

          <img
            src="/popup.jpg"
            alt="VR Group consultation"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />


          {/* DARK GRADIENT */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#071A33]
              via-[#071A33]/45
              to-[#071A33]/10
            "
          />


          {/* ========================================
              MOBILE IMAGE CONTENT
          ======================================== */}

          <div
            className="
              absolute
              bottom-5
              left-5
              right-5

              md:hidden
            "
          >

            <div
              className="
                mb-2
                flex
                items-center
                gap-2
              "
            >

              <div
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#C9A227]
                  text-[#071A33]
                "
              >
                <Sparkles size={14} />
              </div>

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#C9A227]
                "
              >
                VR GROUP
              </span>

            </div>


            <h3
              className="
                font-serif
                text-2xl
                font-semibold
                leading-tight
                text-white
              "
            >
              Your Future.
              <br />
              Our Guidance.
            </h3>

          </div>


          {/* ========================================
              DESKTOP IMAGE CONTENT
          ======================================== */}

          <div
            className="
              absolute
              bottom-0
              left-0
              hidden
              p-8
              text-white

              md:block
            "
          >

            <div
              className="
                mb-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-[#C9A227]
                text-[#071A33]
              "
            >
              <Sparkles size={20} />
            </div>


            <p
              className="
                mb-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#C9A227]
              "
            >
              VR GROUP
            </p>


            <h3
              className="
                font-serif
                text-4xl
                font-semibold
                leading-[1.1]
              "
            >
              Your Future.
              <br />
              Our Guidance.
            </h3>


            <p
              className="
                mt-4
                max-w-xs
                text-sm
                leading-6
                text-white/70
              "
            >
              Study abroad, education loans and
              real estate guidance — all under one roof.
            </p>

          </div>

        </div>


        {/* ==========================================
            FORM SECTION
        ========================================== */}

        <div
          className="
            min-h-0
            w-full
            overflow-y-auto
            bg-white

            md:w-[57%]
          "
        >

          <div
            className="
              px-5
              py-6

              sm:px-8
              sm:py-7

              md:px-10
              md:py-10
            "
          >

            {/* ========================================
                BADGE
            ======================================== */}

            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#1D5FA7]/5
                px-3
                py-1.5
              "
            >

              <MessageCircle
                size={14}
                className="text-[#1D5FA7]"
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-[#1D5FA7]
                "
              >
                Free Consultation
              </span>

            </div>


            {/* ========================================
                HEADING
            ======================================== */}

            <h2
              className="
                font-serif
                text-[27px]
                font-semibold
                leading-tight
                tracking-tight
                text-[#111020]

                sm:text-3xl

                md:text-4xl
              "
            >
              Let's talk about
              <span className="text-[#1D5FA7]">
                {" "}your future.
              </span>
            </h2>


            <p
              className="
                mt-2
                text-xs
                leading-5
                text-[#5F6470]

                sm:text-sm
                sm:leading-6
              "
            >
              Tell us what you're looking for and
              our team will get in touch with you.
            </p>


            {/* ========================================
                FORM
            ======================================== */}

            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-3.5"
            >

              {/* NAME */}

              <div>

                <label
                  className="
                    mb-1.5
                    block
                    text-xs
                    font-semibold
                    text-[#111020]
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-[#111020]/10
                    bg-[#F8FAFC]
                    px-4
                    text-sm
                    text-[#111020]
                    outline-none
                    transition-all
                    placeholder:text-[#9CA3AF]
                    focus:border-[#1D5FA7]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#1D5FA7]/10
                  "
                />

              </div>


              {/* PHONE */}

              <div>

                <label
                  className="
                    mb-1.5
                    block
                    text-xs
                    font-semibold
                    text-[#111020]
                  "
                >
                  Phone Number
                </label>

                <div
                  className="
                    flex
                    h-11
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#111020]/10
                    bg-[#F8FAFC]
                    transition-all
                    focus-within:border-[#1D5FA7]
                    focus-within:bg-white
                    focus-within:ring-4
                    focus-within:ring-[#1D5FA7]/10
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      border-r
                      border-[#111020]/10
                      bg-[#F1F5F9]
                      px-3
                      text-xs
                      font-semibold
                      text-[#111020]
                    "
                  >
                    +91
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="
                      w-full
                      bg-transparent
                      px-4
                      text-sm
                      outline-none
                      placeholder:text-[#9CA3AF]
                    "
                  />

                </div>

              </div>


              {/* SERVICE */}

              <div>

                <label
                  className="
                    mb-1.5
                    block
                    text-xs
                    font-semibold
                    text-[#111020]
                  "
                >
                  What can we help you with?
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-[#111020]/10
                    bg-[#F8FAFC]
                    px-4
                    text-sm
                    text-[#111020]
                    outline-none
                    transition-all
                    focus:border-[#1D5FA7]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#1D5FA7]/10
                  "
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="study-abroad">
                    Study Abroad
                  </option>

                  <option value="education-loan">
                    Education Loan Assistance
                  </option>

                  <option value="real-estate">
                    Real Estate
                  </option>

                  <option value="general">
                    General Enquiry
                  </option>

                </select>

              </div>


              {/* ========================================
                  BUTTON
              ======================================== */}

              <button
                type="submit"
                className="
                  group
                  mt-1
                  flex
                  h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#1D5FA7]
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#1D5FA7]/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#1474C4]
                  hover:shadow-xl
                "
              >

                <MessageCircle size={16} />

                Send via WhatsApp

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />

              </button>

            </form>


            {/* ========================================
                SECURITY
            ======================================== */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-1.5
                text-[10px]
                text-[#8A8F98]
              "
            >

              <ShieldCheck
                size={13}
                className="text-[#1D5FA7]"
              />

              Your information is safe & confidential.

            </div>

          </div>

        </div>

      </div>


      {/* ==========================================
          ANIMATION
      ========================================== */}

      <style>
        {`
          @keyframes popupIn {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.97);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>

    </div>
  );
}