import React from 'react'
import images from '../asseds/images.png'
const SingleComplain = () => {
  return (
    <>
     <body className="bg-gray-700 text-gray-200">
  
  <main className="p-5">
    <h1 className="text-3xl font-bold text-yellow-400 text-center mb-10">Complaint Details</h1>

    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
   
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">realme 9 5g</h2>
          <span className="bg-green-200 text-black px-2 py-1 rounded text-sm">Pending</span>
        </div>
        <div className="flex space-x-5">
          <img src="https://rukminim2.flixcart.com/image/850/1000/l4fxh8w0/mobile/o/q/j/-original-imagfc55exgt8eey.jpeg?q=90&crop=false" alt="" className="w-32 h-32 rounded-lg"/>
          <p className="text-gray-300">
            <span className="font-bold">Description:</span> Please repair my phone ASAP! The screen is cracked and battery is draining quickly.
          </p>
        </div>
      </div>

     
      <div className="mt-6">
        <h3 className="text-xl font-bold text-yellow-400">Comments</h3>
        <div className="mt-4 space-y-4">
        
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-300"><span className="font-bold text-yellow-400">Me:</span> Please repair my phone as soon as possible!</p>
            <p className="text-sm text-gray-400 mt-1">Date: 09-12-2024 | 2:22 PM</p>
          </div>
      
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-300"><span className="font-bold text-yellow-400">Service Center:</span> We are working on it. Please wait.</p>
            <p className="text-sm text-gray-400 mt-1">Date: 09-12-2024 | 2:30 PM</p>
          </div>
        </div>

    
        <div className="mt-6">
          <textarea placeholder="Add a comment..." className="w-full p-2 bg-gray-700 rounded text-gray-200"></textarea>
          <div className="group">
            <button className="transition-all duration-150 w-full bg-yellow-400 text-black border-b-8 border-b-yellow-400 rounded-lg group-hover:border-b-0 group-hover:bg-yellow-600 group-hover:border-t-8 group-hover:border-t-yellow-600 group-hover:shadow-lg">
                <div className="p-1 bg-yellow-400 duration-150 rounded-lg group-hover:bg-700 font-medium">Comment</div>
            </button>
        </div>
        </div>
      </div>

     
      <div className="mt-8 flex justify-between">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded">Close Complaint</button>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded">Update Status</button>
      </div>
    </div>
  </main>
</body> 
    </>
  )
}

export default SingleComplain
