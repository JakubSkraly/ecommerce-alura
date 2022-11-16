import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const TopClothes = () => {
    return (
        <>
            <div className="flex items-center justify-between py-4 px-4">
                <span className="font-bold text-[#464646]">Ropa</span>
                <a
                    href=""
                    className="flex items-center gap-1 font-bold text-[#2A7AE4]"
                >
                    <span>Ver todo</span>
                    <BiRightArrowAlt className="text-2xl" />
                </a>
            </div>
        </>
    );
};

export default TopClothes;
