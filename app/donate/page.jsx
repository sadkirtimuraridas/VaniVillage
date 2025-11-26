export default function DonatePage() {
  const donationOptions = [
    "Custom amount (shipping address not required)",
    "€108 - Vanipedia Medal of Gratitude",
    "€250 - Srila Prabhupada 125th Anniversary Coin",
    "€500 - Vanipedia Medal & Srila Prabhupada Coin",
    "€1,000 - Garden Bench",
  ];

  const otherOptions = [
    "€10,000 - Garden Lounge",
    "€12,000 - Boundary Walls & Fences",
    "€15,000 - Green House",
    "€20,000 - Decorative Water Fountain",
  ];

  return (
    <div className="min-h-screen bg-white text-black px-5 sm:px-10 lg:px-24 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#b8c36a]">
        Donation Payment
      </h1>

      {/* Donation Options */}
      <div className="space-y-4 mb-8">
        {donationOptions.map((opt, i) => (
          <label key={i} className="flex items-center gap-3 text-lg">
            <input type="checkbox" className="w-5 h-5 border-gray-400" />
            {opt}
          </label>
        ))}

        {/* Bench quantity */}
        <div className="ml-8 mt-2 w-40">
          <select className="w-full border border-gray-300 p-2 rounded-lg text-gray-700">
            {[...Array(10)].map((_, i) => (
              <option key={i}>{i + 1}</option>
            ))}
          </select>
        </div>

        {otherOptions.map((opt, i) => (
          <label key={i + 5} className="flex items-center gap-3 text-lg">
            <input type="checkbox" className="w-5 h-5 border-gray-400" />
            {opt}
          </label>
        ))}
      </div>

      {/* Form Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <input type="text" placeholder="First Name" className="border p-3 rounded-lg" />
        <input type="text" placeholder="Last Name" className="border p-3 rounded-lg" />
      </div>

      <input
        type="email"
        placeholder="Email Address"
        className="border p-3 w-full rounded-lg mb-4"
      />

      <p className="text-gray-600 mb-2">
        For donations of €108 or more - please enter shipping details so we can send your donation gifts:
      </p>

      <input type="text" placeholder="Address" className="border p-3 w-full rounded-lg mb-3" />
      <input type="text" placeholder="Address 2" className="border p-3 w-full rounded-lg mb-3" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="City" className="border p-3 rounded-lg" />
        <input type="text" placeholder="State" className="border p-3 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Zip Code" className="border p-3 rounded-lg" />
        {/* FIXED LINE BELOW */}
        <input type="text" placeholder="Country" className="border p-3 rounded-lg" />
      </div>
    </div>
  );
}
