import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { getProductById } from "@/data/productData";
import { notFound } from "next/navigation";

export default function EventsMaxPage() {
    const product = getProductById("eventsmax");

    if (!product) {
        notFound();
    }

    return <ProductDetailTemplate product={product} />;
}
