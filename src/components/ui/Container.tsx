import type { ReactNode } from "react";

type containerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: containerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
