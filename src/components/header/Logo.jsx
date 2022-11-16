import React from "react";
import LogoIcon from "../icons/LogoIcon";
import { FcShop } from "react-icons/fc";

const Logo = () => {
    return (
        <>
            <a href="" className="flex items-center gap-1 md:w-[20%]">
                <span>
                    {/* <LogoIcon className="w-8 md:w-12" /> */}
                    <FcShop className="text-4xl md:text-5xl" />
                </span>
                <span className="text-xl font-bold text-[#2A7AE4]">Alura</span>
                <span className="text-xl font-bold text-[#464646]">Store</span>
            </a>
        </>
    );
};

export default Logo;
