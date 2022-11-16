import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import TopClothes from "./TopClothes";
import LoadingProducts from "../LoadingProducts";
import ErrorProducts from "../ErrorProducts";
import ListProducts from "../ListProducts";

const ClothesProducts = () => {
    const { data, loading, error } = useFetch(
        "https://api.escuelajs.co/api/v1/categories/1/products?limit=6&offset=6"
    );
    return (
        <>
            <section>
                <TopClothes />
                {loading && <LoadingProducts num={6} />}
                {error && <ErrorProducts error={error} />}
                {data && <ListProducts data={data} />}
            </section>
        </>
    );
};

export default ClothesProducts;
