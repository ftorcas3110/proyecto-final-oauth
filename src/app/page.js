export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center sm:h-[88vh] py-5 md:h-[80vh] p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 sm:gap-10 md:gap-10">

        <div className="text-center container items-center border-2 border-white relative bg-gradient-to-br from-red-900 via-red-700 to-purple-700 p-8 rounded-lg shadow-lg text-white">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          </div>
          <h1 className=" text-[30px]">Recetario de cocina</h1>
          <p>
            Las mejores recetas conocidas por el mundo moderno, y también por el antiguo.
          </p>
        </div>
      </div>
    </div>
    
  );
}
