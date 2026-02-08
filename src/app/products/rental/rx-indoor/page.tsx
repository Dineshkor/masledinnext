import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function RxIndoorPage() {
    const product = getProductById("rx-indoor");

    if (!product) {
        notFound();
    }

    return <ProductDetailTemplate product={product} />;
}
