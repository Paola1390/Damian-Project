// pages/index.js
import Tareas from '../components/Tareas' // Asegúrate que la ruta es correcta

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inicio</h1>
      <Tareas />
    </main>
  );
}
