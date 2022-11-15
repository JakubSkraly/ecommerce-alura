import React from "react";
import LogoIcon from "../icons/LogoIcon";

const Logo = () => {
    return (
        <>
            <a href="" className="flex items-center md:w-[20%]">
                <span>
                    <LogoIcon className="w-8 md:w-12" />
                </span>
                <span className="text-xl font-bold text-[#2A7AE4]">Alura</span>
                <span className="text-xl font-bold text-[#464646]">Geek</span>
            </a>
        </>
    );
};

export default Logo;
