import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getProductById from "../../utils/apis/products/getProductById";

const Products = (id) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["productsByCategory"],
    queryFn: () => getProductById(id),
  });

  return <div></div>;
};

export default Products;
