import React from 'react'
import {Button} from "@nextui-org/react";

const ButtonUI = ({ children,className,onClick}) => {
  return (
    <div className=''>
    <Button color="secondary" className={className} onClick={onClick}>
    { children}
  </Button></div>
  )
}

export default ButtonUI