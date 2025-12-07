import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/20 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm">
        {children}
      </div>
    </div>
  );
}
