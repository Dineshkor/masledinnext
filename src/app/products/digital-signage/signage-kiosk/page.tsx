import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function SignageKioskPage() {
  const product = getProductById("signage-kiosk");
  if (!product) notFound();
  return <ProductDetailTemplate product={product} />;
}
