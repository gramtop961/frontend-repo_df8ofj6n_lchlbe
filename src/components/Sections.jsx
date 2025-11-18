export default function Sections() {
  const sections = [
    { id: 'oferta', title: 'Oferta edukacyjna', items: [
      'Zajęcia edukacyjne zgodne z podstawą programową.',
      'Zabawy ruchowe.',
      'Nauka poprzez gry.',
      'Zajęcia plastyczne.',
      'Zajęcia muzyczne.',
      'Zajęcia językowe.',
      'Wyjścia na świeże powietrze.',
    ]},
    { id: 'dodatkowe', title: 'Dodatkowe zajęcia', items: [
      'Rytmika.', 'Zajęcia sportowe.', 'Zajęcia sensoryczne.', 'Podstawy języka angielskiego.'
    ]},
    { id: 'opieka', title: 'Opieka i bezpieczeństwo', items: [
      'Stała opieka nauczycieli.', 'Monitorowany budynek.', 'Zabezpieczony teren.', 'Zdrowe posiłki.', 'Odpowiednie warunki sanitarne.'
    ]},
    { id: 'grupy', title: 'Grupy wiekowe', items: [
      'Grupa młodsza 3-4 lata.', 'Grupa średnia 4-5 lat.', 'Grupa starsza 5-6 lat.'
    ]},
    { id: 'kadra', title: 'Kadra', items: [
      'Nauczyciele z kwalifikacjami.', 'Pomoc nauczyciela.', 'Logopeda wspierający rozwój mowy.', 'Psycholog dostępny dla rodziców.'
    ]},
    { id: 'dzien', title: 'Dzień w przedszkolu', items: [
      'Powitanie i swobodna zabawa.', 'Zajęcia edukacyjne.', 'Drugie śniadanie.', 'Zabawy ruchowe.', 'Obiad.', 'Odpoczynek.', 'Zajęcia popołudniowe.', 'Odbiór dzieci.'
    ]},
    { id: 'posilki', title: 'Posiłki', items: [
      'Świeże i zbilansowane.', 'Śniadanie, obiad, podwieczorek.', 'Menu dostosowane do alergii.'
    ]},
    { id: 'rekrutacja', title: 'Rekrutacja', items: [
      'Nabór całoroczny.', 'Przyjęcia według kolejności zgłoszeń.', 'Wymagane dokumenty: karta zgłoszenia, zgoda rodziców.'
    ]},
  ]
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        {sections.map(sec => (
          <div id={sec.id} key={sec.id} className="bg-white rounded-2xl p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">{sec.title}</h3>
            <ul className="space-y-2 list-disc pl-5 text-slate-700">
              {sec.items.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
