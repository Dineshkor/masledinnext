import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getCategoryBySlug, getProductsByCategory } from "@/data/productData";
import { notFound } from "next/navigation";

export default function RentalPage() {
    const category = getCategoryBySlug("rental");
    const products = getProductsByCategory("rental");

    if (!category) {
        notFound();
    }

    return <CategoryPageTemplate category={category} products={products} />;
}
