import React, { useState } from "react";
import styles from "./ContactStyles.module.css";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_9quj1j8", // Replace with your EmailJS service ID
        "template_ius1h27", // Replace with your EmailJS template ID
        formData,
        "CPSiEpXCnVtMES5vQ" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message has been sent!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {successMessage && <p className="successMessage" style={{marginTop: 10}}>{successMessage}</p>}
    </section>
  );
}

export default Contact;
