import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>About Hunting Coder</h1>
        <h2 className={styles.subtitle}>Introduction</h2>
        <p className={styles.paragraph}>
          Welcome to Hunting Coder! We are a community of passionate developers
          dedicated to sharing knowledge and helping others learn programming.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod
          repellat fugiat accusamus officia quis molestiae incidunt. Iusto illo
          ex id doloribus laudantium explicabo a temporibus corporis atque dicta
          labore impedit, velit officiis corrupti rerum! Fuga sapiente atque
          sequi architecto ab suscipit laborum enim aliquid eligendi voluptate
          possimus odio non amet laudantium quaerat illo accusamus maiores,
          dolorum nisi quisquam explicabo magnam inventore deleniti.
        </p>
        <h2 className={styles.subtitle}>Service Offered</h2>
        <p className={styles.paragraph}>
          At Hunting Coder, we offer a wide range of programming tutorials,
          coding challenges, and resources to help you become a better
          developer. Whether you're a beginner looking to learn the basics or an
          experienced developer looking to improve your skills, we have
          something for everyone.
          <p className={styles.paragraph}>We offered the following services:</p>
          <ul className={styles.paragraph}>
            <li className={styles.paragraph}>Programming Tutorials</li>
            <li className={styles.paragraph}>Coding Challenges</li>
            <li className={styles.paragraph}>Code Reviews</li>
            <li className={styles.paragraph}>Community Forums</li>
          </ul>
        </p>
        <h2 className={styles.subtitle}>Contact Us</h2>
        <p className={styles.paragraph}>
          Have questions or feedback? We'd love to hear from you! You can reach
          us at:
        </p>
        <ul className={styles.paragraph}>
          <li className={styles.paragraph}>Email: info@huntingcoder.com</li>
          <li className={styles.paragraph}>Phone: +1 (123) 456-7890</li>
          <li className={styles.paragraph}>
            Address: 123 Developer Street, Code City, CC 12345
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
