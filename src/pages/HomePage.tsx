import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export function HomePage() {
  return (
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
  );
}

//  <div className="max-w-2xl">
//             <p className="mb-4 text-small font-semibold uppercase tracking-[0.2em] text-pink-600">
//               Welcom to Star Shop
//             </p>

//             <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
//               Beauty essentials for your everyday glow.
//             </h1>

//             <p className="mt-6 text-lg leading-8 text-slate-600">
//               Discover skincare, makeup, haircare, and fragrance products made
//               to help you feel confident every day.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <Button>Show Products</Button>
//               <Button variant="outline">Explore Best Sellers</Button>
//             </div>
//           </div>
