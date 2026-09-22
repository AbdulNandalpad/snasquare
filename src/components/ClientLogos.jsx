const clients = [
  { name: 'BIM Infotech', logo: 'img/bim-infotech-logo.png' },
  { name: 'Vikas Pioneers', logo: 'img/vikas-pioneers-logo.png' },
]

export default function ClientLogos() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-center text-xs font-semibold tracking-wide uppercase text-slate-400 mb-8">
          Trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {clients.map(({ name, logo }) =>
            logo ? (
              <img
                key={name}
                src={logo}
                alt={name}
                className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            ) : (
              <span
                key={name}
                className="text-lg font-semibold text-slate-400 hover:text-slate-600 transition-colors"
              >
                {name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}
