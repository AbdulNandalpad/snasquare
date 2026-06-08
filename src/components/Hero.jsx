import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.4,
        }}
      />
      {/* Blue glow top-right */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-100 opacity-40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold tracking-wide uppercase border border-brand-100">
            15 Years of Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            We Build Tomorrow's<br />
            <span className="text-brand-500">Tech Solutions,</span> Today.
          </h1>
          <p className="mt-6 text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            SNA Square empowers small businesses to compete like tech giants. From RFID
            and IoT to HVAC automation and custom software — we transform your technical
            limitations into breakthrough opportunities.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://wa.me/917483984767"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:border-brand-300 hover:text-brand-600 transition-all"
            >
              Explore Services
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-8 justify-center lg:justify-start">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '200+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-slate-900">{s.value}</p>
                <p className="text-sm text-slate-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mockup image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-brand-100 rounded-3xl rotate-3 opacity-60" />
            <img
              src="img/iPad-Pro-Design-Mockup.png"
              alt="SNA Square product mockup"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
