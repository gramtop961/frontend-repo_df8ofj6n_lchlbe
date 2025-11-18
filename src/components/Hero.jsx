export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Przedszkole Miasteczkole
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-prose">
              Przedszkole prowadzi zajęcia dla dzieci od 3 do 6 lat. Stawia na rozwój społeczny, emocjonalny i ruchowy. Zapewnia bezpieczne warunki i stałą opiekę kadry.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#rekrutacja" className="px-5 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium shadow">Zapisz dziecko</a>
              <a href="#oferta" className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium shadow">Poznaj ofertę</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-200 via-orange-100 to-amber-100 ring-1 ring-black/5 shadow-inner"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-emerald-400/80 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
