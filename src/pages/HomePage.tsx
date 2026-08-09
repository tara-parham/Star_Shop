import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { products } from "../data/product";
import { ProductCard } from "../components/product/ProductCard";

export function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">
                New Collection
              </span>

              <h1 className="mt-6 font-bold text-4xl leading-tight text-slate-900 md:text-5xl">
                Discover your style with Star Shop
              </h1>

              <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
                Explore trendy fashion, modern accessories, and everyday
                essentials in one stylish place.
              </p>

              <div className="mt-8 flex wrap gap-4">
                <Button>Shop Now</Button>
                <Button variant="secondary">View Collections</Button>
              </div>
            </div>

            <div className="rounded-3xl bg-linear-to-br from-pink-100 via-white to-pink-200 p-8 shadow-sm">
              <div className="flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-pink-300 bg-white/70 text-center">
                <p className="text-lg font-medium text-slate-500">
                  Hero Image / Product Banner
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-semibold text-sm uppercase tracking-[0.2em] text-pink-600">
                Featured Products
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Popular picks for you
              </h2>
            </div>

            <Button variant="secondary">View All</Button>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
