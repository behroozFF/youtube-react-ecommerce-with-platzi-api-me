import React from "react";
import Header from "../../components/commen/Header";
import ReverseStringComponent from "../../GitHubCopilot/ReversingFunction/ReverseStringComponent";
import Zustand from "../../GitHubCopilot/Zustand/Zustand";
import CategoriesChips from "../../components/commen/CategoriesChips";
const Root = () => {
  return (
    <>

      <Header />
      <CategoriesChips />
      <ReverseStringComponent />
      <Zustand />
    </>
  );
};

export default Root;
