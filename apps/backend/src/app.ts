import { logger } from "hono/logger";
import index from "@/routes/index.routes"
import { cors } from "hono/cors";
import { Hono } from "hono";
import { env } from "@/utils/env";
import { Resend } from "resend";

const app = new Hono();

app.use("*", cors({
  origin: env.CORS_WHITELIST.split(","),
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
  credentials: true,
}));

app.use("*", logger());

const routes = [
  index,
] as const;

routes.forEach((route) => {
  app.route("/api", route);
});

app.post('/email', async (c) => {
  try {
    const body = await c.req.json();
    const { firstName, lastName, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return c.json(
        { message: 'Missing required fields: firstName, lastName, email, and message are required.' },
        400
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json(
        { message: 'Invalid email format.' },
        400
      );
    }

    // Get Resend configuration from environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    const recipientEmail = process.env.TO_EMAIL;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable is not set.');
      return c.json(
        { message: 'Email service is not configured on the server.' },
        500
      );
    }

    if (!recipientEmail) {
      console.error('RECIPIENT_EMAIL environment variable is not set.');
      return c.json(
        { message: 'Recipient email is not configured on the server.' },
        500
      );
    }

    // Send email using Resend
    try {
      const resend = new Resend(resendApiKey);

      const { data, error } = await resend.emails.send({
        from: `Proven Path Contact Form <${fromEmail}>`,
        to: [recipientEmail],
        replyTo: email,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">Sent from Buildin21 Contact Form</p>
          </div>
        `,
        text: `New Contact Form Submission\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from Buildin21 Contact Form`,
      });

      if (error) {
        console.error('Resend error:', error);
        return c.json(
          { message: 'Failed to send email. Please try again later.' },
          500
        );
      }
    } catch (error) {
      console.error('Error sending email with Resend:', error);
      throw error;
    }

    return c.json({
      success: true,
      message: 'Email sent successfully.',
    }, 200);

  } catch (error) {
    console.error('Error sending email:', error);
    return c.json(
      { error: 'Failed to send email. Please try again later.' },
      500
    );
  }
});

export type AppType = typeof app;
export default app;
