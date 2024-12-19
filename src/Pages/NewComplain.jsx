import React from 'react'
import images from '../asseds/images.png'
const NewComplain = () => {
  return (
    <>
      <body className="bg-gray-700 text-gray-200">

 
  <main className="flex flex-col items-center justify-center min-h-screen p-5">
    <h1 className="text-3xl font-bold text-yellow-400 mb-10">Raise New Complaint</h1>
    <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg space-y-5">
      <div>
        <label for="name" className="block mb-2 text-sm text-yellow-400">Name</label>
        <input type="text" id="name" placeholder="Your Name" className="w-full p-2 bg-gray-700 rounded text-gray-200"/>
      </div>
      <div>
        <label for="email" className="block mb-2 text-sm text-yellow-400">Email</label>
        <input type="email" id="email" placeholder="Your Email" className="w-full p-2 bg-gray-700 rounded text-gray-200"/>
      </div>
      <div>
        <label for="device" className="block mb-2 text-sm text-yellow-400">Select Device</label>
        <select id="device" className="w-full p-2 bg-gray-700 rounded text-gray-200">
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="tablet">Tablet</option>
        </select>
      </div>
      <div>
        <label for="description" className="block mb-2 text-sm text-yellow-400">Description</label>
        <textarea id="description" placeholder="Describe your issue" className="w-full p-2 bg-gray-700 rounded text-gray-200"></textarea>
      </div>
      <div>
        <label className="block mb-2 text-sm text-yellow-400">Upload  Image / Video</label>
        <input  className="w-full bg-gray-700 text-gray-200"/>
      </div>
      <button type="submit" className="w-full bg-yellow-400 text-black py-2 rounded">Raise My Complaint</button>
    </form>
  </main>
</body>
    </>
  )
}

export default NewComplain
