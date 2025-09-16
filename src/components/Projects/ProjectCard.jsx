import styles from "./ProjectCard.module.css"

export default function ProjectCard({ project }) {
  const { imageSrc, title, description, skills, demo, source } = project  

  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageSrc} alt={`Image of ${title}`} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo} target="_blank">
          <img src="/assets/projects/globe.png" alt="Globe icon" />
          Source
        </a>
        <a className={styles.link} href={source} target="_blank">
          <img src="/assets/projects/github.png" alt="Github icon" />
          Demo
        </a>
      </div>
    </div>
  )
}
