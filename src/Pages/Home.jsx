import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
     
<div className="min-h-screen bg-white ">

<div className="min-h-96   flex bg-gray-700 items-center justify-center">
    <div
      className="flex flex-col m-8  bg-[#fcc428]  shadow-2xl rounded-2xl md:flex-row w-full">
   
      <div className="p-10 md:p-20">
       
        <h2 className="italic font-bold mb-5 flex items-center justify-center text-4xl text-gray-800">Realme Service Center Expert Care for Your Realme Devices</h2>
        <h2 className="max-w-sm mb-12 font-sans  font-medium text-gray-800">Welcome to the Realme Service Center, your one-stop solution for all Realme devices. Our dedicated team ensures your smartphone, wearable, or accessory is always in top-notch condition.</h2>
       
        <div
          className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
          <Link to={"/deshboard"}
            className="w-full bg-gray-900 md:w-full flex justify-center items-center p-3 space-x-4 font-sans font-bold text-[#fcc428] rounded-md px-9 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg transition hover:-translate-y-0.5 duration-150">
            <span className='font italic text-2xl font-medium'>Complaint</span>
          </Link>
          
        </div>
       
        <div className="mt-12 border-b border-b-gray-900"></div>
      </div>
    
      <img src="https://i.pinimg.com/736x/b3/33/a0/b333a07c9fd30b56e895cb34d58977e9.jpg"  className="w-[600px] flex  p-5  w-100 h-full object-cover" alt=""/>
    </div>
  </div>

  
  <div className="min-h-60 bg-gray-900">
   
