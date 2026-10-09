import { useState } from "react";
import Logo from "./Logo.jsx";

const WHATSAPP = "27725672466"; // On-Point Wood order line

const WOODS = [
  { name: "Thorn Wood", lat: "Eucalyptus grandis", price: 95, burn: "Long, hot, dependable", note: "The workhorse of a Highveld winter. Dense, golden, and entirely unbothered by a north wind." },
];

const ISSUE = { vol: "Vol. II", no: "№ 14", season: "Early Winter 2026" };

export default function App() {
  const [order, setOrder] = useState({ name: "", wood: WOODS[0].name, units: 10, area: "", notes: "" });
  const set = (k) => (e) => setOrder({ ...order, [k]: e.target.value });

  const waLink = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  const generalMsg = "Good day, On-Point Wood. I'd like to enquire about your firewood.";

  const submitOrder = (e) => {
    e.preventDefault();
    const msg =
`*ON-POINT WOOD — ORDER*
———————————————
Name: ${order.name}
Wood: ${order.wood}
Units: ${order.units} (minimum 10)
Delivery area: ${order.area || "To be confirmed"}
Notes: ${order.notes || "—"}
———————————————
Please confirm availability and delivery. Thank you.`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ================= MASTHEAD ================= */}
      <header className="border-b border-ink/15">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-ink/15 py-2 font-label text-[10px] uppercase tracking-[0.25em] text-ink/50">
            <span>{ISSUE.vol} · {ISSUE.no}</span>
            <span className="hidden sm:inline">The Firewood Journal of East London</span>
            <span>{ISSUE.season}</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 py-6">
            <a href="#top" className="flex items-center gap-4">
              <Logo size={56} />
              <div className="leading-none">
                <p className="font-display text-4xl font-black tracking-tight">
                  On-Point <span className="italic text-brand-700">Wood</span>
                </p>
                <p className="mt-2 font-label text-[10px] uppercase tracking-[0.45em] text-ink/50">
                  Holy Firewood Co. · Est. by the burn
                </p>
              </div>
            </a>
            <nav className="flex items-center gap-8 font-label text-xs font-semibold uppercase tracking-[0.2em]" aria-label="Main">
              <a className="editorial-link hidden sm:inline" href="#wood">The Catalogue</a>
              <a className="editorial-link hidden sm:inline" href="#order">Order</a>
              <a className="editorial-link hidden sm:inline" href="#questions">Questions</a>
              <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" className="btn-wa !px-5 !py-2.5">
                WhatsApp ↗
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* ================= FRONT PAGE ================= */}
      <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-14">
        <div className="rule-brand pt-3">
          <p className="kicker">Front Page · Firewood &amp; Hearth</p>
        </div>
        <h1 className="mt-8 font-display text-[13vw] font-black leading-[0.95] tracking-tight sm:text-[9vw] lg:text-[7.5rem]">
          The quiet art of<br />
          <em className="text-brand-700">burning</em> well.
        </h1>
        <div className="mt-12 grid gap-10 border-t border-ink/15 pt-8 lg:grid-cols-[1.6fr,1fr]">
          <p className="dropcap max-w-2xl text-lg leading-[1.85] text-ink/80">
            Every winter, the same question returns to the kitchens and stoops of the Highveld:
            what, exactly, is worth burning? At On-Point Wood we hold a simple conviction —
            that premium <strong className="font-semibold text-ink">thorn firewood</strong>, cured for eighteen
            months under an unforgiving sun, deserves to be treated as an article of care rather
            than a commodity. Each unit is split, dried and delivered with the same devotion
            the name suggests. We deliver across East London and greater surrounding areas, and we take
            orders of ten units or more — never fewer, for the fire deserves commitment.
          </p>
          <aside className="lg:border-l lg:border-ink/15 lg:pl-10">
            <p className="kicker">In this issue</p>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed">
              {[["The Catalogue", "Four species, considered"], ["Correspondence", "How to place an order"], ["Questions", "Ten units, and why"], ["Colophon", "Where to find us"]].map(([t, s]) => (
                <li key={t} className="flex items-baseline gap-3">
                  <span className="font-display text-lg italic text-brand-700">{t}</span>
                  <span className="flex-1 border-b border-dotted border-ink/25" />
                  <span className="font-label text-[11px] uppercase tracking-widest text-ink/45">{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <a href="#order" className="btn-ink">Place an Order →</a>
              <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" className="btn-line">WhatsApp the Editors</a>
            </div>
          </aside>
        </div>
        <div className="mt-10 grid gap-6 border-t border-ink/15 pt-6 font-label text-[11px] uppercase tracking-[0.25em] text-ink/50 sm:grid-cols-3">
          <span>Minimum order — ten units</span>
          <span className="sm:text-center">Delivered across East London and surrounding areas</span>
          <span className="sm:text-right">Cured eighteen months in the sun</span>
        </div>
      </section>

      {/* ================= CATALOGUE ================= */}
      <section id="wood" className="border-y border-ink/15 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="kicker">Section I</p>
              <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">The Catalogue</h2>
            </div>
            <p className="hidden max-w-xs text-right font-label text-[11px] uppercase leading-relaxed tracking-[0.2em] text-ink/45 md:block">
              Wood species,<br />priced per unit.<br />Minimum order: ten.
            </p>
          </div>

          <div className="mt-12">
            {WOODS.map((w, i) => (
              <article key={w.name} className="rule group grid gap-4 py-8 transition-colors hover:bg-brand-50/40 md:grid-cols-[64px,1.5fr,1fr,auto] md:items-baseline md:gap-8">
                <span className="font-display text-2xl italic text-ink/30 transition group-hover:text-brand-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">{w.name}</h3>
                  <p className="mt-1 font-label text-[11px] uppercase tracking-[0.25em] text-ink/45">{w.lat}</p>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/70">{w.note}</p>
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.25em] text-ink/45">Character</p>
                  <p className="mt-1 font-display text-lg italic text-ink/80">{w.burn}</p>
                </div>
                <div className="md:text-right">
                  <p className="font-label text-[10px] uppercase tracking-[0.25em] text-ink/45">Per unit</p>
                  <p className="font-display text-3xl font-black text-brand-700">R{w.price}</p>
                  <a href={waLink(`Good day. I would like to order ${w.name} — ten units or more, please.`)}
                    target="_blank" rel="noopener noreferrer"
                    className="editorial-link mt-2 inline-block font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
                    Order via WhatsApp →
                  </a>
                </div>
              </article>
            ))}
            <div className="rule" />
          </div>

          {/* pull quote */}
          <blockquote className="mx-auto mt-20 max-w-3xl text-center">
            <p className="font-display text-3xl font-medium italic leading-snug text-ink/85 sm:text-4xl">
              “Thorn species burn hotter, longer and cleaner than soft pine.
              Once you go thorn, you never go back.”
            </p>
            <cite className="mt-5 block font-label text-[11px] not-italic uppercase tracking-[0.3em] text-ink/45">
              — The Editors, on the subject of conviction
            </cite>
          </blockquote>
        </div>
      </section>

      {/* ================= CORRESPONDENCE / ORDER ================= */}
      <section id="order" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr,1.3fr]">
          <div>
            <p className="kicker">Section II</p>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Correspondence</h2>
            <p className="mt-6 max-w-md text-[17px] leading-[1.85] text-ink/75">
              There are no carts here, no accounts, no checkout counters. You write to us the way
              one writes to a trusted supplier — with your name, your wood, your units — and your
              letter arrives on our WhatsApp in an instant. We reply within the day.
            </p>
            <ol className="mt-10 space-y-6">
              {[["Compose", "Name, wood, units (ten or more), and your delivery area."],
                ["Confirm", "We reply on WhatsApp with stock, price and a delivery window."],
                ["Receive", "Pay on delivery or by EFT. Then light the match."]].map(([t, d], i) => (
                <li key={t} className="flex gap-5">
                  <span className="font-display text-3xl italic leading-none text-brand-700/60">{i + 1}.</span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{t}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink/65">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <form onSubmit={submitOrder} className="border border-ink/20 bg-white/50 p-8 sm:p-12" aria-label="Order form">
            <p className="kicker">Order slip</p>
            <h3 className="mt-2 font-display text-2xl font-black">Kindly supply:</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="o-name">Your name</label>
                <input id="o-name" className="field" required value={order.name} onChange={set("name")} placeholder="e.g. Gershwin K." autoComplete="name" />
              </div>
              <div>
                <label className="field-label" htmlFor="o-wood">Wood</label>
                <select id="o-wood" className="field" value={order.wood} onChange={set("wood")}>
                  {WOODS.map(w => <option key={w.name}>{w.name}</option>)}
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="o-units">Units — minimum 10</label>
                <input id="o-units" className="field" type="number" min="10" required value={order.units} onChange={set("units")} />
                {Number(order.units) < 10 &&
                  <p className="mt-2 font-label text-xs text-brand-700" role="alert">The minimum order is ten units — the fire deserves commitment.</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="o-area">Delivery area</label>
                <input id="o-area" className="field" required value={order.area} onChange={set("area")} placeholder="e.g. East London, Eastern Cape" />
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="o-notes">Notes (optional)</label>
                <textarea id="o-notes" className="field" rows="3" value={order.notes} onChange={set("notes")} placeholder="Gate code, stacking request, the occasion…" />
              </div>
            </div>
            <button type="submit" className="btn-wa mt-8 w-full">
              Send Order via WhatsApp ↗
            </button>
            <p className="mt-4 text-center font-label text-[11px] uppercase tracking-[0.2em] text-ink/40">
              Opens WhatsApp with your order pre-filled · Nothing is stored on this site
            </p>
          </form>
        </div>
      </section>

      {/* ================= FIGURES ================= */}
      <section className="border-y border-ink/15 bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-14 text-center md:grid-cols-4">
          {[["10+", "units minimum"], ["18", "months sun-cured"], ["1,000s", "hearths served"], ["1 day", "whatsapp reply"]].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-5xl font-black text-brand-400">{n}</p>
              <p className="mt-2 font-label text-[10px] uppercase tracking-[0.3em] text-paper/50">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= QUESTIONS ================= */}
      <section id="questions" className="mx-auto max-w-3xl px-6 py-20">
        <p className="kicker text-center">Section III</p>
        <h2 className="mt-3 text-center font-display text-4xl font-black sm:text-5xl">Questions, <em className="text-brand-700">answered.</em></h2>
        <div className="mt-12">
          {[
            ["Why a minimum of ten units?", "Firewood logistics are a matter of scale. Ten units keeps delivery viable — and your price per unit honest."],
            ["How do I pay?", "We confirm your order on WhatsApp; you then pay on delivery by cash or card, or by EFT using the details we send in the chat."],
           ].map(([q, a], i) => (
            <details key={q} className="group border-t border-ink/15 py-6 last:border-b open:bg-white/40">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 px-1">
                <span className="font-display text-xl font-bold group-open:text-brand-700">{q}</span>
                <span className="font-display text-2xl italic text-ink/30 transition group-open:rotate-45 group-open:text-brand-700">+</span>
              </summary>
              <p className="mt-4 max-w-2xl px-1 text-[15px] leading-[1.85] text-ink/70">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ================= COLOPHON ================= */}
      <footer className="border-t border-ink/15 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <Logo size={72} />
          <p className="mt-4 font-display text-3xl font-black">On-Point <em className="text-brand-700">Wood</em></p>
          <p className="mt-2 font-label text-[10px] uppercase tracking-[0.45em] text-ink/45">
            Holy Firewood Co. · Heal. Deliver. Restore. Give.
          </p>
          <a href={waLink(generalMsg)} target="_blank" rel="noopener noreferrer" className="btn-wa mt-8">
            Write to us on WhatsApp ↗
          </a>
          <p className="mt-10 font-label text-[11px] uppercase tracking-[0.25em] text-ink/40">
            East London, South Africa · Monday – Saturday, 07:00 – 18:00 · © 2026 On-Point Wood
          </p>
        </div>
      </footer>
    </div>
  );
}
