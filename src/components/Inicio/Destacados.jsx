import React from 'react'
import Card from '../Cards/Card'

const Destacados = () => {
  return (
    <div className='mt-5'>
      <h1 className='font-bold text-lg text-center'>DESTACADOS</h1>
      <div className='contenedor '>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      
    </div>
  )
}

export default Destacados