"use client";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/subscriber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscription successful!");
        setEmail(""); // Clear the input field
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || "Subscription failed.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full mt-8">
      <div className="bg-[#E3473C] text-white w-full py-8">
        <h1 className="text-lg sm:text-4xl text-center">
          Festive Moments Connect with us:
        </h1>
        <div className="w-full flex justify-center gap-6 sm:gap-10 mt-6">
          <img src="/facebookicon.svg" />
          <img src="/twittericon.svg" />
          <img src="/pininterest.svg" />
          <img src="/instagram.svg" />
          <img src="/youtube.svg" />
        </div>
        <div className="w-full text-center flex flex-col justify-center items-center gap-10 mt-6">
          <p>Address: 1234 Pine Street, Holiday Town, HT 12345, Country</p>
          <small>
            Copyright: © 2023 Festive Moments. All Rights Reserved. [Terms &
            Conditions] [Unsubscribe] Reach out
          </small>
        </div>

        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => handleSubscribe(e)}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[90%] sm:w-[50%] h-[30px] mt-6 rounded-md px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="w-full flex justify-center items-center mt-6">
            <button
              type="submit"
              className="px-4 flex cursor-pointer hover:px-6 hover:py-4 transition-all ease-in-out py-2 text-sm bg-white text-[#E3473C] rounded-md"
            >
              Subscribe
            </button>
          </div>
        </form>

        {message && <p className="text-center mt-4 text-sm">{message}</p>}
      </div>
    </div>
  );
}
