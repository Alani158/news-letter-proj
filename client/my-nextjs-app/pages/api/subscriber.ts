import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(409).json({ error: "Email already subscribed" });
    }
    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Invalid email address" });
    }

    try {
      const subscriber = await prisma.newsletterSubscriber.create({
        data: { email },
      });

      // Send confirmation email
      await transporter.sendMail({
        from: `"MJ Newsletter" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thanks for Subscribing!",
        html: "<p>You’ve been successfully subscribed 🎉</p>",
      });

      return res
        .status(200)
        .json({ message: "Subscription successful", subscriber });
    } catch (error) {
      console.error("Email error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
