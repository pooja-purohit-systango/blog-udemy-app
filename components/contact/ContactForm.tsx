'use client';
import React, { useState } from "react";

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function sendMessageHandler(event: any) {
    event.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response.ok) {
      setIsSuccess(true); // Show success message
      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
    }
  }

  return (
    <>
      
      <form onSubmit={sendMessageHandler} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            id="email"
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" 
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
          <textarea
            id="message"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send Message
          </button>
        </div>
      </form>

      {isSuccess && (
        <p className="text-green-600 text-center mt-4">
          Your message has been sent!
        </p>
      )}
    </>
  );
};

export default ContactForm;
