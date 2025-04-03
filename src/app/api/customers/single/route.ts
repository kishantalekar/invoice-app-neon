import { getSingleCustomer } from "@/app/db/actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const customerName = req.nextUrl.searchParams.get("name");

  try {
    const customer = await getSingleCustomer(customerName!);
    return NextResponse.json(
      { message: "Customer retrieved successfully!", customer },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred", err },
      { status: 400 }
    );
  }
}
