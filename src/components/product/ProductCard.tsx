import type { Product } from "../../types/product";
import { Button } from "../ui/Button";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <p className="text-sm font-medium text-pink-600">{product.category}</p>

        <h3 className="mt-2 font-semibold text-lg text-slate-900">
          {product.name}
        </h3>

        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="text-base font-bold text-slate-950">
            ${product.price}
          </span>
        </div>

        <Button className="px-4 py-2">Add</Button>
      </div>
    </article>
  );
}
