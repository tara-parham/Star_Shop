import type { Product } from "../types/product";
import HydratingFaceCream from "../assets/products/Hydrating-Face-Cream.jpg";
import VelvetMatteLipstick from "../assets/products/velvet-matte-lipstick.jpg";
import RepairHairSerum from "../assets/products/Repair-Hair-Serum.jpg";
import SoftBloomEaudeParfum from "../assets/products/Soft-Bloom-Eau-de-Parfum.jpg";
import CoconutBodyLotion from "../assets/products/Coconut-Body-Lotion.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Hydrating Face Cream",
    brand: "MHI",
    category: "Skincare",
    price: 32,
    originalPrice: 42,
    rating: 4.8,
    reviewCount: 128,
    image: HydratingFaceCream,
    description:
      "A lightweight daily moisturizer that helps hydrate and soften the skin without feeling greasy.",
    isBestSeller: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    brand: "Golden Rose",
    category: "Makeup",
    price: 18,
    rating: 4.6,
    reviewCount: 86,
    image: VelvetMatteLipstick,
    description:
      "A rich matte lipstick with a smooth velvet finish and long-lasting color.",
    isNew: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Repair Hair Serum",
    brand: "EIN",
    category: "Haircare",
    price: 24,
    originalPrice: 30,
    rating: 4.7,
    reviewCount: 94,
    image: RepairHairSerum,
    description:
      "A nourishing hair serum designed to reduce frizz and add natural shine to damaged hair.",
    inStock: true,
  },
  {
    id: 4,
    name: "Soft Bloom Eau de Parfum",
    brand: "Paristyle Victor Hug",
    category: "Selfcare",
    price: 58,
    rating: 4.9,
    reviewCount: 212,
    image: SoftBloomEaudeParfum,
    description:
      "A soft floral fragrance with notes of jasmine, vanilla, and white musk.",
    isBestSeller: true,
    inStock: true,
  },
  {
    id: 5,
    name: "Coconut Body Lotion",
    brand: "Come'on",
    category: "Selfcare",
    price: 21,
    rating: 4.5,
    reviewCount: 67,
    image: CoconutBodyLotion,
    description:
      "A creamy body lotion enriched with coconut extract for smooth and hydrated skin.",
    inStock: false,
  },
];
