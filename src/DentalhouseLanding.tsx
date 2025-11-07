import React from "react";
import './index.css'

// Single‑file, production‑ready landing page for Dental House Playa
// Bilingual (EN/ES) with a simple language toggle, Tailwind styling
// CTA routes to WhatsApp and phone; adjust images/links as needed.

const WHATSAPP_NUMBER_INTL = "528717435798"; // +52 871 743 5798 (Mexico)
const WHATSAPP_TEXT_EN = encodeURIComponent(
  "Hi! I'd like to book my FREE consultation at Dental House Playa."
);
const WHATSAPP_TEXT_ES = encodeURIComponent(
  "¡Hola! Me gustaría agendar mi CONSULTA GRATIS en Dental House Playa."
);

const heroBg =
  "linear-gradient(135deg, rgba(0,163,204,0.08), rgba(0,103,163,0.12))";

const Check = (props: any) => (
  <svg viewBox="0 0 24 24" aria-hidden className={`w-5 h-5 ${props.className}`}>
    <path
      fill="currentColor"
      d="M9.55 17.54 4.8 12.8l1.41-1.41 3.34 3.34 7.25-7.25 1.41 1.41z"
    />
  </svg>
);

function WhatsAppButton({ lang = "es", className = "" }) {
  const text = lang === "en" ? WHATSAPP_TEXT_EN : WHATSAPP_TEXT_ES;
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold shadow-md hover:shadow-lg transition active:scale-[.99] ${className}`}
      style={{ background: "#00A884", color: "white" }}
    >
      <svg viewBox="0 0 32 32" className="w-5 h-5" aria-hidden>
        <path
          fill="currentColor"
          d="M19.11 17.42c-.29-.15-1.71-.85-1.98-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.43-1.72-1.6-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.48-.49-.66-.49-.17 0-.36-.02-.56-.02-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.56-.08 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.38-.07-.11-.26-.18-.55-.33zM16 3C8.83 3 3 8.83 3 16c0 2.29.59 4.45 1.62 6.33L3 29l6.82-1.79A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3z"
        />
      </svg>
      {lang === "en" ? "Chat on WhatsApp" : "Chatear por WhatsApp"}
    </a>
  );
}

export default function DentalHouseLanding() {
  const [lang, setLang] = React.useState<"es" | "en">("es");

  const t = (key: string) => {
    const dict: Record<string, { es: string; en: string }> = {
      brand: { es: "Dental House Playa", en: "Dental House Playa" },
      heroTitle: { es: "Consulta GRATIS", en: "FREE Consultation" },
      heroKicker: {
        es: "Tu sonrisa, nuestra especialidad",
        en: "Your smile is our specialty",
      },
      heroPromo: {
        es: "50% de descuento en Resinas, Endodoncias y Limpiezas Dentales",
        en: "50% OFF Fillings, Root Canals & Dental Cleanings",
      },
      ctaPrimary: { es: "Agendar por WhatsApp", en: "Book via WhatsApp" },
      ctaSecondary: { es: "Llamar", en: "Call" },
      phone: { es: "+52 871 743 5798", en: "+52 871 743 5798" },
      address: {
        es: "Ave. 10 entre calles 38 y 40, a un lado de Century21, Playa del Carmen",
        en: "Ave. 10 between 38th & 40th St., next to Century21, Playa del Carmen",
      },
      servicesTitle: { es: "Tratamientos", en: "Treatments" },
      s1: { es: "Estética dental: Carillas, Coronas y Puentes (Porcelana y Zirconia)", en: "Cosmetic Dentistry: Veneers, Crowns & Bridges (Porcelain & Zirconia)" },
      s2: { es: "Implantes dentales", en: "Dental Implants" },
      s3: { es: "Resinas y Endodoncias", en: "Fillings & Root Canals" },
      why: { es: "¿Por qué elegirnos?", en: "Why choose us?" },
      w1: { es: "Especialistas certificados", en: "Board‑certified specialists" },
      w2: { es: "Tecnología moderna y segura", en: "Modern, safe technology" },
      w3: { es: "Facilidades de pago", en: "Flexible payment options" },
      bookNow: { es: "Agenda hoy", en: "Book now" },
      hours: { es: "Horario", en: "Hours" },
      hoursVal: { es: "Lun–Sáb 9:00–19:00", en: "Mon–Sat 9:00–7:00" },
      faq: { es: "Preguntas frecuentes", en: "FAQs" },
      f1q: { es: "¿La consulta es realmente gratis?", en: "Is the consultation really free?" },
      f1a: { es: "Sí, incluye valoración y plan de tratamiento.", en: "Yes – includes assessment and treatment plan." },
      f2q: { es: "¿Aceptan pacientes internacionales?", en: "Do you accept international patients?" },
      f2a: { es: "Sí, ayudamos con agenda y recomendaciones de viaje.", en: "Yes, we assist with scheduling and travel tips." },
      f3q: { es: "¿Dónde están ubicados?", en: "Where are you located?" },
      f3a: { es: "A un lado de Century21 en Ave. 10 (entre 38 y 40).", en: "Next to Century21 on Ave. 10 (between 38th & 40th)." },
      mapBtn: { es: "Ver en Maps", en: "Open in Maps" },
      footer: { es: "© " + new Date().getFullYear() + " Dental House Playa. Todos los derechos reservados.", en: "© " + new Date().getFullYear() + " Dental House Playa. All rights reserved." },
    };
    return dict[key]?.[lang] ?? key;
  };

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* SEO / JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Dentist',
          name: 'Dental House Playa',
          telephone: '+52 871 743 5798',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Ave. 10 entre calles 38 y 40',
            addressLocality: 'Playa del Carmen',
            addressCountry: 'MX'
          }
        })
      }} />

      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo (replace src with your asset if needed) */}
            <div className="w-10 h-10 rounded-xl shadow-sm grid place-items-center" style={{ background: "#E6F7FB" }}>
              <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>
                <path fill="#0EA5B6" d="M12 3c-4.5 0-8 3.2-8 7.2 0 1.9.9 3.6 2.4 4.9 1.2 1.1 2.2 2.4 2.9 3.9.3.6 1 .9 1.6.7.5-.2.9-.7 1-1.2.1-.6.4-1.2.8-1.7.4.5.7 1.1.8 1.7.1.6.5 1.1 1 1.2.6.2 1.3-.1 1.6-.7.7-1.5 1.7-2.8 2.9-3.9C19.1 13.8 20 12.1 20 10.2 20 6.2 16.5 3 12 3z" />
              </svg>
            </div>
            <span className="font-bold tracking-tight">{t("brand")}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="rounded-xl px-3 py-1.5 border border-slate-300 hover:bg-slate-50 text-sm"
              aria-label="toggle language"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <a href={`tel:${t("phone")}`} className="hidden sm:inline text-sm text-slate-600 hover:text-slate-900">
              {t("phone")}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full" style={{ background: heroBg }}>
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-cyan-700 font-semibold mb-2">{t("heroKicker")}</p>
            <h1 className="text-4xl/tight font-extrabold text-slate-900 mb-3">{t("heroTitle")}</h1>
            <p className="text-lg text-slate-700 mb-6">{t("heroPromo")}</p>
            <div className="flex flex-wrap items-center gap-3">
              <WhatsAppButton lang={lang} />
              <a
                href={`tel:${t("phone")}`}
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold border border-slate-300 hover:bg-white shadow-sm"
              >
                {t("ctaSecondary")}
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-600 max-w-[40ch]">{t("address")}</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-cyan-50 to-sky-100 grid place-items-center">
              {/* Replace the placeholder image with a clinic or smile photo if desired */}
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt={lang === "en" ? "Modern dental clinic" : "Clínica dental moderna"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">{t("servicesTitle")}</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[t("s1"), t("s2"), t("s3")].map((item, i) => (
            <div key={i} className="rounded-3xl p-6 shadow-sm border border-slate-200 bg-white">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-cyan-700"><Check /></div>
                <p className="text-slate-700">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-sky-50/60">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("why")}</h3>
            {["w1", "w2", "w3"].map((k) => (
              <div key={k} className="flex items-start gap-3 mb-3">
                <div className="mt-1 text-cyan-700"><Check /></div>
                <p className="text-slate-700">{t(k)}</p>
              </div>
            ))}
            <div className="mt-6"><WhatsAppButton lang={lang} /></div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt={lang === "en" ? "Modern dental clinic" : "Clínica dental moderna"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Map & Hours */}
      <section className="mx-auto max-w-6xl px-4 py-12 grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200">
          <iframe
            title="Google Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              "Century 21 Playa del Carmen"
            )}&output=embed`}
            className="w-full h-[360px]"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">{t("hours")}</h3>
          <p className="text-slate-700 mb-6">{t("hoursVal")}</p>
          <div className="rounded-3xl p-6 border border-slate-200 shadow-sm">
            <p className="font-semibold mb-2">{t("address")}</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <WhatsAppButton lang={lang} />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  t("address")
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold border border-slate-300 hover:bg-white shadow-sm"
              >
                {t("mapBtn")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-sky-50/60">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h3 className="text-2xl font-bold mb-6">{t("faq")}</h3>
          <div className="space-y-4">
            {["1", "2", "3"].map((n) => (
              <details key={n} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  <span>{t(`f${n}q`)}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition">▾</span>
                </summary>
                <p className="mt-3 text-slate-700">{t(`f${n}a`)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">{t("footer")}</p>
          <div className="flex items-center gap-3">
            <WhatsAppButton lang={lang} />
          </div>
        </div>
      </footer>
    </main>
  );
}