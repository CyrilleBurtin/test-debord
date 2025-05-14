import {PRODUCT_MOCK} from "@/productsMock";
import ProductCard from "@/components/productCard/productCard";

export default async function Home() {

 // const data = await fetch("https://fakestoreapi.com/products/")

  return (
      <ul className="grid grid-cols-4 gap-4">
        {PRODUCT_MOCK.map(product => (
          <ProductCard key={product.id} {...product}/>
        ))}
      </ul>
  );
}
