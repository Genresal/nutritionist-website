import styles from './Hero.module.css';
import heroBg from '../../assets/hero-bg.png';
// Using heroBg for background texture, but we might want the profile image in the grid
import profileImg from '../../assets/profile.png';

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <img src={heroBg} alt="" className={styles.bg} />
            <div className={`container ${styles.content}`}>
                <div className={styles.text}>
                    <span className={styles.eyebrow}>Holistic Nutritionist</span>
                    <h1 className={styles.title}>
                        Nourish Your Body,<br />
                        Heal Your Life.
                    </h1>
                    <p className={styles.subtitle}>
                        Personalized nutrition plans backed by science and designed for your real life. Let's build a healthier you, together.
                    </p>
                    <div className={styles.actions}>
                        <a href="#contact" className="btn btn-primary">Start Your Journey</a>
                        <a href="#services" className="btn btn-outline" style={{ border: '2px solid var(--color-primary)', color: 'var(--color-primary)' }}>View Programs</a>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    {/* Ideally this would be a nice cutout or framed image */}
                    <img src={profileImg} alt="Dr. Nutrition" className={styles.profileImage} />
                </div>
            </div>
        </section>
    );
}
