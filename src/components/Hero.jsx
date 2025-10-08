function Hero() {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        Deine mobile Autowerkstatt
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Mit FLEXI-GO findest du schnell einen vertrauenswürdigen Mechaniker in deiner Nähe.
        <br />
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Jetzt starten / Get started
      </button>
    </section>
  );
}

export default Hero;
