import React from 'react'
import {Button} from "@nextui-org/react";

const ButtonUI = ({ children}) => {
  return (
    <Button color="primary" className='text-white'>
    { children}
  </Button>
  )
}

export default ButtonUI