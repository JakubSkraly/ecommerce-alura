import React from "react";
import { BsSearch } from "react-icons/bs";

const Nav = (props) => {
    return (
        <>
            <nav {...props}>
                <div className="absolute top-20 right-[5%] flex h-auto w-[90%] flex-col gap-4 rounded-3xl bg-[#FFFFFF] p-4 shadow md:static md:w-full md:flex-row md:items-center md:justify-end md:gap-6 md:rounded-none md:p-0 md:shadow-none">
                    <ul className="flex flex-col gap-2 text-center md:flex-row md:gap-6">
                        <li>
                            <a
                                href=""
                                className="text-lg font-semibold text-[#464646] hover:text-[#2A7AE4]"
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="text-lg font-semibold text-[#464646] hover:text-[#2A7AE4]"
                            >
                                Catalogo
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="text-lg font-semibold text-[#464646] hover:text-[#2A7AE4]"
                            >
                                Contactanos
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex items-center overflow-hidden rounded-xl md:w-2/4">
                        <input
                            type="text"
                            placeholder="¿Qué desea buscar?"
                            className="w-full bg-[#F5F5F5] p-2 text-center text-[#A2A2A2] outline-none md:text-left"
                        />
                        <button className="absolute right-4 text-xl text-[#A2A2A2]">
                            <BsSearch />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
