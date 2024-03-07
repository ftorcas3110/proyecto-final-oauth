  "use client";
  import { useState } from "react";
  import { login } from "@/lib/actions";
  import Button from "@/components/button-form";
  import Link from "next/link";
  function LoginForm() {
    const [resultado, setResultado] = useState("");
    const [tipo, setTipo] = useState("");

    async function wrapper(data) {
      const message = await login(data); 
      if (message?.success) {
        setTipo("success");
        setResultado(message.success);
      }
      if (message?.error) {
        setTipo("error");
        setResultado(message.error);
      }
    }
    return (
      <form
        action={wrapper}
        className="credentials flex flex-col items-center "
      >
        <div className="flex flex-col items-center mb-4 text-black">
          <label className="mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="nombre@gmail.com"
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col items-center mb-4 text-black">
          <label className="mb-2">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="******"
            className="border p-2 rounded"
          />
        </div>
        <p className={`info ${tipo} mb-4`}> {resultado} </p>
        <div className="flex justify-around gap-5">          
          <Button title="Iniciar sesion" />
          <Link
            href="/auth/register"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Crear cuenta
          </Link>
        </div>
      </form>
    );
  }

  export default LoginForm;
