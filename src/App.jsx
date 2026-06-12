
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
    

    </>
  )
}

export default App
