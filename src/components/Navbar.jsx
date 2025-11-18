import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 shadow ring-1 ring-black/5 flex items-center justify-center text-white font-bold">PM</div>
          <div className="leading-tight">
            <p className="font-semibold text-slate-800">Przedszkole Miasteczkole</p>
            <p className="text-xs text-slate-500">miasteczkole</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#oferta" className="hover:text-slate-900">Oferta</a>
          <a href="#kadra" className="hover:text-slate-900">Kadra</a>
          <a href="#rekrutacja" className="hover:text-slate-900">Rekrutacja</a>
          <a href="#kontakt" className="hover:text-slate-900">Kontakt</a>
        </nav>
        <Link to="/advent" className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium shadow transition-colors ${location.pathname === '/advent' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'}`}>
          <span>Advent Calendar</span>
          <span className="hidden sm:inline text-xs bg-white/20 px-2 py-0.5 rounded">1–24 XII</span>
        </Link>
      </div>
    </header>
  )
}
