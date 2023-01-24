import getSingleProduct from "@/lib/fetchData";
import { ProductType } from "@/lib/types";
import Image from "next/image";
import { notFound } from "next/navigation";
type Props = {
  params: { id: string };
};
const page = async ({ params }: Props) => {
  const { id } = params;
  const uri: string = `https://fakestoreapi.com/products/${id}`;
  const data: ProductType = await getSingleProduct(uri);
  if (!data) {
    return notFound();
  }
  return (
    <div className="bg-slate-600 shadow-sm text-white text-center p-2 rounded-sm overflow-hidden mt-0 w-80  m-auto">
      <Image
        className="w-full h-52 rounded-sm"
        src={data.image}
        width={400}
        height={300}
        alt="product image"
      />
      <p className="m-0 text-2xl">{data.title.slice(0, 20)}</p>
      <p className="m-0">{data.description.slice(0, 100)}</p>
      <p className="m-0 mb-2">{data.category}</p>
      <p className="m-0">{data.price}</p>
      <button className="bg-slate-800 border-none py-2 px-5 rounded-sm hover:text-red-300">
        Hover Me
      </button>
    </div>
  );
};

export default page;
