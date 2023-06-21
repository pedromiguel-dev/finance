import React from 'react'
import { useNavigate } from "react-router-dom";


import { Outlet } from 'react-router-dom'

export default function Layout() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col-reverse h-screen'>
        <aside className='flex h-20 z-10
            bg-gray-700 text-white
            justify-center items-center
        '>
            <div className="h-full w-1 bg-gray-50 "></div>
            <button
            onClick={() =>  navigate('/estoque')} 
            className='
            hover:bg-gray-400 hover:text-gray-700
            transition duration-200 ease-in-out
              h-full w-40
              
            '>
                Estoque
            </button>
            <div className="h-full w-1 bg-gray-50 "></div>
            <button 
            onClick={() => navigate('/') } 
            className='
            hover:bg-gray-400 hover:text-gray-700
            transition duration-200 ease-in-out
              h-full w-40
              
            '>
                Adicionar
            </button>
            <div className="h-full w-1 bg-gray-50 "></div>
        </aside>
        <div className="div h-full w-100 overflow-auto">
            <Outlet />
        </div>
    </div>
  )
}
