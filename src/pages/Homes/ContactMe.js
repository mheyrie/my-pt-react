import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_et4xya4";
    const templateId = "template_g6anhxg";
    const publicKey = "acoJ6HOdfRiKemWDV";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Mary Oladele",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };
  return (
    <section id="contact" className="contact_section">
      <div>
        <h2>Contact Me</h2>
        <p className="contact_text">
          <a href="mailto:omota4fidelity@gmail.com">
            Click here 👉 to Send me a direct email
          </a>
        </p>
        <p className="contact_text one">OR</p>
        <br />
        <p className="contact_text one">Fill the form below </p>
      </div>
      <form className="contact_form_section" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name" className="contact-label">
            <input
              type="text"
              className="contact_input text_md"
              name="name"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="email" className="contact-label">
            <input
              type="email"
              className="contact_input text_md"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="message" className="contact-label">
            <textarea
              className="contact_input text-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              cols="30"
              rows="10"
              placeholder="Type your message here......"
            />
          </label>
        </div>

        <div>
          <button className="btn btn_outline_primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactMe;
