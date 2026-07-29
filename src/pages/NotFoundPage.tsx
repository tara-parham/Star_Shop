import { Container } from "../components/ui/Container";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
            404 Error
          </p>

          <h1 className="mt-4 text-4xl text-slate-950 font-bold">
            Page not found
          </h1>

          <p className="mt-4 text-slate-600">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pink-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
