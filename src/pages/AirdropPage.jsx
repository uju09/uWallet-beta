import React, { useState } from 'react'
import { Sidebar } from "../features/dashboard"
import { AirdropPortal } from "../features/airdrop"

const AirdropPage = () => {
  const [airState, setAirState] = useState("portal");



  return (
    <div className="min-h-screen bg-[#050807] text-white">
      <Sidebar />
      <div className='lg:ml-64 min-h-screen flex justify-center items-center p-2 sm:p-6 lg:p-8'>
        <div className="w-full max-w-4xl mx-auto flex justify-center">
          <AirdropPortal />
        </div>
      </div>
    </div>
  )
}

export default AirdropPage