import { Resend } from "resend";
import { NextResponse } from "next/server";

// Audience ID for the newsletter subscribers
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(req: Request) {
  try {
    // Initialize Resend with API key at runtime
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Parse the request body to get the email
    const { email } = await req.json();

    // Validate email
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "valid email is required" },
        { status: 400 }
      );
    }

    // Add contact to Resend audience
    const data = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID as string,
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
