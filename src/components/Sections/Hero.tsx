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
                    <span className={styles.eyebrow}>Холистический Нутрициолог</span>
                    <h1 className={styles.title}>
                        Питайте свое тело,<br />
                        Исцеляйте свою жизнь.
                    </h1>
                    <p className={styles.subtitle}>
                        Персонализированные планы питания, основанные на науке и созданные для вашей реальной жизни. Давайте вместе создадим более здоровую версию вас.
                    </p>
                    <div className={styles.actions}>
                        <a href="#contact" className="btn btn-primary">Начать путь</a>
                        <a href="#services" className="btn btn-outline" style={{ border: '2px solid var(--color-primary)', color: 'var(--color-primary)' }}>Посмотреть программы</a>
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
