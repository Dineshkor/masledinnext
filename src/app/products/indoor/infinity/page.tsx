import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function InfinityPage() {
    const product = getProductById("infinity");

    if (!product) {
        notFound();
    }

    return <ProductDetailTemplate product={product} />;
}
