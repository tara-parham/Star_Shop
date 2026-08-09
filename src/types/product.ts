export type ProductCategory = "Makeup" | "Skincare" | "Haircare" | "Selfcare";

export type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  brand: string;
  description: string;
  reviewCount: number;
  rating: null | number;
  image: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  inStock: boolean;
};
