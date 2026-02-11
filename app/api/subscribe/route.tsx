import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "valid email is required" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
      unsubscribed: false,
    });

    return NextResponse.json(data);
  } catch (error) {
    // Handle errors
    console.error("Error adding contact to audience:", error);
    return NextResponse.json(
      { error: "failed to add contact to audience" },
      { status: 500 }
    );
  }
}
