import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getCategoryBySlug, getProductsByCategory } from "@/data/productData";
import { notFound } from "next/navigation";

export default function DigitalSignagePage() {
  const category = getCategoryBySlug("digital-signage");
  if (!category) notFound();
  return <CategoryPageTemplate category={category} products={getProductsByCategory("digital-signage")} />;
}
