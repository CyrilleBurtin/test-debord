import Image from "next/image";
import Link from 'next/link';
import {Product} from "@/app/page";


const productCard = ({
                       id,
                       title,
                       image,
                       price
                     }: Product) => {
  return (
    <li key={id} className="bg-black border border-amber-50 rounded-2xl flex flex-col items-center justify-between p-4">
        <h2>
          {title}
        </h2>
        <Image src={image} width={100} height={100} alt={title}/>
        <p>{price?.toFixed(2)} €</p>
      <Link href={`/product/${id}`}><button className={"bg-blue-500 w-20 rounded-2xl cursor-pointer"}>voir</button></Link>
    </li>
  )
}

export default productCard;