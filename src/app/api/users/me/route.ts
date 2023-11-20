import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getData";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { get } from "http";

connect();

export async function GET(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    const user = await User.findById(userId).select("-password");
    return NextResponse.json({ data: user, status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
