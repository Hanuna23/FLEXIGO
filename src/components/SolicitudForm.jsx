function SolicitudForm() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">
        Reparaturanfrage
      </h2>

      <form className="max-w-2xl mx-auto grid gap-6 text-left">
        {/* Ubicación */}
        <div>
          <label className="block mb-1 font-semibold">Standort</label>
          <input
            type="text"
            placeholder="z.B. Berlin / e.g. Berlin"
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* Tipo de problema */}
        <div>
          <label className="block mb-1 font-semibold">Problemtyp</label>
          <select className="w-full border px-4 py-2 rounded">
            <option>Motorproblem</option>
            <option>Reifen</option>
            <option>Batterie</option>
            <option>Sonstiges</option>
          </select>
        </div>

        {/* Fecha */}
        <div>
          <label className="block mb-1 font-semibold">Datum</label>
          <input type="date" className="w-full border px-4 py-2 rounded" />
        </div>

        {/* Descripción */}
        <div>
          <label className="block mb-1 font-semibold">Details</label>
          <textarea
            placeholder="Beschreibe das Problem..."
            className="w-full border px-4 py-2 rounded"
          ></textarea>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Anfrage senden
        </button>
      </form>
    </section>
  );
}

export default SolicitudForm;
