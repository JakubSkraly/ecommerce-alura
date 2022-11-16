import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Theme from "./Theme";
import Profile from "./Profile";
import Menu from "./Menu";

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
            <header className="fixed w-full bg-[#FFFFFF] px-4 shadow">
                <div className="container mx-auto flex h-16 items-center justify-between md:gap-4">
                    <Logo />
                    <Nav className={menu} handleCloseMenu={handleCloseMenu} />
                    <div className="flex items-center justify-evenly gap-4 md:w-[10%]">
                        <Theme />
                        <Profile />
                        <Menu
                            isOpen={isOpen}
                            handleCloseMenu={handleCloseMenu}
                            handleOpenMenu={handleOpenMenu}
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default MainHeader;
