import { PRODUCT_MOCK } from "@/productsMock";

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
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={300} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  );
};

export default ProductPage;