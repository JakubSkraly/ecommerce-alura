import React from "react";

const ListProducts = ({ data }) => {
    return (
        <>
            <div className="flex flex-wrap">
                {data.map((product) => (
                    <div
                        className="flex w-2/4 flex-col justify-between gap-2 p-4 md:w-1/3 lg:w-1/6"
                        key={product.id}
                    >
                        <img
                            className="rounded-xl shadow-lg"
                            src={product.images[1]}
                            alt=""
                        />
                        <h6 className="font-medium text-[#464646]">
                            {product.title}
                        </h6>
                        <span className="font-bold text-[#464646]">
                            S/. {product.price}
                        </span>
                        <a
                            className="font-bold text-[#2A7AE4]"
                            href={product.id}
                        >
                            Ver producto
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListProducts;
