import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiter
// In production, use Redis or a database for persistence across serverless instances
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = 5; // Max 5 requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // Per hour (in milliseconds)

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true;
  }

  record.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || request.headers.get("x-real-ip")
      || "unknown";

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, company, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "masled001@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || "masled001@gmail.com",
      to: "masled001@gmail.com",
      replyTo: email,
      subject: `New Quote Request: ${projectType} - ${company || name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #06b6d4, #22d3ee); padding: 20px; text-align: center;">
            <h1 style="color: #020617; margin: 0;">New Quote Request</h1>
          </div>
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #0f172a; border-bottom: 2px solid #22d3ee; padding-bottom: 10px;">
              Contact Information
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748b; width: 140px;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; color: #0f172a;">
                  <a href="mailto:${email}" style="color: #06b6d4;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; color: #0f172a;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Company:</strong></td>
                <td style="padding: 10px 0; color: #0f172a;">${company || "Not provided"}</td>
              </tr>
            </table>
            
            <h2 style="color: #0f172a; border-bottom: 2px solid #22d3ee; padding-bottom: 10px; margin-top: 30px;">
              Project Details
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748b; width: 140px;"><strong>Project Type:</strong></td>
                <td style="padding: 10px 0; color: #0f172a;">${projectType}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #22d3ee;">
              <p style="color: #64748b; margin: 0 0 10px 0;"><strong>Message:</strong></p>
              <p style="color: #0f172a; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding: 20px; background: #0f172a; text-align: center;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
              This email was sent from the Mas LED website contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Quote request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
