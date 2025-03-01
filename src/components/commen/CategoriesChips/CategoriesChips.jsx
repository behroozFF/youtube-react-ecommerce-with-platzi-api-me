import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { useQuery } from "@tanstack/react-query";
import getCategoriesApi from "../../../utils/apis/categories/getCategoriesApi";
import CategoriesChipsSkeleton from "../../skeleton/CategoriesChipsSkeleton";
import ErrorOnFetchApi from "../ErrorOnFetchApi/ErrorOnFetchApi.jsx";
import {Link} from "react-router-dom";

const CategoriesChips = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategoriesApi(),
  });
  
  console.log(data);

  return (
    /* این قسمت پرودات مپ کرده  */
    <div className="mx-4 flex flex-wrap gap-4">
      {isPending && <CategoriesChipsSkeleton />}
      {error && <ErrorOnFetchApi message={error?.message} />}
      {data &&
        data?.data.map((category) => (  /* از طریق مپ جست وجو کن  */
          <Link to={`/categories/${category?.id}`} key={category?.id}>
            <Chip
              style={{ height: "5rem" }}
              avatar={
                <img
                  /* xs={{ width: "9rem !important" }} */
                  style={{ width: "3rem", height: "3rem", borderRadius: "50%" }}
                  alt={`${category?.name}`}
                  src={category?.image}
                />
              }
              label={category?.name}
              variant="outlined"
            />
          </Link>
        ))}
    </div>
  );
};

export default CategoriesChips;
