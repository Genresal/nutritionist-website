import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <a href="#" className={styles.logo}>
                    Dr. Романова
                </a>
                <nav>
                    <ul className={styles.links}>
                        <li><a href="#about" className={styles.link}>Обо мне</a></li>
                        <li><a href="#services" className={styles.link}>Услуги</a></li>
                        <li><a href="#testimonials" className={styles.link}>Отзывы</a></li>
                        <li><a href="#contact" className={styles.link}>Контакты</a></li>
                    </ul>
                </nav>
                <div className={styles.cta}>
                    <a href="#contact" className="btn btn-primary">Записаться на консультацию</a>
                </div>
            </div>
        </header>
    );
}
