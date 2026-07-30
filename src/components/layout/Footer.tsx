import { Container } from "../ui/Container";

export function Footer(){
    return(
        <footer className="border-t border-slate-100 bg-slate-50 py-12">
            <Container className="text-center">
                <p className="text-sm text-slate-600">
                    &copy; {new Date().getFullYear()} Star Shop. All rights reserved.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                    Built with React, TypeScript, and Tailwind CSS.
                </p>
            </Container>
        </footer>
    )
}