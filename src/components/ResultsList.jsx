function ResultsList({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="text-center text-gray-500 py-6">
        Kein Ergebnis gefunden / No results found.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto py-10 px-4">
      {results.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold text-blue-700 mb-2">{item.name}</h3>
          <p className="text-sm text-gray-600 mb-1">
            📍 {item.location}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            🛠️ {item.service}
          </p>
          <p className="text-sm text-gray-600">
            Verfügbar: {item.available ? "Ja ✅" : "Nein ❌"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ResultsList;
