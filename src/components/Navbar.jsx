function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">FLEXI-GO</div>
      <ul className="flex space-x-6 text-sm font-medium">
        <li>
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition">
            Dienstleistungen
          </a>
        </li>
        <li>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
            Über uns
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
