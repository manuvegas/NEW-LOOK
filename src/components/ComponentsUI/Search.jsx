import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiSearchLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Input } from "../UI/input";

const Search = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <RiSearchLine className="w-5 h-5 sm:h-6 sm:w-6"/>
        </SheetTrigger>
        <SheetContent className="bg-[#060606] border-none">
          <SheetHeader>
            <SheetTitle>
              <div className="flex items-center gap-2 justify-center mt-8">
                <CiSearch size={24} />
                <h1 className="text-white text-xl font-bold">SEARCH </h1>
              </div>
            </SheetTitle>
            <SheetDescription>
              <Input className={"w-[230px] h-8 text-white mx-auto mt-4"} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Search;
