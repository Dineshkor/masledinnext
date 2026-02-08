import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getCategoryBySlug, getProductsByCategory } from "@/data/productData";
import { notFound } from "next/navigation";

export default function IndoorPage() {
    const category = getCategoryBySlug("indoor");
    const products = getProductsByCategory("indoor");

    if (!category) {
        notFound();
    }

    return <CategoryPageTemplate category={category} products={products} />;
}
