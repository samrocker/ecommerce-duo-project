import React from 'react'

const Hero = () => {
  return (
    <section>
      <main className='max-w-[1380px] m-auto'>
        <div className='h-screen w-full flex-between flex-col p-1'>
          <div className='flex-[1] w-full flex items-start justify-center flex-col px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl'>
          <h1 className='text-2xl font-bold text-white'>All Departments</h1>
          <p>Total 1000</p>
          </div>  
          <div className='flex-[10] flex-start px-5'></div>
        </div>
      </main>
    </section>
  )
}

export default Hero