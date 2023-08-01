import Banner from "@/components/organisms/Banner";
import BrandPartner from "@/components/organisms/BrandPartner";
import Category from "@/components/organisms/Category";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import New from "@/components/organisms/New";
import React from "react";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <New />
      <BrandPartner />
      <Footer />
    </>
  );
}

export default Home;
