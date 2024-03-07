import { logout } from "@/lib/actions";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

async function page() {
  const sesion = await auth();

  if (sesion) {
    const { user } = sesion;
    console.log(sesion);

    return (
      <>
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <h1 className="text-2xl mb-4">Cerrar sesión</h1>

          <form className="container flex flex-col items-center gap-4 bg-gradient-to-br from-red-900 via-red-700 to-purple-700 p-8 rounded-lg shadow-lg text-white">
            <label className="text-black">
              Nombre:
              <input
                type="text"
                name="name"
                value={user.name}
                readOnly
                className="w-full text-black"
              />
            </label>
            <label className="text-black">
              Email:
              <input
                type="email"
                name="email"
                value={user.email}
                readOnly
                className="w-full text-black"
              />
            </label>
              <img
                src={user.image}
                className="rounded-full w-20 h-20"
              />
            <button
              formAction={logout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Cerrar sesión</button>
          </form>
        </div>
      </>
    );
  } else {
    redirect("/auth/login");
  }
}

export default page;
