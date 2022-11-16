import React from "react";
import "./App.css";
import MainHeader from "./components/header/MainHeader";
import MainHero from "./components/hero/MainHero";
import MainProducts from "./components/product/MainProducts";
import MainFooter from "./components/footer/MainFooter";

const App = () => {
    return (
        <>
            <MainHeader />
            <MainHero />
            <MainProducts />
            <MainFooter />
        </>
    );
};

export default App;
