import React, { useState } from "react";
import LogoIcon from "../icons/LogoIcon";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BiMoon } from "react-icons/bi";
import Nav from "./Nav";

const MainHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState("hidden md:block md:w-[70%]");
    const handleOpenMenu = () => {
        setMenu("md:w-[70%]");
        setIsOpen(true);
    };
    const handleCloseMenu = () => {
        setMenu("hidden md:block md:w-[70%]");
        setIsOpen(false);
    };
    return (
        <>
            <header className="bg-[#FFFFFF] px-4 shadow">
                <div className="container mx-auto flex h-16 items-center justify-between md:gap-4">
                    <a href="" className="flex items-center md:w-[20%]">
                        <span>
                            <LogoIcon className="w-8 md:w-12" />
                        </span>
                        <span className="text-xl font-bold text-[#2A7AE4]">
                            Alura
                        </span>
                        <span className="text-xl font-bold text-[#464646]">
                            Geek
                        </span>
                    </a>
                    <Nav className={menu} />
                    <div className="flex items-center justify-evenly gap-4 md:w-[10%]">
                        <button className="text-2xl font-bold text-[#A2A2A2] hover:text-black">
                            <BiMoon />
                        </button>
                        <button className="text-2xl font-bold text-[#A2A2A2] hover:text-black">
                            <FaUserCircle />
                        </button>
                        <button
                            className="text-2xl font-bold text-[#A2A2A2] hover:text-black md:hidden"
                            onClick={isOpen ? handleCloseMenu : handleOpenMenu}
                        >
                            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default MainHeader;
