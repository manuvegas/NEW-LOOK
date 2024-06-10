import React from "react";
import Button from "../ComponentsUI/Button";
import { Input } from "../UI/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import ButtonSize from "./ButtonSize";

const Filtros = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <HiAdjustmentsHorizontal size={40} />
        </SheetTrigger>
        <SheetContent className=" text-white p-4 rounded max-w-lg bg-[#060606] border-none">
          <SheetHeader>
            <SheetTitle>
              <h2 className="text-center text-3xl font-extrabold pb-4">
                FILTROS
              </h2>
            </SheetTitle>
            <SheetDescription>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold my-3">COLOR</h2>
                <div className="flex flex-row gap-2 flex-wrap">
                  <Button
                   className={"px-6 py-1"}
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl font-semibold my-3">PRECIO</h2>
                  <div className="flex gap-5 sm:items-center sm:space-x-4 ">
                    <Input
                      className={"w-28 h-8 text-white"}
                      type={"number"}
                      variant={"underlined"}
                      id={"precioDesde"}
                      label={"Desde:"}
                      placeholder="Desde:"
                    />
                    <Input
                      className={"w-28 h-8 text-white"}
                      type={"number"}
                      variant={"underlined"}
                      id={"precioHasta"}
                      label={"Hasta:"}
                      placeholder="Hasta:"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold my-3">TALLES</h3>
                  <ButtonSize />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">ORDENAR POR:</h3>
                  <select
                    className="w-full bg-[#060606] border p-2 text-white rounded"
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="default">Predeterminado</option>
                    <option value="loMasVendidos">Lo más vendidos</option>
                    <option value="precioMayor">Precio de mayor a menor</option>
                    <option value="precioMenor">Precio de menor a mayor</option>
                    <option value="losMasNuevos">Los más nuevos</option>
                  </select>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Filtros;
