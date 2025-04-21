import React from 'react';

const Pricing = () => {
 return (
 <section className="text-gray-600 body-font">
 <div className="container px-5 py-24 mx-auto">
 <div className="flex flex-col text-center w-full mb-20">
 <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Precios</h1>
 <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Descubre el plan perfecto para ti. Elige un plan para ofrecerte  herramientas únicas para ayudarte a maximizar tu presencia en línea. No esperes más, ¡comenzá hoy mismo!<br /><br />Accedé a todas las funciones de Treelink sin límites.
 Los tres planes incluyen las mismas herramientas, lo único que cambia es el precio según el período que elijas. ¡A mayor duración, más ahorro!
 </p>
 </div>
 <div className="flex flex-wrap -m-4">
 <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
 <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
 <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BASICO</h2>
 <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
 <span>$7990</span>
 <span className="text-lg ml-1 font-normal text-gray-500">/mensuales</span>
 </h1>
 <p className="flex-grow text-gray-500">📌 Incluye acceso completo a todas las funciones: personalización avanzada, estadísticas, botones ilimitados, integración con redes sociales y más.</p>
 <a href="https://api.whatsapp.com/send?phone=56966515212" className="mt-3 text-indigo-500 inline-flex items-center">Contratar
 <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
 <path d="M5 12h14"></path>
 <path d="M12 5l7 7-7 7"></path>
 </svg>
 </a>
 </div>
 </div>
 <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
 <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
 <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
 <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PROFESIONAL</h2>
 <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
 <span>$39.990</span>
 <span className="text-lg ml-1 font-normal text-gray-500">/6 meses</span>
 </h1>
 <p className="flex-grow text-gray-500">🚀 Potenciá tu presencia con Treelink: reune todos tus enlaces en una página única, visual, y fácil de compartir. Ideal para mostrar todo lo que hacés en un solo lugar.</p>
 <a href="https://api.whatsapp.com/send?phone=56966515212" className="mt-3 text-white bg-indigo-500 inline-flex items-center">Contratar
  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="M12 5l7 7-7 7"></path>
  </svg>
</a>
</div>
</div>
<div className="p-4 xl:w-1/3 md:w-1/2 w-full">
  <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PREMIUM</h2>
    <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
      <span>$79.990</span>
      <span className="text-lg ml-1 font-normal text-gray-500">/anual</span>
    </h1>
    <p className="flex-grow text-gray-500">🔧 Todo lo que necesitás con Treelink: diseño 100% personalizable, botones y enlaces ilimitados, y conexión directa con tus redes y contenido.</p>
    <a href="https://api.whatsapp.com/send?phone=56966515212" className="mt-3 text-indigo-500 inline-flex items-center">Contratar
      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</div>
</div>
</div>
</section>
 );
}

export default Pricing