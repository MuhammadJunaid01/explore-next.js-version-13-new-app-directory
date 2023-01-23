import getSingleProduct from "@/lib/fetchData";
import { ProductType } from "@/lib/types";
import Image from "next/image";

type Props = {
  params: { id: string };
};
const page = async ({ params }: Props) => {
  const { id } = params;
  const uri: string = `https://fakestoreapi.com/products/${id}`;
  const data: ProductType = await getSingleProduct(uri);

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid gray",
        width: "40%",
        margin: "0 auto",
        overflow: "hidden",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      <Image
        style={{ width: "100%", height: "200px" }}
        src={data.image}
        width={400}
        height={300}
        alt="product image"
      />
      <p style={{ margin: "1px 0px" }}>{data.title}</p>
      <p style={{ margin: "1px 0px" }}>{data.description}</p>
      <p style={{ margin: "1px 0px" }}>{data.category}</p>
      <p style={{ margin: "1px 0px" }}>{data.price}</p>
    </div>
  );
};

export default page;
