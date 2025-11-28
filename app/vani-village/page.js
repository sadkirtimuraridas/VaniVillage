export default function VaniVillagePage() {

  const updates = [
    {
      title: "Vani Village Update 23.03.25 – Doors",
      date: "October 21, 2025",
      href: "https://www.vanivillage.org/vani-village-update-23-03-25-doors",
    },
    {
      title: "Vani Village Update 13.01.25 – More Books",
      date: "January 13, 2025",
      href: "https://www.vanivillage.org/vani-village-update-13-01-25-more-books",
    },
    {
      title: "Vani Village Update 13.01.25",
      date: "January 13, 2025",
      href: "https://www.vanivillage.org/vani-village-update-13-01-25",
    },
  ];

  const costItems = [
    { label: "Land purchase", amount: "€91,424.00" },
    { label: "Architect and surveyor", amount: "€30,430.00" },
    { label: "Land excavation & foundation", amount: "€103,394.50" },
    { label: "Structure of three floors", amount: "€258,093.60" },
    { label: "Roof", amount: "€80,425.10" },
    { label: "Windows & outside doors", amount: "€42,381.60" },
    { label: "Interior", amount: "€203,287.60" },
  ];

  const totals = {
    exclVat: "€809,436.40",
    inclVat: "€911,425.00",
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="border-b border-slate-800 bg-gradient-to-br from-emerald-700/20 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">

          

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Vani Village
          </h1>
          <br/>
{/* VIDEO */}
        <div className="flex justify-center mb-12">
          <div className="w-[90%] rounded-2xl overflow-hidden shadow-2xl">
            <video
  src="/videos/vaikuntha.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full rounded-2xl"
/>

          </div>
        </div>
          {/* IMAGE GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 mb-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
              >
                <img
                  src={`/vani-village/image${i + 1}.jpg`}
                  alt={`Vani Village ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            A Home for Srila Prabhupada’s Books and Vani
          </h2>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            In 2018, Bhaktivedanta Library Services acquired land next to Radhadesh, Belgium.
            On this land, Vani Village is being built — a permanent home for Srila Prabhupada’s
            books and the team serving Vanipedia and book distribution.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 text-sm">
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
              <h3 className="font-semibold text-emerald-300">Purpose</h3>
              <ul className="mt-2 list-disc list-inside text-slate-200">
                <li>Book storage & distribution</li>
                <li>Vanipedia content creation</li>
                <li>Residential quarters</li>
                <li>Guest accommodation</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
              <h3 className="font-semibold text-emerald-300">Gardens</h3>
              <p className="mt-2 text-slate-200">
                Garden spaces will provide prasadam ingredients
                and spiritual atmosphere.
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center flex-wrap gap-4">
            <a
              href="https://www.vanivillage.org/sponsorship"
              target="_blank"
              className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-black hover:bg-emerald-400"
            >
              View Sponsorship Options
            </a>

            <a
              href="https://www.vanivillage.org/payment-page"
              target="_blank"
              className="rounded-full border border-slate-500 px-6 py-3 hover:border-emerald-400"
            >
              Donate Now
            </a>
          </div>

        </div>
      </section>

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-6 py-16">

          <h2 className="text-2xl font-bold">Construction Updates</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {updates.map(u => (
              <div key={u.href} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h3 className="font-semibold">{u.title}</h3>
                <p className="text-xs text-gray-400">{u.date}</p>
                <a href={u.href} className="text-emerald-400 text-sm mt-2 inline-block">
                  Read Update →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-16">

          <h2 className="text-2xl font-bold">Project Cost Breakdown</h2>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-5">
            {costItems.map(item => (
              <div key={item.label} className="flex justify-between border-b border-slate-800 py-2">
                <span>{item.label}</span>
                <span className="text-emerald-400 font-semibold">{item.amount}</span>
              </div>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-700 font-semibold">
              <div className="flex justify-between">
                <span>Total (excl VAT)</span>
                <span className="text-emerald-400">{totals.exclVat}</span>
              </div>
              <div className="flex justify-between">
                <span>Total (incl VAT)</span>
                <span className="text-emerald-400">{totals.inclVat}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      

      <section className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">

          <h2 className="text-3xl font-bold">Support the Mission</h2>
          <p className="mt-4 text-slate-300">
            Help protect Srila Prabhupada’s legacy.
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-slate-900">Donate €108 – Medal</div>
            <div className="p-4 rounded-xl bg-slate-900">Donate €250 – Coin</div>
            <div className="p-4 rounded-xl bg-slate-900">Donate €500 – Both</div>
          </div>

          <a
            href="https://www.vanivillage.org/payment-page"
            className="inline-block mt-8 rounded-full bg-emerald-500 px-8 py-3 font-semibold text-black"
          >
            Donate Now
          </a>

        </div>
      </section>

    </main>
  );
}
