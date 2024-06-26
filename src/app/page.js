import Extra from "@/components/Homepage/Extra";
import Faq from "@/components/Homepage/Faq";
import Heading from "@/components/Homepage/Heading";
import Customer from "@/components/Homepage/Customers";
import Footer from "@/components/Footer";
import ProductScreen from "./components/products/ProductScreen";
import NewArrivals from "./components/products/NewArrivals";

export default function Home() {
  return (
    <main>
      <Heading />
      <ProductScreen />
      <NewArrivals/>
      <Extra />
      <Faq />
      <Customer />
      <Footer />
    </main>
  );
}
