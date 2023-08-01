import Breadcumb from "@/components/molecules/Breadcumb";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import ProductDetail from "@/components/organisms/ProductDetail";
import Recommend from "@/components/organisms/Recommend";
import React from "react";

function Details() {
  return (
    <>
      <Navbar />
      <Breadcumb href1="Office Room" href2="Details" span="/" />
      <ProductDetail />
      <Recommend />
      <Footer />
    </>
  );
}

export default Details;
