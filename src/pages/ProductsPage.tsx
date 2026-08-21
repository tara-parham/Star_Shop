import { Container } from "../components/ui/Container";
import { ProductCard } from "../components/product/ProductCard";
import { products } from "../data/product";
import { useState } from "react";

const categories = ["All", "Makeup", "Skincare", "Haircare", "Selfcare"];

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16">
      <Container>
        <h1 className="text-3xl font-bold text-slate-900">All Products</h1>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${activeCategory === cat ? "bg-pink-600" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
