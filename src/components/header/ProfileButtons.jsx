import React from "react";

const ProfileButtons = ({ className, handleCloseProfile }) => {
    return (
        <>
            <div className={className}>
                <div className="absolute top-20 right-[5%] z-10 flex h-28 w-[90%] items-center gap-4 rounded-3xl bg-[#FFFFFF] p-4 shadow md:right-4 md:w-80">
                    <button className="h-12 w-40 rounded-xl bg-[#2A7AE4] p-2 font-medium text-[#FFFFFF] shadow-lg shadow-blue-500/50">
                        Iniciar Sesión
                    </button>
                    <button className="h-12 w-40 rounded-xl bg-[#2A7AE4] p-2 font-medium text-[#FFFFFF] shadow-lg shadow-blue-500/50">
                        Regístrate
                    </button>
                </div>
                <div
                    className="absolute top-16 right-0 z-0 h-screen w-full bg-black bg-opacity-75"
                    onClick={handleCloseProfile}
                ></div>
            </div>
        </>
    );
};

export default ProfileButtons;
