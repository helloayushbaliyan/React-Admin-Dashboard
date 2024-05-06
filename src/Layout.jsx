import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidemenu from './components/Sidemenu'
import Navbar from './components/Navbar'
export default function Layout() {

    return (
        <>
            <div className="flex max-w-[100%] max-h-[100vh] text-white">
                <Sidemenu />
                <div className=" bg-slate-900 w-full h-screen overflow-x-hidden overflow-scroll">
                    <Navbar />
                    <div className="my-5">
                        <Outlet />
                    </div>
                    <h1></h1>
                </div>
            </div>
        </>
    )
}
