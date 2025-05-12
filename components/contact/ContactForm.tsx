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
    <div>
      <h1>How can I help you?</h1>
      <form onSubmit={sendMessageHandler}>
        <div>
          <label htmlFor="emal">Your Email</label>
          <input
            type="email"
            id="email"
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div>

        <div>
          <button>Send Message</button>
        </div>
      </form>

      {isSuccess && <p style={{ color: "green" }}>Your message has been sent!</p>}
    </div>
  );
};

export default ContactForm;
