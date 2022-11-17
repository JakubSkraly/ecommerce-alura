import React from "react";

const FormFooter = () => {
    return (
        <>
            <form className="flex w-full flex-col items-start gap-4 md:md:w-3/5 lg:w-1/2">
                <h5 className="font-bold text-[#464646]">Hable con nosotros</h5>
                <input
                    className="w-full rounded-xl border-b-2 border-[#C8C8C8] p-4 font-normal text-[#A2A2A2] outline-none"
                    type="text"
                    placeholder="Nombre"
                />
                <textarea
                    className="h-40 w-full resize-none rounded-xl border-b-2 border-[#C8C8C8] p-4 font-normal text-[#A2A2A2] outline-none"
                    data-dl-input-translation="true"
                    placeholder="Escribe tu mensaje"
                ></textarea>
                <button className="w-40 rounded-xl bg-[#2A7AE4] p-2 font-medium text-[#FFFFFF] shadow-lg shadow-blue-500/50">
                    Enviar mensaje
                </button>
            </form>
        </>
    );
};

export default FormFooter;
