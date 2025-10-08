import { useState } from 'react';

function Tips() {
  const [showMore, setShowMore] = useState(false);

  const tips = [
    {
      icon: "🔊",
      title: "Metal scraping sound",
      en: "If you hear a metallic scraping sound, it could be your brake pads.",
      de: "Wenn du ein kratzendes Geräusch hörst, könnten es die Bremsbeläge sein.",
    },
    {
      icon: "📄",
      title: "VIN mismatch",
      en: "If the VIN on the chassis doesn't match the papers, don't buy the car.",
      de: "Wenn die Fahrgestellnummer nicht mit den Papieren übereinstimmt, kaufe das Auto nicht.",
    },
    {
      icon: "🚨",
      title: "Warning lights",
      en: "Dashboard warning lights indicate issues. Don’t ignore them!",
      de: "Warnleuchten im Cockpit zeigen Probleme an. Ignoriere sie nicht!",
    },
    {
      icon: "🛞",
      title: "Tire wear",
      en: "Uneven tire wear may point to axle or alignment problems.",
      de: "Unregelmäßiger Reifenverschleiß kann auf ein Achsproblem hinweisen.",
    },
    {
      icon: "💧",
      title: "Fluid leaks",
      en: "Puddles under your car? It could be oil, coolant, or brake fluid.",
      de: "Pfützen unter dem Auto? Es könnte Öl, Kühlmittel oder Bremsflüssigkeit sein.",
    },
  ];

  const displayedTips = showMore ? tips : tips.slice(0, 2);

  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
        Mechanic Tips / Tipps vom Mechaniker
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {displayedTips.map((tip, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-2">
              {tip.icon} {tip.title}
            </h3>
            <p className="text-sm text-gray-700 mb-1">
              <strong>EN:</strong> {tip.en}
            </p>
            <p className="text-sm text-gray-600">
              <strong>DE:</strong> {tip.de}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-600 hover:underline mt-4"
        >
          {showMore
            ? "Weniger anzeigen / Show less"
            : "Mehr Tipps anzeigen / Show more tips"}
        </button>
      </div>
    </section>
  );
}

export default Tips;
