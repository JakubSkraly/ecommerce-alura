import React from "react";
import Button from "./Button";
import Title from "./Title";
import Paragraph from "./Paragraph";

const MainHero = () => {
    return (
        <>
            <section className="flex h-auto w-full flex-col justify-end bg-[url(@/assets/img/Hero.svg)] bg-cover bg-center px-4 py-4 pt-12 pb-12 md:h-96">
                <Title />
                <Paragraph />
                <Button />
            </section>
        </>
    );
};

export default MainHero;
