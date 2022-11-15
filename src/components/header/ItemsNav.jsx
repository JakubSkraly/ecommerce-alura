import React, { useState } from "react";

const ItemsNav = ({ handleCloseMenu }) => {
    const [item, setItem] = useState("Inicio");
    const handleItem = (value) => {
        setItem(value);
        handleCloseMenu();
    };
    return (
        <>
            <ul className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-4">
                <li>
                    <a
                        className={`${
                            item == "Inicio"
                                ? "text-[#2A7AE4]"
                                : "text-[#464646] hover:text-[#2A7AE4]"
                        } cursor-pointer text-lg font-medium md:text-base`}
                        onClick={() => {
                            handleItem("Inicio");
                        }}
                    >
                        Inicio
                    </a>
                </li>
                <li>
                    <a
                        className={`${
                            item == "Catálogo"
                                ? "text-[#2A7AE4]"
                                : "text-[#464646] hover:text-[#2A7AE4]"
                        } cursor-pointer text-lg font-medium md:text-base`}
                        onClick={() => {
                            handleItem("Catálogo");
                        }}
                    >
                        Catálogo
                    </a>
                </li>
                <li>
                    <a
                        className={`${
                            item == "Contáctanos"
                                ? "text-[#2A7AE4]"
                                : "text-[#464646] hover:text-[#2A7AE4]"
                        } cursor-pointer text-lg font-medium md:text-base`}
                        onClick={() => {
                            handleItem("Contáctanos");
                        }}
                        // className="cursor-pointer text-lg font-medium text-[#464646] hover:text-[#2A7AE4] md:text-base"
                        // onClick={handleCloseMenu}
                    >
                        Contáctanos
                    </a>
                </li>
            </ul>
        </>
    );
};

export default ItemsNav;
