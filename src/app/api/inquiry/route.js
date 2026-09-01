import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let name, email, phone, message, pageCategory, product, imageFile;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      name = formData.get("name") || formData.get("heading"); // Handle both generic name and sell-machine heading
      email = formData.get("email");
      phone = formData.get("phone");
      message = formData.get("message") || formData.get("description");
      pageCategory = formData.get("pageCategory") || "Sell Machine";
      imageFile = formData.get("image");

      if (imageFile && imageFile.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: "Image file size exceeds the 10MB limit." },
          { status: 400 }
        );
      }
    } else {
      const body = await request.json();
      ({ name, email, phone, message, pageCategory, product } = body);
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Log the inquiry on the server console (production can integrate Nodemailer / Resend / SendGrid)
    console.log("==========================================");
    console.log("📩 NEW REQUEST RECEIVED (SERVER-SIDE)");
    if (pageCategory) console.log(`Category Page: ${pageCategory}`);
    if (product) console.log(`Product/Service: ${product.name} ${product.code ? `(Code: ${product.code})` : ''}`);
    if (imageFile) console.log(`Attached Image: ${imageFile.name} (${(imageFile.size / 1024 / 1024).toFixed(2)} MB)`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || "N/A"}`);
    console.log(`Message: ${message}`);
    console.log("==========================================");

    // Return success response to the client
    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received. Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Error processing product inquiry:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
