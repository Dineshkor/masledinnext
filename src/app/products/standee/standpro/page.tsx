import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function StandProPage() {
    const product = getProductById("standpro");

    if (!product) {
        notFound();
    }

    return <ProductDetailTemplate product={product} />;
}