<div className="p-10 text-gray-400">
  <h2 className='text-gray-300 flex  items-center justify-center font-bold font italic text-3xl '>Services We Offer</h2>
 
  </div>
  <div  className="p-5 text-gray-400 flex items-center justify-center">
  <ul className='hidden md:block'>
  <h2 className='pb-4 font-medium px-5 '><p className='font-bold italic text-lg text-yellow-400'>😊Smartphone Repair:</p> Screen replacements, battery issues, software updates, and more.</h2>
  <h2 className='py-2 font-medium px-5'><p className='font-bold italic text-lg text-yellow-400'>😊Accessories Replacement:</p> Chargers, earphones, and other accessories.</h2>
  <h2 className='py-2 font-medium px-5'><p className='font-bold italic text-lg text-yellow-400'>😊Software Assistance:</p> Updates, troubleshooting, and optimizations.</h2>
 <h2 className='py-2 font-medium px-5'><p className='font-bold italic text-lg text-yellow-400'>😊Diagnostic Services:</p> Comprehensive health check-ups for your device.</h2>
 <h2 className='py-2 font-medium px-5'><p className='font-bold italic text-lg text-yellow-400'>😊Water Damage Repair:</p> Specialized cleaning and restoration services for devices damaged by water or other liquids.</h2>
 <h2 className='py-2 font-medium px-5'><p className='font-bold italic text-lg text-yellow-400'>😊Camera Repair & Replacement:</p> Fix issues with front or rear cameras, including blurry images or hardware malfunctions.</h2>
  </ul>
 <ul>
 <h2 className='py-2 font-medium px-5'><p className='font-bold italic text-lg text-yellow-400'>😊Charging Port Repair:</p> Resolve charging issues, whether it's a loose port, non-functional adapter, or slow charging.</h2>
 <h2 className='py-2 font-medium px-5'><p className='font-bold italic text-lg text-yellow-400'>😊Microphone & Speaker Repair:</p> Fix sound-related issues like low volume, distorted audio, or non-functional speakers/microphones.</h2>
 <h2 className='py-2 font-medium px-5'><p className='font-bold italic text-lg text-yellow-400'>😊Software Installation & Optimization:</p> Install necessary apps, remove malware, and optimize system performance.</h2>
 <h2 className='py-2 font-medium px-5'><p className='font-bold italic text-lg text-yellow-400'>😊Screen Protector Installation:</p>Professional installation of tempered glass or screen protectors for enhanced durability.</h2>
 <h2 className='py-2 font-medium px-5'><p className='font-bold italic text-lg text-yellow-400'>😊Battery Replacement:</p> Replace old or faulty batteries with genuine Realme batteries for optimal performance.</h2>
 <h2 className='py-2 font-medium px-5'><p className='font-bold italic text-lg text-yellow-400'>😊Warranty Extensions:</p>Assistance in extending the warranty period for your Realme device.</h2>
 </ul>
 
 
 
 
 
 
 </div>
    
  </div>



 

    <div className="flex flex-col  items-center justify-center min-h-80 bg-gray-900">
       
       
        <div className="w-full p-5 text-gray-300 font-bold text-4xl flex items-center justify-center italic pt-3 mt-3">Our Pricing</div>
        <div
          className="flex min-h-full flex-col md:px-20 md:flex-row px-10 py-5 md:gap-20 space-y-4 md:space-y-0 md:my-10 items-center justify-between "
        >
        
        
           
          <div className="w-60 min-h-40 hover:Shadow-lg hover:shadow-amber-400  rounded-xl text-black hover:bg-opacity-90 hover:shadow-lg  transition hover:-translate-y-0.5 duration-150">
           
            <div className="bg-[#fcc428] p-8  rounded-xl">
              <div className="text-center font-bold text-xl uppercase">Phone service at your door step</div>
              <h2 className="mt-5 font-serif text-sm text-center">Pick and Drop @ just Rs 199</h2>
              <h2 className="m-5 font-serif text-sm text-center">Drop Service @ just Rs 99</h2>
              <div className="group">
                <button className="transition-all duration-150 w-full bg-gray-900 text-[#fcc428] border-b-8 border-b-gray-900 rounded-lg group-hover:border-b-0 group-hover:bg-gray-900 group-hover:border-t-8 group-hover:border-t-gray-700 group-hover:shadow-lg">
                    <div className="p-2 bg-gray-900 duration-150 rounded-lg group-hover:bg-900 font-medium">Book Now</div>
                </button>
            </div>
            </div>
  
              </div>
            
         
       
          <div className="w-60 min-h-40 hover:Shadow-lg hover:shadow-amber-400 rounded-xl text-blacl hover:bg-opacity-90 hover:shadow-lg  transition hover:-translate-y-0.5 duration-150">
       
            <div className="bg-[#fcc428] p-8  rounded-xl">
              <div className="text-center font-bold text-xl uppercase">Phone service at your door step</div>
              <h2 className="mt-5 font-serif text-sm text-center">Pick and Drop @ just Rs 199</h2>
              <h2 className="m-5 font-serif text-sm text-center">Drop Service @ just Rs 99</h2>
             
              <div className="group">
                <button className="transition-all duration-150 w-full bg-gray-900 text-[#fcc428] border-b-8 border-b-gray-900 rounded-lg group-hover:border-b-0 group-hover:bg-gray-900 group-hover:border-t-8 group-hover:border-t-gray-700 group-hover:shadow-lg">
                    <div className="p-2 bg-gray-900 duration-150 rounded-lg group-hover:bg-900 font-medium">Book Now</div>
                </button>
            </div>
            </div>
  
              </div>
          
          <div className="w-60 min-h-40 hover:Shadow-lg hover:shadow-amber-400 rounded-xl text-black hover:bg-opacity-90 hover:shadow-lg  transition hover:-translate-y-0.5 duration-150">
         
            <div className="bg-[#fcc428] p-8  rounded-xl">
              <div className="text-center font-bold text-xl uppercase">Phone service at your door step</div>
              <h2 className="mt-5 font-serif text-sm text-center">Pick and Drop @ just Rs 199</h2>
              <h2 className="m-5 font-serif text-sm text-center">Drop Service @ just Rs 99</h2>
              <div className="group">
                <button className="transition-all duration-150 w-full bg-gray-900 text-[#fcc428] border-b-8 border-b-gray-900 rounded-lg group-hover:border-b-0 group-hover:bg-gray-900 group-hover:border-t-8 group-hover:border-t-gray-700 group-hover:shadow-lg">
                    <div className="p-2 bg-gray-900 duration-150 rounded-lg group-hover:bg-900 font-medium">Book Now</div>
                </button>
            </div>
            </div>
  
              </div>
         </div>
        </div>
            
 
  <div className="min-h-60 bg-gray-900">
    <div className="text-gray-200 font-bold italic text-4xl flex items-center justify-center p-3 ">Connect With us</div>
   
    <div className="min-h-80 md:w-full flex bg-gray-900 items-center justify-center">
        <div
          className="flex flex-col m-10  bg-[#fcc428]  shadow-2xl rounded-2xl md:flex-row  ">
        
          <div className="p-8 md:p-8">
          
           <input placeholder="Enter Your Name" className="bg-gray-700 p-2 rounded-md w-full mb-2 " type="text"/>
           <input placeholder="Enter Your Email" className="bg-gray-700 p-2 rounded-md w-full mb-2" type="text"/>
           <input placeholder="Text area" className="bg-gray-700 p-2 rounded-md w-full min-h-20 text-center " type="text"/>
          
            <div
              className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
              <button
                className="w-full bg-gray-900 md:w-full flex  justify-center items-center p-3 space-x-4 font-sans font-bold text-[#fcc428] rounded-md px-9  hover:bg-opacity-90 shadow-sm hover:shadow-lg transition hover:-translate-y-0.5 duration-150">
                <span>Submit</span>
              </button>
            </div>
           
          </div>
        
        
            <img src="https://content3.jdmagicbox.com/comp/indore/f4/0731px731.x731.220502224227.e8f4/catalogue/realme-exclusive-service-center-indore-mobile-phone-repair-and-services-6If18sbCGY.jpg"  className="w-[500px] flex w-100 h-full object-cover p-5 hidden md:block" alt=""/>
        </div>
      </div>



    
  </div>
  
 
      

