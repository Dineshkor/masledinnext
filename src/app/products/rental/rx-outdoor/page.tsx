import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function RxOutdoorPage() {
  const product = getProductById("rx-outdoor");
  if (!product) notFound();
  return <ProductDetailTemplate product={product} />;
}
