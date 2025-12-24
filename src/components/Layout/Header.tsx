import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <a href="#" className={styles.logo}>
                    Dr. Nutrition
                </a>
                <nav>
                    <ul className={styles.links}>
                        <li><a href="#about" className={styles.link}>About</a></li>
                        <li><a href="#services" className={styles.link}>Services</a></li>
                        <li><a href="#testimonials" className={styles.link}>Testimonials</a></li>
                        <li><a href="#contact" className={styles.link}>Contact</a></li>
                    </ul>
                </nav>
                <div className={styles.cta}>
                    <a href="#contact" className="btn btn-primary">Book Consultation</a>
                </div>
            </div>
        </header>
    );
}
