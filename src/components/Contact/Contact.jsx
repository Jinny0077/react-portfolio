import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <a href="mailto:leongjiayan@gmail.com">leongjiayan@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedIn icon"
          />
          <a href="https://www.linkedin.com/in/leong-jia-yan-2b0991307/">
            https://www.linkedin.com/in/leong-jia-yan-2b0991307/
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
          <a href="https://github.com/Jinny0077">
            https://github.com/Jinny0077
          </a>
        </li>
      </ul>
    </footer>
  );
};
