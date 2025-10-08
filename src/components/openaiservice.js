export async function generarTexto(prompt) {
  try {
    const response = await fetch('http://localhost:5000/solicitud', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tipo: 'reparación',
        ciudad: 'Wiesbaden',
        urgencia: prompt
      }),
    });

    const data = await response.json();
    return data.mensaje + ' | ' + data.tipo + ' | ' + data.ciudad + ' | ' + data.urgencia;
  } catch (error) {
    console.error('Error al generar texto:', error);
    return 'Hubo un problema generando la respuesta.';
  }
}
