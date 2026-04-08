import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, desc } = e.target.elements;
    let data = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      desc: desc.value,
    };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        alert("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setDesc("");
      } else {
        alert("Something went wrong!");
      }
    });
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.mb3}>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input
              type="text"
              className={styles.input}
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formLabel}>
              Email address
            </label>
            <input
              type="email"
              className={styles.input}
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className={styles.formText}>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formLabel}>
              Phone
            </label>
            <input
              type="tel"
              className={styles.input}
              id="phone"
              placeholder="Enter phone number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className={styles.mb3}>
            <label htmlFor="desc" className={styles.formLabel}>
              Elaborate Your Concern
            </label>
            <textarea
              className={styles.input}
              placeholder="Write your concern here"
              id="desc"
              value={desc}
              name="desc"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
