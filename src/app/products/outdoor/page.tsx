import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getCategoryBySlug, getProductsByCategory } from "@/data/productData";
import { notFound } from "next/navigation";

export default function OutdoorPage() {
    const category = getCategoryBySlug("outdoor");
    const products = getProductsByCategory("outdoor");

    if (!category) {
        notFound();
    }

    return <CategoryPageTemplate category={category} products={products} />;
}
