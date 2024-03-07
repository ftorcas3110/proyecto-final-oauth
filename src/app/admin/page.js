import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function page() {
  const sesion = await auth();

  if (!sesion) redirect('/')
  if (sesion.user.role !== 'ADMIN') redirect('/')

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[70vh] text-[8vh]">
        <div className="text-center  border-red-700 bg-gradient-to-br from-red-900 via-red-700 to-purple-700 p-8 rounded-lg shadow-lg text-white">
          <h1>🔐 Admin panel</h1>
          <p>{sesion?.user.name}</p>
          <p> {sesion?.user.email} </p>
          <p> {sesion?.user.role} </p>
          <img src={sesion?.user.image}></img>
        </div>
      </div>
    </>
  );
}

export default page;
