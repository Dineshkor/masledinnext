import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function TransGlowPage() {
    const product = getProductById("transglow");

    if (!product) {
        notFound();
    }

    return <ProductDetailTemplate product={product} />;
}
