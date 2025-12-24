import styles from './About.module.css';

export default function About() {
    return (
        <section className={`section ${styles.about}`} id="about">
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h2>Познакомьтесь с вашим нутрициологом</h2>
                        <p>
                            Привет, я доктор Сара. Я верю, что еда — это информация, а не просто калории.
                            Имея более 10 лет клинического опыта, я помогаю клиентам преодолеть разрыв между научной нутрициологией и реальным питанием.
                        </p>
                        <p>
                            Мой подход основан на функциональной медицине, рассматривающей коренные причины дисбаланса, а не просто лечение симптомов.
                            Будь то проблемы с пищеварением, энергией или управлением весом, я здесь, чтобы помочь вам.
                        </p>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10+</span>
                            <span className={styles.statLabel}>Лет опыта</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>Счастливых клиентов</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>Сертифицированный</span>
                            <span className={styles.statLabel}>Клинический нутрициолог</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
