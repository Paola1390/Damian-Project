// pages/inicio.js
const Inicio = () => {
    return (
      <div>
        {/* Sección de Hoy */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hoy</h2>
          <p className="text-gray-600">Bienvenida, Paola. Aquí tienes un resumen de tu día.</p>
        </div>
  
        {/* Tareas del día */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tareas del Día</h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200">
              <h3 className="text-lg font-medium">Matemáticas</h3>
              <p className="text-gray-600">Resolver ejercicios del capítulo 4.</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200">
              <h3 className="text-lg font-medium">Programación</h3>
              <p className="text-gray-600">Entregar práctica de estructuras condicionales.</p>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Inicio;
  