import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getCategoryBySlug, getProductsByCategory } from "@/data/productData";
import { notFound } from "next/navigation";

export default function StandeePage() {
    const category = getCategoryBySlug("standee");
    const products = getProductsByCategory("standee");

    if (!category) {
        notFound();
    }

    return <CategoryPageTemplate category={category} products={products} />;
}
