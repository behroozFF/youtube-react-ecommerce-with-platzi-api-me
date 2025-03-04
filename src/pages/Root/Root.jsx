import React from "react";
import Header from "../../components/commen/Header";
import ReverseStringComponent from "../../GitHubCopilot/ReversingFunction/ReverseStringComponent";
import ProductsGridWithPagination from "../../components/commen/ProductsGridWithPagination";

import Zustand from "../../GitHubCopilot/Zustand/Zustand";
import CategoriesChips from "../../components/commen/CategoriesChips";


const Root = () => {
  return (
    <>
      <Header />
      <CategoriesChips />
      <ProductsGridWithPagination />
      <ReverseStringComponent />
      <Zustand />
    </>
  );
};

export default Root;
