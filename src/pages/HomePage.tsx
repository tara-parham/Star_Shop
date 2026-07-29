import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export function HomePage() {
  return (
    <main>
      <section className="bg-pink-50 py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-small font-semibold uppercase tracking-[0.2em] text-pink-600">
              Welcom to Star Shop
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Beauty essentials for your everyday glow.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Discover skincare, makeup, haircare, and fragrance products made
              to help you feel confident every day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button>Show Products</Button>
              <Button variant="outline">Explore Best Sellers</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
