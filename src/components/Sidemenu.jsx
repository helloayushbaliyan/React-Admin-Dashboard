import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Sidemenu() {
    const slide = () => {
        let removeslidebtn = document.querySelector("#logoscn").classList.add("left-[-100%]")
        let addslidebtn = document.querySelector("#logoscn").classList.remove("left-[0%]")
        let sides = document.querySelector("#logoscn").classList.add("side-btn")
        setslider(slider)
    }

    const dashboarditemslide = () => {
        let dasitemshow = document.querySelector("#dash-items").classList.toggle("hidden")
        let rotatebtn = document.querySelector("#dash-arrow-btn").classList.toggle("rotate-180")
    }

    const taskitemslide = () => {
        let dasitemshow = document.querySelector("#task-items").classList.toggle("hidden")
        let rotatebtn = document.querySelector("#task-arrow-btn").classList.toggle("rotate-180")
    }
    const formsitemsslide = () => {
        let dasitemshow = document.querySelector("#forms-items").classList.toggle("hidden")
        let rotatebtn = document.querySelector("#forms-arrow-btn").classList.toggle("rotate-180")
    }
    const tabelsitemslide = () => {
        let dasitemshow = document.querySelector("#tabels-items").classList.toggle("hidden")
        let rotatebtn = document.querySelector("#tabels-arrow-btn").classList.toggle("rotate-180")
    }
    const pagesitemslide = () => {
        let dasitemshow = document.querySelector("#pages-items").classList.toggle("hidden")
        let rotatebtn = document.querySelector("#pages-arrow-btn").classList.toggle("rotate-180")
    }

    return (
        <>
            <div id='logoscn'
                className=" fixed z-40  lg:relative left-[-100%]  lg:left-0 max-w-[20rem] bg-[#24303f] w-[18rem] lg:w-[22rem]  lg:px-5 h-screen overflow-x-hidden overflow-scroll pt-4">
                <div className="">
                    <div className="flex  bg-[#24303f] w-full z-30 justify-between px-4">
                        <div className="flex">
                            <img src="https://demo.tailadmin.com/src/images/logo/logo.svg" alt="" />
                        </div>
                        <div className="">
                            <button
                                className='lg:hidden'
                                onClick={slide} >
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>



                <div id='dashboard-scn' className="mt-[4rem] w-full lg:w-full flex flex-col justify-center text-white px-4 lg:px-0">
                    <h1 className='text-slate-400 font-medium uppercase mb-3 text-sm'>menu</h1>
                    <div className="space-y-2">
                        <div className="dashboard-scn">
                            <div
                                id='dash-board'
                                onClick={dashboarditemslide}
                                className="bg-gray-700 flex justify-between  bg-opacity-90 px-4 py-2">
                                <div className="flex space-x-4">
                                    <svg class="w-6 h-6 text-gray-800 mt-[2px] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd" />
                                    </svg>
                                    <h1>Dashboard</h1>
                                </div>
                                <div
                                    id='dash-arrow-btn'
                                    className="">
                                    <svg class="w-5 h-5F text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" />
                                    </svg>
                                </div>

                            </div>
                            <div
                                id='dash-items'
                                className=" hidden text-md text-slate-300 py-4 space-y-3  bg-opacity90 ">
                                <div className="e-commerce">
                                    <NavLink to="/">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem]">
                                            <h1 className='mt-1 text-white'>ecommerce</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/analytics">
                                        <div className=" hover:bg-opacity-80   flex justify-between hover:text-white pr-4 pl-[3.29rem]">
                                            <h1 className='mt-1'>Analytics</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to='/marketing'>
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>Marketing</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/crm">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>CRM</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/stocks">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>Stocks</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>

                                </div>
                            </div>
                        </div>

                        <div className="calender-scn">
                            <div
                                id='calender'

                                className="hover:bg-gray-700 flex justify-between  bg-opacity-90 px-4 py-2">
                                <NavLink>
                                    <div className="flex space-x-4">
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M6 5V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v2H3V7a2 2 0 0 1 2-2h1ZM3 19v-8h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm5-6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" clip-rule="evenodd" />
                                        </svg>

                                        <h1>Calendar</h1>
                                    </div>
                                </NavLink>


                            </div>
                        </div>
                        <div className="profile-scn">
                            <div
                                id='calender'

                                className="hover:bg-gray-700 flex justify-between  bg-opacity-90 px-4 py-2">
                                <NavLink>
                                    <div className="flex space-x-4">
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd" />
                                        </svg>


                                        <h1>Profile</h1>
                                    </div>
                                </NavLink>


                            </div>
                        </div>
                        <div className="task-scn">
                            <div
                                id='task'
                                onClick={taskitemslide}
                                className="hover:bg-gray-700 flex justify-between  bg-opacity-90 px-4 py-2">
                                <div className="flex space-x-4">
                                    <svg class="w-6 h-6 text-gray-800 mt-[2px] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd" />
                                    </svg>
                                    <h1>Task</h1>
                                </div>
                                <div
                                    id='task-arrow-btn'
                                    className="">
                                    <svg class="w-5 h-5F text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" />
                                    </svg>
                                </div>

                            </div>
                            <div
                                id='task-items'
                                className=" hidden text-md text-slate-300 py-4 space-y-3  bg-opacity90 ">
                                <div className="e-commerce">
                                    <NavLink to="/">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem]">
                                            <h1 className='mt-1 text-white'>ecommerce</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/demo">
                                        <div className=" hover:bg-opacity-80   flex justify-between hover:text-white pr-4 pl-[3.29rem]">
                                            <h1 className='mt-1'>Analytics</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to='/marketing'>
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>Marketing</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/crm">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>CRM</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/stocks">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>Stocks</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                        <div className="form-scn">
                            <div
                                id='task'
                                onClick={formsitemsslide}
                                className="hover:bg-gray-700 flex justify-between  bg-opacity-90 px-4 py-2">
                                <div className="flex space-x-4">
                                    <svg class="w-6 h-6 text-gray-800 mt-[2px] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd" />
                                    </svg>
                                    <h1>forms</h1>
                                </div>
                                <div
                                    id='forms-arrow-btn'
                                    className="">
                                    <svg class="w-5 h-5F text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" />
                                    </svg>
                                </div>

                            </div>
                            <div
                                id='forms-items'
                                className=" hidden text-md text-slate-300 py-4 space-y-3  bg-opacity90 ">
                                <div className="e-commerce">
                                    <NavLink to="/">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem]">
                                            <h1 className='mt-1 text-white'>ecommerce</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/demo">
                                        <div className=" hover:bg-opacity-80   flex justify-between hover:text-white pr-4 pl-[3.29rem]">
                                            <h1 className='mt-1'>Analytics</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to='/marketing'>
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>Marketing</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/crm">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>CRM</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/stocks">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>Stocks</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>

                                </div>
                            </div>
                        </div><div className="Tabels-scn">
                            <div
                                id='task'
                                onClick={tabelsitemslide}
                                className="hover:bg-gray-700 flex justify-between  bg-opacity-90 px-4 py-2">
                                <div className="flex space-x-4">
                                    <svg class="w-6 h-6 text-gray-800 mt-[2px] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd" />
                                    </svg>
                                    <h1>Tabels</h1>
                                </div>
                                <div
                                    id='tabels-arrow-btn'
                                    className="">
                                    <svg class="w-5 h-5F text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" />
                                    </svg>
                                </div>

                            </div>
                            <div
                                id='tabels-items'
                                className=" hidden text-md text-slate-300 py-4 space-y-3  bg-opacity90 ">
                                <div className="e-commerce">
                                    <NavLink to="/">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem]">
                                            <h1 className='mt-1 text-white'>ecommerce</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/demo">
                                        <div className=" hover:bg-opacity-80   flex justify-between hover:text-white pr-4 pl-[3.29rem]">
                                            <h1 className='mt-1'>Analytics</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to='/marketing'>
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>Marketing</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/crm">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>CRM</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/stocks">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>Stocks</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>

                                </div>
                            </div>
                        </div><div className="pages-scn">
                            <div
                                id='task'
                                onClick={pagesitemslide}
                                className="hover:bg-gray-700 flex justify-between  bg-opacity-90 px-4 py-2">
                                <div className="flex space-x-4">
                                    <svg class="w-6 h-6 text-gray-800 mt-[2px] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd" />
                                    </svg>
                                    <h1>Pages</h1>
                                </div>
                                <div
                                    id='pages-arrow-btn'
                                    className="">
                                    <svg class="w-5 h-5F text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" />
                                    </svg>
                                </div>

                            </div>
                            <div
                                id='pages-items'
                                className=" hidden text-md text-slate-300 py-4 space-y-3  bg-opacity90 ">
                                <div className="e-commerce">
                                    <NavLink to="/">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem]">
                                            <h1 className='mt-1 text-white'>ecommerce</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/demo">
                                        <div className=" hover:bg-opacity-80   flex justify-between hover:text-white pr-4 pl-[3.29rem]">
                                            <h1 className='mt-1'>Analytics</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to='/marketing'>
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>Marketing</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/crm">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>CRM</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="">
                                    <NavLink to="/stocks">
                                        <div className=" hover:bg-opacity-80   flex justify-between pr-4 pl-[3.29rem] hover:text-white">
                                            <h1 className='mt-1'>Stocks</h1>
                                            <h1 className='bg-blue-700 text-sm text-white px-2 py-1 rounded-lg'>Pro</h1>
                                        </div>
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
