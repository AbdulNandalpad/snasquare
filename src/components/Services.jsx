import { Cpu, Wifi, Thermometer, Code2, BarChart3, Shield, Layers } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'BPMSquare — CRM & Field Service',
    description:
      'Our own SaaS platform for service businesses: manage customers, jobs, technicians, and invoices in one place. Role-based access, real-time dashboards, and mobile-ready.',
    accent: 'bg-orange-50 text-orange-500',
    link: 'https://www.bpmsquare.com/',
    linkLabel: 'Try BPMSquare →',
    featured: true,
  },
  {
    icon: Cpu,
    title: 'RFID Solutions',
    description:
      'End-to-end RFID implementation for inventory tracking, access control, and asset management tailored for your business scale.',
    accent: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Wifi,
    title: 'IoT Integration',
    description:
      'Connect and automate your physical infrastructure with smart sensors, real-time dashboards, and intelligent alerting systems.',
    accent: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Thermometer,
    title: 'HVAC Automation',
    description:
      'Intelligent HVAC control systems that cut energy costs, improve comfort, and deliver predictive maintenance insights.',
    accent: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description:
      'Bespoke web and mobile applications built around your workflows — from ERP integrations to customer-facing portals.',
    accent: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description:
      'Turn raw operational data into actionable insights with custom dashboards, reporting pipelines, and BI integrations.',
    accent: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Shield,
    title: 'IT Consulting',
    description:
      'Strategic technology roadmaps, infrastructure audits, and vendor-neutral advice to help you invest in the right solutions.',
    accent: 'bg-rose-50 text-rose-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-slate-50">
      <div className="absolute -top-24 right-0 w-[450px] h-[450px] rounded-full bg-brand-100 opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-violet-100 opacity-40 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold tracking-wide uppercase border border-brand-100">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Technology solutions built for real businesses
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            We specialise in hardware-meets-software solutions that help you automate
            operations, reduce costs, and grow with confidence.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, accent, link, linkLabel, featured }) => (
            <div
              key={title}
              className={`bg-white rounded-2xl p-7 border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group ${featured ? 'border-orange-200 ring-1 ring-orange-100' : 'border-slate-100'}`}
            >
              {featured && (
                <span className="inline-block mb-3 px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold tracking-wide uppercase">
                  Our Product
                </span>
              )}
              <div className={`inline-flex p-3 rounded-xl ${accent} mb-5`}>
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  {linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 rounded-2xl bg-slate-900 p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Not sure what you need?</h3>
          <p className="text-slate-300 mb-6">
            Tell us your challenge and we'll recommend the right solution — no jargon, no pressure.
          </p>
          <a
            href="https://wa.me/917483984767"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-600 font-semibold hover:bg-brand-50 transition-colors shadow-sm"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  )
}
