import nodemailer from "nodemailer";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const careOf = formData.get("care_of");
    const orderType = formData.get("order_type");
    const message = formData.get("message");
    const file = formData.get("file");

    if (!name || !email || !phone || !orderType || !message || !file) {
      return new Response("Missing required fields", { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return new Response("Only image files allowed", { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return new Response("File too large", { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Inizio Solutions" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Order Request – ${orderType}`,
      html: `
        <h3>New Order Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Care Of:</strong> ${careOf}</p>
        <p><strong>Order Type:</strong> ${orderType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        },
      ],
    });

    // ✅ Redirect to thank-you page
    return new Response(null, {
      status: 303,
      headers: {
        Location: "/thank-you",
      },
    });

  } catch (error) {
    console.error("ORDER API ERROR:", error);
    return new Response("Order submission failed", { status: 500 });
  }
}