import { Mail, Monitor, MapPin, LayoutGrid } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "pordonez@kennesaw.edu",
    href: "mailto:pordonez@kennesaw.edu",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Atrium Building, 1217D",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-20 px-6 flex items-center">
        <div className="max-w-2xl w-full mx-auto">

          {/* Title row — matches slide: "Contact Us" + barcode icon */}
          <div className="flex items-center gap-4 mb-14">
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-none">
              Contact Us
            </h1>
            {/* Barcode / grid icon mimicking the slide accent */}
            <LayoutGrid
              size={48}
              className="text-white opacity-80 flex-shrink-0 mt-1"
              strokeWidth={1.5}
            />
          </div>

          {/* Contact items — stacked, left-aligned, matching slide rows */}
          <div className="flex flex-col gap-8">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-6">
                {/* Circular icon — lavender/indigo tint matching slide */}
                <div className="w-16 h-16 rounded-full bg-[#2d2f6b]/70 border border-indigo-400/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={26} className="text-slate-200" />
                </div>

                {/* Label + value */}
                <div>
                  <p className="text-white font-bold text-lg leading-tight">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-slate-300 text-base hover:text-cyan-400 transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-300 text-base">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
