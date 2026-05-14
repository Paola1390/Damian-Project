// components/Configuracion.js
import { useState } from 'react';

const Configuracion = () => {
  const [language, setLanguage] = useState('es'); // Idioma (español por defecto)
  const [theme, setTheme] = useState('light'); // Tema (modo claro por defecto)

  // Función para cambiar idioma
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Función para cambiar tema
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={`configuracion ${theme}`}>
      <h2>Configuración</h2>
      <div>
        <label htmlFor="language">Idioma: </label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="fr">Francés</option>
        </select>
      </div>

      <div>
        <label htmlFor="theme">Tema: </label>
        <select id="theme" value={theme} onChange={handleThemeChange}>
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
        </select>
      </div>
    </div>
  );
};

export default Configuracion;
