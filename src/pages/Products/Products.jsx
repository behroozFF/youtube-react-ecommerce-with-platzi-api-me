import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getProductById from "../../utils/apis/products/getProductById";
import Header from "../../components/commen/Header/Header.jsx"
import ProductSkeleton from "../../components/skeleton/ProductSkeleton/ProductSkeleton";
import ErrorOnFetchApi from "../../components/commen/ErrorOnFetchApi/ErrorOnFetchApi.jsx"


const Products = () => {
  const { id } = useParams() || "";

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { isPending, error, data } = useQuery({
    queryKey: ["productById"],
    queryFn: () => getProductById(id),
  });
  console.log(data);
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center gap-4 px-16">
        {isPending && <ProductSkeleton />}
        {error && <ErrorOnFetchApi />}
        {data && (
          <>
            <img
              className="w-[15rem] h-[15rem] rounded-xl"
              src={data?.data?.images[activeImageIndex].replace(
                /^["[]+|["\]]/g,
                ""
              )}
            />
            <div className="flex flex-wrap gap-2">
              {data?.data?.images.map((image_Havij, index) => (
                <img
                  onClick={() => setActiveImageIndex(index)}
                  key={image_Havij}
                  src={image_Havij.replace(/^["[]+|["\]]/g, "")}
                  className={`w-[5rem] h-[5rem] rounded-xl border-4 cursor-pointer ${
                    index == activeImageIndex
                      ? "border-slate-500 shadow-lg"
                      : "border-transparent shadow-lg"
                  }`}
                />
              ))}
            </div>
            <p className="font-bold text-xl">{data?.data?.title}</p>{" "}
            <p className="text-xl">{data?.data?.price} $</p>{" "}
            <p className="text-xl mb-40">{data?.data?.description}</p>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default Products;
