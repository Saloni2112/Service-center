import React from 'react'

const Register = () => {
  return (
    <>
      <body className="bg-gray-900 text-gray-200">
  <div className="flex justify-center items-center min-h-screen">
   {/* {form section} */}
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">Register</h2>
      <form className="space-y-5">
        <div>
          <label for="name" className="block text-sm text-yellow-400">Name</label>
          <input type="text" id="name" placeholder="Your Name" className="w-full p-2 bg-gray-700 rounded text-gray-200"/>
        </div>
        <div>
          <label for="email" className="block text-sm text-yellow-400">Email</label>
          <input type="email" id="email" placeholder="Your Email" className="w-full p-2 bg-gray-700 rounded text-gray-200"/>
        </div>
        <div>
          <label for="password" className="block text-sm text-yellow-400">Password</label>
          <input type="password" id="password" placeholder="Password" className="w-full p-2 bg-gray-700 rounded text-gray-200"/>
        </div>
        <div>
          <label for="confirm-password" className="block text-sm text-yellow-400">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm Password" className="w-full p-2 bg-gray-700 rounded text-gray-200"/>
        </div>
        <div className="group">
          <button className="transition-all duration-150 w-full bg-yellow-400 text-black border-b-8 border-b-yellow-400 rounded-lg group-hover:border-b-0 group-hover:bg-yellow-600 group-hover:border-t-8 group-hover:border-t-yellow-600 group-hover:shadow-lg">
              <div className="p-1 bg-yellow-400 duration-150 rounded-lg group-hover:bg-700 font-medium">Register</div>
          </button>
      </div>
      </form>
    </div>

    <div className="hidden md:flex items-center justify-center ">
      <img src="  https://vipdental.in/vipadmin/vipdental/web/images/107385-login.gif" alt="" className=" m-5 w-[500px] rounded-lg shadow-lg"/>
    </div>
  </div>
</body>
    </>
  
  )
}

export default Register
