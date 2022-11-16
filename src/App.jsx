import React from "react";
import "./App.css";
import MainHeader from "./components/header/MainHeader";
import MainHero from "./components/hero/MainHero";
import MainProduct from "./components/product/MainProduct";

const App = () => {
    return (
        <>
            <MainHeader />
            <MainHero />
            <MainProduct />
        </>
    );
};

export default App;
