import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getCategoryByIdApi from "../../utils/apis/categories/getCategoryByIdApi.js";
import Header from "../../components/commen/Header/Header.jsx";
import CategoryInfoSkeleton from "../../components/skeleton/CategoryInfoSkeleton";
import ErrorOnFetchApi from "../../components/commen/ErrorOnFetchApi/ErrorOnFetchApi.jsx";

import ProductsByCategoryGrid from "../../components/commen/ProductsByCategoryGrid";

const Categories = () => {
  const { id } = useParams() || ""; /* اگر نبود خالی بزار  */

  const { isPending, error, data } = useQuery({
    queryKey: ["categoriesById"],
    queryFn: () => getCategoryByIdApi(id),
  });

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center gap-4">
        {isPending && <CategoryInfoSkeleton />}
        {error && <ErrorOnFetchApi message={error?.message} />}
        {data /* ampersand */ && (
          <>
            <img
              className="w-[8rem] h-[8rem] rounded-full"
              src={data?.data?.image}
              alt="" 
            />
            <p className="font-bold">{data?.data?.name}</p>
      
          </>
        )}
      </div>
      {<ProductsByCategoryGrid id={id}/>}
    </>
  );
};

export default Categories;
