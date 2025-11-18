export default function Footer() {
  return (
    <footer id="kontakt" className="py-12 bg-slate-50 border-t border-slate-200 mt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-sm text-slate-600">
        <div>
          <p className="font-semibold text-slate-800">Przedszkole Miasteczkole</p>
          <p className="mt-2">Godziny otwarcia: 7:00 – 17:00</p>
          <p className="mt-1">E-mail: info@miasteczkole.pl</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800">Dane kontaktowe</p>
          <p className="mt-2">Adres placówki</p>
          <p>Telefon</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800">Rekrutacja</p>
          <p className="mt-2">Nabór całoroczny. Przyjęcia wg kolejności zgłoszeń.</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Przedszkole Miasteczkole</div>
    </footer>
  )
}
