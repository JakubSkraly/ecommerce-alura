import React from "react";

const LoadingProducts = ({ num }) => {
    return (
        <>
            <div className="flex flex-wrap">
                {new Array(num).fill(1).map((value, index) => (
                    <div
                        key={index}
                        className="flex w-2/4 animate-pulse flex-col justify-between gap-2 rounded-xl border p-4 shadow-lg shadow-sky-300/50 md:w-1/3 lg:w-1/6"
                    >
                        {/* Imagen */}
                        <div className="h-32 w-full rounded-xl bg-slate-700"></div>
                        {/* Title */}
                        <div className="h-2 w-full rounded bg-slate-700"></div>
                        {/* Price */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 h-2 rounded bg-slate-700"></div>
                            <div className="col-span-1 h-2 rounded bg-slate-700"></div>
                        </div>
                        {/* View Product */}
                        <div className="h-2 w-full rounded bg-slate-700"></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default LoadingProducts;
