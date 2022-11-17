import React from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const ScrollUpFooter = () => {
    const top = () => {
        window.scrollTo(0, 0);
    };
    const scrollUp = () => {
        const element = document.getElementById("scroll-up");
        if (window.pageYOffset >= 200) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    };
    window.addEventListener("scroll", scrollUp);
    return (
        <>
            <a
                id="scroll-up"
                className="fixed right-4 bottom-4 z-20 hidden animate-bounce cursor-pointer rounded-xl bg-[#FFFFFF] text-4xl text-[#2A7AE4]"
                onClick={top}
            >
                <BsFillArrowUpSquareFill />
            </a>
        </>
    );
};

export default ScrollUpFooter;
