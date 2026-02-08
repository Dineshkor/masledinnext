import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function StormPage() {
    const product = getProductById("storm");

    if (!product) {
        notFound();
    }

    return <ProductDetailTemplate product={product} />;
}
