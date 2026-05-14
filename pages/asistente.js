// pages/asistente.js
import { useState } from "react";

const Asistente = () => {
  const [respuesta, setRespuesta] = useState("");
  const [entrada, setEntrada] = useState("");

  const respuestasInutiles = [
    "¡¿En serio?! No sé si reír o llorar, ¿quieres más ayuda?",
    "Claro, claro, yo sé mucho, pero tal vez no lo suficiente para ayudarte.",
    "¿Estás seguro de que necesitas mi ayuda? ¡Soy increíblemente inútil!",
    "¿Otra pregunta? ¡No tienes miedo de perder el tiempo, eh!",
  ];

  const generarRespuesta = () => {
    const randomRespuesta =
      respuestasInutiles[Math.floor(Math.random() * respuestasInutiles.length)];
    setRespuesta(randomRespuesta);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl mb-4">Asistente Personal Inútil</h1>
      <input
        type="text"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        placeholder="Escribe algo para preguntar..."
        className="p-2 mb-4 text-black"
      />
      <button
        onClick={generarRespuesta}
        className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-md"
      >
        Pregúntame algo
      </button>
      <p className="mt-4 text-lg">{respuesta}</p>
    </div>
  );
};

export default Asistente;
