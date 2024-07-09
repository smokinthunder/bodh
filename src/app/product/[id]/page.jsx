import AddToCart from "@/app/components/products/AddToCart";
import ProductRate from "@/app/components/products/ProductRate";
import products from "../../../../public/static/data/product_list.json";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetailPage({ params: { id } }) {
  const productId = parseInt(id, 10);
  const product = products["products"].find((x) => x.id === productId);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
      <div className="py-2">
        <Link href="/">Back to Home</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src="/assets/HomePage/trophie.png"
            alt={product.name}
            width={300}
            height={300}
            sizes="100vw"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>
              <ProductRate rate={product.rating} count={product.numReviews} />
            </li>
            <li>
              <hr className="my-3" />
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>₹ {product.price}</div>
            </div>

            <AddToCart product={product} redirect={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
