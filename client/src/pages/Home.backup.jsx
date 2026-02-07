import React from 'react'

const Home = () => {
  return (
    // 
    <div className="relative w-full rounded-md overflow-hidden">
      {/* Background image */}
      <img
        src="/rimage3.webp"
        alt="house image"
        className="w-full h-[800px] object-cover rounded-md"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Card content */}
      {/* <div className="absolute inset-0 flex items-center z-10 ml-30 top-10">
     <div className="bg-blue-900 p-6 rounded-md shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900">
        Browse The Top Modern Modular Homes
      </h1>
     </div>
     </div> */}
      {/* <div className="absolute top-0 left-[120px] z-10 h-full">
        <div className="bg-blue-950 p-6 rounded-md shadow-lg">
          <h1 className="mt-[200px] text-6xl  text-white">
            Browse The Top
          </h1>
          <h1 className='text-6xl text-yellow-600'>
            Modern Modular
          </h1>
          <h1 className='text-6xl text-white'>
            Homes
          </h1>
          <span className='pt-6 block text-white text-2xl'>
            Lorem ipsum dolor sit amet, consectetur  <br />
            incididunt ut labore et dolore magna al
          </span>
        </div>
      </div> */}
      <div className="absolute top-0 left-[120px] z-10 h-[800px]">
        <div className="bg-blue-950 p-6 rounded-md shadow-lg h-full flex flex-col justify-center">
          <h1 className="text-6xl text-white">Browse The Top</h1>
          <h1 className="text-6xl text-yellow-600">Modern Modular</h1>
          <h1 className="text-6xl text-white">Homes</h1>
          <span className="pt-6 block text-white text-2xl">
            Lorem ipsum dolor sit amet, consectetur <br />
            incididunt ut labore et dolore magna al
          </span>
        </div>
      </div>


    </div>

  )
}

export default Home
