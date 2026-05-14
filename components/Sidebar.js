import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  const navItems = [
    { href: '/inicio', label: 'Inicio', icon: '🏠' },
    { href: '/materias', label: 'Materias', icon: '📚' },
    { href: '/tareas', label: 'Tareas', icon: '📝' },
    { href: '/calendario', label: 'Calendario', icon: '📅' },
    { href: '/configuracion', label: 'Configuración', icon: '⚙️' },
  ];

  return (
    <div className="w-64 bg-gray-300 text-gray-900 p-6 flex flex-col min-h-screen">
      <div className="flex justify-center mb-8">
        <Link href="/chat">
          <img
            src="/damian.png"
            alt="Damián"
            className="rounded-full w-24 h-24 object-cover cursor-pointer"
          />
        </Link>
      </div>
      <h1 className="text-2xl font-semibold mb-8 text-center">Damián</h1>
      <ul className="space-y-6">
        {navItems.map((item) => (
          <li
            key={item.href}
            className={`text-xl flex items-center gap-2 hover:text-gray-600 ${
              router.pathname === item.href ? 'font-bold text-blue-600' : ''
            }`}
          >
            {item.icon}{' '}
            {router.pathname === item.href ? (
              <span>{item.label}</span> // solo texto si ya estamos en esa ruta
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
