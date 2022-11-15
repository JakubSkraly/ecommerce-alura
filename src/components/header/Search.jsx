import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
    return (
        <>
            <div className="relative flex items-center overflow-hidden rounded-xl md:w-2/4">
                <input
                    type="text"
                    placeholder="¿Qué desea buscar?"
                    className="w-full bg-[#F5F5F5] p-2 text-center text-[#A2A2A2] outline-none md:text-left"
                />
                <button className="absolute right-4 text-xl text-[#A2A2A2] hover:text-[#2A7AE4]">
                    <BsSearch />
                </button>
            </div>
        </>
    );
};

export default Search;
