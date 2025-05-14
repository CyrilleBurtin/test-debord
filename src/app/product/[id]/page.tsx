import { PRODUCT_MOCK } from "@/productsMock";
import Link from "next/link";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const productId = Number(id);

  if (isNaN(productId)) {
    return <div>Invalid product ID</div>;
  }

  const product = PRODUCT_MOCK.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="border border-amber-100 rounded-2xl container mx-auto p-10 flex flex-col gap-4">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={300} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      <Link href={`/`}><button className={"bg-blue-500 w-20 rounded-2xl cursor-pointer"}>home</button></Link>
    </div>
  );
};

export default ProductPage;