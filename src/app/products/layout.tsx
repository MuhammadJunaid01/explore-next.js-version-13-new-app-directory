import getProducts from "@/lib/fetchData";
import { ProductType } from "@/lib/types";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
}
const ProductsLayout = async ({ children }: Iprops) => {
  const uri = "https://fakestoreapi.com/products";
  const products: ProductType[] = await getProducts(uri);

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "30px" }}
    >
      <div>
        {products.map((product, index: number) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={`/products/${product.id.toString()}`}
              key={index}
            >
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  padding: "5px",
                  margin: "10px 0px",
                }}
              >
                <h1 style={{ margin: "0", padding: "0", textAlign: "center" }}>
                  {product.id}
                </h1>
                <p style={{ margin: "0px", fontSize: "18px" }}>
                  {product.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ProductsLayout;
