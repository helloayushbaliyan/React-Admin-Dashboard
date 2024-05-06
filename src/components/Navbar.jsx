import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Togglebtn from './Togglebtn'

export default function Navbar(props) {
  const sidebtn = () => {

    let removeslidebtn = document.querySelector("#logoscn").classList.remove("left-[-100%]")
    let addslidebtn = document.querySelector("#logoscn").classList.add("left-[0%]")
    let sides = document.querySelector("#logoscn").classList.add("side-btn")
    setslider(slider)
  }

  return (
    <>
      <div className="bg-[#24303f] h-[5rem] w-full ">
        <div className="flex justify-between flex-grow px-5 py-4">
          <div className="flex lg:hidden space-x-3">
            <div className="">
              <button
                onClick={sidebtn}>
                <svg class="w-9 h-9 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
                </svg>
              </button>
            </div>
            <div className="">
              <img src="https://demo.tailadmin.com/src/images/logo/logo-icon.svg" alt="" />
            </div>

          </div>
          <div className="hidden sm:block relative ">
            <input className=' bg-transparent pl-10  lg:w-[20rem] outline-none mt-2' placeholder='Type To Search' type="text" />
            <div className=" absolute top-2">
              <svg class="w-6 h-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            </div>

          </div>
          <div className="flex space-x-6 mt-1">
            <div className="">
              <Togglebtn />
            </div>
            <div className="mt-1">
              <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.209 3.816a1 1 0 0 0-1.966.368l.325 1.74a5.338 5.338 0 0 0-2.8 5.762l.276 1.473.055.296c.258 1.374-.228 2.262-.63 2.998-.285.52-.527.964-.437 1.449.11.586.22 1.173.75 1.074l12.7-2.377c.528-.1.418-.685.308-1.27-.103-.564-.636-1.123-1.195-1.711-.606-.636-1.243-1.306-1.404-2.051-.233-1.085-.275-1.387-.303-1.587-.009-.063-.016-.117-.028-.182a5.338 5.338 0 0 0-5.353-4.39l-.298-1.592Z" />
                <path fill-rule="evenodd" d="M6.539 4.278a1 1 0 0 1 .07 1.412c-1.115 1.23-1.705 2.605-1.83 4.26a1 1 0 0 1-1.995-.15c.16-2.099.929-3.893 2.342-5.453a1 1 0 0 1 1.413-.069Z" clip-rule="evenodd" />
                <path d="M8.95 19.7c.7.8 1.7 1.3 2.8 1.3 1.6 0 2.9-1.1 3.3-2.5l-6.1 1.2Z" />
              </svg>
            </div>
            <div className="mt-1">
              <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className="flex space-x-3">
              <div className="flex space-x-3">
                <div className="lg:block hidden">
                  <h1 className='text-sm'>Ayush Baliyan</h1>
                  <h1 className='text-xs text-end text-slate-400'>Ux developer</h1>
                </div>
                <img className='lg:w-12 ' src="https://demo.tailadmin.com/src/images/logo/logo-icon.svg" alt="image" />
              </div>
              <div className="mt-2">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
