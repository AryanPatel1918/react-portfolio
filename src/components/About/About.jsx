import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src="/assets/about/aboutImage.png" alt="About image" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                  <img src="/assets/about/cursorIcon.png" alt="cursor icon" />
                  <div>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building React projects</p>
                  </div>
                </li>
                <li className={styles.aboutItem}>
                  <img src="/assets/about/serverIcon.png" alt="server icon" />
                  <div>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimized backend systems and APIs</p>
                  </div>
                </li>
                <li className={styles.aboutItem}>
                  <img src="/assets/about/uiIcon.png" alt="ui icon" />
                  <div>
                    <h3>UI Design</h3>
                    <p>I have designed multiple landing pages and have created design systems as well</p>
                  </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
