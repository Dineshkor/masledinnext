import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function CobPage() {
    const product = getProductById("cob");

    if (!product) {
        notFound();
    }

    return <ProductDetailTemplate product={product} />;
}
