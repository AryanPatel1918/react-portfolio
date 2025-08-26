import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Aryan</h1>
            <p className={styles.description}>I'm an aspiring full stack developer focused on building modern, user-friendly web applications. Let's connect!</p>
            <a className={styles.contactBtn} href="mailto:aryanpatel1918@gmail.com">Reach Out</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="hero image" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
