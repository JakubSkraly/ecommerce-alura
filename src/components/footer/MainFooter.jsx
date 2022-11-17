import React from "react";
import Logo from "../header/Logo";
import LinksFooter from "./LinksFooter";
import FormFooter from "./FormFooter";
import ByFooter from "./ByFooter";
import ScrollUpFooter from "./ScrollUpFooter";

const MainFooter = () => {
    return (
        <>
            <footer className="w-full bg-[#EAF2FD] px-4 py-4 md:py-8 lg:py-16">
                <div className="container mx-auto flex flex-col gap-8 md:flex-row">
                    <div className="flex w-full flex-col items-center gap-4 md:w-2/5 md:items-start md:gap-8 lg:w-1/2 lg:flex-row">
                        <div className="lg:w-1/2">
                            <Logo />
                        </div>
                        <LinksFooter />
                    </div>
                    <FormFooter />
                </div>
            </footer>
            <ByFooter />
            <ScrollUpFooter />
        </>
    );
};

export default MainFooter;
