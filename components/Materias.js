import { useEffect, useState } from 'react';

const coloresPastel = [
  '#FFD7E9', // rosa pastel
  '#D0F0FD', // celeste pastel
  '#C6F6D5', // verde pastel
  '#FFE9B3', // amarillo pastel
  '#E8D0FD', // lila pastel
  '#FAD4D4', // rojo claro pastel
  '#D4F0F0', // turquesa pastel
  '#F0E5D8', // beige pastel
  '#E0D4F0', // violeta pastel
  '#D4F0D8', // verde claro pastel
];

function Materias() {
  const [materias, setMaterias] = useState([]);
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState('');
  const [color, setColor] = useState(coloresPastel[0]);

  useEffect(() => {
    const guardadas = localStorage.getItem('materias');
    if (guardadas) {
      setMaterias(JSON.parse(guardadas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('materias', JSON.stringify(materias));
  }, [materias]);

  const agregarMateria = () => {
    if (!nombre.trim() || !creditos.trim() || isNaN(creditos)) {
      alert('Por favor, ingresa un nombre válido y créditos numéricos.');
      return;
    }
    const nueva = {
      id_materia: materias.length > 0 ? materias[materias.length - 1].id_materia + 1 : 1,
      nombre,
      creditos: Number(creditos),
      color,
    };
    setMaterias([...materias, nueva]);
    setNombre('');
    setCreditos('');
    setColor(coloresPastel[0]);
  };

  return (
    <div className="p-6 max-w-md mx-0 font-sans">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Lista de Materias</h2>

      <div className="mb-6 space-y-4 text-left">
        {materias.length === 0 && (
          <p className="text-gray-500">No hay materias agregadas aún.</p>
        )}
        {materias.map(({ id_materia, nombre, creditos, color }) => (
          <div
            key={id_materia}
            className="p-4 rounded-lg shadow-sm"
            style={{ backgroundColor: color }}
          >
            <h3 className="text-lg font-semibold text-blue-900">{nombre}</h3>
            <p className="text-blue-800">{creditos} créditos</p>
          </div>
        ))}
      </div>

      <div className="border-t border-blue-200 pt-4 space-y-4 text-left">
        <input
          type="text"
          placeholder="Nombre de la materia"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-3 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-300 text-blue-700"
        />

        <input
          type="number"
          placeholder="Créditos"
          value={creditos}
          onChange={(e) => setCreditos(e.target.value)}
          className="w-full p-3 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-700"
          min="0"
        />

        <div>
          <label className="block mb-1 text-blue-700 font-semibold">Color del recuadro:</label>
          <div className="flex gap-3 flex-wrap">
            {coloresPastel.map((col) => (
              <button
                key={col}
                onClick={() => setColor(col)}
                className={`w-8 h-8 rounded-full border-2 ${
                  color === col ? 'border-blue-700' : 'border-transparent'
                } cursor-pointer`}
                style={{ backgroundColor: col }}
                aria-label={`Seleccionar color ${col}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={agregarMateria}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
        >
          Agregar Materia
        </button>
      </div>
    </div>
  );
}

export default Materias;
