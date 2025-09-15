import styles from "./Education.module.css"

export default function Education() {
  return (
    <section className={styles.container} id="education">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.info}>
          <div className={styles.school}>
            <p>Toronto Metropolitan University (formerly Ryerson)</p>
            <p>2020 - 2025</p>
          </div>
          <div className={styles.detail}>
            <p>Bachelor of Science (Honours) - Computer Science (Co-op)</p>
            <p>Toronto, ON</p>
          </div>
        </div>
    </section>
  )
}
