import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Sign in to manage bookings and payouts for your merchants.
        </p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Email</label>
          <Input type="email" placeholder="ops@merchant.com" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Password</label>
          <Input type="password" placeholder="••••••••" required />
        </div>
        <Button className="w-full" type="submit">
          Continue
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Need an account? {" "}
        <Link href="/signup" className="text-primary underline">
          Create one
        </Link>
      </p>
    </div>
  );
}
