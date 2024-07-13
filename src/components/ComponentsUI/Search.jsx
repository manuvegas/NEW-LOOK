import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../UI/sheet";
import { RiSearchLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { searchProductsByTitle } from "@/Fetching/search.fetching";
import CardSearch from "../Cards/CardSearch";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = async (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (value.trim() !== "") {
      try {
        const response = await searchProductsByTitle(value);
        setSearchResults(response);
      } catch (error) {
        console.error("Error searching products:", error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <RiSearchLine className="w-7 h-7" />
        </SheetTrigger>
        <SheetContent className="bg-[#060606] border-none">
          <div>
            <div className="flex items-center gap-2 justify-center mt-8">
              <h1 className="text-white text-xl font-bold">SEARCH</h1>
            </div>
            <div>
              <div className="flex gap-3 items-center">
                <CiSearch size={24} />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full h-8 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              {searchResults.length > 0 && (
                <div className="">
                  {searchResults.map((producto) => (
                    <CardSearch key={producto._id} _id={producto._id} product={producto} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Search;
