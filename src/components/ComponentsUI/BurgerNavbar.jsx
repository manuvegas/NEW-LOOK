import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../UI/sheet";
import { Link } from "react-router-dom";
import Products from "../ComponentsUI/Products";

const BurgerNavbar = () => {
  return (
    <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu  className="h-7 w-7" />
        </SheetTrigger>
        <SheetContent className="bg-[#060606] border-none">
          <SheetHeader>
            <SheetDescription>
              <div className='flex flex-col gap-2 font-bold mt-10 text-lg '>
                <Link to="/" >INICIO</Link>
                <Products/>
                <Link to="/Cambios">CAMBIOS</Link>
                <Link to="/PregFrecuentes">PREGUNTAS FRECUENTES</Link>
                <Link to="/ComoComprar">COMO COMPRAR</Link>
                <Link to="/Xmayor">VENTAS X MAYOR</Link>
                <Link to="/Origins">ORIGINS NEW-LOOK</Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
  )
}

export default BurgerNavbar