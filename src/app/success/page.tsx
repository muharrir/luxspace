import Breadcumb from "@/components/molecules/Breadcumb";
import SuccessCheckout from "@/components/molecules/SuccessCheckout";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import React from "react";

function Success() {
  return (
    <>
      <Navbar />
      <Breadcumb href1="Success Checkout" />
      <SuccessCheckout />
      <Footer />
    </>
  );
}

export default Success;
