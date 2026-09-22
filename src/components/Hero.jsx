import { ArrowRight, MessageCircle } from 'lucide-react'
import HeroIllustration from './HeroIllustration'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #dde3fd 0%, #e4d6fb 30%, #d7e6fd 65%, #f8fafc 100%)',
      }}
    >
      {/* Soft color glows */}
      <div className="absolute -top-32 -right-24 w-[600px] h-[600px] rounded-full bg-brand-300 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-24 w-[500px] h-[500px] rounded-full bg-violet-300 opacity-50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-16 flex flex-col md:flex-row items-start gap-10 lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
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
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://wa.me/917483984767"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
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
        </div>

        {/* Hero illustration — hidden on mobile, shown from tablet up */}
        <div className="hidden md:flex flex-1 justify-center md:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}
