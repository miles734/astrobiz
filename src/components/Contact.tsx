import React from 'react';

const Contact = () => {
 return (
 <section className="text-gray-600 body-font relative">
 <div className="container px-5 py-24 mx-auto">
 <div className="flex flex-col text-center w-full mb-20">
 <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contactanos</h1>
 <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Escribinos y nuestro equipo te va a responder lo antes posible. Estamos para ayudarte a sacarle el máximo provecho a Treelink.</p>
 </div>
 <form
 action="https://formsubmit.co/linegestion.cl@gmail.com"
 method="POST"
 className="lg:w-1/2 md:w-2/3 mx-auto">
 <input type="hidden" name="_captcha" value="false" />
 <div className="flex flex-wrap -m-2">
   <div className="p-2 w-full">
     <div className="relative">
       <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
       <input type="text" id="name" name="name" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
     </div>
   </div>
   <div className="p-2 w-full">
     <div className="relative">
       <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
       <input type="email" id="email" name="email" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
     </div>
   </div>
   <div className="p-2 w-full">
     <div className="relative">
       <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
       <textarea id="message" name="message" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
     </div>
   </div>
   <div className="p-2 w-full">
     <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
   </div>
 </div>
</form>
 </div>
 </section>
 );
}

export default Contact;