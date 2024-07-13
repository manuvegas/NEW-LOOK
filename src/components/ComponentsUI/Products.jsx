import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "../UI/sheet";

import { Link, useParams } from "react-router-dom";

const Products = ({ className }) => {
  const { categoria } = useParams();
  return (
    <>
      <Sheet>
        <SheetTrigger className={`sm:text-left ${className}`}>
          <h1>PRODUCTOS</h1>
        </SheetTrigger>
        <SheetContent className="bg-[#060606] border-none">
          <div className="flex justify-center mt-8">
            <h1 className="text-white text-xl font-bold">PRODUCTOS</h1>
          </div>
          <SheetDescription>
            <div className=" sm:w-2/4 md:w-2/4 top-0 right-0 h-full lg:w-1/4 z-50 mt-4">
              <div className=" flex flex-col h-full">
                <div className="mt-2 flex flex-col items-start mx-5 gap-5 rounded-lg">
                  <div>
                    <Link
                      to={`/CardMap/${categoria}`}
                      className=" flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
                    >
                      <img
                        src="../assets/remera17.jpeg"
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
                      to={`/CardMap/${categoria}`}
                      className="flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
                    >
                      <img
                        src="../assets/buzo5.jpeg"
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
                      to={`/CardMap/${categoria}`}
                      className="flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
                    >
                      <img
                        src="../assets/pantalones.png"
                        alt="REMERA"
                        className="w-14 h-auto"
                      />
                      <li className="text-white cursor-pointer flex flex-col hover:text-gray-300">
                        <h1 className="text-lg font-bold ">PANTALONES</h1>
                      </li>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={`/CardMap/${categoria}`}
                      className="flex flex-row items-center gap-5 transition-transform duration-500 ease-in-out transform-gpu hover:scale-110"
                    >
                      <img
                        src="../assets/abrigos.png"
                        alt="REMERA"
                        className="w-14 h-auto"
                      />
                      <li className="text-white cursor-pointer flex flex-col hover:text-gray-300">
                        <h1 className="text-lg font-bold">ABRIGOS</h1>
                      </li>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Products;
