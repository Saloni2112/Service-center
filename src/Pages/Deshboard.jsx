import React from 'react'
import { Link } from 'react-router-dom'


const Deshboard = () => {
  return (
    <body className="bg-gray-800 text-gray-200">

 
 


  <main className="flex flex-col items-center justify-center min-h-screen p-5">
    <h1 className="text-3xl font-bold text-yellow-400 mb-10">Dashboard</h1>
    <div className="space-y-5 w-full max-w-md flex-col">
      <button className="w-full bg-gray-700 text-yellow-400 py-3 rounded shadow-lg hover:bg-gray-900"><Link to={"/mycomplain"} >My Complaints</Link></button>
      <button  className="w-full bg-gray-700 text-yellow-400 py-3 rounded shadow-lg hover:bg-gray-900"><Link to={"/newcomplain"}>Raise New Complaints</Link></button>
    </div>
  </main>
</body>
  )
}

export default Deshboard
