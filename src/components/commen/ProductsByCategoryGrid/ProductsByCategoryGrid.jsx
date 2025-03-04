import React from "react";
import { useQuery } from "@tanstack/react-query";
import getProductsByCategory from "../../../utils/apis/products/getProductsByCategory.js";
import ProductGridSkeleton from "../../skeleton/ProductGridSkeleton";
import ErrorOnFetchApi from "../ErrorOnFetchApi/ErrorOnFetchApi.jsx";
import { Link } from "react-router-dom";

const ProductsByCategoryGrid = ({ id }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["categoriesById"],
    queryFn: () => getProductsByCategory(id),
  });

  console.log(data);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 px-8">
      {isPending &&
        Array.from("123456").map((i) => <ProductGridSkeleton key={i} />)}
      {error && <ErrorOnFetchApi message={error?.message} />}
      {data &&
        data?.data?.map((product) => (
        
            <Link to={`/products/${product?.id}`} key={product?.id}
             className="rounded-xl flex flex-col shadow-lg gap-4 items-center justify-center pb-4 w-5/12 lg:w-3/12">
              <img
                src={product?.images[0].replace(/^["[]+|["\]]/g, "")}
                className=" rounded-t-xl h-[15rem] w-[100%]"
              />
              <p>{product?.title}</p>
              <p>{product?.price}$</p>
            </Link>
   
        ))}
    </div>
  );
};

export default ProductsByCategoryGrid;
