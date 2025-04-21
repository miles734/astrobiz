import React from 'react';

const Hero = () => {
 return (
 <section className="bg-gray-100">
 <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
 <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
 <img className="object-cover object-center rounded" alt="hero" src="./nature_3.jpeg" />
 </div>
 <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
 <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
Treelink </h1>
 <p className="mb-8 leading-relaxed">
 🎯 Treelink es la forma más simple y efectiva de reunir todos tus enlaces en un solo lugar. Ideal para creadores, emprendedores, marcas y profesionales, te permite centralizar tus redes sociales, tienda online, portafolio, videos, formularios y más en un solo link personalizado. Es fácil de usar, 100% personalizable y perfecto para compartir en tu bio de Instagram, TikTok, YouTube o cualquier red social. Con un solo clic, tus seguidores acceden a todo tu universo digital. 🔗 ¡Convierte ese único enlace en una puerta de entrada a todo lo que haces con Treelink!
 </p>
 </div>
 </div>
 </section>
 );
};

export default Hero;