import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    const resend = getResend();

    // Send welcome email via Resend
    await resend.emails.send({
      from: "WhoToVotePH <noreply@whotovoteph.com>",
      to: email,
      subject: "Welcome to WhoToVotePH!",
      html: `
        <h1>Welcome to WhoToVotePH!</h1>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>We'll send you fact-based updates about Philippine national officials to help you make informed voting decisions.</p>
        <p>Remember: Facts, not opinions. Your vote, your informed choice.</p>
        <br/>
        <p>— The WhoToVotePH Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
