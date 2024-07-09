"use client";
import Extra from "@/components/Homepage/Extra";
import Faq from "@/components/Homepage/Faq";
import Heading from "@/components/Homepage/Heading";
import Customer from "@/components/Homepage/Customers";
import Footer from "@/components/Footer";
import ProductScreen from "./components/products/ProductScreen";
import NewArrivals from "./components/products/NewArrivals";
import { useEffect } from "react";
import { hideLoading } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideLoading());
  }, [dispatch]);
  return (
    <main>
      <Heading />
      <ProductScreen />
      <NewArrivals />
      <Extra />
      <Faq />
      <Customer />
      <Footer />
    </main>
  );
}
