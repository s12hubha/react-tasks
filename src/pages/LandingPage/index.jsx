import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate= useNavigate()
  return (
    <div className='flex justify-end gap-1 py-2 px-4 bg-gradient-to-r from-slate-300 to-slate-500'>
        <button onClick={()=>navigate("/home")} className='btn-primary p-2 px-3 rounded-lg '>Login</button>
        <button onClick={()=>navigate("/sign-up")}className='btn p-2 px-3 rounded-lg'>Sign Up</button>
    </div>
  )
}

export default LandingPage