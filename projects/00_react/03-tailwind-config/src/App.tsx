function App() {
   return (
      <>
         <h1 className="bg-green-400 text-black rounded-xl p-4">
            Tailwind heading
         </h1>
         <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img
               alt=""
               width={384}
               height={512}
               className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
               src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
               <blockquote>
                  <p className="text-lg font-medium">
                     A utility-first CSS framework packed with classes like
                     flex, pt-4, text-center and rotate-90 that can be composed
                     to build any design, directly in your markup.
                  </p>
               </blockquote>
            </div>
         </figure>
      </>
   );
}

export default App;
