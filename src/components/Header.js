import Link from "next/link";
import { auth } from "@/auth";

async function Header() {
  const session = await auth();
  return (
    <header
      className={`bg-black  flex md:flex-row justify-between items-center md:justify-between md:px-5 font-Rounded font-bold md:h-[10vh]`}
    >
      <div className="hidden lg:flex">
        <ul className="flex space-x-5 text-white md:space-x-32 text-[2vh]">
          <li className="hover:text-blue-700">
            <Link href="/">Inicio</Link>
          </li>
          <li className="hover:text-blue-700">
            <Link href="/about">Acerca de</Link>
          </li>
          <li>
          { session?.user?.role == 'ADMIN'
                    && <Link href="/admin" className=' transition duration-500 hover:text-blue-700'>Admin panel</Link>
                }
          </li>
        </ul>
      </div>
      <div className=" ">
      {session ? (
          <p>Sesión iniciada como {session.user.name}</p>
        ) : (
          <p>Aún no has iniciado sesión</p>
        )}
        {session ? (
          <Link
            href="/auth/logout"
            className=" transition duration-500 hover:text-blue-700"
          >
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Cerrar sesión
            </button>
          </Link>
        ) : (
          <Link
            href="/auth/login"
            className=" transition duration-500 hover:text-blue-700"
          >
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Iniciar sesión
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
