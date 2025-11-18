import { useEffect, useMemo, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Advent() {
  const [days, setDays] = useState([])
  const [unlocked, setUnlocked] = useState(0)
  const [form, setForm] = useState({ parent_name: '', child_name: '', phone: '', email: '', consent: true })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [active, setActive] = useState(null)
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    fetch(`${API}/api/advent/days`).then(r => r.json()).then(data => {
      setDays(data.days || [])
      setUnlocked(data.unlocked || 0)
    }).catch(()=>{})
  }, [])

  const canSubmit = useMemo(() => form.parent_name && form.child_name && form.phone && form.email, [form])

  const submitRegistration = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    setMessage('')
    try {
      const res = await fetch(`${API}/api/advent/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      setMessage(data.message || 'Zapisano zgłoszenie')
    } catch (e) {
      setMessage('Błąd podczas wysyłania zgłoszenia')
    } finally {
      setLoading(false)
    }
  }

  const submitAnswer = async () => {
    if (!email || !active) return
    try {
      await fetch(`${API}/api/advent/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, day: active.day, answer, child_name: form.child_name || undefined })
      })
      setMessage('Dziękujemy! Odpowiedź zapisana.')
      setAnswer('')
    } catch (e) {
      setMessage('Nie udało się zapisać odpowiedzi')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Kalendarz Adwentowy</h1>
            <p className="text-slate-600 mb-6">Interaktywne zadania dostępne od 1 do 24 grudnia. Wpisz swój e-mail aby odblokować dzień i przesłać odpowiedź.</p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {days.map(d => (
                <button key={d.day} disabled={!d.available} onClick={() => setActive(d)}
                  className={`${d.available ? 'bg-white hover:bg-emerald-50' : 'bg-slate-100 opacity-60'} rounded-xl p-4 ring-1 ring-slate-200 shadow text-left`}
                >
                  <div className="text-xs text-slate-500">Dzień</div>
                  <div className="text-xl font-bold">{d.day}</div>
                </button>
              ))}
            </div>

            {active && (
              <div className="mt-6 bg-white rounded-2xl p-6 ring-1 ring-slate-200 shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Zadanie na dzień {active.day}</div>
                    <div className="text-lg font-semibold text-slate-900">{active.task}</div>
                  </div>
                  <button onClick={() => setActive(null)} className="text-slate-500 hover:text-slate-700">Zamknij</button>
                </div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Twój e-mail" className="w-full px-3 py-2 rounded-lg border border-slate-300" />
                  <input value={answer} onChange={e=>setAnswer(e.target.value)} type="text" placeholder="Twoja odpowiedź (opcjonalnie)" className="w-full px-3 py-2 rounded-lg border border-slate-300" />
                </div>
                <div className="mt-3">
                  <button onClick={submitAnswer} className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg">Wyślij</button>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[420px]">
            <div className="bg-white rounded-2xl p-6 ring-1 ring-slate-200 shadow">
              <h2 className="text-xl font-semibold text-slate-900">Zapisz się</h2>
              <p className="text-sm text-slate-600 mb-4">Podaj dane rodzica i dziecka, by otrzymywać powiadomienia e-mail.</p>
              <form className="space-y-3" onSubmit={submitRegistration}>
                <input required value={form.parent_name} onChange={e=>setForm({...form, parent_name: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300" placeholder="Imię i nazwisko rodzica" />
                <input required value={form.child_name} onChange={e=>setForm({...form, child_name: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300" placeholder="Imię dziecka" />
                <input required value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300" placeholder="Telefon" />
                <input required type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300" placeholder="Adres e-mail" />
                <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" checked={form.consent} onChange={e=>setForm({...form, consent: e.target.checked})} /><span>Wyrażam zgodę na kontakt e‑mail.</span></label>
                <button disabled={loading || !canSubmit} className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-lg">{loading ? 'Wysyłanie...' : 'Zapisz'}</button>
              </form>
              {message && <div className="mt-3 text-sm text-emerald-700">{message}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
