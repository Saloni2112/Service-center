import React from 'react'
import { Link } from 'react-router-dom'

const MyComplain = () => {
  return (
    <>
      <body className="bg-gray-800 text-gray-200">
         
  <main className="p-5">
    <h1 className="text-3xl font-bold text-yellow-400 text-center mb-10">My Complaints</h1>

   
    <div className="overflow-x-scroll">
      <table className="table-auto w-full bg-gray-800 rounded-lg shadow-lg">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-4 py-2 text-left text-yellow-400">ID</th>
            <th className="px-4 py-2 text-left text-yellow-400">Date</th>
            <th className="px-4 py-2 text-left text-yellow-400">Phone</th>
            <th className="px-4 py-2 text-left text-yellow-400">Status</th>
            <th className="px-4 py-2 text-center text-yellow-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          
          <tr className="border-b border-gray-700">
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">09-12-2024</td>
            <td className="px-4 py-2">realme 9 5g</td>
            <td className="px-4 py-2">
              <span className="bg-green-200 text-black px-2 py-1 rounded text-sm">Pending</span>
            </td>
            <td className="px-4 py-2 text-center">
              <div className="group">
                <Link to={"/singlecomplain"} className="transition-all duration-150 w-full bg-yellow-400 text-black border-b-8 border-b-yellow-400 rounded-lg group-hover:border-b-0 group-hover:bg-yellow-600 group-hover:border-t-8 group-hover:border-t-yellow-600 group-hover:shadow-lg">
                    <div className="p-1 bg-yellow-400 duration-150 rounded-lg group-hover:bg-700 font-medium">view Details</div>
                </Link>
            </div>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </main>
</body>
    </>
  )
}

export default MyComplain
