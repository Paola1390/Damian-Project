// components/Dashboard.js

const Dashboard = () => {
  const today = new Date().toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barra Lateral */}
      <div className="w-64 bg-gray-300 text-gray-900 p-6 flex flex-col">
        {/* Imagen de Damián que redirige al chat */}
        <div className="flex justify-center mb-8">
          <a href="#chat">
            <img
              src="/damian.png"
              alt="Damián"
              className="rounded-full w-24 h-24 object-cover cursor-pointer"
            />
          </a>
        </div>
        <h1 className="text-2xl font-semibold mb-8 text-center">Damián</h1>
        <ul className="space-y-6">
          <li className="text-xl hover:text-gray-600 flex items-center gap-2">
            <span className="sidebar-icon">🏠</span>
            <a href="#inicio">Inicio</a>
          </li>
          <li className="text-xl hover:text-gray-600 flex items-center gap-2">
            <span className="sidebar-icon">📚</span>
            <a href="#materias">Materias</a>
          </li>
          <li className="text-xl hover:text-gray-600 flex items-center gap-2">
            <span className="sidebar-icon">📝</span>
            <a href="#tareas">Tareas</a>
          </li>
          <li className="text-xl hover:text-gray-600 flex items-center gap-2">
            <span className="sidebar-icon">📅</span>
            <a href="#calendario">Calendario</a>
          </li>
          <li className="text-xl hover:text-gray-600 flex items-center gap-2">
            <span className="sidebar-icon">⚙️</span>
            <a href="#configuracion">Configuración</a>
          </li>
        </ul>
      </div>

      {/* Contenido Principal */}
      <div className="flex-1 p-6 bg-gray-50 text-gray-900 overflow-y-auto">
        {/* Sección de Inicio */}
        <div id="inicio" className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Hoy</h2>
          <p className="text-gray-600 mb-4">{today}</p>
          <div>
            <h3 className="text-xl font-semibold mb-2">Tareas del día</h3>
            <ul className="space-y-2">
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200">
                Estudiar para el examen de matemáticas.
              </li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200">
                Entregar el proyecto de informática.
              </li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200">
                Leer 10 páginas del libro de negocios.
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de Tareas */}
        <div id="tareas" className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tareas Pendientes</h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200">
              <h3 className="text-lg font-medium">Tarea 1</h3>
              <p className="text-gray-600">Descripción breve de la tarea 1.</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200">
              <h3 className="text-lg font-medium">Tarea 2</h3>
              <p className="text-gray-600">Descripción breve de la tarea 2.</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200">
              <h3 className="text-lg font-medium">Tarea 3</h3>
              <p className="text-gray-600">Descripción breve de la tarea 3.</p>
            </li>
          </ul>
        </div>

        {/* Sección de Calendario */}
        <div id="calendario" className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Calendario</h2>
          <div className="h-64 bg-gray-200 flex justify-center items-center rounded-lg">
            <p className="text-xl text-gray-600">Calendario aquí</p>
          </div>
        </div>

        {/* Sección de Chat con Damián */}
        <div id="chat" className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Chat con Damián</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="text-gray-700">Damián: ¿Qué tal? ¿Tienes cosas pendientes?</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="text-gray-700">Tú: Sí, tengo varias tareas hoy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
