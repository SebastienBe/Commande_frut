import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    upstreams: {
      supabase: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
      stripe: Boolean(process.env.STRIPE_SECRET_KEY),
    },
  });
}
