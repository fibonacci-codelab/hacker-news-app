import React from 'react'
import Header from '../components/Header'

const About: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="About" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center text-gray-400">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="p-8">
                    <p className="mt-2 text-gray-500">
                      Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to
                      find your first customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default About
