import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Create merchant workspace
        </h1>
        <p className="text-sm text-muted-foreground">
          Deploy a collaborative dashboard connected to Supabase in minutes.
        </p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Company name
          </label>
          <Input placeholder="Acme Studios" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Work email
          </label>
          <Input type="email" placeholder="you@company.com" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Password
          </label>
          <Input type="password" placeholder="••••••••" required />
        </div>
        <Button className="w-full" type="submit">
          Launch workspace
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Already using the platform? {" "}
        <Link href="/login" className="text-primary underline">
          Go to login
        </Link>
      </p>
    </div>
  );
}
