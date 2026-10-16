import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { delivered: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { delivered: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is missing.");

      return NextResponse.json(
        { delivered: false, message: "The contact form is not configured yet." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name.trim(),
        email: email.trim(),
        subject: `[Portfolio Inquiry] ${subject.trim()}`,
        message: message.trim(),
        from_name: "Portfolio Contact Form",
      }),
    });

    const responseText = await response.text();
    console.log("Web3Forms status:", response.status);
    console.log("Web3Forms response:", responseText);

    let result;
    try {
      result = JSON.parse(responseText);
    } catch {
      result = null;
    }

    if (!response.ok || !result?.success) {
      return NextResponse.json(
        {
          delivered: false,
          message: "Your message could not be sent. Please try again later.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      delivered: true,
      message: "Your message was submitted successfully. Thank you!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        delivered: false,
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}