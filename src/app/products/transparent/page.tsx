import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getCategoryBySlug, getProductsByCategory } from "@/data/productData";
import { notFound } from "next/navigation";

export default function TransparentPage() {
    const category = getCategoryBySlug("transparent");
    const products = getProductsByCategory("transparent");

    if (!category) {
        notFound();
    }

    return <CategoryPageTemplate category={category} products={products} />;
}
