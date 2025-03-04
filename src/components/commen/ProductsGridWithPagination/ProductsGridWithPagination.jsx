import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getProductsByCategory from "../../../utils/apis/products/getProductsByCategory.js";
import ProductGridSkeleton from "../../skeleton/ProductGridSkeleton/index.js";
import ErrorOnFetchApi from "../ErrorOnFetchApi/ErrorOnFetchApi.jsx";
import { Link } from "react-router-dom";
import getProductsApi from "../../../utils/apis/products/getProductsApi.js";
import Pagination from "@mui/material/Pagination";

const ProductsGridWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  const total = 200; //backent in respose should provide total pages, total items

  const { isPending, error, data } = useQuery({
    queryKey: ["product", currentPage],
    queryFn: () => getProductsApi((currentPage - 1) * limit, limit),
  });

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 px-8">
      {isPending &&
        Array.from("123456").map((i) => <ProductGridSkeleton key={i} />)}
      {error && <ErrorOnFetchApi message={error?.message} />}
      {data &&
        data?.data?.map((product) => (
          <Link
            to={`/products/${product?.id}`}
            key={product?.id}
            className="rounded-xl flex flex-col shadow-lg gap-4 items-center justify-center pb-4 w-5/12 lg:w-3/12"
          >
            <img
              src={product?.images[0].replace(/^["[]+|["\]]/g, "")}
              className=" rounded-t-xl h-[15rem] w-[100%]"
            />
            <p>{product?.title}</p>
            <p>{product?.price}$</p>
          </Link>
        ))}
      <div className="my-8">
        {data && (
          <Pagination
            onChange={(event, value) => {
              setCurrentPage(value);
            }}
            size="large"
            count={Math.ceil(total / limit)}
            defaultPage={currentPage}
            boundaryCount={2}
          />
        )}
      </div>
    </div>
  );
};

export default ProductsGridWithPagination;
