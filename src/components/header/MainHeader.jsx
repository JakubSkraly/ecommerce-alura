import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Theme from "./Theme";
import Profile from "./Profile";
import ProfileButtons from "./ProfileButtons";
import Menu from "./Menu";

const MainHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menu, setMenu] = useState("hidden md:block md:w-[70%]");

    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const [menuProfile, setMenuProfile] = useState("hidden");

    const handleOpenMenu = () => {
        setMenu("md:w-[70%]");
        setIsOpen(true);
        setMenuProfile("hidden");
        setIsOpenProfile(false);
    };
    const handleCloseMenu = () => {
        setMenu("hidden md:block md:w-[70%]");
        setIsOpen(false);
    };

    const handleOpenProfile = () => {
        setMenuProfile("");
        setIsOpenProfile(true);
        setMenu("hidden md:block md:w-[70%]");
        setIsOpen(false);
    };
    const handleCloseProfile = () => {
        setMenuProfile("hidden");
        setIsOpenProfile(false);
    };
    return (
        <>
            <header className="fixed z-20 w-full bg-[#FFFFFF] px-4 shadow">
                <div className="container mx-auto flex h-16 items-center justify-between md:gap-4">
                    <Logo />
                    <Nav className={menu} handleCloseMenu={handleCloseMenu} />
                    <div className="flex items-center justify-evenly gap-4 md:w-[10%]">
                        <Theme />
                        <Profile
                            isOpenProfile={isOpenProfile}
                            handleCloseProfile={handleCloseProfile}
                            handleOpenProfile={handleOpenProfile}
                        />
                        <Menu
                            isOpen={isOpen}
                            handleCloseMenu={handleCloseMenu}
                            handleOpenMenu={handleOpenMenu}
                        />
                    </div>
                </div>
                <ProfileButtons
                    className={menuProfile}
                    handleCloseProfile={handleCloseProfile}
                />
            </header>
        </>
    );
};

export default MainHeader;
