import React from "react";
import ItemsNav from "./ItemsNav";
import Search from "./Search";

const Nav = ({ className, handleCloseMenu }) => {
    return (
        <>
            <nav className={className}>
                <div className="absolute top-20 right-[5%] z-10 flex h-auto w-[90%] flex-col gap-4 rounded-3xl bg-[#FFFFFF] p-4 shadow md:static md:w-full md:flex-row md:items-center md:justify-end md:gap-6 md:rounded-none md:p-0 md:shadow-none">
                    <ItemsNav handleCloseMenu={handleCloseMenu} />
                    <Search />
                </div>
                <div
                    className="absolute top-16 right-0 z-0 h-screen w-full bg-black bg-opacity-75 md:hidden"
                    onClick={handleCloseMenu}
                ></div>
            </nav>
        </>
    );
};

export default Nav;
