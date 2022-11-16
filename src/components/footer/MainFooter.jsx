import React from "react";
import Logo from "../header/Logo";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const MainFooter = () => {
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
            <footer className="w-full bg-[#EAF2FD] px-4 py-4 md:py-8 lg:py-16">
                <div className="container mx-auto flex flex-col gap-8 md:flex-row">
                    <div className="flex w-full flex-col items-center gap-4 md:w-2/5 md:items-start md:gap-8 lg:w-1/2 lg:flex-row">
                        <div className="lg:w-1/2">
                            <Logo />
                        </div>
                        <div className="lg:w-1/2">
                            <ul className="flex flex-col items-center gap-2 md:items-start md:gap-4">
                                <li>
                                    <a
                                        href=""
                                        className="font-medium text-[#464646]"
                                    >
                                        Quienes somos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="font-medium text-[#464646]"
                                    >
                                        Política de privacidad
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="font-medium text-[#464646]"
                                    >
                                        Programa de fidelidad
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="font-medium text-[#464646]"
                                    >
                                        Nuestras tiendas
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="font-medium text-[#464646]"
                                    >
                                        Quiero ser franquiciado
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="font-medium text-[#464646]"
                                    >
                                        Anúncie aquí
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4 md:md:w-3/5 lg:w-1/2">
                        <h5 className="font-bold text-[#464646]">
                            Hable con nosotros
                        </h5>
                        <input
                            className="w-full rounded-xl border-b-2 border-[#C8C8C8] p-4 font-normal text-[#A2A2A2] outline-none"
                            type="text"
                            placeholder="Nombre"
                        />
                        <textarea
                            className="w-full resize-none rounded-xl border-b-2 border-[#C8C8C8] p-4 font-normal text-[#A2A2A2] outline-none"
                            name=""
                            id=""
                            rows="5"
                            placeholder="Escribe tu mensaje"
                        ></textarea>
                        <button className="w-40 rounded-xl bg-[#2A7AE4] p-2 font-medium text-[#FFFFFF] shadow-lg shadow-blue-500/50">
                            Enviar mensaje
                        </button>
                    </div>
                </div>
            </footer>
            <div className="flex flex-col items-center gap-2 bg-[#FFFFFF] px-4 py-4 text-center md:py-8">
                <div>Desarrollado por José Leonel Inga Quintana</div>
                <div>2022</div>
            </div>
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

export default MainFooter;
