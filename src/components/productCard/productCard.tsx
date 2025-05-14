import Image from "next/image";
import Link from 'next/link';

export type Product = {
  id: number
  title: string
  image: string
  price: number
}

const productCard = ({
                       id,
                       title,
                       image,
                       price
                     }: Product) => {
  return (
    <li key={id} className="bg-black border border-amber-50 rounded-2xl flex flex-col items-center">
      <div>
        <h2>
          {title}
        </h2>
        <Image src={image} width={100} height={100} alt={title}/>
        <p>{price?.toFixed(2)} €</p>
      </div>

      <Link href={`/product/${id}`}><button>voir</button></Link>
    </li>
  )
}

export default productCard;