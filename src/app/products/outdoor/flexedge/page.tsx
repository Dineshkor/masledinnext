import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function FlexEdgePage() {
    const product = getProductById("flexedge");

    if (!product) {
        notFound();
    }

    return <ProductDetailTemplate product={product} />;
}
