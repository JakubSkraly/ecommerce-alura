import React from "react";
import ElectronicsProducts from "./electronics/ElectronicsProducts";
import ClothesProducts from "./clothes/ClothesProducts";
import OthersProducts from "./others/OthersProducts";

const MainProducts = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col gap-8">
                <ElectronicsProducts />
                <ClothesProducts />
                <OthersProducts />
            </div>
        </>
    );
};

export default MainProducts;
