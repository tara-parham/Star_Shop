import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Hydrating Face Cream",
    brand: "GlowCare",
    category: "skincare",
    price: 32,
    originalPrice: 42,
    rating: 4.8,
    reviewCount: 128,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    description:
      "A lightweight daily moisturizer that helps hydrate and soften the skin without feeling greasy.",
    isBestSeller: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    brand: "LumaBeauty",
    category: "makeup",
    price: 18,
    rating: 4.6,
    reviewCount: 86,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80",
    description:
      "A rich matte lipstick with a smooth velvet finish and long-lasting color.",
    isNew: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Repair Hair Serum",
    brand: "SilkRoot",
    category: "haircare",
    price: 24,
    originalPrice: 30,
    rating: 4.7,
    reviewCount: 94,
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80",
    description:
      "A nourishing hair serum designed to reduce frizz and add natural shine to damaged hair.",
    inStock: true,
  },
  {
    id: 4,
    name: "Soft Bloom Eau de Parfum",
    brand: "Auralis",
    category: "selfcare",
    price: 58,
    rating: 4.9,
    reviewCount: 212,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
    description:
      "A soft floral fragrance with notes of jasmine, vanilla, and white musk.",
    isBestSeller: true,
    inStock: true,
  },
  {
    id: 5,
    name: "Coconut Body Lotion",
    brand: "PureNest",
    category: "selfcare",
    price: 21,
    rating: 4.5,
    reviewCount: 67,
    image:
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=80",
    description:
      "A creamy body lotion enriched with coconut extract for smooth and hydrated skin.",
    inStock: false,
  },
];
