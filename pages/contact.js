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
      <h1>Contact Us</h1>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
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
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formLabel}>
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter phone number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.mb3}>
            <div className="form-floating">
              <label htmlFor="desc" className={styles.formLabel}>
                Elaborate Your Concern
              </label>
              <textarea
                className="form-control"
                placeholder="Write your concern here"
                id="desc"
                value={desc}
                name="desc"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
