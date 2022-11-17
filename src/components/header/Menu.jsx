import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Menu = ({ isOpen, handleCloseMenu, handleOpenMenu }) => {
    return (
        <>
            <button
                className="text-2xl font-bold text-[#A2A2A2] hover:text-[#2A7AE4] md:hidden"
                onClick={isOpen ? handleCloseMenu : handleOpenMenu}
            >
                {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
        </>
    );
};

export default Menu;
