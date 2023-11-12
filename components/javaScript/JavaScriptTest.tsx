import React from 'react'

const second = () => {
  return (
    <div className="w-full max-w-[570px] rounded-[20px] backdrop-blur-md py-12 px-8 text-center md:py-[60px] md:px-[70px]">
    <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">Your Message Sent Successfully</h3>
    <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
    <p className="text-gray-400 mb-10 text-base leading-relaxed">Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    <div className="flex flex-wrap gap-3">
        <button className="text-white block w-full rounded-lg border border-gray-700 p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">Cancel</button>
        <button className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">View Details</button>
    </div>
  </div>
  
  )
}

export default second
