import { Container } from "../components/ui/Container";
import { ProductCard } from "../components/product/ProductCard";
import { products } from "../data/product";

export function ProductsPage(){
    return(
        <section className="border py-16">
            <Container>
                <h1 className="text-3xl font-bold text-slate-900">All Products</h1>
                <p className="mt-2 text-slate-600">Browse our collection of beauty essentials.</p>
                
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product)=>(
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Container>
        </section>
    )
}