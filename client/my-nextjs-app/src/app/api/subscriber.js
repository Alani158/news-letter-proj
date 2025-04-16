// pages/api/subscribe.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    await prisma.newsletterSubscriber.create({
      data: { email },
    });

    return res.status(201).json({ message: "Successfully subscribed!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  } finally {
    await prisma.$disconnect();
  }
}
