import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const TopOthers = () => {
    return (
        <>
            <div className="flex items-center justify-between py-4 px-4">
                <span className="font-bold text-[#464646]">Otros</span>
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

export default TopOthers;
