import Extra from "@/components/Homepage/Extra";
import Faq from "@/components/Homepage/Faq";
import Heading from "@/components/Homepage/Heading";
import Customer from "@/components/Homepage/Customers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Heading />
      <Extra />
      <Faq />
      <Customer />
      <Footer />
    </main>
  );
}
