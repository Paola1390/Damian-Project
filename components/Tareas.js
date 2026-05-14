import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const Tareas = () => {
  const [tareas, setTareas] = useState([
    { id: 1, nombre: 'Estudiar Matemáticas', fecha: '2025-04-12', completada: false },
    { id: 2, nombre: 'Revisar proyecto de PWA', fecha: '2025-04-13', completada: false },
  ]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [nuevaFecha, setNuevaFecha] = useState('');

  // Cargar tareas desde localStorage solo en cliente
  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  // Guardar tareas en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() && nuevaFecha) {
      const nueva = {
        id: tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1,
        nombre: nuevaTarea,
        fecha: nuevaFecha,
        completada: false,
      };
      setTareas([...tareas, nueva]);
      setNuevaTarea('');
      setNuevaFecha('');
    } else {
      alert('Por favor, completa el nombre y la fecha de la tarea.');
    }
  };

  const toggleCompletada = (id) => {
    setTareas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 font-sans max-w-full max-h-[400px] overflow-auto">
      <h2 className="text-xl font-bold mb-4">Mis Tareas</h2>

      <ul className="mb-4 space-y-2">
        {tareas.map((tarea) => (
          <li key={tarea.id} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggleCompletada(tarea.id)}
              className="w-5 h-5 cursor-pointer"
            />
            <span
              className={`cursor-pointer select-none ${
                tarea.completada ? 'line-through underline text-gray-400' : ''
              }`}
              onClick={() => toggleCompletada(tarea.id)}
            >
              {tarea.nombre}
            </span>
            <span className="ml-auto text-gray-500 text-sm">
              {format(new Date(tarea.fecha), 'dd MMM yyyy')}
            </span>
          </li>
        ))}
      </ul>

      <div className="border-t pt-4 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={nuevaFecha}
          onChange={(e) => setNuevaFecha(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={agregarTarea}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Agregar Tarea
        </button>
      </div>
    </div>
  );
};

export default Tareas;
