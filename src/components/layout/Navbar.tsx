import { Link } from "react-router-dom";
import { Container } from "../ui/Container";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-pink-600">
          Star Shop
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-slate-700 hover:text-pink-600"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-sm font-medium text-slate-700 hover:text-pink-600"
          >
            Products
          </Link>
        </div>

        <div className="flex items-center">
          <button className="text-sm font-md text-slate-900">Cart (0)</button>
        </div>
      </Container>
    </nav>
  );
}
