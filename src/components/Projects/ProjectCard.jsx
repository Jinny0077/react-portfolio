import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, skills, demo } }) => {
  return (
    <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </a>
  );
};
