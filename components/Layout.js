import Sidebar from './Sidebar';
import Calendario from './Calendario'; // Asegúrate de que el nombre coincida exactamente
import Tareas from './Tareas';
import Materias from './Materias';
import Configuracion from './Configuracion';
import Inicio from './Inicio';

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        {/* Aquí eliminamos el <Header /> */}
        <main>{children}</main>
        <Inicio />
        <Materias />
        <Tareas />
        <Calendario />
        <Configuracion />
      </div>
    </div>
  );
}

export default Layout;
