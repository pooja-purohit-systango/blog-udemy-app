'use client'
import React, { useState } from "react";

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  function sendMessageHandler(event: any) {
    event.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      body : JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage
      }),
      headers : {
        'Content-type' : 'application/json', 
      }
    });
  }

  return (
    <div>
      <h1>How can i help you?</h1>
      <form onSubmit={sendMessageHandler}>
        <div>
          <label htmlFor="emal">Your Email</label>
          <input
            type="email"
            id="email"
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div>
          <button>Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
