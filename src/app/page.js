import Image from "next/image";
import ProductScreen from "./components/products/ProductScreen";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <h1>Bodhi Creations</h1>
      <ProductScreen />
    </main>
  );
}
