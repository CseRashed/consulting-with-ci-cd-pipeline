
import './App.css'

function App() {
  

  return (
    <>
     <div class="bg-gray-100">
       <nav class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex justify-between items-center h-16">

              
                <div class="flex-shrink-0">
                    <a href="#" class="text-2xl font-bold text-indigo-600">
                        Consulting
                    </a>
                </div>

           
                <div class="hidden md:flex space-x-8">
                    <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium transition">
                        Home
                    </a>
                    <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium transition">
                        About
                    </a>
                    <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium transition">
                        Services
                    </a>
                    <a href="#" class="text-gray-700 hover:text-indigo-600 font-medium transition">
                        Contact
                    </a>
                </div>

     
                <div class="hidden md:block">
                    <button class="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                        Get Started
                    </button>
                </div>

              
                <div class="md:hidden">
                    <button id="menu-btn" class="text-gray-700 focus:outline-none">
                        ☰
                    </button>
                </div>

            </div>
        </div>

        <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
            <a href="#" class="block px-6 py-3 text-gray-700 hover:bg-gray-100">
                Home
            </a>
            <a href="#" class="block px-6 py-3 text-gray-700 hover:bg-gray-100">
                About
            </a>
            <a href="#" class="block px-6 py-3 text-gray-700 hover:bg-gray-100">
                Services
            </a>
            <a href="#" class="block px-6 py-3 text-gray-700 hover:bg-gray-100">
                Contact
            </a>
            <div class="p-4">
                <button class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                    Get Started
                </button>
            </div>
        </div>
    </nav>
     </div>
    <section class="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-20 lg:py-32">
    
   
    <div class="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">

         
            <div class="relative z-10 text-center lg:text-left">
                
                <span class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-cyan-300 text-sm font-medium border border-white/10 backdrop-blur-md">
                    ✨ Trusted Business & Career Consultancy
                </span>

                <h1 class="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    Transform Your
                    <span class="text-cyan-400">Future</span>
                    With Expert Guidance
                </h1>

                <p class="mt-6 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
                    We help students, professionals, and businesses achieve their goals through strategic consultancy, expert planning, and personalized solutions.
                </p>

                <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#"
                       class="px-8 py-4 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition duration-300 shadow-lg shadow-cyan-500/30">
                        Book Free Consultation
                    </a>

                    <a href="#"
                       class="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition duration-300">
                        Learn More
                    </a>
                </div>

            
                <div class="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
                    <div>
                        <h3 class="text-3xl font-bold text-white">500+</h3>
                        <p class="text-slate-400 text-sm">Clients Served</p>
                    </div>

                    <div>
                        <h3 class="text-3xl font-bold text-white">10+</h3>
                        <p class="text-slate-400 text-sm">Years Experience</p>
                    </div>

                    <div>
                        <h3 class="text-3xl font-bold text-white">98%</h3>
                        <p class="text-slate-400 text-sm">Success Rate</p>
                    </div>
                </div>

            </div>

            
            <div class="relative">
                
                <div class="absolute -top-6 -left-6 w-full h-full bg-cyan-500 rounded-3xl opacity-20 blur-xl"></div>

                <div class="relative bg-white/10 backdrop-blur-lg p-4 rounded-3xl border border-white/10">
                    <img
                        src="https://images.pexels.com/photos/36765714/pexels-photo-36765714.jpeg"
                        alt="Consultancy Banner"
                        class="rounded-2xl w-full object-cover"
                    />
                </div>

              
                <div class="hidden md:block absolute -left-10 top-10 bg-white rounded-2xl shadow-xl p-4">
                    <p class="text-sm text-gray-500">Projects Completed</p>
                    <h4 class="text-2xl font-bold text-slate-800">1,250+</h4>
                </div>

              
                <div class="hidden md:block absolute -right-8 bottom-10 bg-white rounded-2xl shadow-xl p-4">
                    <p class="text-sm text-gray-500">Client Satisfaction</p>
                    <h4 class="text-2xl font-bold text-green-600">★★★★★</h4>
                </div>

            </div>

        </div>
    </div>
</section>

    </>
  )
}

export default App
