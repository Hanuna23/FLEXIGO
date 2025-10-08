import { useState } from "react";
function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, service });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-10 mt-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="📍Ort eingeben"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded"
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded"
        >
          <option value="">🔧 Dienst auswählen</option>
          <option value="reparacion">Pannenhilfe vor Ort</option>
          <option value="limpieza">Fahrzeugreinigung vor Ort</option>
        </select>
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800"
        >
         Suchen
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
