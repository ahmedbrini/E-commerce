import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "./UseContext.js";
import SlideCategories from "./home/SlideCategories.jsx";
import TodayS from "./home/TodayS.jsx";
import BrowseBy from "./home/BrowseBy.jsx";
import BestSelling from "./home/BestSelling.jsx";
import CategoriesJBL from "./home/CategoriesJBL.jsx";
import AllProducts from "./home/AllProducts.jsx";
import NewArrivals from "./home/NewArrivals.jsx";
import Container from "@mui/material/Container";
import Services from "./home/Services.jsx";
import Foutree from "./Mbarki/Foutree.jsx";

const HomePage = () => {
  const productData = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          paddingLeft: "120px",
          paddingRight: "120px",
          paddingTop: "50px",
          width: "100%",
        }}
      >
        <SlideCategories />
        <TodayS />
        <BrowseBy />
        <BestSelling />
        <CategoriesJBL />
        <AllProducts />
        <NewArrivals />
        <Services />
      </div>
      <Foutree />
    </div>
  );
};

export default HomePage;
