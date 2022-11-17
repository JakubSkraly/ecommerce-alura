import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Profile = ({ isOpenProfile, handleCloseProfile, handleOpenProfile }) => {
    return (
        <>
            <button
                className="text-2xl font-bold text-[#A2A2A2] hover:text-[#2A7AE4]"
                onClick={isOpenProfile ? handleCloseProfile : handleOpenProfile}
            >
                <FaUserCircle />
            </button>
        </>
    );
};

export default Profile;
