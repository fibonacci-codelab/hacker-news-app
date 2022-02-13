import logo from '../assets/images/logo.svg'
import Header from '../components/Header'
import React from 'react'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="Home" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center text-gray-400">
              <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
                <div className="flex md:flex-col justify-center items-center">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48 text-center"
                    src={logo}
                    alt="Man looking at item at a store"
                  />
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                    <p className="mt-2 text-gray-500">React + Typescript + Tailwind + Vite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </React.Fragment>
  )
}

export default App
