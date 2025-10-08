import React, { useState } from 'react';
import { generarTexto } from "./components/openaiservice";



function Landing() {
  const [prompt, setPrompt] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const handleGenerar = async () => {
    const texto = await generarTexto(prompt);
    setRespuesta(texto);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Asistente IA para Talleres</h1>
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Escribe tu pregunta"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleGenerar}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generar con IA
      </button>

      {respuesta && (
        <div className="mt-4 bg-gray-100 p-3 rounded">
          <strong>Respuesta:</strong>
          <p>{respuesta}</p>
        </div>
      )}
    </div>
  );
}

export default Landing;
