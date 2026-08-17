import {
  GraduationCap,
  WalletCards,
  Home,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description:
      "Expert guidance for universities, applications, scholarships and visa assistance.",
  },
  {
    icon: WalletCards,
    title: "Education Loans",
    description:
      "Financial guidance and assistance to fund your international education.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Find properties for buying, selling, renting and investment.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a28200]">
            What We Do
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#071a33] md:text-5xl">
            One Trusted Partner.
          </h2>

          <p className="mt-5 text-slate-600">
            Professional guidance across education, finance and real estate.
          </p>

        </div>


        <div className="mt-14 grid gap-7 md:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-[#faf9f6] p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071a33] text-[#c9a227]">
                  <Icon size={28} />
                </div>

                <h3 className="mt-7 font-serif text-2xl font-semibold text-[#071a33]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-[#071a33]"
                >
                  Learn More
                  <ArrowRight size={17} />
                </a>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Services;