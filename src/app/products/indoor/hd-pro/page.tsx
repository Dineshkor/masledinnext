import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function HdProPage() {
    const product = getProductById("hd-pro");

    if (!product) {
        notFound();
    }

    return <ProductDetailTemplate product={product} />;
}
