import React from "react";
import { IoCartSharp } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/UI/Sheet";

const ShoppingCart = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <IoCartSharp className="w-5 h-5 sm:h-6 sm:w-6"/>
        </SheetTrigger>
        <SheetContent className="bg-[#060606] border-none">
          <SheetHeader>
            <SheetTitle>
              <div className="flex justify-center mt-8">
                <h1 className="text-white text-lg font-bold">
                  CARRITO DE COMPRAS
                </h1>
              </div>
            </SheetTitle>
            <SheetDescription>
              <p className="text-center mt-5 text-sm">EL CARRITO ESTA VACIO.</p>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ShoppingCart;