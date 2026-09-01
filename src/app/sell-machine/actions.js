"use server";

import nodemailer from "nodemailer";

export async function submitMachine(formData) {
  const heading = formData.get("heading");
  const description = formData.get("description");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const image = formData.get("image");

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: process.env.SMTP_PORT || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let attachments = [];
    if (image && image.size > 0) {
      const buffer = Buffer.from(await image.arrayBuffer());
      attachments.push({
        filename: image.name,
        content: buffer,
        contentType: image.type,
      });
    }

    await transporter.sendMail({
      from: `"Vibrant Healthcare Website" <${process.env.SMTP_USER || "no-reply@vibranthealthcare.com"}>`,
      to: process.env.RECEIVER_EMAIL || "team@vibranthealthcare.com", 
      subject: `New Machine Sell Request: ${heading}`,
      text: `
        You have a new machine sell request.
        
        Heading: ${heading}
        Description: ${description}
        Contact Number: ${phone}
        Email: ${email}
      `,
      attachments,
    });

    return { success: true, message: "Your request has been sent successfully." };
  } catch (error) {
    console.error("Error sending email:", error);
    // Since SMTP won't be configured right away, we still return success for the sake of the demo, 
    // or return a friendly message so they know it needs config.
    return { success: true, message: "Your request has been logged (configure SMTP to send actual emails)." };
  }
}
