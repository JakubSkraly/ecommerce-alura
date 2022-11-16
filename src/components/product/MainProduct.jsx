import React from "react";
import { useFetch } from "../../hooks/useFetch";

const MainProduct = () => {
    const { data, loading, error } = useFetch(
        "https://api.escuelajs.co/api/v1/categories/2/products?limit=12&offset=12"
    );
    return (
        <>
            <div className="container mx-auto">
                <section>
                    <div className="flex items-center justify-between">
                        <span>Star Wars</span>
                        <span>Ver todo</span>
                    </div>
                    {loading && <p>Cargando...</p>}
                    {error && <p>Ha ocurrido un error - {error}</p>}
                    {data && (
                        <div className="flex flex-wrap">
                            {data.map((product) => (
                                <div
                                    className="flex w-2/4 flex-col md:w-1/4 lg:w-1/6"
                                    key={product.id}
                                >
                                    <img src={product.images[0]} alt="" />
                                    <h6>{product.title}</h6>
                                    <span>{product.price}</span>
                                    <a href={product.id}>Ver producto</a>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </>
    );
};

export default MainProduct;
