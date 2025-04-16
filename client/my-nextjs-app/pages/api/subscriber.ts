import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Invalid email address" });
    }

    try {
      // Save the email to the database using Prisma
      const subscriber = await prisma.newsletterSubscriber.create({
        data: {
          email,
        },
      });

      return res
        .status(200)
        .json({ message: "Subscription successful", subscriber });
    } catch (error) {
      console.error("Error saving subscriber:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
