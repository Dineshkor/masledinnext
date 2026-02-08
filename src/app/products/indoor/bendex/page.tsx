import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function BendexPage() {
    const product = getProductById("bendex");

    if (!product) {
        notFound();
    }

    return <ProductDetailTemplate product={product} />;
}
