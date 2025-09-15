import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <footer id="contact">
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src="/assets/contact/emailIcon.png" alt="Email icon" />
            <a href="mailto:aryanpatel1918@gmail.com">aryanpatel1918@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src="/assets/contact/linkedinIcon.png" alt="Linkedin icon" />
            <a href="https://www.linkedin.com/in/aryanpatel18/">linkedin.com/in/aryanpatel18/</a>
          </li>
          <li className={styles.link}>
            <img src="/assets/contact/githubIcon.png" alt="GitHub icon" />
            <a href="https://github.com/AryanPatel1918">github.com/AryanPatel1918</a>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>&copy; {new Date().getFullYear()} Aryan Patel</p>
    </footer>
  )
}
