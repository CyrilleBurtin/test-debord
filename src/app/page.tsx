import ProductCard from "@/components/productCard/productCard";


export interface Product {
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

export default async function Home() {

  const response = await fetch('https://fakestoreapi.com/products/');
  const products: Product[] = await response.json();

  return (
      <ul className="grid grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} {...product}/>
        ))}
      </ul>
  );
}
