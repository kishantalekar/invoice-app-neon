import { getUserBankInfo, updateBankInfo } from "@/app/db/actions";
import { NextRequest, NextResponse } from "next/server";

export async function Post(req: NextRequest) {
  const { accountName, userID, accountNumber, bankName, currency } =
    await req.json();

  try {
    await updateBankInfo({
      owner_id: userID,
      bank_name: bankName,
      account_number: Number(accountNumber),
      account_name: accountName,
      currency: currency,
    });
    return NextResponse.json(
      { message: "Bank details updated" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 400 }
    );
  }
}

export async function GET(req: NextRequest) {
  const userID = req.nextUrl.searchParams.get("userID");

  try {
    const bankInfo = await getUserBankInfo(userID!);
    return NextResponse.json(
      { message: "Fetched bank details", bankInfo },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred", err },
      { status: 400 }
    );
  }
}
