import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    // make 2023 label from current year
 const currentYear = new Date().getFullYear();
 return (
 <footer className="text-gray-600 body-font">
 <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
 <a href="#hero"   className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
 <span className="ml-3 text-xl">Treelink</span>
 </a>
 <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© {currentYear} Treelink
 <a href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank"></a>
 </p>
 <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
 <a href="#hero"   className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer">Inicio</a>
 <a href="#features"   className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer">Ventajas</a>
 <a href="#pricing"   className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer">Precios</a>
 <a href="#contact"   className="text-gray-500 hover:text-gray-900 mx-3 cursor-pointer">Contacto</a>
 </span>
 </div>
 </footer>
 );
}

export default Footer;