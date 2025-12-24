import styles from './About.module.css';

export default function About() {
    return (
        <section className={`section ${styles.about}`} id="about">
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h2>Meet Your Nutritionist</h2>
                        <p>
                            Hi, I'm Dr. Sarah. I believe that food is information, not just calories.
                            With over 10 years of clinical experience, I help clients bridge the gap between scientific nutrition and real-life eating.
                        </p>
                        <p>
                            My approach is rooted in functional medicine, looking at the root causes of imbalance rather than just treating symptoms.
                            Whether you're struggling with digestion, energy, or weight management, I'm here to guide you.
                        </p>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>Happy Clients</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>Certified</span>
                            <span className={styles.statLabel}>Clinical Nutritionist</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
