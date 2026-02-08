import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function OxPage() {
    const product = getProductById("ox");

    if (!product) {
        notFound();
    }

    return <ProductDetailTemplate product={product} />;
}
