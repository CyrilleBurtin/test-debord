import Link from "next/link";

// Define the Product interface (or import from a shared types file)
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const productId = Number(id);

  if (isNaN(productId)) {
    return <div className="text-center text-red-500">Invalid product ID</div>;
  }

  const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
    cache: 'force-cache', // Cache for static generation
  });

  if (!response.ok) {
    return <div className="text-center text-red-500">Error fetching product</div>;
  }

  const product: Product = await response.json();

  if (!product || product.id !== productId) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="border border-amber-100 rounded-2xl container mx-auto p-10 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        width={300}
        className="object-contain max-w-full h-auto"
      />
      <p className="text-lg">Price: ${product.price.toFixed(2)}</p>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-sm capitalize">Category: {product.category}</p>
      <p className="text-sm">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <Link href="/">
        <button className="bg-blue-500 w-20 rounded-2xl cursor-pointer text-white py-2 hover:bg-blue-600">
          Home
        </button>
      </Link>
    </div>
  );
};

export default ProductPage;