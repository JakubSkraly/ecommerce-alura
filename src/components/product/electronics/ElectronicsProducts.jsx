import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import TopElectronics from "./TopElectronics";
import LoadingProducts from "../LoadingProducts";
import ErrorProducts from "../ErrorProducts";
import ListProducts from "../ListProducts";

const ElectronicsProducts = () => {
    const { data, loading, error } = useFetch(
        "https://api.escuelajs.co/api/v1/categories/2/products?limit=6&offset=6"
    );
    return (
        <>
            <section>
                <TopElectronics />
                {loading && <LoadingProducts num={6} />}
                {error && <ErrorProducts error={error} />}
                {data && <ListProducts data={data} />}
            </section>
        </>
    );
};

export default ElectronicsProducts;
