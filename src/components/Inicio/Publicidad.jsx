import React from 'react'
import { Link } from 'react-router-dom'


const Publicidad = () => {
  return (
    <div className=''>
      <img src="../UI/Presentacion.png" alt="Presentacion" className='w-full h-full object-cover'/>
      <div className='flex justify-between pt-5 gap-5'>
        <Link to="/NewIn">
        <img src="../UI/1.png" alt="New in" className='w-full object-cover h-full'/>
        </Link>
        <Link to="/Sale">
        <img src="../UI/2.png" alt="Sale" className='w-full object-cover h-full'/>
        </Link>
      </div>
    </div>
  )
}

export default Publicidad