export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="img/logo1.svg" alt="SNA Square" className="h-8 w-auto brightness-0 invert opacity-80" />
          <span className="text-sm text-slate-500">Bangalore, India</span>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a
            href="https://wa.me/917483984767"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        <p className="text-xs text-slate-600">
          © {year} SNA Square. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
