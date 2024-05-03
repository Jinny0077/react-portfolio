import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Education.module.css";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            <img
              src={getImageUrl("about/tarcLogo.png")}
              alt="tarc logo"
              style={{ width: "65px", height: "auto" }}
            />
            <div className={styles.educationItemText}>
              <h3>
                Tunku Abdul Rahman University of Management and Technology (TAR
                UMT)
              </h3>
              <h3>Bachelor of Social Science (Honours) in Psychology</h3>
              <h4>2022 - current</h4>
              <p>cgpa 3.79</p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img
              src={getImageUrl("about/tarcLogo.png")}
              alt="tarc logo"
              style={{ width: "65px", height: "auto" }}
            />
            <div className={styles.educationItemText}>
              <h3>
                Tunku Abdul Rahman University of Management and Technology (TAR
                UMT)
              </h3>
              <h3>Diploma in Social Science (Counselling)</h3>
              <h4>2020 -2022</h4>
              <p>cgpa 3.51</p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img
              src={getImageUrl("about/smkLogo.jpg")}
              alt="SMK logo"
              style={{ width: "65px", height: "auto" }}
            />
            <div className={styles.educationItemText}>
              <h3>SMK Kepong</h3>
              <h4>2015 -2019</h4>
              <p>SPM 6As</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
