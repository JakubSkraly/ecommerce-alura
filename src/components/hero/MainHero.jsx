import React from "react";
import Button from "./Button";
import Title from "./Title";
import Paragraph from "./Paragraph";

const MainHero = () => {
    return (
        <>
            <section className="flex h-auto w-full flex-col justify-end border-t-[4rem] bg-hero bg-cover bg-center px-4 py-4 pt-12 md:h-96 md:pb-12">
                <div className="container mx-auto">
                    <Title />
                    <Paragraph />
                    <Button />
                </div>
            </section>
        </>
    );
};

export default MainHero;
