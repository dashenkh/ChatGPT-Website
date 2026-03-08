import { NextRequest, NextResponse } from "next/server";
import { getTenders } from "@/lib/fetchers";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const year = Number(searchParams.get("year") || "2026");
  const page = Number(searchParams.get("page") || "1");
  const perPage = Number(searchParams.get("perPage") || "100");
  const query = searchParams.get("query") || "";
  const forceSource = (searchParams.get("source") || "") as "mock" | "open-api" | "public-html" | "";

  try {
    const data = await getTenders({
      year,
      page,
      perPage,
      query,
      forceSource: forceSource || undefined
    });

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400"
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
