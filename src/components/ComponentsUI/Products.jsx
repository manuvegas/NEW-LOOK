import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../UI/sheet";

import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="sm:text-left">
          <h1>PRODUCTOS</h1>
        </SheetTrigger>
        <SheetContent className="bg-[#060606] border-none">
          <SheetHeader>
            <SheetTitle>
              <div className="flex justify-center mt-8">
                <h1 className="text-white text-xl font-bold">PRODUCTOS</h1>
              </div>
            </SheetTitle>
            <SheetDescription>
              <div className=" sm:w-2/4 md:w-2/4 top-0 right-0 h-full lg:w-1/4 z-50">
                <div className=" flex flex-col h-full">
                  <div className="mt-2 flex flex-col items-start mx-5 gap-5 rounded-lg">
                    <div>
                      <Link
                        to=""
                        className=" flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
                      >
                        <img
                          src="../img(remeras)/remera2.jpeg"
                          alt="REMERA"
                          className="w-14 h-auto"
                        />
                        <li className="text-white cursor-pointer flex flex-col">
                          <h1 className="text-lg font-bold">REMERAS</h1>
                        </li>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to=""
                        className="flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
                      >
                        <img
                          src="../img(buzos)/buzo4.jpeg"
                          alt="REMERA"
                          className="w-14 h-auto"
                        />
                        <li className="text-white cursor-pointer flex flex-col hover:text-gray-300">
                          <h1 className="text-lg font-bold ">BUZOS</h1>
                        </li>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to=""
                        className="flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
                      >
                        <img
                          src="../img(joggins)/joggin6.jpeg"
                          alt="REMERA"
                          className="w-14 h-auto"
                        />
                        <li className="text-white cursor-pointer flex flex-col hover:text-gray-300">
                          <h1 className="text-lg font-bold ">JOGGINS</h1>
                        </li>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to=""
                        className="flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
                      >
                        <img
                          src="../bermudas/bermuda6.jpeg"
                          alt="REMERA"
                          className="w-14 h-auto"
                        />
                        <li className="text-white cursor-pointer flex flex-col hover:text-gray-300">
                          <h1 className="text-lg font-bold">BERMUDAS</h1>
                        </li>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Products;