<footer className="bg-gray-700">
<div className="mx-auto w-full max-w-screen-xl">
<div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
  <div>
      <h2 className="mb-6 text-sm font-semibold text-[#fcc428] uppercase">Products</h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
              <a href="#" className=" hover:underline">Realme Phones</a>
          </li>
          <li className="mb-4">
              <a href="#" className="hover:underline">NARZO Phones</a>
          </li>
          <li className="mb-4">
              <a href="#" className="hover:underline">Smartwatch</a>
          </li>
          <li className="mb-4">
              <a href="#" className="hover:underline">Buds</a>
          </li>
      </ul>
  </div>
  <div>
      <h2 className="mb-6 text-sm font-semibold text-[#fcc428] uppercase">Help center</h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
              <a href="#" className="hover:underline">FAQ</a>
          </li>
          <li className="mb-4">
              <a href="#" className="hover:underline">User Guide</a>
          </li>
          <li className="mb-4">
              <a href="#" className="hover:underline">Service Center</a>
          </li>
          <li className="mb-4">
              <a href="#" className="hover:underline">Contact Us</a>
          </li>
      </ul>
  </div>
  <div>
      <h2 className="mb-6 text-sm font-semibold text-[#fcc428] uppercase">About realme</h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
              <a href="#" className="hover:underline">Our Brand</a>
          </li>
          <li className="mb-4">
              <a href="#" className="hover:underline">Community</a>
          </li>
          <li className="mb-4">
              <a href="#" className="hover:underline">Retail Store</a>
          </li>
        
      </ul>
  </div>

  <div>
      <h2 className='mb-6 text-sm font-semibold text-[#fcc428] uppercase'>Locate your nearest Realme Service Center</h2>
      <ul className="text-gray-400 font-medium ">
          <li className="mb-4">
             <p className="hover:underline">Visit our official website and use the Service Center Locator.</p>
          </li>
          <li className="mb-4">
              <a href="#" className="hover:underline">Contact us at 1800-102-2777 (Toll-Free) for guidance</a>
          </li>
          <li className="mb-4">
              <a href="#" className="hover:underline">Email us at service@realme.com for querie</a>
          </li>
        
      </ul>
  </div>

</div>
<div className="px-4 py-6 bg-gray-900  md:flex md:items-center md:justify-between">
  <span className="text-sm text-[#fcc428]  sm:text-center">© <a href="https://flowbite.com/">Realme</a>. All Rights Reserved.
  </span>
  <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 ">
      <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-[#fcc428]">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
              </svg>
            <span className="sr-only">Facebook page</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-[#fcc428]">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
              </svg>
            <span className="sr-only">Discord community</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-[#fcc428]">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
              <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
          </svg>
            <span className="sr-only">Twitter page</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-[#fcc428]">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
            </svg>
            <span className="sr-only">GitHub account</span>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-[#fcc428]">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
          </svg>
            <span className="sr-only">Dribbble account</span>
        </a>
  </div>
</div>
</div>
</footer>


 
  </div>
    
 
    </>
     
  )
}

export default Home
