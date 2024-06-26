import Extra from "@/components/Homepage/Extra";
import Faq from "@/components/Homepage/Faq";
import Heading from "@/components/Homepage/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Heading />
      <Extra />
      <Faq />
    </main>
  );
}
